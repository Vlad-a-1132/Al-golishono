"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { makeMotionPresets } from "./MotionPresets";

interface ReviewItem {
  id: string;
  directionId?: string;
  name: string;
  rating: number;
  text: string;
}

export function ReviewsStrip({
  reviews,
  activeDirectionId,
  reviewsSource,
  reviewsSources,
}: {
  reviews: ReviewItem[];
  activeDirectionId: string;
  reviewsSource?: { url: string; label: string };
  reviewsSources?: { url: string; label: string }[];
}) {
  const [expanded, setExpanded] = useState(false);
  const reduced = useReducedMotion();
  const v = makeMotionPresets(!!reduced).vReveal;
  const filtered = reviews.filter(
    (r) => !r.directionId || r.directionId === activeDirectionId
  );
  const source = reviewsSource ?? reviewsSources?.[0];

  return (
    <motion.div
      variants={v}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="space-y-4"
    >
      <h3 className="text-lg font-semibold text-[#0F172A]">
        Отзывы пациентов
      </h3>
      {source && (
        <a
          href={source.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-[#21C7FF] hover:underline"
        >
          {source.label}
        </a>
      )}
      {filtered.length === 0 ? (
        <p className="text-[#64748B]">Пока нет отзывов по этому направлению.</p>
      ) : (
        <ul className="space-y-4">
          {filtered.map((r) => (
            <li
              key={r.id}
              className="rounded-xl border border-slate-100 bg-white p-4"
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="font-medium text-[#0F172A]">{r.name}</span>
                <span className="text-amber-500">
                  {"★".repeat(Math.round(r.rating))}
                </span>
              </div>
              <p
                className={`text-[#475569] ${!expanded ? "line-clamp-3" : ""}`}
              >
                {r.text}
              </p>
            </li>
          ))}
        </ul>
      )}
      {filtered.length > 0 && (
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          className="rounded-xl border border-[#21C7FF]/30 bg-[#21C7FF]/5 px-4 py-2.5 text-sm font-medium text-[#0F172A] transition-colors hover:bg-[#21C7FF]/10"
        >
          {expanded ? "Свернуть отзывы" : "Развернуть отзывы"}
        </button>
      )}
    </motion.div>
  );
}
