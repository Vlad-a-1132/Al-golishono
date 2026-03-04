"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { makeMotionPresets } from "./MotionPresets";

export function FinalCtaCard({ cta }: { cta: { label: string; href: string } }) {
  const reduced = useReducedMotion();
  const { vReveal, vBtn } = makeMotionPresets(!!reduced);

  return (
    <motion.div
      variants={vReveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="rounded-3xl border-2 border-[#21C7FF]/30 bg-gradient-to-br from-[#21C7FF]/10 to-[#5EF3C4]/10 p-8 text-center md:p-12"
    >
      <h3 className="mb-2 text-xl font-bold text-[#0F172A]">
        Записаться на консультацию
      </h3>
      <p className="mb-6 text-[#475569]">
        Оставьте заявку — мы подберём удобное время и ответим на вопросы.
      </p>
      <motion.div variants={vBtn} initial="rest" whileHover="hover" whileTap="tap">
        <Link
          href={cta.href}
          className="inline-flex items-center justify-center rounded-2xl bg-[#21C7FF] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#21C7FF]/90"
        >
          {cta.label}
        </Link>
      </motion.div>
    </motion.div>
  );
}
