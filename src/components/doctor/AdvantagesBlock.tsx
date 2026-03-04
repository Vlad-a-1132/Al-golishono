"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { makeMotionPresets } from "./MotionPresets";
import type { DirectionData } from "./types";

const UNIVERSAL_ITEMS = [
  { title: "Безопасность", desc: "Проверенные материалы и протоколы, минимальные риски." },
  { title: "Точность", desc: "Современная диагностика и планирование лечения." },
  { title: "Прогнозируемость", desc: "Понятный план и сроки, контроль на каждом этапе." },
  { title: "Комфорт", desc: "Анестезия и бережный подход, без лишнего стресса." },
];

export function AdvantagesBlock({ direction }: { direction: DirectionData }) {
  const reduced = useReducedMotion();
  const v = makeMotionPresets(!!reduced).vReveal;

  return (
    <motion.div
      variants={v}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="space-y-6"
    >
      <h3 className="text-xl font-bold text-[#0F172A]">
        Преимущества: {direction.title}
      </h3>
      <div>
        <h4 className="mb-3 font-semibold text-[#0F172A]">
          Преимущества подхода врача
        </h4>
        <ul className="grid gap-3 sm:grid-cols-2">
          {UNIVERSAL_ITEMS.map((item) => (
            <li
              key={item.title}
              className="flex gap-2 rounded-xl border border-slate-100 bg-slate-50/50 p-4"
            >
              <span className="text-[#21C7FF]">✓</span>
              <div>
                <p className="font-medium text-[#0F172A]">{item.title}</p>
                <p className="text-sm text-[#475569]">{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {direction.whatYouGet.length > 0 && (
        <div>
          <h4 className="mb-3 font-semibold text-[#0F172A]">
            Что вы получаете в этом направлении
          </h4>
          <ul className="flex flex-wrap gap-2">
            {direction.whatYouGet.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 rounded-full bg-[#21C7FF]/10 px-4 py-2 text-sm font-medium text-[#0F172A]"
              >
                <span className="text-[#21C7FF]">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
}
