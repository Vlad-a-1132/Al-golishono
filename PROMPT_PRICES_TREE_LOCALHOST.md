# Промпт: страница `/prices` на localhost:3000 — дерево как на Price.Api (6 корней, 4626 услуг)

Скопируйте весь блок ниже в Cursor как задачу на реализацию.

---

## Цель

Сделать на сайте **Альтамед Голицыно** (Next.js 14, App Router) страницу:

**`http://localhost:3000/prices`**

которая визуально и функционально **повторяет просмотрщик** из Price.Api (`wwwroot/index.html` на клинике), а не упрощённую страницу `/prices` из сайта Одинцово.

При открытии (после ввода пароля) пользователь видит:

- Заголовок **«Прейскурант Altamed»**
- Подзаголовок **«Дерево категорий и список услуг из Price.Api»**
- Поиск, кнопки **Развернуть всё / Свернуть всё / Обновить**
- Вкладки **«Дерево»** и **«Все услуги»**
- Строку статистики: **`Корневых категорий: 6 | Услуг: 4626`**
- Раскрывающееся дерево корней: АНАЛИЗЫ, Группа товаров/…, ПРАЙС услуги, СТОМАТОЛОГИЯ, стomatология и т.д.

---

## Эталон UI (главный референс)

**Не копировать** `src/app/prices/page.tsx` из Одинцово — там другой UX (ссылки `?cat=`, без вкладок).

**Копировать логику и внешний вид** из:

`D:\work projects\Price backend Одинцово\Price backend Голицыно\wwwroot\index.html`

Там уже реализовано:

- fetch `GET /api/prices/tree` и `GET /api/prices/services`
- `updateStats()` → `Корневых категорий: ${treeData.length} | Услуг: ${servicesData.length}`
- `renderTree()` — accordion по категориям, услуги внутри (код | название | цена)
- `renderList()` — таблица всех услуг
- поиск по названию, коду, категории, categoryPath
- развернуть/свернуть всё

Перенести это в React (Client Component), стили — Tailwind или scoped CSS максимально близко к `#1a5276` header, белые карточки категорий, зелёные цены.

---

## Проект и окружение

| | |
|---|---|
| **Целевой проект** | `D:\work projects\altamed sait\Голицино\altamed-sait (2)\altamed-sait` |
| **Dev URL** | `http://localhost:3000/prices` |
| **Price.Api (upstream)** | `http://185.18.5.148:5001` |
| **Ожидаемый результат** | 6 корневых категорий, ~4626 услуг (как на `:5001/`) |

### `.env.local` (обязательно для локального dev)

```env
PRICE_API_BASE_URL=http://185.18.5.148:5001
PRICE_API_KEY=AltamedGolicino2026PriceApiKey9xK2mN7pQ4wR8
PRICE_API_MEMORY_TTL_MS=0

PRICES_TEST_USER=prices-golitsyno
PRICES_TEST_PASS=<надёжный_пароль>
```

После правки `.env.local` — перезапустить `npm run dev`.

**Price.Api на клинике должен быть запущен**, иначе страница покажет ошибку (или fallback, если реализован).

---

## Архитектура (Next.js)

### 1. `src/lib/price-api.ts`

Расширить модуль из Одинцово (или создать с нуля) тремя функциями:

- `fetchPriceServices()` → upstream `/api/prices/services`
- `fetchPriceCategories()` → upstream `/api/prices/categories` (опционально, для будущего)
- **`fetchPriceTree()`** → upstream **`/api/prices/tree`**

Паттерн как у services: memory TTL → network → fallback file `data/price-api-tree.json`.

API key **только на сервере** (`X-Api-Key` из env), **не** в клиентском JS и **не** в `?apiKey=` в браузере.

Типы для узла дерева (из Price.Api `TreeNodeDto`):

```ts
type PriceTreeNode = {
  categoryId: number;
  categoryName: string;
  categoryPath?: string;
  services?: Array<{
    serviceId: number;
    serviceCode?: string;
    serviceName: string;
    actualPrice?: number;
  }>;
  children?: PriceTreeNode[];
};
```

Тип для flat services — поля `serviceCode`, `serviceName`, `actualPrice`, `categoryName`, `categoryPath`.

### 2. API routes (прокси, ключ не светить)

- `src/app/api/prices/tree/route.ts` — `GET`, `fetchPriceTree()`, ответ `{ ok, source, data }`
- `src/app/api/prices/services/route.ts` — как в Одинцово

`export const dynamic = "force-dynamic"`.

### 3. `src/app/prices/page.tsx`

**Server Component** — обёртка:

- `metadata`: title «Прейскурант | Альтамед Голицыно», `robots: { index: false, follow: false }`
- Опционально: начальная загрузка tree+services на сервере и передача в Client Component как `initialTree`, `initialServices`, `initialSource` (быстрее первый paint)
- Рендер `<PricesViewer initialTree={...} initialServices={...} />`

### 4. `src/app/prices/PricesViewer.tsx` (**Client Component**, `"use client"`)

Порт логики из `wwwroot/index.html`:

| Функция | Поведение |
|---------|-----------|
| `load()` | `fetch('/api/prices/tree')` + `fetch('/api/prices/services')`, парсинг JSON |
| `updateStats()` | `Корневых категорий: N \| Услуг: M` |
| `filterTree` / `filterServices` | как в index.html |
| `renderTree` | React-рекурсия: `.cat` / `.cat-head` / `.cat-body`, toggle open |
| `renderList` | `<table>` все услуги |
| Поиск | `onInput` → refilter без нового запроса (или с debounce) |
| Развернуть/свернуть | state `expandedIds: Set<number>` или class на всех узлах |
| Обновить | повторный `load()` |

Формат цены: `toLocaleString('ru-RU', { minimumFractionDigits: 2 }) + ' ₽'`.

### 5. `src/middleware.ts`

HTTP Basic Auth **только** для `/prices` (скопировать из Одинцово):

- `matcher: ["/prices", "/prices/:path*"]`
- env `PRICES_TEST_USER`, `PRICES_TEST_PASS`
- без env — 401 с понятным текстом

Опционально: также закрыть `/api/prices/:path*` тем же паролем, чтобы JSON не был публичным.

---

## Контракт upstream (Price.Api)

Проверенные endpoints:

```
GET http://185.18.5.148:5001/api/health
GET http://185.18.5.148:5001/api/prices/tree      + X-Api-Key
GET http://185.18.5.148:5001/api/prices/services  + X-Api-Key
```

Корневые разделы (5 имён в DefaultRootNames, в tree может быть **6** узлов из‑за дубликата «АНАЛИЗЫ» — **не чинить на фронте**, показывать как отдаёт API):

- ПРАЙС услуги (432)
- АНАЛИЗЫ (491)
- СТОМАТОЛОГИЯ (469)
- стоматология (397)
- Группа товаров/медикаментов/расходников (46)

---

## Файлы для создания/изменения

```
src/lib/price-api.ts                    # + fetchPriceTree, типы
src/app/api/prices/tree/route.ts        # новый
src/app/api/prices/services/route.ts    # новый
src/app/prices/page.tsx                 # server wrapper
src/app/prices/PricesViewer.tsx         # client UI (главный)
src/middleware.ts                       # Basic Auth
data/                                   # mkdir, fallback json
.env.local                              # env (не в git)
```

**Не трогать:** SMTP, call-center, admin, остальные страницы услуг.

---

## Проверка локально

```bash
cd "D:\work projects\altamed sait\Голицино\altamed-sait (2)\altamed-sait"
npm run dev
```

1. Открыть `http://localhost:3000/prices`
2. Ввести `PRICES_TEST_USER` / `PRICES_TEST_PASS`
3. Дождаться загрузки
4. Убедиться: **`Корневых категорий: 6 | Услуг: 4626`** (допустимо ±1 по услугам при изменении БД)
5. Раскрыть «АНАЛИЗЫ» — видны подкategории и услуги с кодом и ценой
6. Вкладка «Все услуги» — таблица ~4626 строк
7. Поиск «Посев» — фильтрация работает
8. «Обновить» — повторная загрузка

### curl (без UI)

```bash
curl -s -u "prices-golitsyno:ПАРОЛЬ" http://localhost:3000/api/prices/tree | head -c 200
```

---

## Критерии готовности

- [ ] `/prices` на `:3000` защищена паролем (Basic Auth)
- [ ] UI совпадает с просмотрщиком Price.Api (header, toolbar, tabs, stats, дерево)
- [ ] Статистика: **6 корней, ~4626 услуг**
- [ ] Данные идут через серверный прокси, API key не в bundle браузера
- [ ] `npm run build` проходит без ошибок TypeScript
- [ ] Страница не индексируется (`robots: noindex`)

---

## Ограничения

- Next.js 14, TypeScript, без новых npm-зависимостей (если не критично)
- Не коммитить `.env.local`, пароли, API key
- Не менять Price.Api на клинике в рамках этой задачи
- Подключение цен на публичные страницы услуг (`load-*-price-services.ts`) — **отдельная задача**

---

## Отличие от предыдущего промпта (`PROMPT_PRICES_API.md`)

| PROMPT_PRICES_API | Этот промпт |
|-------------------|-------------|
| Копирует `/prices` Одинцово (`?cat=`, SSR-дерево) | Копирует **`index.html`** Price.Api Голицыно |
| Ссылки на разделы | Accordion + вкладка «Все услуги» |
| categories + services | **tree** + services |

---

*Конец промпта*
