"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type {
  PriceFetchSource,
  PriceServiceDisplay,
  PriceTreeNode,
  PriceTreeService,
} from "@/lib/price-api";

type Props = {
  initialTree?: PriceTreeNode[];
  initialServices?: PriceServiceDisplay[];
  initialSource?: PriceFetchSource;
};

type TabId = "tree" | "list";

function fmtPrice(n: number | undefined): string {
  const v = Number(n);
  return Number.isNaN(v)
    ? "—"
    : `${v.toLocaleString("ru-RU", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })} ₽`;
}

function filterServices(list: PriceServiceDisplay[], q: string) {
  if (!q) return list;
  return list.filter(
    (s) =>
      (s.serviceName || "").toLowerCase().includes(q) ||
      (s.serviceCode || "").toLowerCase().includes(q) ||
      (s.categoryName || "").toLowerCase().includes(q) ||
      (s.categoryPath || "").toLowerCase().includes(q)
  );
}

function filterTree(nodes: PriceTreeNode[], q: string): PriceTreeNode[] {
  if (!q) return nodes;

  function walk(n: PriceTreeNode): PriceTreeNode | null {
    const nameMatch =
      (n.categoryName || "").toLowerCase().includes(q) ||
      (n.categoryPath || "").toLowerCase().includes(q);
    const svcs = (n.services || []).filter(
      (s) =>
        (s.serviceName || "").toLowerCase().includes(q) ||
        (s.serviceCode || "").toLowerCase().includes(q)
    );
    const children = (n.children || [])
      .map(walk)
      .filter((c): c is PriceTreeNode => c != null);

    if (nameMatch || svcs.length || children.length) {
      return {
        ...n,
        services: nameMatch ? n.services : svcs.length ? svcs : undefined,
        children: children.length ? children : undefined,
      };
    }
    return null;
  }

  return nodes.map(walk).filter((n): n is PriceTreeNode => n != null);
}

function collectCategoryIds(nodes: PriceTreeNode[]): number[] {
  const ids: number[] = [];
  const walk = (n: PriceTreeNode) => {
    const hasContent =
      (n.children && n.children.length > 0) ||
      (n.services && n.services.length > 0);
    if (hasContent) ids.push(n.categoryId);
    (n.children || []).forEach(walk);
  };
  nodes.forEach(walk);
  return ids;
}

async function fetchPricesData<T>(url: string): Promise<{
  data: T[];
  source?: PriceFetchSource;
}> {
  const res = await fetch(url, { cache: "no-store" });
  const json: unknown = await res.json();

  if (Array.isArray(json)) {
    return { data: json as T[] };
  }

  const body = json as {
    ok?: boolean;
    data?: T[];
    error?: string;
    source?: PriceFetchSource;
  };

  if (!res.ok || body.ok === false) {
    throw new Error(body.error || `HTTP ${res.status}`);
  }

  return {
    data: Array.isArray(body.data) ? body.data : [],
    source: body.source,
  };
}

function ServiceRow({ service }: { service: PriceTreeService }) {
  return (
    <div className="grid grid-cols-[100px_1fr_100px] gap-2 border-b border-[#f0f0f0] px-2 py-1.5 text-[13px] last:border-b-0">
      <span className="font-mono text-xs text-[#666]">
        {service.serviceCode ?? ""}
      </span>
      <span>{service.serviceName}</span>
      <span className="whitespace-nowrap text-right font-semibold text-[#117a65]">
        {fmtPrice(service.actualPrice)}
      </span>
    </div>
  );
}

function CategoryNode({
  node,
  openIds,
  onToggle,
}: {
  node: PriceTreeNode;
  openIds: Set<number>;
  onToggle: (id: number) => void;
}) {
  const hasKids =
    Boolean(node.children?.length) || Boolean(node.services?.length);
  const isOpen = openIds.has(node.categoryId);
  const arrow = !hasKids ? "·" : isOpen ? "▼" : "▶";

  return (
    <div className="mb-1.5 rounded-md border border-[#e0e0e0] bg-white">
      <button
        type="button"
        className="flex w-full cursor-pointer items-center gap-2 px-3 py-2.5 text-left font-semibold hover:bg-[#f0f4f8]"
        onClick={() => hasKids && onToggle(node.categoryId)}
      >
        <span className="w-4 text-[#1a5276]">{arrow}</span>
        <span>{node.categoryName}</span>
      </button>
      {isOpen && (
        <div className="px-3 pb-3">
          {(node.services || []).map((s) => (
            <ServiceRow key={s.serviceId} service={s} />
          ))}
          {node.children && node.children.length > 0 && (
            <div className="ml-4 border-l-2 border-[#dde4ea] pl-3">
              {node.children.map((child) => (
                <CategoryNode
                  key={child.categoryId}
                  node={child}
                  openIds={openIds}
                  onToggle={onToggle}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function PricesViewer({
  initialTree = [],
  initialServices = [],
  initialSource,
}: Props) {
  const [treeData, setTreeData] = useState<PriceTreeNode[]>(initialTree);
  const [servicesData, setServicesData] =
    useState<PriceServiceDisplay[]>(initialServices);
  const [source, setSource] = useState<PriceFetchSource | undefined>(
    initialSource
  );
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState<TabId>("tree");
  const [loading, setLoading] = useState(
    initialTree.length === 0 && initialServices.length === 0
  );
  const [error, setError] = useState<string | null>(null);
  const [openIds, setOpenIds] = useState<Set<number>>(new Set());

  const q = search.trim().toLowerCase();

  const filteredTree = useMemo(
    () => filterTree(treeData, q),
    [treeData, q]
  );
  const filteredServices = useMemo(
    () => filterServices(servicesData, q),
    [servicesData, q]
  );

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const [treeRes, svcRes] = await Promise.all([
        fetchPricesData<PriceTreeNode>("/api/prices/tree"),
        fetchPricesData<PriceServiceDisplay>("/api/prices/services"),
      ]);

      setTreeData(treeRes.data);
      setServicesData(svcRes.data);
      setSource(treeRes.source ?? svcRes.source);
      setOpenIds(new Set());
    } catch (e) {
      setError(e instanceof Error ? e.message : "Ошибка загрузки");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (initialTree.length === 0 && initialServices.length === 0) {
      void load();
    }
  }, [initialTree.length, initialServices.length, load]);

  const toggleCategory = (id: number) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const expandAll = () => {
    setOpenIds(new Set(collectCategoryIds(filteredTree)));
  };

  const collapseAll = () => {
    setOpenIds(new Set());
  };

  const statsText = `Корневых категорий: ${treeData.length} | Услуг: ${servicesData.length}`;

  return (
    <div className="min-h-screen bg-[#f4f6f8] text-[#222]">
      <header className="bg-[#1a5276] px-6 py-4 text-white">
        <h1 className="mb-2 text-[22px] font-semibold leading-tight">
          Прейскурант Altamed
        </h1>
        <p className="m-0 text-sm opacity-85">
          Дерево категорий и список услуг из Price.Api
          {source ? ` · источник: ${source}` : ""}
        </p>
      </header>

      <div className="flex flex-wrap items-center gap-3 border-b border-[#ddd] bg-white px-6 py-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Поиск по названию или коду..."
          className="min-w-[220px] flex-1 rounded-md border border-[#ccc] px-3 py-2.5 text-sm"
        />
        <button
          type="button"
          onClick={expandAll}
          className="rounded-md bg-[#1a5276] px-4 py-2.5 text-sm text-white"
        >
          Развернуть всё
        </button>
        <button
          type="button"
          onClick={collapseAll}
          className="rounded-md bg-[#566573] px-4 py-2.5 text-sm text-white"
        >
          Свернуть всё
        </button>
        <button
          type="button"
          onClick={() => void load()}
          className="rounded-md bg-[#566573] px-4 py-2.5 text-sm text-white"
        >
          Обновить
        </button>
      </div>

      <div className="flex gap-0 border-b-2 border-[#1a5276] bg-white px-6">
        <button
          type="button"
          className={`mb-[-2px] border-b-[3px] px-5 py-3 text-[15px] ${
            tab === "tree"
              ? "border-[#1a5276] font-semibold text-[#1a5276]"
              : "border-transparent text-[#555]"
          }`}
          onClick={() => setTab("tree")}
        >
          Дерево
        </button>
        <button
          type="button"
          className={`mb-[-2px] border-b-[3px] px-5 py-3 text-[15px] ${
            tab === "list"
              ? "border-[#1a5276] font-semibold text-[#1a5276]"
              : "border-transparent text-[#555]"
          }`}
          onClick={() => setTab("list")}
        >
          Все услуги
        </button>
      </div>

      <div className="px-6 py-2 text-[13px] text-[#666]">{statsText}</div>

      {loading && (
        <p className="px-6 py-10 text-center text-base">Загрузка данных...</p>
      )}

      {error && !loading && (
        <p className="px-6 py-10 text-center text-base text-[#c0392b]">
          Ошибка: {error}
        </p>
      )}

      {!loading && !error && tab === "tree" && (
        <div className="px-6 pb-8">
          {filteredTree.length === 0 ? (
            <p className="py-6">Ничего не найдено</p>
          ) : (
            filteredTree.map((node) => (
              <CategoryNode
                key={node.categoryId}
                node={node}
                openIds={openIds}
                onToggle={toggleCategory}
              />
            ))
          )}
        </div>
      )}

      {!loading && !error && tab === "list" && (
        <div className="px-6 pb-8">
          {filteredServices.length === 0 ? (
            <p className="py-6">Ничего не найдено</p>
          ) : (
            <div className="overflow-hidden rounded-lg bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
              <table className="w-full border-collapse text-[13px]">
                <thead>
                  <tr>
                    <th className="sticky top-0 bg-[#1a5276] px-3 py-2.5 text-left text-white">
                      Код
                    </th>
                    <th className="sticky top-0 bg-[#1a5276] px-3 py-2.5 text-left text-white">
                      Услуга
                    </th>
                    <th className="sticky top-0 bg-[#1a5276] px-3 py-2.5 text-left text-white">
                      Категория
                    </th>
                    <th className="sticky top-0 bg-[#1a5276] px-3 py-2.5 text-right text-white">
                      Цена
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredServices.map((s) => (
                    <tr
                      key={`${s.serviceId}-${s.categoryId ?? 0}`}
                      className="hover:bg-[#f8fafb]"
                    >
                      <td className="border-b border-[#eee] px-3 py-2.5 font-mono text-[#666]">
                        {s.serviceCode ?? ""}
                      </td>
                      <td className="border-b border-[#eee] px-3 py-2.5">
                        {s.serviceName}
                      </td>
                      <td className="border-b border-[#eee] px-3 py-2.5">
                        {s.categoryPath || s.categoryName || ""}
                      </td>
                      <td className="whitespace-nowrap border-b border-[#eee] px-3 py-2.5 text-right font-semibold text-[#117a65]">
                        {fmtPrice(s.actualPrice)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
