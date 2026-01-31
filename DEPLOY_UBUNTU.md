# Развёртывание сайта Альтамед Голицино на Ubuntu

Пошаговая инструкция по запуску сайта на сервере с **Ubuntu Linux**.

---

## 1. Требования

- Сервер с **Ubuntu** 20.04 или 22.04 LTS
- Доступ по SSH с правами `sudo`
- Домен, направленный на IP сервера (A-запись)

**Необходимое ПО:**
- Node.js 18+ (рекомендуется 20 LTS)
- npm 9+
- Git
- Nginx
- PM2

---

## 2. Подготовка сервера

Подключитесь по SSH и выполните:

```bash
sudo apt update && sudo apt upgrade -y
```

---

## 3. Установка Node.js 20 LTS

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
```

Проверка:

```bash
node -v   # например: v20.x.x
npm -v    # например: 10.x.x
```

---

## 4. Установка Git и Nginx

```bash
sudo apt install -y git nginx
```

---

## 5. Установка PM2

```bash
sudo npm install -g pm2
```

---

## 6. Клонирование проекта

```bash
sudo mkdir -p /var/www
cd /var/www
sudo git clone https://github.com/Vlad-a-1132/Al-golishono.git altamed-sait
cd altamed-sait
```



## 7. Установка зависимостей

```bash
cd /var/www/altamed-sait
npm install
```

---

## 8. Файл переменных окружения

Создайте `.env.local` в корне проекта (файл не попадает в Git):

```bash
nano .env.local
```

Вставьте (подставьте свои данные для почты):

```env
SMTP_HOST=smtp.mastermail.ru
SMTP_PORT=25
SMTP_USER=reg@altamed-golitsino.ru
SMTP_PASSWORD=Altamed192168120
EMAIL_TO=reg@altamed-golitsino.ru

NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
```

Сохраните: `Ctrl+O`, `Enter`, `Ctrl+X`. Ограничьте доступ:

```bash
chmod 600 .env.local
```

---

## 9. Директория для заявок

Сайт сохраняет заявки в `data/appointments.json`:

```bash
mkdir -p data
chmod 755 data
```

---

## 10. Сборка проекта

```bash
npm run build
```

Успешная сборка создаёт каталог **`.next`**. Ошибки смотрите в выводе команды.

---

## 11. Запуск приложения через PM2

```bash
pm2 start npm --name "altamed-sait" -- start
pm2 save
pm2 startup
```

Команда `pm2 startup` выведет строку вида `sudo env PATH=... pm2 startup ...` — **скопируйте и выполните её** от имени текущего пользователя. Это нужно для автозапуска после перезагрузки сервера.

Проверка:

```bash
pm2 status
pm2 logs altamed-sait --lines 20
```

Приложение должно слушать порт **3000**. Проверка локально:

```bash
curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:3000
```

Ожидается `200`.

---

## 12. Настройка Nginx

Создайте конфиг сайта (замените `ваш-домен.ru` на свой домен):

```bash
sudo nano /etc/nginx/sites-available/altamed-sait
```

Содержимое:

```nginx
server {
    listen 80;
    server_name ваш-домен.ru www.ваш-домен.ru;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Включите сайт и проверьте конфиг:

```bash
sudo ln -s /etc/nginx/sites-available/altamed-sait /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

Откройте в браузере: `http://ваш-домен.ru`.

---

## 13. SSL (HTTPS) через Let's Encrypt

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d ваш-домен.ru -d www.ваш-домен.ru
```

Следуйте подсказкам. Certbot сам настроит Nginx для HTTPS. Проверка продления:

```bash
sudo certbot renew --dry-run
```

---

## 14. Обновление сайта из репозитория

Когда в репозитории есть новые изменения:

```bash
cd /var/www/altamed-sait
pm2 stop altamed-sait
git pull origin master
npm install
npm run build
pm2 restart altamed-sait
```

---

## 15. Полезные команды

| Действие | Команда |
|----------|---------|
| Статус приложения | `pm2 status` |
| Логи | `pm2 logs altamed-sait` |
| Перезапуск | `pm2 restart altamed-sait` |
| Остановка | `pm2 stop altamed-sait` |
| Проверка Nginx | `sudo nginx -t` |
| Перезагрузка Nginx | `sudo systemctl reload nginx` |

---

## 16. Важно

1. **API** — сайт работает в серверном режиме Next.js (не статический экспорт). Формы заявок отправляют данные в `/api/appointment`, письма уходят через SMTP из `.env.local`.
2. **Порт 25** — для отправки писем нужен исходящий доступ по порту 25 (SMTP). Если хостинг его блокирует, уточните у провайдера или используйте другой SMTP (например, порт 587).
3. **`.env.local`** — не коммитится в Git. На новом сервере файл нужно создать заново по шагу 8.
4. **Права** — пользователь, от которого запущен PM2, должен иметь права на чтение/запись в `/var/www/altamed-sait` и каталоге `data/`.

---

**Готово.** Сайт доступен по домену; заявки приходят на почту из `EMAIL_TO` в `.env.local`.
