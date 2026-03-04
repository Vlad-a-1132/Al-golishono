"use client";

/** Второй слайд слайдера: ортодонтия (Гончаренко). Placeholder баннер. */
export function OrthoDesktopSVG() {
  return (
    <svg className="w-full h-auto" width="1200" height="160" viewBox="0 0 1200 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ортодонтия">
      <defs>
        <linearGradient id="orthoBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0E2730" />
          <stop offset="1" stopColor="#060C12" />
        </linearGradient>
        <linearGradient id="orthoAccent" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#21C7FF" />
          <stop offset="0.5" stopColor="#5EF3C4" />
          <stop offset="1" stopColor="#21C7FF" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="1200" height="160" rx="26" fill="url(#orthoBg)" />
      <rect x="18" y="14" width="1164" height="132" rx="22" fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.1)" strokeWidth="1" />
      <text x="70" y="70" fill="rgba(255,255,255,.95)" fontSize="24" fontWeight="700">Ортодонтия</text>
      <text x="70" y="100" fill="rgba(255,255,255,.7)" fontSize="14">Исправление прикуса — врач Гончаренко</text>
      <rect x="950" y="54" width="200" height="40" rx="20" fill="rgba(94,243,196,.12)" stroke="url(#orthoAccent)" strokeWidth="2" />
      <text x="1050" y="79" textAnchor="middle" fill="rgba(255,255,255,.92)" fontSize="14" fontWeight="700">Записаться</text>
    </svg>
  );
}

export function OrthoMobileSVG() {
  return (
    <svg className="w-full h-auto" width="580" height="199" viewBox="0 0 580 199" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ортодонтия (mobile)">
      <defs>
        <linearGradient id="orthoBgM" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0E2730" />
          <stop offset="1" stopColor="#060C12" />
        </linearGradient>
        <linearGradient id="orthoAccentM" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#21C7FF" />
          <stop offset="0.5" stopColor="#5EF3C4" />
          <stop offset="1" stopColor="#21C7FF" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="580" height="199" rx="28" fill="url(#orthoBgM)" />
      <rect x="10" y="10" width="560" height="179" rx="24" fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.1)" strokeWidth="1" />
      <text x="28" y="56" fill="rgba(255,255,255,.95)" fontSize="20" fontWeight="700">Ортодонтия</text>
      <text x="28" y="90" fill="rgba(255,255,255,.7)" fontSize="13">Исправление прикуса</text>
      <rect x="180" y="140" width="220" height="36" rx="18" fill="rgba(94,243,196,.12)" stroke="url(#orthoAccentM)" strokeWidth="2" />
      <text x="290" y="163" textAnchor="middle" fill="rgba(255,255,255,.92)" fontSize="13" fontWeight="700">Записаться</text>
    </svg>
  );
}
