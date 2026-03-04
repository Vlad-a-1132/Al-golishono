"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { makeMotionPresets } from "./MotionPresets";
import type { DirectionData } from "./types";

export function FaqByDirection({
  direction,
  generalFaq,
}: {
  direction: DirectionData;
  generalFaq: Array<{ id: string; q: string; a: string }>;
}) {
  const [openId, setOpenId] = useState<string | null>(null);
  const reduced = useReducedMotion();
  const v = makeMotionPresets(!!reduced).vReveal;
  const directionFaq = direction.faq ?? [];
  const allFaq = [
    ...generalFaq,
    ...directionFaq.map((f, i) => ({ id: `dir-${i}`, q: f.q, a: f.a })),
  ];
  if (!allFaq.length) return null;

  return (
    <motion.div
      variants={v}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="space-y-4"
    >
      <h3 className="text-lg font-semibold text-[#0F172A]">
        Часто задаваемые вопросы
      </h3>
      <ul className="space-y-2">
        {allFaq.map((f) => {
          const isOpen = openId === f.id;
          return (
            <li
              key={f.id}
              className="rounded-xl border border-slate-100 bg-white overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : f.id)}
                className="flex w-full items-center justify-between px-4 py-3 text-left text-[#0F172A] hover:bg-slate-50/50"
              >
                <span className="font-medium">{f.q}</span>
                <span className="text-[#64748B] text-lg leading-none">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <div className="border-t border-slate-100 px-4 py-3 text-[#475569]">
                  {f.a}
                </div>
              )}
            </li>
          );
        })}
      </ul>
      <Link
        href="/appointments"
        className="inline-flex items-center justify-center rounded-2xl bg-[#21C7FF] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#21C7FF]/90"
      >
        Записаться на консультацию
      </Link>
    </motion.div>
  );
}
