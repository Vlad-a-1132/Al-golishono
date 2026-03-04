"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { makeMotionPresets } from "./MotionPresets";
import type { DirectionData } from "./types";

const BANNER_BASE = "/images/doctors/doctor banner";
const MEDIA_IMAGE = `${BANNER_BASE}/Group 83 (2).svg`;
const BONE_GRAFTING_IMAGE = `${BANNER_BASE}/Group 85 (1).png`;
const SINUS_LIFT_IMAGE = `${BANNER_BASE}/sinus (1).webp`;
const SOFT_TISSUE_IMAGE = `${BANNER_BASE}/plastika (1).webp`;
const IMMEDIATE_IMPLANTATION_IMAGE = `${BANNER_BASE}/task_01kje4hqbefs6vdhkhyq1cgt4j_1772148585_img_0 (1).webp`;
const PROSTHETICS_ON_IMPLANTS_IMAGE = `${BANNER_BASE}/task_01kje4r1jpfrqrgapj7hmy6bmd_1772148792_img_1 (1).webp`;
const VENEERS_CROWNS_IMAGE = `${BANNER_BASE}/task_01kje5dqtse03s4b3kh7c18a3j_1772149502_img_0 (1).webp`;

/** У этих направлений большая картинка внизу блока не показывается */
const DIRECTIONS_WITHOUT_DETAIL_IMAGE = ["implantation", "bone-grafting"];

function getDetailImageSrc(directionId: string): string {
  switch (directionId) {
    case "bone-grafting":
      return BONE_GRAFTING_IMAGE;
    case "sinus-lift":
      return SINUS_LIFT_IMAGE;
    case "soft-tissue":
      return SOFT_TISSUE_IMAGE;
    case "immediate-implantation":
      return IMMEDIATE_IMPLANTATION_IMAGE;
    case "prosthetics-on-implants":
      return PROSTHETICS_ON_IMPLANTS_IMAGE;
    case "veneers-crowns":
      return VENEERS_CROWNS_IMAGE;
    default:
      return MEDIA_IMAGE;
  }
}

export function DirectionDetails({
  direction,
  directionPageBasePath,
}: {
  direction: DirectionData;
  directionPageBasePath?: string;
}) {
  const reduced = useReducedMotion();
  const v = makeMotionPresets(!!reduced).vReveal;
  const showDetailImage = !DIRECTIONS_WITHOUT_DETAIL_IMAGE.includes(direction.id);
  const detailsHref = directionPageBasePath
    ? `${directionPageBasePath}/${direction.id}`
    : null;

  return (
    <div className="space-y-8" id="details">
      <motion.div
        variants={v}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="mb-4 text-2xl font-bold text-[#0F172A] md:text-3xl">
          {direction.title}
        </h2>
        <p className="text-[#475569] leading-relaxed">{direction.description}</p>
        {detailsHref && (
          <Link
            href={detailsHref}
            className="mt-4 inline-flex items-center gap-2 rounded-2xl border border-[#21C7FF]/40 bg-[#21C7FF]/10 px-5 py-2.5 font-semibold text-[#0F172A] transition-colors hover:bg-[#21C7FF]/20"
          >
            Читать подробнее <span aria-hidden>&rarr;</span>
          </Link>
        )}
      </motion.div>
      <motion.div
        variants={v}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid gap-6 sm:grid-cols-2"
      >
        <div className="rounded-2xl border border-slate-200/60 bg-[#f0f7ff] p-5">
          <h3 className="mb-3 font-bold text-[#0F172A]">Показания</h3>
          <ul className="space-y-2 text-sm text-[#475569]">
            {direction.indications.map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-[#21C7FF]">–</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200/60 bg-[#f0f7ff] p-5">
          <h3 className="mb-3 font-bold text-[#0F172A]">Почему безопасно</h3>
          <ul className="space-y-2 text-sm text-[#475569]">
            {direction.safety.map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-[#21C7FF]">–</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
      <motion.div
        variants={v}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h3 className="mb-4 font-bold text-[#0F172A]">Как проходит</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {direction.steps.map((step, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm"
            >
              <span className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#21C7FF]/20 text-sm font-bold text-[#21C7FF]">
                {i + 1}
              </span>
              <p className="font-semibold text-[#0F172A]">{step.title}</p>
              <p className="mt-1 text-sm text-[#64748B]">{step.text}</p>
            </div>
          ))}
        </div>
      </motion.div>
      {showDetailImage && (
        <motion.div
          variants={v}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={
            ["sinus-lift", "soft-tissue", "immediate-implantation", "prosthetics-on-implants", "veneers-crowns"].includes(direction.id)
              ? "relative aspect-video min-h-[180px] w-full overflow-hidden rounded-2xl bg-slate-100"
              : "relative min-h-[260px] w-full overflow-hidden rounded-2xl bg-slate-100 md:aspect-video md:min-h-[340px]"
          }
        >
          <Image
            src={getDetailImageSrc(direction.id)}
            alt=""
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </motion.div>
      )}
    </div>
  );
}
