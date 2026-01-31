# Требования к хостингу и порядок развёртывания сайта

Документ для предоставления хостинг-провайдеру: необходимое ПО и пошаговые действия для запуска приложения из репозитория на **Linux Ubuntu**.

---

## 1. Необходимое программное обеспечение

| ПО | Минимальная версия | Назначение |
|----|--------------------|------------|
| **Node.js** | 18.x или выше (рекомендуется 20.x LTS) | Среда выполнения приложения (Next.js) |
| **npm** | 9.x или выше (идёт с Node.js) | Установка зависимостей и сборка |
| **Git** | 2.x | Клонирование репозитория и обновление кода |
| **Nginx** (или аналог) | актуальная стабильная | Обратный прокси и раздача статики |
| **PM2** | 5.x или выше | Управление процессом Node.js, автозапуск после перезагрузки |

Опционально:
- **Certbot** — для SSL-сертификатов (Let's Encrypt).

---

## 2. Установка ПО на Ubuntu

```bash
# Обновление пакетов
sudo apt update && sudo apt upgrade -y

# Node.js 20.x LTS (через NodeSource)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Проверка версий
node -v   # ожидается v18.x или v20.x
npm -v    # ожидается 9.x или выше

# Git (если не установлен)
sudo apt install -y git

# Nginx
sudo apt install -y nginx

# PM2 глобально
sudo npm install -g pm2
```

---

## 3. Порядок действий для запуска из репозитория

### 3.1. Клонирование репозитория

```bash
cd /var/www
sudo git clone https://github.com/Vlad-a-1132/Al-golishono.git altamed-sait
cd altamed-sait
```

*(Замените URL репозитория на актуальный, если отличается.)*

### 3.2. Установка зависимостей

```bash
npm install
```

### 3.3. Переменные окружения

Создать в корне проекта файл **`.env.local`** (не коммитится в репозиторий):

```bash
nano .env.local
```

Содержимое (значения заполняет заказчик или администратор):

```env
# SMTP для отправки заявок с сайта
SMTP_HOST=smtp.mastermail.ru
SMTP_PORT=25
SMTP_USER=zakaz@altamed-c.ru
SMTP_PASSWORD=пароль_от_почты
EMAIL_TO=zakaz@altamed-c.ru

# Окружение
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
```

Сохранить и закрыть редактор. Права доступа:

```bash
chmod 600 .env.local
```

### 3.4. Директория для данных

Приложение сохраняет заявки в `data/appointments.json`. Нужна директория с правами на запись:

```bash
mkdir -p data
chmod 755 data
```

### 3.5. Сборка приложения

```bash
npm run build
```

После успешной сборки в корне появляется каталог **`.next`**. Приложение **не** использует статический экспорт (`output: 'export'`), так как есть API для отправки email.

### 3.6. Запуск приложения через PM2

```bash
pm2 start npm --name "altamed-sait" -- start
pm2 save
pm2 startup
```

Команда `pm2 startup` выведет команду для выполнения от root — её нужно выполнить для автозапуска после перезагрузки сервера.

Проверка:

```bash
pm2 status
pm2 logs altamed-sait
```

По умолчанию приложение слушает порт **3000** (http://localhost:3000).

---

## 4. Настройка Nginx (обратный прокси)

Создать конфиг сайта:

```bash
sudo nano /etc/nginx/sites-available/altamed-sait
```

Пример конфигурации (замените `example.ru` на реальный домен):

```nginx
server {
    listen 80;
    server_name example.ru www.example.ru;

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

Включить сайт и проверить конфигурацию:

```bash
sudo ln -s /etc/nginx/sites-available/altamed-sait /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

---

## 5. SSL (HTTPS) — опционально

При использовании Let's Encrypt:

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d example.ru -d www.example.ru
```

*(Замените домены на фактические.)*

---

## 6. Обновление приложения из репозитория

```bash
cd /var/www/altamed-sait
pm2 stop altamed-sait
git pull origin master
npm install
npm run build
pm2 restart altamed-sait
```

---

## 7. Важные замечания

1. **Режим работы** — приложение работает в серверном режиме Next.js (не статический экспорт). API-маршрут `/api/appointment` обрабатывает отправку заявок по email.
2. **Порт 25** — для отправки писем через SMTP порт 25 должен быть доступен исходяще (не блокироваться файрволом/провайдером).
3. **Файл `.env.local`** — не хранится в репозитории; его создаёт и заполняет администратор на сервере.
4. **Права** — пользователь, от которого запускается приложение (например, через PM2), должен иметь права на чтение/запись в каталогах проекта и `data/`.

---

## 8. Краткая сводка команд для развёртывания

```bash
cd /var/www
git clone <URL_РЕПОЗИТОРИЯ> altamed-sait
cd altamed-sait
npm install
# Создать .env.local (см. раздел 3.3)
mkdir -p data && chmod 755 data
npm run build
pm2 start npm --name "altamed-sait" -- start
pm2 save && pm2 startup
# Настроить Nginx (раздел 4)
```

---

**Контакт для вопросов по приложению:** владелец репозитория / заказчик сайта.
