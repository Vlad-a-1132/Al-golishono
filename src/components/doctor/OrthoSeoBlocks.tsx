"use client";

import React from "react";

interface OrthoSeoContent {
  title?: string;
  blocks?: Array<{ title: string; content: string }>;
}

export function OrthoSeoBlocks({ seoContent }: { seoContent: OrthoSeoContent }) {
  if (!seoContent?.blocks?.length) return null;
  return (
    <div className="space-y-6">
      {seoContent.title && <h2 className="text-2xl font-bold text-gray-900">{seoContent.title}</h2>}
      {seoContent.blocks.map((b, i) => (
        <div key={i}>
          <h3 className="mb-2 text-lg font-semibold text-gray-900">{b.title}</h3>
          <p className="text-gray-700">{b.content}</p>
        </div>
      ))}
    </div>
  );
}
