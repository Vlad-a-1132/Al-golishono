# Баннер 8 марта — полный код блока

Текст блока:
- **Бейдж:** 🌸 8 марта клиника не работает
- **Заголовок:** С Международным женским днём!
- **Текст:** Пусть весна принесёт тепло и радость, здоровье будет крепким, а каждый день — наполнен улыбками.
- **Подпись:** Спасибо, что доверяете нам!

Слева — 3D-сердце (градиент, жидкий свет, лепестки, параллакс мыши). Справа — текст. Всё без внешних библиотек.

---

## 1. Разметка на странице (JSX)

Вставить внутрь контейнера (например, `section` или `div` с `className="container"`). Компонент `March8HeartScene` подключается отдельно (см. раздел 2).

```jsx
{/* Баннер 8 марта: слева 3D-сердце, справа текст */}
<div className="w-full mt-6 px-4 md:px-0">
  <div className="march8-sakura-banner">
    {/* Левая колонка: 3D-сердце + жидкий свет + лепестки + параллакс */}
    <div className="march8-banner-left" aria-hidden>
      <March8HeartScene />
    </div>
    <div className="march8-sakura-content">
      <div className="march8-sakura-badge">
        <span className="march8-sakura-flower">🌸</span>
        <span>8 марта клиника не работает</span>
      </div>
      <h2 className="march8-sakura-h2">
        С Международным<br />женским днём!
      </h2>
      <p className="march8-sakura-p">
        Пусть весна принесёт тепло и радость,<br />
        здоровье будет крепким,<br />
        а каждый день — наполнен улыбками.
      </p>
      <div className="march8-sakura-thanks">Спасибо, что доверяете нам!</div>
    </div>
  </div>
</div>
```

Не забудьте импорт компонента:

```jsx
import March8HeartScene from "@/components/March8HeartScene";
```

---

## 2. Компонент March8HeartScene (React/Next.js)

Файл: `src/components/March8HeartScene.tsx`

```tsx
"use client";

import { useEffect, useRef } from "react";

const HEART_SCENE_ID = "march8HeartScene";

export default function March8HeartScene() {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let raf = 0;
    let tx = 0,
      ty = 0;
    let cx = 0,
      cy = 0;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) / r.width;
      const y = (e.clientY - (r.top + r.height / 2)) / r.height;
      tx = Math.max(-1, Math.min(1, x)) * 18;
      ty = Math.max(-1, Math.min(1, y)) * 14;
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const tick = () => {
      raf = 0;
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      el.style.setProperty("--px", cx.toFixed(2) + "px");
      el.style.setProperty("--py", cy.toFixed(2) + "px");
      el.style.setProperty("--rx", (cx * 0.02).toFixed(4));
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={elRef}
      id={HEART_SCENE_ID}
      className="march8-heart-scene"
      aria-hidden
    >
      <span className="march8-hs-glow march8-hs-g1" />
      <span className="march8-hs-glow march8-hs-g2" />

      <span className="march8-hs-petal march8-hs-p1" />
      <span className="march8-hs-petal march8-hs-p2" />
      <span className="march8-hs-petal march8-hs-p3" />
      <span className="march8-hs-petal march8-hs-p4" />
      <span className="march8-hs-petal march8-hs-p5" />
      <span className="march8-hs-petal march8-hs-p6" />
      <span className="march8-hs-petal march8-hs-p7" />
      <span className="march8-hs-petal march8-hs-p8" />
      <span className="march8-hs-petal march8-hs-p9" />
      <span className="march8-hs-petal march8-hs-p10" />
      <span className="march8-hs-petal march8-hs-p11" />
      <span className="march8-hs-petal march8-hs-p12" />

      <svg className="march8-heart3d" viewBox="0 0 240 220" aria-hidden>
        <defs>
          <radialGradient id="march8Hg3d" cx="30%" cy="22%" r="80%">
            <stop offset="0%" stopColor="rgba(255,255,255,.92)" />
            <stop offset="20%" stopColor="rgba(255,195,210,.95)" />
            <stop offset="55%" stopColor="rgba(255,120,165,.92)" />
            <stop offset="100%" stopColor="rgba(255,70,130,.92)" />
          </radialGradient>

          <radialGradient id="march8HLiquid" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="rgba(255,255,255,.85)" />
            <stop offset="35%" stopColor="rgba(255,230,238,.45)" />
            <stop offset="100%" stopColor="rgba(255,230,238,0)" />
          </radialGradient>

          <filter id="march8SoftDepth" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="10" result="b" />
            <feColorMatrix
              in="b"
              type="matrix"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 .22 0"
              result="c"
            />
            <feMerge>
              <feMergeNode in="c" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="march8SoftShine" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="2.6" />
          </filter>

          <path
            id="march8HeartPath"
            d="M120 208 C55 152 14 120 14 70 C14 32 44 12 72 12 C94 12 112 24 120 40 C128 24 146 12 168 12 C196 12 226 32 226 70 C226 120 185 152 120 208 Z"
          />
          <clipPath id="march8HeartClip">
            <use href="#march8HeartPath" />
          </clipPath>
        </defs>

        <use
          href="#march8HeartPath"
          fill="rgba(255,120,150,.18)"
          transform="translate(-10,12) scale(.98)"
        />
        <use
          href="#march8HeartPath"
          fill="url(#march8Hg3d)"
          filter="url(#march8SoftDepth)"
        />
        <ellipse
          cx="76"
          cy="56"
          rx="44"
          ry="34"
          fill="rgba(255,255,255,.55)"
          filter="url(#march8SoftShine)"
          opacity=".55"
        />
        <g clipPath="url(#march8HeartClip)">
          <circle
            className="march8-hs-liquid march8-hs-l1"
            cx="90"
            cy="78"
            r="84"
            fill="url(#march8HLiquid)"
            opacity=".65"
          />
          <circle
            className="march8-hs-liquid march8-hs-l2"
            cx="150"
            cy="130"
            r="92"
            fill="url(#march8HLiquid)"
            opacity=".35"
          />
        </g>
      </svg>
    </div>
  );
}
```

---

## 3. Стили (CSS)

Добавить в глобальный CSS (например, `globals.css`). Контейнер баннера должен иметь `position: relative` и `overflow: hidden`.

```css
/* ====== Баннер 8 марта: слева сцена сердца, справа текст ====== */
.march8-sakura-banner {
  position: relative;
  overflow: hidden;
  border-radius: 24px;
  border: 1px solid rgba(255, 170, 190, 0.35);
  background:
    radial-gradient(circle at 18% 35%, rgba(255, 190, 210, 0.35), transparent 45%),
    radial-gradient(circle at 88% 70%, rgba(255, 160, 190, 0.2), transparent 46%),
    linear-gradient(180deg, #fbf7f9, #f5edf1);
  box-shadow:
    0 10px 30px rgba(255, 120, 150, 0.12),
    0 2px 6px rgba(0, 0, 0, 0.04);
  padding: 22px 24px;
}
@media (min-width: 1024px) {
  .march8-sakura-banner {
    padding: 28px 34px;
    display: grid;
    grid-template-columns: 1fr 520px;
    align-items: center;
    gap: 28px;
    min-height: 210px;
  }
}

.march8-sakura-content {
  text-align: center;
}
@media (min-width: 1024px) {
  .march8-sakura-content {
    text-align: left;
  }
}

.march8-sakura-badge {
  display: inline-flex;
  gap: 10px;
  align-items: center;
  font-weight: 600;
  color: rgba(28, 28, 35, 0.7);
  letter-spacing: 0.2px;
  font-size: 14px;
}
@media (min-width: 1024px) {
  .march8-sakura-badge {
    font-size: 15px;
  }
}

.march8-sakura-flower {
  display: inline-flex;
  width: 26px;
  height: 26px;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0 6px 12px rgba(255, 120, 150, 0.22));
  animation: march8IconFloat 5.5s ease-in-out infinite;
}
@keyframes march8IconFloat {
  0% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
  100% { transform: translateY(0); }
}

.march8-sakura-h2 {
  margin: 12px 0 10px;
  font-size: 26px;
  line-height: 1.1;
  letter-spacing: 0.2px;
  color: rgba(20, 20, 28, 0.92);
}
@media (min-width: 1024px) {
  .march8-sakura-h2 {
    font-size: 30px;
  }
}

.march8-sakura-p {
  margin: 0;
  font-size: 15px;
  line-height: 1.6;
  color: rgba(28, 28, 35, 0.65);
}

.march8-sakura-thanks {
  margin-top: 16px;
  font-weight: 600;
  color: rgba(20, 20, 28, 0.82);
  font-size: 14px;
}

/* Левая колонка баннера (3D-сердце) */
.march8-banner-left {
  position: relative;
  min-height: 160px;
  width: 100%;
  display: none;
}
@media (min-width: 1024px) {
  .march8-banner-left {
    display: block;
  }
}

/* ===== 3D Heart Scene ===== */
.march8-heart-scene {
  position: absolute;
  left: 56px;
  top: 50%;
  transform: translateY(-50%);
  width: 420px;
  height: 240px;
  pointer-events: none;
  user-select: none;
  --px: 0px;
  --py: 0px;
  --rx: 0;
}
@media (max-width: 860px) {
  .march8-heart-scene {
    display: none;
  }
}

.march8-heart3d {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  --rx: 0;
  transform:
    translate(calc(var(--px, 0px) * 0.6), calc(var(--py, 0px) * 0.6))
    rotate(calc(var(--rx, 0) * 1deg))
    scale(1);
  transform-origin: 55% 55%;
  animation: march8HeartBreath 7.2s ease-in-out infinite;
  filter: drop-shadow(0 28px 70px rgba(255, 120, 150, 0.22));
}
@keyframes march8HeartBreath {
  0% {
    transform: translate(calc(var(--px, 0px) * 0.6), calc(var(--py, 0px) * 0.6)) rotate(calc(var(--rx, 0) * 1deg)) scale(1);
  }
  50% {
    transform: translate(calc(var(--px, 0px) * 0.6), calc(var(--py, 0px) * 0.6)) rotate(calc(var(--rx, 0) * 1deg)) scale(1.06);
  }
  100% {
    transform: translate(calc(var(--px, 0px) * 0.6), calc(var(--py, 0px) * 0.6)) rotate(calc(var(--rx, 0) * 1deg)) scale(1);
  }
}

.march8-hs-liquid {
  animation: march8LiquidMove 6.5s ease-in-out infinite;
  transform-origin: center;
}
.march8-hs-l2 {
  animation-duration: 8.5s;
  animation-direction: alternate;
}
@keyframes march8LiquidMove {
  0% {
    transform: translate(-14px, -10px) scale(1);
    opacity: 0.55;
  }
  50% {
    transform: translate(18px, 10px) scale(1.08);
    opacity: 0.68;
  }
  100% {
    transform: translate(-8px, 14px) scale(1.02);
    opacity: 0.58;
  }
}

.march8-hs-glow {
  position: absolute;
  border-radius: 999px;
  filter: blur(22px);
  opacity: 0.55;
}
.march8-hs-glow.march8-hs-g1 {
  width: 260px;
  height: 260px;
  left: -10px;
  top: -30px;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(255, 120, 160, 0.55),
    rgba(255, 120, 160, 0) 64%
  );
  transform: translate(calc(var(--px) * 0.35), calc(var(--py) * 0.35));
  animation: march8GlowFloat1 11s ease-in-out infinite;
}
.march8-hs-glow.march8-hs-g2 {
  width: 320px;
  height: 320px;
  left: 120px;
  top: 30px;
  background: radial-gradient(
    circle at 35% 28%,
    rgba(255, 210, 225, 0.7),
    rgba(255, 210, 225, 0) 66%
  );
  transform: translate(calc(var(--px) * 0.25), calc(var(--py) * 0.25));
  animation: march8GlowFloat2 13s ease-in-out infinite;
}
@keyframes march8GlowFloat1 {
  0% {
    transform: translate(calc(var(--px) * 0.35), calc(var(--py) * 0.35));
  }
  50% {
    transform: translate(calc(var(--px) * 0.35 + 12px), calc(var(--py) * 0.35 - 10px));
  }
  100% {
    transform: translate(calc(var(--px) * 0.35), calc(var(--py) * 0.35));
  }
}
@keyframes march8GlowFloat2 {
  0% {
    transform: translate(calc(var(--px) * 0.25), calc(var(--py) * 0.25));
  }
  50% {
    transform: translate(calc(var(--px) * 0.25 - 14px), calc(var(--py) * 0.25 + 10px));
  }
  100% {
    transform: translate(calc(var(--px) * 0.25), calc(var(--py) * 0.25));
  }
}

.march8-hs-petal {
  position: absolute;
  width: 22px;
  height: 18px;
  opacity: 0.18;
  filter: blur(0.25px) drop-shadow(0 10px 18px rgba(255, 120, 150, 0.14));
  background:
    radial-gradient(circle at 30% 35%, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0) 55%),
    radial-gradient(circle at 70% 70%, rgba(255, 120, 160, 0.45), rgba(255, 120, 160, 0) 60%),
    radial-gradient(circle at 45% 55%, rgba(255, 190, 210, 0.7), rgba(255, 190, 210, 0) 62%);
  border-radius: 70% 70% 90% 90%;
  clip-path: path("M11 0 C7 2.6 3 5.2 1.7 8.6 C.3 12.3 3.2 18 11 18 C18.8 18 21.7 12.3 20.3 8.6 C19 5.2 15 2.6 11 0 Z");
  transform: translate(calc(var(--px) * 0.15), calc(var(--py) * 0.15));
}
.march8-hs-p1 { left: 24px; top: 20px; animation: march8PetalDrift1 11s linear infinite; }
.march8-hs-p2 { left: 78px; top: 8px; animation: march8PetalDrift2 13s linear infinite; opacity: 0.14; }
.march8-hs-p3 { left: 46px; top: 110px; animation: march8PetalDrift3 12s linear infinite; opacity: 0.16; }
.march8-hs-p4 { left: 160px; top: 30px; animation: march8PetalDrift1 14s linear infinite; opacity: 0.12; }
.march8-hs-p5 { left: 210px; top: 12px; animation: march8PetalDrift2 15s linear infinite; opacity: 0.12; }
.march8-hs-p6 { left: 250px; top: 130px; animation: march8PetalDrift3 13s linear infinite; opacity: 0.14; }
.march8-hs-p7 { left: 120px; top: 160px; animation: march8PetalDrift1 16s linear infinite; opacity: 0.1; }
.march8-hs-p8 { left: 30px; top: 170px; animation: march8PetalDrift2 17s linear infinite; opacity: 0.1; }
.march8-hs-p9 { left: 320px; top: 60px; animation: march8PetalDrift3 15s linear infinite; opacity: 0.1; }
.march8-hs-p10 { left: 350px; top: 150px; animation: march8PetalDrift1 18s linear infinite; opacity: 0.09; }
.march8-hs-p11 { left: 290px; top: 20px; animation: march8PetalDrift2 19s linear infinite; opacity: 0.08; }
.march8-hs-p12 { left: 190px; top: 180px; animation: march8PetalDrift3 20s linear infinite; opacity: 0.08; }
@keyframes march8PetalDrift1 {
  0% {
    transform: translate(calc(var(--px) * 0.15), calc(var(--py) * 0.15)) translate(0, 0) rotate(10deg);
  }
  100% {
    transform: translate(calc(var(--px) * 0.15), calc(var(--py) * 0.15)) translate(90px, 40px) rotate(70deg);
  }
}
@keyframes march8PetalDrift2 {
  0% {
    transform: translate(calc(var(--px) * 0.15), calc(var(--py) * 0.15)) translate(0, 0) rotate(-8deg);
  }
  100% {
    transform: translate(calc(var(--px) * 0.15), calc(var(--py) * 0.15)) translate(70px, 60px) rotate(60deg);
  }
}
@keyframes march8PetalDrift3 {
  0% {
    transform: translate(calc(var(--px) * 0.15), calc(var(--py) * 0.15)) translate(0, 0) rotate(16deg);
  }
  100% {
    transform: translate(calc(var(--px) * 0.15), calc(var(--py) * 0.15)) translate(60px, -20px) rotate(80deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .march8-heart3d,
  .march8-hs-liquid,
  .march8-hs-glow,
  .march8-hs-petal {
    animation: none !important;
  }
  .march8-sakura-flower {
    animation: none !important;
  }
}
```

---

## Структура

| Часть | Описание |
|--------|----------|
| **Баннер** | `.march8-sakura-banner` — контейнер с фоном, grid на десктопе (1fr + 520px). |
| **Левая колонка** | `.march8-banner-left` — скрыта на мобильных, на 1024px+ показывает сцену сердца. |
| **Сцена сердца** | `.march8-heart-scene` — 3D-сердце, glow, лепестки; параллакс через `--px`, `--py`, `--rx`. |
| **Текст** | `.march8-sakura-content` — бейдж, заголовок, абзац, подпись. |

На экранах уже 860px сцена сердца скрыта (`display: none`), остаётся только текст поздравления.
