# Деплой сайта Альтамед-С

## Варианты деплоя

### 1. Vercel (рекомендуется для Next.js)

1. Зайдите на [vercel.com](https://vercel.com)
2. Войдите через GitHub
3. Импортируйте репозиторий: `https://github.com/Vlad-a-1132/Al-sait.git`
4. Настройки:
   - Framework Preset: Next.js
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next` (или `out` для static export)
5. Нажмите Deploy

### 2. Netlify

1. Зайдите на [netlify.com](https://netlify.com)
2. Войдите через GitHub
3. Импортируйте репозиторий
4. Настройки:
   - Build command: `npm run build`
   - Publish directory: `out` (для static export)
5. Нажмите Deploy

### 3. Cloudflare Pages

1. Зайдите в Cloudflare Dashboard → Pages
2. Создайте новый проект из Git
3. Подключите репозиторий GitHub
4. Настройки:
   - Framework preset: Next.js
   - Build command: `npm run build`
   - Build output directory: `out`
5. Сохраните и деплойте

### 4. GitHub Pages (для статического экспорта)

1. Убедитесь, что `next.config.js` настроен на `output: 'export'`
2. Запустите `npm run build`
3. В настройках репозитория GitHub включите GitHub Pages
4. Укажите источник: папка `/out`

## Важные замечания

- Для production билда используется статический экспорт (`output: 'export'`)
- Все изображения должны быть оптимизированы
- Файлы в `public/` доступны напрямую
- API routes не работают при static export (используйте внешние сервисы)

## Переменные окружения

Если нужны переменные окружения, создайте файл `.env.production`:
```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Проверка перед деплоем

- [ ] `npm run build` выполняется без ошибок
- [ ] Все изображения загружаются корректно
- [ ] Мобильная версия работает
- [ ] SEO теги настроены
- [ ] Sitemap и robots.txt генерируются

