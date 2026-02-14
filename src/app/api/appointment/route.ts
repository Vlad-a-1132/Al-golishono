import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

interface Appointment {
  id: string;
  name: string;
  phone: string;
  date: string;
  status: 'pending' | 'called' | 'not_called';
  message?: string;
}

const DATA_FILE = path.join(process.cwd(), 'data', 'appointments.json');

// Функция для отправки email
async function sendEmail(appointment: Appointment, formType: string = 'Запись на прием', email?: string) {
  try {
    // Настройка транспорта для отправки email через MasterMail Exchange 2010
    // SMTP: smtp.mastermail.ru порт 25
    const smtpHost = process.env.SMTP_HOST || 'smtp.mastermail.ru';
    const smtpPort = parseInt(process.env.SMTP_PORT || '25');
    
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: false, // Порт 25 обычно использует STARTTLS, не SSL
      auth: {
        user: process.env.SMTP_USER || 'reg@altamed-golitsino.ru',
        pass: process.env.SMTP_PASSWORD || '',
      },
      tls: {
        rejectUnauthorized: false,
      },
      // Для порта 25 может потребоваться STARTTLS
      requireTLS: true,
      connectionTimeout: 10000,
    });

    // Email получателя из переменной окружения или используем по умолчанию
    const emailTo = process.env.EMAIL_TO || 'reg@altamed-golitsino.ru';

    // Формируем текст письма
    const mailOptions = {
      from: `"Сайт Альтамед Голицыно" <${process.env.SMTP_USER || 'reg@altamed-golitsino.ru'}>`,
      to: emailTo,
      subject: `${formType} - новая заявка с сайта`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4A9B8E;">${formType}</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Имя:</strong> ${appointment.name}</p>
            <p><strong>Телефон:</strong> ${appointment.phone}</p>
            ${email ? `<p><strong>Email:</strong> ${email}</p>` : ''}
            ${appointment.message ? `<p><strong>Сообщение:</strong> ${appointment.message}</p>` : ''}
            <p><strong>Дата заявки:</strong> ${appointment.date}</p>
            <p><strong>ID заявки:</strong> ${appointment.id}</p>
          </div>
          <p style="color: #666; font-size: 12px;">Это автоматическое уведомление с сайта Альтамед Голицыно</p>
        </div>
      `,
      text: `
${formType}

Имя: ${appointment.name}
Телефон: ${appointment.phone}
${email ? `Email: ${email}` : ''}
${appointment.message ? `Сообщение: ${appointment.message}` : ''}
Дата заявки: ${appointment.date}
ID заявки: ${appointment.id}
      `,
    };

    // Отправляем email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email отправлен:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Ошибка отправки email:', error);
    // Не прерываем выполнение, если email не отправился
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

// Функция для чтения заявок из файла
async function readAppointments(): Promise<Appointment[]> {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    const appointments = JSON.parse(data);
    // Обрабатываем старые записи без status и message
    return appointments.map((app: any) => ({
      ...app,
      status: app.status || 'pending',
      message: app.message || ''
    }));
  } catch (error: any) {
    // Если файл не существует, создаем пустой массив
    if (error.code === 'ENOENT') {
      // Создаем директорию если её нет
      await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
      return [];
    }
    console.error('Ошибка чтения файла:', error);
    return [];
  }
}

// Функция для записи заявок в файл
async function writeAppointments(appointments: Appointment[]): Promise<void> {
  try {
    // Создаем директорию если её нет
    await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
    await fs.writeFile(DATA_FILE, JSON.stringify(appointments, null, 2), 'utf-8');
  } catch (error) {
    console.error('Ошибка записи файла:', error);
    throw error;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, message, notes, email } = body;

    if (!phone) {
      return NextResponse.json(
        { error: 'Телефон обязателен' },
        { status: 400 }
      );
    }

    // Читаем существующие заявки
    let appointments = await readAppointments();

    // Объединяем message и notes (если есть оба, берем message, иначе notes)
    const messageText = (message || notes || '').trim();
    
    // Определяем тип заявки по наличию полей
    let formType = 'Запись на прием';
    if (email) {
      // Если есть email, это форма обратной связи с контактов
      formType = 'Обратная связь (контакты)';
    } else if (!messageText) {
      // Если нет сообщения и нет email, это обратный звонок
      formType = 'Обратный звонок';
    }

    // Создаем новую заявку
    const appointment: Appointment = {
      id: Date.now().toString(),
      name: name.trim() || 'Не указано',
      phone: phone.trim(),
      date: new Date().toLocaleString('ru-RU'),
      status: 'pending',
      message: messageText || undefined,
    };

    // Добавляем новую заявку
    appointments.push(appointment);

    // Оставляем только последние 100 заявок
    if (appointments.length > 100) {
      appointments = appointments.slice(-100);
    }

    // Сохраняем в файл
    await writeAppointments(appointments);

    console.log('=== НОВАЯ ЗАЯВКА СОХРАНЕНА ===');
    console.log('ID:', appointment.id);
    console.log('Тип:', formType);
    console.log('Имя:', appointment.name);
    console.log('Телефон:', appointment.phone);
    if (email) console.log('Email:', email);
    if (appointment.message) console.log('Сообщение:', appointment.message);
    console.log('Всего заявок:', appointments.length);
    console.log('==============================');

    // Отправляем email с информацией о типе формы
    sendEmail(appointment, formType, email).catch(err => {
      console.error('Ошибка отправки email (не критично):', err);
    });

    return NextResponse.json(
      { message: 'Заявка сохранена', id: appointment.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Ошибка сохранения заявки:', error);
    return NextResponse.json(
      { error: 'Ошибка при сохранении заявки' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const appointments = await readAppointments();
    
    console.log('=== ЗАПРОС ЗАЯВОК ===');
    console.log('Всего заявок в файле:', appointments.length);
    console.log('========================');
    
    // Возвращаем все заявки (в обратном порядке - новые сначала)
    return NextResponse.json(
      { appointments: [...appointments].reverse() },
      { status: 200 }
    );
  } catch (error) {
    console.error('Ошибка получения заявок:', error);
    return NextResponse.json(
      { error: 'Ошибка при получении заявок' },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json(
        { error: 'ID и статус обязательны' },
        { status: 400 }
      );
    }

    if (!['pending', 'called', 'not_called'].includes(status)) {
      return NextResponse.json(
        { error: 'Неверный статус' },
        { status: 400 }
      );
    }

    // Читаем существующие заявки
    let appointments = await readAppointments();

    // Находим и обновляем заявку
    const appointmentIndex = appointments.findIndex(a => a.id === id);
    if (appointmentIndex === -1) {
      return NextResponse.json(
        { error: 'Заявка не найдена' },
        { status: 404 }
      );
    }

    appointments[appointmentIndex].status = status as 'pending' | 'called' | 'not_called';

    // Сохраняем в файл
    await writeAppointments(appointments);

    console.log('=== СТАТУС ОБНОВЛЕН ===');
    console.log('ID:', id);
    console.log('Новый статус:', status);
    console.log('========================');

    return NextResponse.json(
      { message: 'Статус обновлен', appointment: appointments[appointmentIndex] },
      { status: 200 }
    );
  } catch (error) {
    console.error('Ошибка обновления статуса:', error);
    return NextResponse.json(
      { error: 'Ошибка при обновлении статуса' },
      { status: 500 }
    );
  }
}

