export type ZabotaLeadPayload = {
  phone: string;
  name?: string;
  message?: string;
  source?: string;
  pageUrl?: string;
  externalId: string;
};

function resolvePageUrl(pageUrl?: string): string | undefined {
  if (!pageUrl?.trim()) return undefined;
  const trimmed = pageUrl.trim();
  if (trimmed.startsWith("http")) return trimmed;
  const site = (process.env.SITE_URL || "https://altamed-s.ru").replace(/\/$/, "");
  return `${site}${trimmed.startsWith("/") ? trimmed : `/${trimmed}`}`;
}

export async function sendToZabota(payload: ZabotaLeadPayload): Promise<void> {
  const baseUrl = process.env.ZABOTA_API_URL?.replace(/\/$/, "");
  const token = process.env.ZABOTA_SITE_TOKEN;
  if (!baseUrl || !token) return;

  const body: Record<string, string> = {
    phone: payload.phone,
    externalId: payload.externalId,
  };
  if (payload.name) body.name = payload.name;
  if (payload.message) body.message = payload.message;
  if (payload.source) body.source = payload.source;
  const pageUrl = resolvePageUrl(payload.pageUrl);
  if (pageUrl) body.pageUrl = pageUrl;

  try {
    const res = await fetch(`${baseUrl}/api/leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Site-Token": token,
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error("[Zabota] API error:", res.status, text);
      return;
    }

    const data = await res.json().catch(() => null);
    console.log("[Zabota] lead sent:", data);
  } catch (error) {
    console.error("[Zabota] fetch failed:", error);
  }
}
