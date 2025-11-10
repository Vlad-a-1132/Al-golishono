# 🚀 Инструкция по развертыванию сайта Альтамед-С

## 📋 Требования

- **Node.js**: 18.x или выше
- **npm**: 9.x или выше
- **Nginx** (или другой веб-сервер)
- **PM2** (для управления процессом Node.js)
- **Домен** с настроенными DNS записями

---

## ⚡ Быстрая установка

### 1. Клонирование проекта

```bash
cd /var/www
git clone https://github.com/Vlad-a-1132/Al-sait.git altamed-sait
cd altamed-sait
```

### 2. Установка зависимостей

```bash
npm install
```

### 3. Создание директории для данных

```bash
mkdir -p data
chmod 755 data
```

### 4. Настройка переменных окружения

Создайте файл `.env.local` в корне проекта:

```bash
nano .env.local
```

**Обязательно заполните следующие переменные:**

```env
# SMTP настройки для отправки email
SMTP_HOST=smtp.mastermail.ru
SMTP_PORT=25
SMTP_USER=zakaz@altamed-c.ru
SMTP_PASSWORD=ваш_пароль_здесь
EMAIL_TO=zakaz@altamed-c.ru

# URL сайта (замените на ваш домен)
NEXT_PUBLIC_SITE_URL=https://ваш-домен.ru

# Окружение
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
```

**Важно:** Замените `ваш_пароль_здесь` и `ваш-домен.ru` на реальные значения!

### 5. Сборка проекта

```bash
npm run build
```

**Проверка:** После сборки должна появиться папка `.next` (НЕ `out`). Если появилась папка `out`, значит включен статический экспорт - это неправильно для работы API.

### 6. Запуск через PM2

```bash
# Установка PM2 (если не установлен)
npm install -g pm2

# Запуск приложения
pm2 start npm --name "altamed-sait" -- start

# Сохранение конфигурации и автозапуск
pm2 save
pm2 startup
```

---

## 🌐 Настройка Nginx

Создайте конфигурационный файл для сайта:

```bash
nano /etc/nginx/sites-available/altamed-sait
```

**Конфигурация Nginx:**

```nginx
server {
    listen 80;
    server_name ваш-домен.ru www.ваш-домен.ru;

    location / {
        proxy_pass http://localhost:3000;
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

**Активация конфигурации:**

```bash
ln -s /etc/nginx/sites-available/altamed-sait /etc/nginx/sites-enabled/
nginx -t
systemctl reload nginx
```

---

## 🔒 SSL сертификат (Let's Encrypt)

```bash
certbot --nginx -d ваш-домен.ru -d www.ваш-домен.ru
```

---

## ✅ Проверка работы

1. **Проверка статуса приложения:**
   ```bash
   pm2 status
   ```

2. **Проверка логов:**
   ```bash
   pm2 logs altamed-sait
   ```

3. **Откройте сайт в браузере:**
   - `https://ваш-домен.ru`

---

## 🔄 Обновление проекта

```bash
cd /var/www/altamed-sait
pm2 stop altamed-sait
git pull origin master
npm install
npm run build
pm2 restart altamed-sait
```

---

## ⚠️ Важные моменты

1. **API Routes работают только в серверном режиме** - в файле `next.config.js` статический экспорт отключен. НЕ включайте `output: 'export'`, так как на сайте есть API для отправки email (`/api/appointment`).

2. **Порт 25 для SMTP** - убедитесь, что порт 25 не заблокирован файрволом для отправки email.

3. **Файл .env.local** - обязательно создайте и заполните все переменные окружения перед сборкой.

4. **Права доступа** - убедитесь, что у пользователя, запускающего приложение, есть права на чтение/запись в директории проекта.

5. **Директория для данных** - приложение сохраняет заявки в файл `data/appointments.json`. Убедитесь, что директория `data` существует и доступна для записи:
   ```bash
   mkdir -p data
   chmod 755 data
   ```

6. **Автозапуск PM2** - обязательно выполните `pm2 startup` для автоматического запуска приложения после перезагрузки сервера.

---

## 📞 Контакты для вопросов

При возникновении проблем проверьте:
- Логи приложения: `pm2 logs altamed-sait`
- Логи Nginx: `/var/log/nginx/error.log`
- Статус PM2: `pm2 status`
- Статус Nginx: `systemctl status nginx`

---

**Готово! Сайт должен быть доступен по адресу вашего домена.**

