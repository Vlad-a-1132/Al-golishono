"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { makeMotionPresets } from "./MotionPresets";
import type { DirectionData } from "./types";

export function PricingByDirection({
  direction,
  priceCta,
}: {
  direction: DirectionData;
  priceCta: { label: string; href: string };
}) {
  const reduced = useReducedMotion();
  const v = makeMotionPresets(!!reduced).vReveal;
  const { priceBlock, priceItems, priceBlockIntro, priceBlockOutro } = direction;
  const hasContent = priceBlock?.from || (priceItems && priceItems.length > 0) || priceBlockIntro || priceBlockOutro;
  if (!hasContent) return null;

  return (
    <motion.div
      variants={v}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="space-y-4"
    >
      <h3 className="text-lg font-semibold text-[#0F172A]">
        Цены: {direction.title}
      </h3>
      {priceBlockIntro && (
        <p className="text-[#475569] leading-relaxed">{priceBlockIntro}</p>
      )}
      {priceBlock?.from && (
        <p className="text-xl font-bold text-[#21C7FF]">{priceBlock.from}</p>
      )}
      {priceBlock?.note && (
        <p className="text-sm text-[#64748B]">{priceBlock.note}</p>
      )}
      {priceItems && priceItems.length > 0 && (
        <div className="overflow-x-auto rounded-xl border border-slate-100">
          <table className="w-full min-w-[320px] text-sm">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/80">
                {priceItems.some((i) => i.code) && (
                  <th className="px-4 py-3 text-left font-semibold text-[#0F172A]">
                    Код
                  </th>
                )}
                <th className="px-4 py-3 text-left font-semibold text-[#0F172A]">
                  Название
                </th>
                <th className="px-4 py-3 text-right font-semibold text-[#0F172A]">
                  Цена
                </th>
              </tr>
            </thead>
            <tbody>
              {priceItems.map((item, idx) => (
                <tr
                  key={idx}
                  className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50"
                >
                  {priceItems.some((i) => i.code) && (
                    <td className="px-4 py-2.5 text-[#64748B]">{item.code ?? "—"}</td>
                  )}
                  <td className="px-4 py-2.5 text-[#475569]">{item.name}</td>
                  <td className="px-4 py-2.5 text-right font-medium text-[#0F172A]">
                    {item.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {priceBlockOutro && (
        <p className="text-sm text-[#475569]">{priceBlockOutro}</p>
      )}
      <Link
        href={priceCta.href}
        className="inline-block text-[#21C7FF] font-medium hover:underline"
      >
        {priceCta.label}
      </Link>
    </motion.div>
  );
}
