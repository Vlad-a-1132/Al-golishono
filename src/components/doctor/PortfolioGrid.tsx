"use client";

import React from "react";

interface CaseItem {
  id: string;
  directionId: string;
  title: string;
  tag?: string;
}

export function PortfolioGrid({
  cases,
  directions,
  activeDirectionId,
  onFilter,
}: {
  cases: CaseItem[];
  directions: Array<{ id: string; shortTitle: string }>;
  activeDirectionId: string | null;
  onFilter: (id: string | null) => void;
}) {
  const filtered = activeDirectionId
    ? cases.filter((c) => c.directionId === activeDirectionId)
    : cases;
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Кейсы</h3>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => onFilter(null)}
          className={`rounded-full px-4 py-2 text-sm font-medium ${
            !activeDirectionId ? "bg-emerald-600 text-white" : "bg-gray-100 text-gray-700"
          }`}
        >
          Все
        </button>
        {directions.map((d) => (
          <button
            key={d.id}
            type="button"
            onClick={() => onFilter(d.id)}
            className={`rounded-full px-4 py-2 text-sm font-medium ${
              activeDirectionId === d.id ? "bg-emerald-600 text-white" : "bg-gray-100 text-gray-700"
            }`}
          >
            {d.shortTitle}
          </button>
        ))}
      </div>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((c) => (
          <li key={c.id} className="rounded-xl border border-gray-200 bg-white p-4">
            <p className="font-medium text-gray-900">{c.title}</p>
            {c.tag && <span className="text-sm text-emerald-600">{c.tag}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}
