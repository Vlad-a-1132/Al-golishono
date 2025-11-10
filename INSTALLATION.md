# 📦 Инструкция по установке сайта на домен

Подробная инструкция по развертыванию сайта Альтамед-С на VPS/сервере с собственным доменом.

## 📋 Содержание

1. [Требования](#требования)
2. [Подготовка сервера](#подготовка-сервера)
3. [Установка Node.js](#установка-nodejs)
4. [Клонирование проекта](#клонирование-проекта)
5. [Настройка переменных окружения](#настройка-переменных-окружения)
6. [Сборка проекта](#сборка-проекта)
7. [Настройка веб-сервера (Nginx)](#настройка-веб-сервера-nginx)
8. [Настройка домена и SSL](#настройка-домена-и-ssl)
9. [Настройка автозапуска (PM2)](#настройка-автозапуска-pm2)
10. [Проверка работы](#проверка-работы)
11. [Обновление сайта](#обновление-сайта)

---

## 🔧 Требования

### Минимальные требования к серверу:
- **ОС**: Ubuntu 20.04+ / Debian 11+ / CentOS 8+
- **RAM**: 1 GB (рекомендуется 2 GB)
- **CPU**: 1 ядро (рекомендуется 2 ядра)
- **Диск**: 10 GB свободного места
- **Node.js**: 18.x или выше
- **npm**: 9.x или выше

### Дополнительно потребуется:
- Домен, настроенный на IP адрес вашего сервера
- Доступ по SSH к серверу
- Права root или sudo

---

## 🖥 Подготовка сервера

### 1. Подключение к серверу

```bash
ssh root@your-server-ip
# или
ssh username@your-server-ip
```

### 2. Обновление системы

```bash
# Ubuntu/Debian
sudo apt update && sudo apt upgrade -y

# CentOS/RHEL
sudo yum update -y
```

### 3. Установка необходимых пакетов

```bash
# Ubuntu/Debian
sudo apt install -y curl wget git build-essential

# CentOS/RHEL
sudo yum install -y curl wget git gcc-c++ make
```

---

## 📦 Установка Node.js

### Вариант 1: Через NodeSource (рекомендуется)

```bash
# Для Ubuntu/Debian
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Для CentOS/RHEL
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install -y nodejs
```

### Вариант 2: Через NVM (Node Version Manager)

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 18
nvm use 18
nvm alias default 18
```

### Проверка установки

```bash
node --version  # Должно быть v18.x.x или выше
npm --version   # Должно быть 9.x.x или выше
```

---

## 📥 Клонирование проекта

### 1. Создание директории для проекта

```bash
sudo mkdir -p /var/www
cd /var/www
```

### 2. Клонирование репозитория

```bash
sudo git clone https://github.com/Vlad-a-1132/Al-sait.git altamed-sait
cd altamed-sait
```

### 3. Установка зависимостей

```bash
sudo npm install
# или
sudo npm ci  # Для production (более строгая установка)
```

**Примечание**: Если возникают ошибки с правами, используйте `sudo` или создайте пользователя для проекта.

---

## ⚙️ Настройка переменных окружения

### 1. Создание файла .env.local

```bash
sudo cp env.example.txt .env.local
sudo nano .env.local
```

### 2. Заполнение переменных окружения

```env
# SMTP настройки для отправки email через MasterMail Exchange 2010
SMTP_HOST=smtp.mastermail.ru
SMTP_PORT=25
SMTP_USER=zakaz@altamed-c.ru
SMTP_PASSWORD=your_password_here
EMAIL_TO=zakaz@altamed-c.ru

# URL сайта (замените на ваш домен)
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Окружение
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
```

### 3. Сохранение файла

- В nano: `Ctrl+O` (сохранить), `Enter` (подтвердить), `Ctrl+X` (выйти)
- В vim: `:wq` (сохранить и выйти)

### 4. Установка прав доступа

```bash
sudo chmod 600 .env.local  # Только владелец может читать/писать
```

---

## 🔨 Сборка проекта

### Важно: Отключение статического экспорта

Поскольку в проекте используются API routes для отправки email, нужно убедиться, что статический экспорт отключен в production.

### 1. Проверка next.config.js

Убедитесь, что в `next.config.js` нет принудительного статического экспорта для production:

```javascript
// Убедитесь, что эта часть закомментирована или удалена:
// ...(process.env.NODE_ENV === 'production' && {
//   output: 'export',
//   ...
// }),
```

### 2. Сборка проекта

```bash
sudo npm run build
```

После успешной сборки вы увидите сообщение:
```
✓ Compiled successfully
```

### 3. Проверка сборки

```bash
# Проверка, что папка .next создана
ls -la .next
```

---

## 🌐 Настройка веб-сервера (Nginx)

### 1. Установка Nginx

```bash
# Ubuntu/Debian
sudo apt install -y nginx

# CentOS/RHEL
sudo yum install -y nginx
sudo systemctl enable nginx
sudo systemctl start nginx
```

### 2. Создание конфигурации сайта

```bash
sudo nano /etc/nginx/sites-available/altamed-sait
```

**Для Ubuntu/Debian** (если директория `sites-available` существует):

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    # Логи
    access_log /var/log/nginx/altamed-sait-access.log;
    error_log /var/log/nginx/altamed-sait-error.log;

    # Проксирование на Next.js приложение
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

    # Статические файлы (опционально, для оптимизации)
    location /_next/static {
        proxy_pass http://localhost:3000;
        proxy_cache_valid 200 60m;
        add_header Cache-Control "public, immutable";
    }
}
```

**Для CentOS/RHEL** (или если директории `sites-available` нет):

```bash
sudo nano /etc/nginx/conf.d/altamed-sait.conf
```

Используйте тот же конфиг выше.

### 3. Активация конфигурации (Ubuntu/Debian)

```bash
sudo ln -s /etc/nginx/sites-available/altamed-sait /etc/nginx/sites-enabled/
```

### 4. Проверка конфигурации Nginx

```bash
sudo nginx -t
```

Должно быть:
```
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

### 5. Перезагрузка Nginx

```bash
sudo systemctl reload nginx
# или
sudo systemctl restart nginx
```

---

## 🔒 Настройка домена и SSL

### 1. Настройка DNS записей

В панели управления вашего домена добавьте A-запись:

```
Тип: A
Имя: @ (или оставьте пустым)
Значение: IP-адрес вашего сервера
TTL: 3600 (или Auto)
```

Для поддомена www:

```
Тип: A
Имя: www
Значение: IP-адрес вашего сервера
TTL: 3600
```

### 2. Установка Certbot (Let's Encrypt)

```bash
# Ubuntu/Debian
sudo apt install -y certbot python3-certbot-nginx

# CentOS/RHEL
sudo yum install -y certbot python3-certbot-nginx
```

### 3. Получение SSL сертификата

```bash
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

Следуйте инструкциям:
- Введите email для уведомлений
- Согласитесь с условиями использования
- Выберите, перенаправлять ли HTTP на HTTPS (рекомендуется выбрать "2")

### 4. Автоматическое обновление сертификата

Certbot автоматически настроит cron-задачу для обновления сертификата. Проверить можно:

```bash
sudo certbot renew --dry-run
```

---

## 🚀 Настройка автозапуска (PM2)

PM2 - это менеджер процессов для Node.js, который обеспечит автозапуск и перезапуск приложения.

### 1. Установка PM2

```bash
sudo npm install -g pm2
```

### 2. Запуск приложения через PM2

```bash
cd /var/www/altamed-sait
sudo pm2 start npm --name "altamed-sait" -- start
```

Или создайте файл `ecosystem.config.js`:

```bash
sudo nano ecosystem.config.js
```

Содержимое:

```javascript
module.exports = {
  apps: [{
    name: 'altamed-sait',
    script: 'npm',
    args: 'start',
    cwd: '/var/www/altamed-sait',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
};
```

Затем запустите:

```bash
sudo pm2 start ecosystem.config.js
sudo pm2 save
sudo pm2 startup
```

### 3. Полезные команды PM2

```bash
# Статус приложения
sudo pm2 status

# Логи
sudo pm2 logs altamed-sait

# Перезапуск
sudo pm2 restart altamed-sait

# Остановка
sudo pm2 stop altamed-sait

# Мониторинг
sudo pm2 monit
```

---

## ✅ Проверка работы

### 1. Проверка работы Next.js приложения

```bash
# Проверка, что приложение запущено
sudo pm2 status

# Проверка логов
sudo pm2 logs altamed-sait --lines 50
```

### 2. Проверка работы Nginx

```bash
sudo systemctl status nginx
```

### 3. Проверка портов

```bash
sudo netstat -tlnp | grep :3000  # Next.js
sudo netstat -tlnp | grep :80    # HTTP
sudo netstat -tlnp | grep :443   # HTTPS
```

### 4. Тестирование сайта

Откройте в браузере:
- `http://your-domain.com` (должен перенаправить на HTTPS)
- `https://your-domain.com`

### 5. Проверка API

```bash
# Тест API endpoint
curl https://your-domain.com/api/appointment
```

Должен вернуть JSON с заявками или пустой массив.

---

## 🔄 Обновление сайта

### 1. Остановка приложения

```bash
cd /var/www/altamed-sait
sudo pm2 stop altamed-sait
```

### 2. Получение обновлений

```bash
sudo git pull origin master
```

### 3. Установка новых зависимостей (если есть)

```bash
sudo npm install
```

### 4. Пересборка проекта

```bash
sudo npm run build
```

### 5. Перезапуск приложения

```bash
sudo pm2 restart altamed-sait
```

### 6. Проверка логов

```bash
sudo pm2 logs altamed-sait --lines 50
```

---

## 🛠 Дополнительные настройки

### Настройка файрвола

```bash
# Ubuntu/Debian (UFW)
sudo ufw allow 22/tcp    # SSH
sudo ufw allow 80/tcp    # HTTP
sudo ufw allow 443/tcp   # HTTPS
sudo ufw enable

# CentOS/RHEL (firewalld)
sudo firewall-cmd --permanent --add-service=ssh
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --reload
```

### Оптимизация производительности

#### 1. Увеличение лимитов Node.js

```bash
sudo nano /etc/systemd/system/pm2-altamed-sait.service
```

Добавьте:

```ini
[Service]
LimitNOFILE=65536
```

#### 2. Настройка Nginx для кэширования

Добавьте в конфиг Nginx:

```nginx
# Кэширование статических файлов
location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|webp)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
    proxy_pass http://localhost:3000;
}
```

---

## 🐛 Решение проблем

### Проблема: Приложение не запускается

```bash
# Проверка логов
sudo pm2 logs altamed-sait

# Проверка порта
sudo lsof -i :3000

# Перезапуск
sudo pm2 restart altamed-sait
```

### Проблема: 502 Bad Gateway

```bash
# Проверка, что Next.js запущен
sudo pm2 status

# Проверка конфигурации Nginx
sudo nginx -t

# Проверка логов Nginx
sudo tail -f /var/log/nginx/altamed-sait-error.log
```

### Проблема: Email не отправляется

1. Проверьте `.env.local` файл
2. Проверьте логи приложения: `sudo pm2 logs altamed-sait`
3. Убедитесь, что порт 25 не заблокирован файрволом
4. Проверьте настройки SMTP в MasterMail

### Проблема: Сайт не обновляется после изменений

```bash
# Очистка кэша Next.js
sudo rm -rf .next
sudo npm run build
sudo pm2 restart altamed-sait
```

---

## 📞 Поддержка

Если возникли проблемы:
1. Проверьте логи: `sudo pm2 logs altamed-sait`
2. Проверьте логи Nginx: `sudo tail -f /var/log/nginx/altamed-sait-error.log`
3. Убедитесь, что все переменные окружения настроены правильно
4. Проверьте, что порты открыты в файрволе

---

## 📝 Чеклист установки

- [ ] Сервер подготовлен и обновлен
- [ ] Node.js 18+ установлен
- [ ] Проект склонирован из GitHub
- [ ] Зависимости установлены (`npm install`)
- [ ] Файл `.env.local` создан и заполнен
- [ ] Проект собран (`npm run build`)
- [ ] Nginx установлен и настроен
- [ ] DNS записи настроены
- [ ] SSL сертификат получен (Let's Encrypt)
- [ ] PM2 установлен и настроен
- [ ] Приложение запущено через PM2
- [ ] Автозапуск PM2 настроен (`pm2 startup`)
- [ ] Сайт открывается по домену
- [ ] HTTPS работает
- [ ] Формы отправки работают
- [ ] Email отправляется корректно

---

**Готово! 🎉 Ваш сайт установлен и работает на домене!**

