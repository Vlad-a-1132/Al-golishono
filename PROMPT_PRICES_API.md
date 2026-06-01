# Промпт: интеграция Price API и страница `/prices` с паролем (сайт Голицыно)

Скопируйте весь блок ниже в Cursor / другого разработчика как задачу на реализацию.

---

## Задача

Реализовать на сайте **Альтамед Голицыно** (Next.js 14, App Router) загрузку прайса из внешнего **Price.Api** (ASP.NET Core на ПК клиники), тестовую страницу **`/prices`** с деревом категорий и услуг, и **защиту паролем** (HTTP Basic Auth через middleware), по образцу сайта Одинцово.

**Не ломать** существующие страницы, SMTP, call-center, admin. Минимальный diff: только новые файлы + `middleware.ts` + env + при необходимости ссылка в robots/sitemap.

---

## Контекст инфраструктуры (уже готово)

| Параметр | Значение |
|----------|----------|
| Price.Api URL | `http://185.18.5.148:5001` |
| Health | `GET /api/health` → `{"success":true,"service":"price-api","status":"ok"}` |
| Услуги | `GET /api/prices/services` + заголовок `X-Api-Key` |
| Категории | `GET /api/prices/categories` + заголовок `X-Api-Key` |
| Дерево | `GET /api/prices/tree` + заголовок `X-Api-Key` |
| VPS | `vm741264.vps.masterhost.tech`, проект `/var/www/altamed-sait`, PM2 `altamed-sait` |
| Проверка с VPS | `curl` на health и services уже работает |

Корневые разделы прайса в БД Altamed (для навигации на `/prices`):

- **432** — ПРАЙС услуги  
- **491** — АНАЛИЗЫ  
- **469** — СТОМАТОЛОГИЯ  
- **397** — стоматология  
- **46** — Группа товаров/медикаментов/расходников  

---

## Эталон (копировать логику отсюда)

Репозиторий-образец: **`D:\work projects\altamed sait\altamed-sait`** (Одинцово).

Скопировать или адаптировать **без изменения контракта API**:

| Файл (Одинцово) | Назначение |
|------------------|------------|
| `src/lib/price-api.ts` | Серверный fetch к Price.Api, fallback в `data/*.json`, типы, нормализация полей |
| `src/app/api/prices/services/route.ts` | Прокси JSON для клиента |
| `src/app/api/prices/categories/route.ts` | Прокси JSON для клиента |
| `src/app/prices/page.tsx` | SSR-страница: корни, `?cat=`, поиск `?q=`, фильтр нулевых цен `?zero=1` |
| `src/app/prices/category-descendants.ts` | Дерево категорий, потомки, root ids |
| `src/middleware.ts` | Basic Auth только для `/prices` |

Целевой проект: **`D:\work projects\altamed sait\Голицино\altamed-sait (2)\altamed-sait`**.

---

## Переменные окружения

Добавить в `.env.local` (локально и на VPS `/var/www/altamed-sait/.env.local`):

```env
# Подключение к Price.Api (клиника, публичный IP)
PRICE_API_BASE_URL=http://185.18.5.148:5001
PRICE_API_KEY=<ключ из appsettings Price.Api на клинике>
PRICE_API_MEMORY_TTL_MS=0

# Пароль для страницы /prices (HTTP Basic Auth)
PRICES_TEST_USER=<логин, например prices-golitsyno>
PRICES_TEST_PASS=<надёжный пароль>

NODE_ENV=production
```

**Важно:** без `PRICES_TEST_USER` и `PRICES_TEST_PASS` middleware возвращает 401 с текстом, что переменные не заданы — страница намеренно закрыта.

После изменения env на сервере:

```bash
cd /var/www/altamed-sait
npm run build
pm2 restart altamed-sait
```

---

## Реализация по шагам

### 1. `src/lib/price-api.ts`

- Читает `PRICE_API_BASE_URL`, `PRICE_API_KEY`, `PRICE_API_MEMORY_TTL_MS`.
- `fetchPriceServices()` → upstream `/api/prices/services`.
- `fetchPriceCategories()` → upstream `/api/prices/categories`.
- При успехе сети — пишет fallback: `data/price-api-services.json`, `data/price-api-categories.json`.
- При ошибке сети — читает fallback с диска (`source: "file"`).
- Экспорт: `normalizeServiceRow`, `normalizeCategoryRow`, `extractArray`, типы `PriceServiceDisplay`, `PriceCategoryDisplay`.

Поля услуг из API Голицыно (маппинг в normalize):

- `serviceId`, `serviceCode`, `serviceMZCode`, `serviceName`
- `categoryId`, `categoryName`, `actualPrice`

### 2. API routes сайта

`src/app/api/prices/services/route.ts` и `categories/route.ts`:

- `export const dynamic = "force-dynamic"`
- `GET` → `fetchPriceServices()` / `fetchPriceCategories()`
- Ответ: `{ ok, source, data }` или 503 с `{ ok: false, error, message }`

**Безопасность (рекомендация):** по умолчанию в Одинцово `/api/prices/*` **не** за middleware. API key Price.Api не светить в браузере — страница `/prices` должна ходить только через server components (`fetchPrice*` в `page.tsx`), а не с клиента на внешний IP. Опционально: не публиковать ссылки на `/api/prices/*` или добавить в middleware matcher также `/api/prices/:path*` с тем же Basic Auth.

### 3. `src/app/prices/category-descendants.ts`

Скопировать из Одинцово без изменений логики (parseNumericId, flattenCategoryTree, buildCategoryChildrenMap, collectDescendantCategoryIds, getRootCategoryIds и т.д.).

### 4. `src/app/prices/page.tsx`

- `metadata`: `robots: { index: false, follow: false }`, title вроде «Прайс | Альтамед Голицыно».
- Server Component: параллельно `fetchPriceServices()` + `fetchPriceCategories()`.
- Показать источник данных: `network` | `file` | `memory` (для отладки).
- Список корневых категорий → ссылки `/prices?cat={id}`.
- В ветке: дерево + услуги, поиск по названию/коду/МЗ, чекбокс «только цена 0».
- Дедупликация услуг по `serviceId|categoryId`.
- Стили Tailwind в духе сайта Голицыно (emerald/серый как на остальных страницах).

### 5. `src/middleware.ts` — пароль на `/prices`

Скопировать из Одинцово:

```ts
export const config = {
  matcher: ["/prices", "/prices/:path*"],
};
```

- Проверка `PRICES_TEST_USER` / `PRICES_TEST_PASS`.
- HTTP Basic Auth: заголовок `Authorization: Basic ...`, `WWW-Authenticate: Basic realm="Restricted"`.
- При неверном пароле — 401.

Пользователь открывает `https://<домен>/prices` → браузер показывает стандартное окно логин/пароль.

### 6. Папка `data/`

```bash
mkdir -p data
```

Опционально положить пустые или сгенерированные `price-api-services.json` / `price-api-categories.json` для первого деплоя, если API клиники временно недоступен (иначе создадутся после первого успешного запроса).

### 7. Проверки

**Локально** (`.env.local` с теми же переменными):

```bash
npm run dev
# http://localhost:3000/prices — запрос логина/пароля
```

**На VPS:**

```bash
curl -s -u 'USER:PASS' https://<домен>/prices | head
curl -s http://185.18.5.148:5001/api/health
```

**Без пароля** — 401 на `/prices`.

---

## Деплой

1. Commit + push (или rsync) в `/var/www/altamed-sait`.
2. `npm install` (если нужно).
3. `npm run build` — убедиться, что есть `.next`, не статический `out`.
4. `pm2 restart altamed-sait`.
5. Убедиться, что на клинике **ServerArchimed** запущен `Price.Api.exe` (порт 5001, автозапуск).

---

## Критерии готовности

- [ ] `/prices` открывается только после Basic Auth.
- [ ] На странице видны корневые разделы (АНАЛИЗЫ, ПРАЙС услуги, стоматология и т.д.).
- [ ] `?cat=491` показывает дерево и услуги анализов.
- [ ] Поиск и фильтр нулевых цен работают.
- [ ] При выключенном Price.Api на клинике — показываются данные из `data/*.json` (если файлы есть).
- [ ] `robots` не индексирует `/prices`.
- [ ] Секреты только в `.env.local` на сервере, не в git.

---

## Вне scope (не делать в этой задаче, если не попросят)

- Подключение живых цен на все страницы услуг (`load-*-price-services.ts`) — отдельная задача по каждому направлению с нужными `categoryId`.
- Смена API key / firewall — ops.
- Публичный прайс без пароля для посетителей сайта.

---

## Ограничения кода

- Next.js 14 App Router, TypeScript.
- Без лишних зависимостей.
- Следовать стилю существующего проекта Голицыно.
- Не коммитить `.env.local` и реальные пароли.

---

*Конец промпта*
