# Шаблон страницы врача: блок «Направления лечения» (полный код и стили) + описание остальных блоков

В этом файле:
- **Разделы 1–5** — полный код и стили блока **«Направления лечения»** (шаблон): обёртка секции, компонент со списком направлений и превью, типы, пресеты анимаций, CSS.
- **Раздел 6** — описание остальных блоков страницы и тексты, которыми они заполняются (без полного кода).

---

## Часть I — шаблон блока «Направления лечения»

### 1. Обёртка секции (SectionShell)

Каждая секция страницы (в том числе «Направления лечения») оборачивается в компонент **SectionShell**. Разметка и классы:

```html
<section id="…">
  <motion.div
    variants={vSection}
    initial="hidden"
    whileInView="show"
    viewport="{{ once: true, amount: 0.2 }}"
    class="overflow-x-hidden rounded-[24px] border border-slate-100 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] p-6 md:p-8"
  >
    <!-- содержимое: DirectionsNavigator -->
  </motion.div>
</section>
```

- **vSection** — анимация появления при скролле (opacity + y).
- Класс контейнера: `overflow-x-hidden rounded-[24px] border border-slate-100 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] p-6 md:p-8`.

**Файл:** `src/components/doctor/SectionShell.tsx`

```tsx
"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { makeMotionPresets } from "./MotionPresets";

export function SectionShell({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const { vSection } = makeMotionPresets(!!reduced);
  return (
    <section id={id} className="w-full">
      <motion.div
        variants={vSection}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className={
          "overflow-x-hidden rounded-[24px] border border-slate-100 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] p-6 md:p-8 " +
          className
        }
      >
        {children}
      </motion.div>
    </section>
  );
}
```

---

### 2. CSS — скрытие скроллбара

Класс **`.scrollbar-hide`** используется у горизонтального списка направлений на мобильном. Подключите в глобальный CSS (например `src/app/globals.css`):

```css
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
```

---

### 3. Тип DirectionData

Данные одного направления для списка и превью:

| Поле | Тип | Описание |
|------|-----|----------|
| id | string | Идентификатор (implantation, bone-grafting, sinus-lift, soft-tissue, immediate-implantation, prosthetics-on-implants, veneers-crowns) |
| shortTitle | string | Текст на кнопке (например «Имплантация зубов») |
| subtitle | string? | Подзаголовок под shortTitle |
| title | string | Заголовок в превью |
| description | string | Описание в превью |
| badges | { label: string }[]? | Бейджи (например «Под ключ») |
| indications | string[] | Показания (в превью показываются первые 4) |
| whatYouGet | string[] | Что получает пациент (в превью первые 4) |
| steps | { title: string; text: string }[] | Шаги «Как проходит» |
| safety | string[] | Безопасность |
| faq | { q: string; a: string }[] | Вопросы по направлению |
| cta | { primaryLabel: string; primaryHref: string } | Кнопка и ссылка «Подробнее» |
| priceBlock?, priceItems?, priceBlockIntro?, priceBlockOutro? | — | Для блока цен |
| imageDesktop?, imageMobile?, detailsImage? | string? | Пути к картинкам |

---

### 4. MotionPresets (полный код)

Пресеты анимаций Framer Motion. При `reducedMotion: true` анимации отключаются (opacity: 1, без сдвигов).

**Файл:** `src/components/doctor/MotionPresets.ts`

```ts
"use client";

const duration = 0.45;
const ease = [0.25, 0.46, 0.45, 0.94] as const;

export function makeMotionPresets(reducedMotion: boolean) {
  if (reducedMotion) {
    return {
      vSection: { hidden: { opacity: 1 }, show: { opacity: 1 } },
      vCard: { rest: {}, hover: {} },
      vBtn: { rest: {}, hover: {}, tap: {} },
      vIcon: { rest: {}, hover: {} },
      vSwap: { initial: { opacity: 1 }, animate: { opacity: 1 }, exit: { opacity: 1 } },
      vStagger: { hidden: {}, show: {} },
      vReveal: { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } },
    };
  }
  return {
    vSection: {
      hidden: { opacity: 0, y: 12 },
      show: { opacity: 1, y: 0, transition: { duration, ease } },
    },
    vCard: {
      rest: { scale: 1, y: 0 },
      hover: { scale: 1.02, y: -2, transition: { duration: 0.35, ease } },
    },
    vBtn: {
      rest: { scale: 1 },
      hover: { scale: 1.02, transition: { duration: 0.3 } },
      tap: { scale: 0.98 },
    },
    vIcon: { rest: { rotate: 0 }, hover: { rotate: 3 } },
    vSwap: {
      initial: { opacity: 0, x: -8 },
      animate: { opacity: 1, x: 0, transition: { duration, ease } },
      exit: { opacity: 0, x: 8, transition: { duration: 0.3 } },
    },
    vStagger: {
      hidden: { opacity: 0 },
      show: (i: number) => ({ opacity: 1, transition: { delay: i * 0.06, duration } }),
    },
    vReveal: {
      hidden: { opacity: 0, y: 14 },
      show: { opacity: 1, y: 0, transition: { duration, ease } },
    },
  };
}
```

В блоке «Направления лечения» используются: **vSection** (обёртка), **vSwap** (смена превью при выборе направления), **vCard** (кнопки направлений), **vIcon** (стрелка → на десктопе), **vBtn** (кнопка CTA в превью).

---

### 5. Компонент DirectionsNavigator (полный код)

- Заголовок: **«Направления лечения»** (id="directions").
- Подпись: **«Выберите направление — блоки ниже обновятся.»**
- Мобильный режим: кнопка **«Показать все»** / **«Свернуть»**; при свёрнутом виде — горизонтальный скролл с классом **scrollbar-hide**, snap, кнопки с ◆ и shortTitle и →.
- Десктоп: вертикальный список кнопок с ◆, shortTitle (и subtitle при наличии), → с анимацией vIcon.
- Превью справа (AnimatePresence + vSwap по activeId): **title**, **description**, **badges**, блоки «Показания» и «Что вы получаете» (первые 4 пункта), кнопка **cta.primaryLabel**, ссылка **«Подробнее →»** на `directionPageBasePath/{id}` или #details.
- Картинки по **activeDirection.id**: для implantation и bone-grafting — отдельная вёрстка (десктоп/мобильный вариант); для sinus-lift, soft-tissue, immediate-implantation, prosthetics-on-implants, veneers-crowns — одна картинка через getPreviewImageSrc(id). Константы путей задаются под проект (например BANNER_BASE = "/images/doctors/doctor banner" и файлы Group 83 (2).svg, Group 85 (1).png, sinus (1).webp, plastika (1).webp и т.д.).

**Файл:** `src/components/doctor/DirectionsNavigator.tsx` — см. реализацию в проекте; структура соответствует описанной выше.

---

## Часть II — остальные блоки (описание и тексты)

### 6.1 DirectionDetails

**Назначение:** Детальное описание выбранного направления под блоком «Направления лечения».

**Данные:** из **direction**: title, description, indications (все), safety (все), steps (все). Ссылка «Читать подробнее» ведёт на `directionPageBasePath/{direction.id}`. При необходимости внизу блока выводится большая картинка (для направлений не из списка DIRECTIONS_WITHOUT_DETAIL_IMAGE).

**Тексты** (заголовки, показания, «Почему безопасно», шаги «Как проходит») по каждому направлению — см. **docs/doctor-page-full-content.md** (раздел 3).

---

### 6.2 AdvantagesBlock

- **Заголовок:** «Преимущества: {direction.title}»
- **Подзаголовок 1:** «Преимущества подхода врача»
- **Четыре универсальных пункта:**

| Заголовок           | Текст                                                                 |
|---------------------|-----------------------------------------------------------------------|
| Безопасность        | Проверенные материалы и протоколы, минимальные риски.                 |
| Точность            | Современная диагностика и планирование лечения.                       |
| Прогнозируемость    | Понятный план и сроки, контроль на каждом этапе.                        |
| Комфорт             | Анестезия и бережный подход, без лишнего стресса.                      |

- **Подзаголовок 2:** «Что вы получаете в этом направлении»
- **Список:** из **direction.whatYouGet** (уже заданы по направлениям в данных).

---

### 6.3 FaqByDirection

- **Заголовок:** «Часто задаваемые вопросы»
- **Сначала** — три общих вопроса/ответа (как записаться, обезболивание, сроки лечения).
- **Затем** — вопросы по выбранному направлению из **direction.faq**.
- **Кнопка под аккордеоном:** «Записаться на консультацию» (href="/appointments").

Полные формулировки вопросов и ответов — в **doctor-page-full-content.md**, раздел 5.

---

### 6.4 PricingByDirection

- **Заголовок:** «Цены: {direction.title}»
- **Содержимое:** из **direction**: priceBlockIntro, priceBlock.from/note, priceItems (таблица: код, название, цена), priceBlockOutro. Для одномоментной имплантации — только блок «от … ₽» и примечание.
- **Кнопка:** «Посмотреть полный прайс» (href из bundle.priceCta).

Полные прайсы по всем направлениям — в **doctor-page-full-content.md**, раздел 6.

---

### 6.5 ReviewsStrip

- **Заголовок:** «Отзывы пациентов»
- **Ссылка на источник:** ПроДокторов (url и label из bundle.reviewsSource)
- **Список отзывов:** фильтр по activeDirectionId; у каждого — имя, рейтинг, текст. Текст при свёрнутом виде с **line-clamp-3**.
- **Кнопка:** «Развернуть отзывы» / «Свернуть отзывы»

Тексты трёх отзывов — в **doctor-page-full-content.md**, раздел 7.

---

### 6.6 FinalCtaCard

- **Заголовок:** «Записаться на консультацию»
- **Подзаголовок:** «Оставьте заявку — мы подберём удобное время и ответим на вопросы.»
- **Кнопка:** «Записаться на приём» (href="/appointments")
- **Классы контейнера:** `rounded-3xl border-2 border-[#21C7FF]/30 bg-gradient-to-br from-[#21C7FF]/10 to-[#5EF3C4]/10 p-8 text-center md:p-12`

---

**Итого:** в разделах 1–5 приведён полный шаблон (код и стили) блока «Направления лечения»; в разделе 6 — описание остальных блоков и указание, какими текстами они заполняются (полные тексты и прайсы — в **doctor-page-full-content.md**).
