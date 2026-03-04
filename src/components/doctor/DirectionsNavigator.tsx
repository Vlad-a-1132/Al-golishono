"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { makeMotionPresets } from "./MotionPresets";
import type { DirectionData } from "./types";

const BANNER_BASE = "/images/doctors/doctor banner";
const MEDIA_IMAGE = `${BANNER_BASE}/Group 83 (2).svg`;
const IMPLANTATION_IMAGE = `${BANNER_BASE}/Group 83 (2).svg`;
const IMPLANTATION_IMAGE_MOBILE = `${BANNER_BASE}/Group 83 (2).svg`;
const BONE_GRAFTING_IMAGE = `${BANNER_BASE}/Group 85 (1).png`;
const BONE_GRAFTING_IMAGE_MOBILE = `${BANNER_BASE}/Group 85 (1).png`;
const SINUS_LIFT_IMAGE = `${BANNER_BASE}/sinus (1).webp`;
const SOFT_TISSUE_IMAGE = `${BANNER_BASE}/plastika (1).webp`;
const IMMEDIATE_IMPLANTATION_IMAGE = `${BANNER_BASE}/task_01kje4hqbefs6vdhkhyq1cgt4j_1772148585_img_0 (1).webp`;
const PROSTHETICS_ON_IMPLANTS_IMAGE = `${BANNER_BASE}/task_01kje4r1jpfrqrgapj7hmy6bmd_1772148792_img_1 (1).webp`;
const VENEERS_CROWNS_IMAGE = `${BANNER_BASE}/task_01kje5dqtse03s4b3kh7c18a3j_1772149502_img_0 (1).webp`;

const DIRECTIONS_WITH_PREVIEW_IMAGE = [
  "sinus-lift",
  "soft-tissue",
  "immediate-implantation",
  "prosthetics-on-implants",
  "veneers-crowns",
];

function getPreviewImageSrc(directionId: string): string {
  switch (directionId) {
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

export function DirectionsNavigator({
  directions,
  activeId,
  onChange,
  activeDirection,
  directionPageBasePath,
}: {
  directions: DirectionData[];
  activeId: string;
  onChange: (id: string) => void;
  activeDirection: DirectionData;
  directionPageBasePath?: string;
}) {
  const reduced = useReducedMotion();
  const { vSwap, vCard, vBtn, vIcon } = makeMotionPresets(!!reduced);
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="grid grid-cols-1 gap-8 overflow-x-hidden lg:grid-cols-12">
      <div className="lg:col-span-5">
        <h2 id="directions" className="mb-2 text-2xl font-bold text-[#0F172A]">
          Направления лечения
        </h2>
        <p className="mb-4 text-sm text-[#64748B] lg:mb-6">
          Выберите направление — блоки ниже обновятся.
        </p>
        <div className="flex flex-col gap-3 lg:hidden">
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            className="self-start rounded-full bg-slate-100 px-4 py-2.5 text-sm font-medium text-[#0F172A] transition-colors hover:bg-slate-200"
          >
            {showAll ? "Свернуть" : "Показать все"}
          </button>
          {showAll ? (
            <div className="flex flex-col gap-2">
              {directions.map((d) => {
                const isActive = d.id === activeId;
                return (
                  <motion.button
                    key={d.id}
                    type="button"
                    onClick={() => onChange(d.id)}
                    variants={vCard}
                    initial="rest"
                    whileHover="hover"
                    className={
                      isActive
                        ? "flex w-full items-center gap-3 rounded-[18px] border border-[#21C7FF]/40 bg-gradient-to-r from-[#21C7FF]/15 to-[#5EF3C4]/10 px-4 py-3 text-left"
                        : "flex w-full items-center gap-3 rounded-[18px] border border-slate-200/80 bg-white/50 px-4 py-3 text-left hover:border-[#21C7FF]/30"
                    }
                  >
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-slate-200/80 text-lg">
                      &#9670;
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-semibold text-[#0F172A]">{d.shortTitle}</p>
                      {d.subtitle && (
                        <p className="truncate text-sm text-[#64748B]">{d.subtitle}</p>
                      )}
                    </div>
                    <span className="text-[#64748B]">&rarr;</span>
                  </motion.button>
                );
              })}
            </div>
          ) : (
            <div className="-mx-1 flex gap-2 overflow-x-auto scroll-smooth snap-x snap-mandatory px-1 pb-2 scrollbar-hide">
              {directions.map((d) => {
                const isActive = d.id === activeId;
                return (
                  <motion.button
                    key={d.id}
                    type="button"
                    onClick={() => onChange(d.id)}
                    variants={vCard}
                    initial="rest"
                    whileHover="hover"
                    className={
                      "flex flex-shrink-0 snap-start items-center gap-2 whitespace-nowrap rounded-[18px] border px-3 py-2.5 text-left " +
                      (isActive
                        ? "border-[#21C7FF]/40 bg-gradient-to-r from-[#21C7FF]/15 to-[#5EF3C4]/10"
                        : "border-slate-200/80 bg-white/50 hover:border-[#21C7FF]/30")
                    }
                  >
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-slate-200/80 text-sm">
                      &#9670;
                    </span>
                    <span className="text-sm font-semibold text-[#0F172A]">{d.shortTitle}</span>
                    <span className="text-sm text-[#64748B]">&rarr;</span>
                  </motion.button>
                );
              })}
            </div>
          )}
        </div>
        <div className="hidden flex-col gap-2 lg:flex">
          {directions.map((d) => {
            const isActive = d.id === activeId;
            return (
              <motion.button
                key={d.id}
                type="button"
                onClick={() => onChange(d.id)}
                variants={vCard}
                initial="rest"
                whileHover="hover"
                className={
                  isActive
                    ? "flex w-full items-center gap-4 rounded-[18px] border border-[#21C7FF]/40 bg-gradient-to-r from-[#21C7FF]/15 to-[#5EF3C4]/10 px-4 py-3 text-left"
                    : "flex w-full items-center gap-4 rounded-[18px] border border-slate-200/80 bg-white/50 px-4 py-3 text-left hover:border-[#21C7FF]/30"
                }
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-200/80 text-lg">
                  &#9670;
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-semibold text-[#0F172A]">{d.shortTitle}</p>
                  {d.subtitle && (
                    <p className="truncate text-sm text-[#64748B]">{d.subtitle}</p>
                  )}
                </div>
                <motion.span
                  variants={vIcon}
                  initial="rest"
                  whileHover="hover"
                  className="text-[#64748B]"
                >
                  &rarr;
                </motion.span>
              </motion.button>
            );
          })}
        </div>
      </div>
      <div className="min-h-[320px] min-w-0 lg:col-span-7">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            variants={vSwap}
            initial="initial"
            animate="animate"
            exit="exit"
            className="space-y-4 overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50/80 to-white p-5 md:p-6"
          >
            <h3 className="text-xl font-bold text-[#0F172A]">{activeDirection.title}</h3>
            <p className="text-[#475569] leading-relaxed">{activeDirection.description}</p>
            {activeDirection.badges && activeDirection.badges.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {activeDirection.badges.map((b) => (
                  <span
                    key={b.label}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    {b.label}
                  </span>
                ))}
              </div>
            )}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <p className="mb-2 font-semibold text-[#0F172A]">Показания</p>
                <ul className="list-inside list-disc space-y-1 text-sm text-[#475569]">
                  {activeDirection.indications.slice(0, 4).map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-2 font-semibold text-[#0F172A]">Что вы получаете</p>
                <ul className="list-inside list-disc space-y-1 text-sm text-[#475569]">
                  {activeDirection.whatYouGet.slice(0, 4).map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            {DIRECTIONS_WITH_PREVIEW_IMAGE.includes(activeDirection.id) ? (
              <>
                <div className="flex flex-wrap items-center gap-3">
                  <motion.a
                    href={activeDirection.cta.primaryHref}
                    variants={vBtn}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                    className="inline-flex rounded-2xl bg-[#21C7FF] px-6 py-3 font-semibold text-white"
                    rel="noopener noreferrer"
                  >
                    {activeDirection.cta.primaryLabel}
                  </motion.a>
                  <Link
                    href={
                      directionPageBasePath
                        ? `${directionPageBasePath}/${activeDirection.id}`
                        : "#details"
                    }
                    className="text-sm font-medium text-[#21C7FF] hover:underline"
                  >
                    Подробнее &rarr;
                  </Link>
                </div>
                <div className="relative aspect-[16/9] min-h-[160px] min-w-0 w-full overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    src={getPreviewImageSrc(activeDirection.id)}
                    alt=""
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </>
            ) : (
              <>
                <div
                  className={
                    activeDirection.id === "bone-grafting"
                      ? "relative -mx-5 h-[160px] w-[calc(100%+2.5rem)] min-w-0 overflow-hidden rounded-2xl bg-slate-100 md:mx-0 md:h-[200px] md:w-full"
                      : "relative h-[160px] w-full max-w-full min-w-0 overflow-hidden rounded-2xl bg-slate-100 md:h-[200px]"
                  }
                >
                  {activeDirection.id === "implantation" ? (
                    <>
                      <Image
                        src={IMPLANTATION_IMAGE_MOBILE}
                        alt=""
                        fill
                        className="object-contain object-center md:hidden"
                        sizes="100vw"
                      />
                      <Image
                        src={IMPLANTATION_IMAGE}
                        alt=""
                        fill
                        className="hidden object-contain object-center md:block"
                        sizes="400px"
                      />
                    </>
                  ) : activeDirection.id === "bone-grafting" ? (
                    <>
                      <Image
                        src={BONE_GRAFTING_IMAGE_MOBILE}
                        alt=""
                        fill
                        className="scale-110 object-cover object-center md:hidden"
                        sizes="100vw"
                      />
                      <Image
                        src={BONE_GRAFTING_IMAGE}
                        alt=""
                        fill
                        className="hidden object-contain object-center md:block"
                        sizes="400px"
                      />
                    </>
                  ) : (
                    <Image
                      src={MEDIA_IMAGE}
                      alt=""
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <motion.a
                    href={activeDirection.cta.primaryHref}
                    variants={vBtn}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                    className="inline-flex rounded-2xl bg-[#21C7FF] px-6 py-3 font-semibold text-white"
                    rel="noopener noreferrer"
                  >
                    {activeDirection.cta.primaryLabel}
                  </motion.a>
                  <Link
                    href={
                      directionPageBasePath
                        ? `${directionPageBasePath}/${activeDirection.id}`
                        : "#details"
                    }
                    className="text-sm font-medium text-[#21C7FF] hover:underline"
                  >
                    Подробнее &rarr;
                  </Link>
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
