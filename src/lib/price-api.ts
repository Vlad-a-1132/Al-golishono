import fs from "fs/promises";
import path from "path";

export type PriceTreeService = {
  serviceId: number;
  serviceCode?: string;
  serviceName: string;
  actualPrice?: number;
};

export type PriceTreeNode = {
  categoryId: number;
  categoryName: string;
  categoryPath?: string;
  services?: PriceTreeService[];
  children?: PriceTreeNode[];
};

export type PriceServiceDisplay = {
  serviceId: number;
  serviceCode?: string;
  serviceName: string;
  actualPrice?: number;
  categoryName?: string;
  categoryPath?: string;
  categoryId?: number;
};

export type PriceCategoryDisplay = {
  categoryId: number;
  categoryName: string;
  categoryPath?: string;
  parentCategoryId?: number;
};

export type PriceFetchSource = "memory" | "network" | "file";

export type PriceFetchResult<T> = {
  data: T;
  source: PriceFetchSource;
  ok: boolean;
  error?: string;
};

const baseUrl = process.env.PRICE_API_BASE_URL?.replace(/\/$/, "") ?? "";
const apiKey = process.env.PRICE_API_KEY ?? "";
const ttlMs = Number(process.env.PRICE_API_MEMORY_TTL_MS ?? "300000");

type CacheEntry<T> = { data: T; at: number; source: PriceFetchSource };

let servicesCache: CacheEntry<PriceServiceDisplay[]> | null = null;
let treeCache: CacheEntry<PriceTreeNode[]> | null = null;
let categoriesCache: CacheEntry<PriceCategoryDisplay[]> | null = null;

function isCacheValid<T>(entry: CacheEntry<T> | null): entry is CacheEntry<T> {
  if (!entry) return false;
  if (ttlMs <= 0) return false;
  return Date.now() - entry.at < ttlMs;
}

export function extractArray<T>(payload: unknown): T[] {
  if (Array.isArray(payload)) return payload as T[];
  if (payload && typeof payload === "object") {
    const o = payload as Record<string, unknown>;
    for (const key of ["data", "items", "services", "categories", "tree"]) {
      if (Array.isArray(o[key])) return o[key] as T[];
    }
  }
  return [];
}

export function normalizeServiceRow(raw: unknown): PriceServiceDisplay | null {
  if (!raw || typeof raw !== "object") return null;
  const r = raw as Record<string, unknown>;
  const serviceId = Number(r.serviceId ?? r.ServiceId);
  if (!Number.isFinite(serviceId)) return null;
  const serviceName = String(r.serviceName ?? r.ServiceName ?? "").trim();
  if (!serviceName) return null;

  return {
    serviceId,
    serviceCode:
      String(r.serviceCode ?? r.ServiceCode ?? "").trim() || undefined,
    serviceName,
    actualPrice:
      r.actualPrice != null
        ? Number(r.actualPrice)
        : r.ActualPrice != null
          ? Number(r.ActualPrice)
          : undefined,
    categoryName:
      String(r.categoryName ?? r.CategoryName ?? "").trim() || undefined,
    categoryPath:
      String(r.categoryPath ?? r.CategoryPath ?? "").trim() || undefined,
    categoryId:
      r.categoryId != null
        ? Number(r.categoryId)
        : r.CategoryId != null
          ? Number(r.CategoryId)
          : undefined,
  };
}

export function normalizeCategoryRow(raw: unknown): PriceCategoryDisplay | null {
  if (!raw || typeof raw !== "object") return null;
  const r = raw as Record<string, unknown>;
  const categoryId = Number(r.categoryId ?? r.CategoryId);
  if (!Number.isFinite(categoryId)) return null;
  const categoryName = String(r.categoryName ?? r.CategoryName ?? "").trim();
  if (!categoryName) return null;

  return {
    categoryId,
    categoryName,
    categoryPath:
      String(r.categoryPath ?? r.CategoryPath ?? "").trim() || undefined,
    parentCategoryId:
      r.parentCategoryId != null
        ? Number(r.parentCategoryId)
        : r.ParentCategoryId != null
          ? Number(r.ParentCategoryId)
          : undefined,
  };
}

function normalizeTreeNode(raw: unknown): PriceTreeNode | null {
  if (!raw || typeof raw !== "object") return null;
  const r = raw as Record<string, unknown>;
  const categoryId = Number(r.categoryId ?? r.CategoryId);
  if (!Number.isFinite(categoryId)) return null;
  const categoryName = String(r.categoryName ?? r.CategoryName ?? "").trim();
  if (!categoryName) return null;

  const services: PriceTreeService[] = extractArray<unknown>(
    r.services ?? r.Services
  )
    .map((s) => {
      const n = normalizeServiceRow(s);
      if (!n) return null;
      const row: PriceTreeService = {
        serviceId: n.serviceId,
        serviceName: n.serviceName,
      };
      if (n.serviceCode) row.serviceCode = n.serviceCode;
      if (n.actualPrice != null) row.actualPrice = n.actualPrice;
      return row;
    })
    .filter((x): x is PriceTreeService => x != null);

  const children = extractArray<unknown>(r.children ?? r.Children)
    .map(normalizeTreeNode)
    .filter((x): x is PriceTreeNode => x != null);

  return {
    categoryId,
    categoryName,
    categoryPath:
      String(r.categoryPath ?? r.CategoryPath ?? "").trim() || undefined,
    services: services.length ? services : undefined,
    children: children.length ? children : undefined,
  };
}

async function readFallbackFile<T>(
  filename: string,
  normalize: (x: unknown) => T | null
): Promise<T[] | null> {
  try {
    const filePath = path.join(process.cwd(), "data", filename);
    const text = await fs.readFile(filePath, "utf8");
    const parsed = JSON.parse(text) as unknown;
    return extractArray(parsed)
      .map(normalize)
      .filter((x): x is T => x != null);
  } catch {
    return null;
  }
}

async function writeFallbackFile(filename: string, data: unknown): Promise<void> {
  try {
    const dir = path.join(process.cwd(), "data");
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(
      path.join(dir, filename),
      JSON.stringify(data),
      "utf8"
    );
  } catch {
    // ignore write errors in read-only deploys
  }
}

async function fetchFromNetwork<T>(
  endpoint: string,
  fallbackFilename: string,
  normalizeItem: (x: unknown) => T | null
): Promise<PriceFetchResult<T[]>> {
  if (!baseUrl) {
    const file = await readFallbackFile(fallbackFilename, normalizeItem);
    if (file?.length) return { ok: true, data: file, source: "file" };
    return {
      ok: false,
      data: [],
      source: "file",
      error: "PRICE_API_BASE_URL is not set",
    };
  }

  try {
    const res = await fetch(`${baseUrl}${endpoint}`, {
      headers: apiKey ? { "X-Api-Key": apiKey } : {},
      cache: "no-store",
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json: unknown = await res.json();
    const arr = extractArray(json)
      .map(normalizeItem)
      .filter((x): x is T => x != null);
    await writeFallbackFile(fallbackFilename, arr);
    return { ok: true, data: arr, source: "network" };
  } catch (e) {
    const message = e instanceof Error ? e.message : "network error";
    const file = await readFallbackFile(fallbackFilename, normalizeItem);
    if (file?.length) {
      return { ok: true, data: file, source: "file", error: message };
    }
    return { ok: false, data: [], source: "file", error: message };
  }
}

export async function fetchPriceServices(): Promise<
  PriceFetchResult<PriceServiceDisplay[]>
> {
  if (isCacheValid(servicesCache)) {
    return { ok: true, data: servicesCache.data, source: "memory" };
  }

  const result = await fetchFromNetwork(
    "/api/prices/services",
    "price-api-services.json",
    normalizeServiceRow
  );

  if (result.ok && ttlMs > 0) {
    servicesCache = {
      data: result.data,
      at: Date.now(),
      source: result.source,
    };
  }

  return result;
}

export async function fetchPriceTree(): Promise<PriceFetchResult<PriceTreeNode[]>> {
  if (isCacheValid(treeCache)) {
    return { ok: true, data: treeCache.data, source: "memory" };
  }

  const result = await fetchFromNetwork(
    "/api/prices/tree",
    "price-api-tree.json",
    normalizeTreeNode
  );

  if (result.ok && ttlMs > 0) {
    treeCache = {
      data: result.data,
      at: Date.now(),
      source: result.source,
    };
  }

  return result;
}

export async function fetchPriceCategories(): Promise<
  PriceFetchResult<PriceCategoryDisplay[]>
> {
  if (isCacheValid(categoriesCache)) {
    return { ok: true, data: categoriesCache.data, source: "memory" };
  }

  const result = await fetchFromNetwork(
    "/api/prices/categories",
    "price-api-categories.json",
    normalizeCategoryRow
  );

  if (result.ok && ttlMs > 0) {
    categoriesCache = {
      data: result.data,
      at: Date.now(),
      source: result.source,
    };
  }

  return result;
}
