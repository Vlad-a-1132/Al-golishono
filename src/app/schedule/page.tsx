"use client"

import React from "react";
import AppointmentForm from "@/components/AppointmentForm";

interface Schedule {
  start: string;
  end: string;
}

interface DoctorSchedule {
  Monday?: Schedule;
  Tuesday?: Schedule;
  Wednesday?: Schedule;
  Thursday?: Schedule;
  Friday?: Schedule;
  Saturday?: Schedule;
  Sunday?: Schedule;
}

interface DoctorScheduleRowProps {
  name: string;
  specialty: string;
  schedule: DoctorSchedule;
}

function DoctorCardMobile({ name, specialty, schedule }: DoctorScheduleRowProps) {
  const days = [
    { key: 'Monday', label: 'Пн', data: schedule.Monday },
    { key: 'Tuesday', label: 'Вт', data: schedule.Tuesday },
    { key: 'Wednesday', label: 'Ср', data: schedule.Wednesday },
    { key: 'Thursday', label: 'Чт', data: schedule.Thursday },
    { key: 'Friday', label: 'Пт', data: schedule.Friday },
    { key: 'Saturday', label: 'Сб', data: schedule.Saturday },
    { key: 'Sunday', label: 'Вс', data: schedule.Sunday }
  ];

  const hasSchedule = days.some(day => day.data);

  return (
    <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100">
      <div className="mb-3">
        <h3 className="font-bold text-gray-900 text-sm">{name}</h3>
        <p className="text-gray-600 text-xs mt-1">{specialty}</p>
      </div>
      {hasSchedule && (
        <div className="grid grid-cols-2 gap-2">
          {days.map((day) => (
            day.data && (
              <div key={day.key} className="bg-amber-50 rounded-md px-3 py-2">
                <span className="font-semibold text-emerald-700 text-xs">{day.label}</span>
                <span className="block text-emerald-700 font-medium text-xs mt-0.5">
                  {day.data.start}–{day.data.end}
                </span>
              </div>
            )
          ))}
        </div>
      )}
      {!hasSchedule && (
        <p className="text-gray-400 text-xs">В данный момент расписание не доступно</p>
      )}
    </div>
  );
}

function DoctorScheduleRow({ name, specialty, schedule }: DoctorScheduleRowProps) {
  const TimeCell = ({ daySchedule }: { daySchedule?: Schedule }) => {
    if (!daySchedule) {
      return <td className="px-3 py-3 text-center text-gray-300 text-sm">-</td>;
    }
    return (
      <td className="px-3 py-3 text-center bg-amber-50 text-emerald-700 font-medium text-sm rounded-md">
        {daySchedule.start}–{daySchedule.end}
      </td>
    );
  };

  return (
    <tr className="border-b border-gray-100 hover:bg-emerald-50/30 transition-colors">
      <td className="px-4 py-3 text-left font-medium text-gray-900 text-sm">{name}</td>
      <td className="px-4 py-3 text-left text-gray-600 text-sm">{specialty}</td>
      <TimeCell daySchedule={schedule.Monday} />
      <TimeCell daySchedule={schedule.Tuesday} />
      <TimeCell daySchedule={schedule.Wednesday} />
      <TimeCell daySchedule={schedule.Thursday} />
      <TimeCell daySchedule={schedule.Friday} />
      <TimeCell daySchedule={schedule.Saturday} />
      <TimeCell daySchedule={schedule.Sunday} />
    </tr>
  );
}

export default function SchedulePage() {
  // Новое единое расписание с новыми врачами
  const doctors = [
    {
      name: "Школа Наталья Александровна",
      specialty: "Эндокринолог",
      schedule: { 
        Tuesday: { start: "14:00", end: "20:00" }, 
        Friday: { start: "14:00", end: "20:00" } 
      }
    },
    {
      name: "Дзарахов Хамзат Баширович",
      specialty: "Стоматолог-терапевт",
      schedule: {
        Monday: { start: "10:00", end: "18:00" },
        Tuesday: { start: "10:00", end: "18:00" },
        Thursday: { start: "10:00", end: "18:00" },
        Saturday: { start: "10:00", end: "18:00" },
        Sunday: { start: "10:00", end: "18:00" }
      }
    },
    {
      name: "Чернова Алла Валерьевна",
      specialty: "Стоматолог-терапевт",
      schedule: { 
        Wednesday: { start: "10:00", end: "17:00" } 
      }
    },
    {
      name: "Емельянова Анна Игоревна",
      specialty: "Дерматолог",
      schedule: { 
        Wednesday: { start: "10:00", end: "14:00" }, 
        Sunday: { start: "15:00", end: "19:00" } 
      }
    },
    {
      name: "Горшкова Вера Гордеевна",
      specialty: "УЗИ",
      schedule: { 
        Wednesday: { start: "11:00", end: "13:30" }, 
        Saturday: { start: "12:00", end: "16:30" } 
      }
    },
    {
      name: "Абрамов Юно Эриильевич",
      specialty: "Стоматолог хирург, Хирург-имплантолог",
      schedule: { 
        Monday: { start: "15:00", end: "20:00" },
        Wednesday: { start: "15:00", end: "20:00" },
        Saturday: { start: "11:00", end: "18:00" },
        Sunday: { start: "15:00", end: "20:00" } 
      }
    },
    {
      name: "Крошкин Александр Дмитриевич",
      specialty: "Стоматолог ортопед",
      schedule: { 
        Tuesday: { start: "10:00", end: "19:00" },
        Wednesday: { start: "10:00", end: "14:00" },
        Thursday: { start: "10:00", end: "14:00" }, 
        Sunday: { start: "10:00", end: "14:00" } 
      }
    },
    {
      name: "Пантелеев Дмитрий Львович",
      specialty: "Уролог",
      schedule: { 
        Friday: { start: "15:00", end: "20:00" } 
      }
    },
    {
      name: "Бакунчева Олеся Александровна",
      specialty: "Хирург",
      schedule: { 
        Tuesday: { start: "14:00", end: "20:00" }, 
        Friday: { start: "14:00", end: "20:00" }, 
        Sunday: { start: "09:00", end: "14:00" } 
      }
    },
    {
      name: "Симанков Владимир Иванович",
      specialty: "Хирург",
      schedule: { 
        Monday: { start: "15:00", end: "20:00" }, 
        Wednesday: { start: "15:00", end: "20:00" } 
      }
    },
    {
      name: "Беляков Виктор Алексеевич",
      specialty: "Пульмонолог",
      schedule: { 
        Sunday: { start: "10:00", end: "17:00" } 
      }
    },
    {
      name: "Юрков Павел Сергеевич",
      specialty: "УЗИ",
      schedule: { 
        Wednesday: { start: "16:00", end: "20:00" }, 
        Thursday: { start: "16:00", end: "20:00" } 
      }
    },
    {
      name: "Ковалёв Василий Васильевич",
      specialty: "Терапевт",
      schedule: { 
        Monday: { start: "09:00", end: "16:00" }, 
        Tuesday: { start: "09:00", end: "16:00" }, 
        Wednesday: { start: "09:00", end: "16:00" }, 
        Thursday: { start: "09:00", end: "17:00" }, 
        Friday: { start: "09:00", end: "16:00" } 
      }
    },
    {
      name: "Даукшис Сергей Миронович",
      specialty: "Гастроэнтеролог",
      schedule: { 
        Wednesday: { start: "16:00", end: "20:00" }, 
        Saturday: { start: "15:00", end: "20:00" } 
      }
    },
    {
      name: "Глуцкая Наталья Юрьевна",
      specialty: "Гастроэнтеролог, Гастроэнтеролог детский",
      schedule: { 
        Tuesday: { start: "16:00", end: "19:00" }, 
        Friday: { start: "16:00", end: "19:00" } 
      }
    },
    {
      name: "Мареева Полина Александровна",
      specialty: "Педиатр",
      schedule: { 
        Tuesday: { start: "10:00", end: "15:00" }, 
        Wednesday: { start: "10:00", end: "15:00" }, 
        Thursday: { start: "10:00", end: "15:00" } 
      }
    },
    {
      name: "Ананкина Ирина Ивановна",
      specialty: "Офтальмолог",
      schedule: { 
        Saturday: { start: "09:00", end: "15:00" } 
      }
    },
    {
      name: "Белоусова Виктория Геннадиевна",
      specialty: "Акушер-гинеколог, Кандидат медицинских наук",
      schedule: { 
        Wednesday: { start: "09:00", end: "15:00" }, 
        Thursday: { start: "09:00", end: "15:00" }, 
        Friday: { start: "15:00", end: "20:00" }, 
        Sunday: { start: "09:00", end: "20:00" } 
      }
    },
    {
      name: "Вербицкий Игорь Георгиевич",
      specialty: "Кардиолог",
      schedule: { 
        Tuesday: { start: "08:15", end: "19:00" }, 
        Thursday: { start: "08:15", end: "19:00" }, 
        Saturday: { start: "09:00", end: "17:00" } 
      }
    },
    {
      name: "Добринская Людмила Викторовна",
      specialty: "Терапевт",
      schedule: { 
        Monday: { start: "16:00", end: "20:00" }, 
        Tuesday: { start: "16:00", end: "20:00" }, 
        Wednesday: { start: "16:00", end: "20:00" }, 
        Friday: { start: "16:00", end: "20:00" }, 
        Saturday: { start: "09:00", end: "15:00" } 
      }
    },
    {
      name: "Иванченко Светлана Викторовна",
      specialty: "Эндокринолог, Эндокринолог детский",
      schedule: { 
        Monday: { start: "12:00", end: "20:00" }, 
        Thursday: { start: "09:20", end: "16:00" } 
      }
    },
    {
      name: "Курылев Валерий Николаевич",
      specialty: "Невролог",
      schedule: { 
        Tuesday: { start: "15:00", end: "20:00" } 
      }
    },
    {
      name: "Ледуховская Евгения Владимировна",
      specialty: "Отоларинголог",
      schedule: { 
        Tuesday: { start: "09:00", end: "19:00" }, 
        Thursday: { start: "09:00", end: "19:00" }, 
        Friday: { start: "09:00", end: "19:00" }, 
        Sunday: { start: "09:00", end: "18:00" } 
      }
    },
    {
      name: "Моцпан Виктор Никитович",
      specialty: "УЗИ",
      schedule: { 
        Monday: { start: "08:00", end: "13:00" }, 
        Tuesday: { start: "08:00", end: "13:00" } 
      }
    },
    {
      name: "Притула Александр Васильевич",
      specialty: "Невролог",
      schedule: { 
        Sunday: { start: "08:00", end: "18:00" } 
      }
    },
    {
      name: "Симанкова Елена Викторовна",
      specialty: "Офтальмолог",
      schedule: { 
        Tuesday: { start: "12:00", end: "18:00" }, 
        Friday: { start: "09:30", end: "15:00" }, 
        Sunday: { start: "09:30", end: "15:00" } 
      }
    },
    {
      name: "Смирнова Марина Ивановна",
      specialty: "Отоларинголог",
      schedule: { 
        Monday: { start: "09:00", end: "19:30" }, 
        Wednesday: { start: "09:00", end: "19:30" }, 
        Saturday: { start: "09:00", end: "19:30" } 
      }
    },
    {
      name: "Соболев Дмитрий Васильевич",
      specialty: "Акушер-гинеколог, Главный врач",
      schedule: { 
        Monday: { start: "09:00", end: "15:30" }, 
        Tuesday: { start: "09:00", end: "16:00" }, 
        Thursday: { start: "14:00", end: "17:00" }, 
        Friday: { start: "09:00", end: "15:00" } 
      }
    }
  ];

  return (
    <div>
      {/* Header Block */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            {/* Left Side - Title and Description */}
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                Расписание врачей
              </h1>
              <div className="w-16 h-1 bg-orange-500 mb-4"></div>
              <p className="text-white text-base md:text-lg leading-relaxed max-w-2xl">
                В медицинской клинике «Альтамед Голицыно» принимают высококвалифицированные специалисты с богатой врачебной практикой за плечами. На данной странице сайта вы можете изучить график приема врачей, подобрать наиболее подходящее для себя время и записаться на прием.
              </p>
            </div>
            {/* Right Side - Button */}
            <div className="flex-shrink-0">
              <a href="/appointments" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-xl text-base md:text-lg transition-all shadow-lg hover:shadow-xl">
                Записаться на прием
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Расписание врачей */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            {/* Мобильная версия - карточки врачей */}
            <div className="block md:hidden space-y-3">
              {doctors.map((doctor, index) => (
                <DoctorCardMobile key={index} {...doctor} />
              ))}
            </div>

            {/* Десктоп версия - таблица */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full min-w-[900px]">
                <thead>
                  <tr className="bg-gradient-to-r from-emerald-50 to-teal-50 border-b-2 border-emerald-200">
                    <th className="px-5 py-4 text-left font-bold text-gray-900 text-sm">Врач</th>
                    <th className="px-5 py-4 text-left font-bold text-gray-900 text-sm">Специальность</th>
                    <th className="px-4 py-4 text-center font-bold text-gray-900 text-sm w-28">Пн</th>
                    <th className="px-4 py-4 text-center font-bold text-gray-900 text-sm w-28">Вт</th>
                    <th className="px-4 py-4 text-center font-bold text-gray-900 text-sm w-28">Ср</th>
                    <th className="px-4 py-4 text-center font-bold text-gray-900 text-sm w-28">Чт</th>
                    <th className="px-4 py-4 text-center font-bold text-gray-900 text-sm w-28">Пт</th>
                    <th className="px-4 py-4 text-center font-bold text-gray-900 text-sm w-28">Сб</th>
                    <th className="px-4 py-4 text-center font-bold text-gray-900 text-sm w-28">Вс</th>
                  </tr>
                </thead>
                <tbody>
                  {doctors.map((doctor, index) => (
                    <DoctorScheduleRow key={index} {...doctor} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Information Blocks */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* First Block */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Результативность приема гарантируется!
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Вы можете уже сейчас осуществить запись на прием к врачу в Голицыно, а также на УЗИ и сдачу экспресс анализов. Мы принимаем не только взрослых, но и детей. В клинике работают опытные и грамотные педиатры.
              </p>
              <p>
                Большинство наших врачей имеют высшую категорию и являются кандидатами медицинских наук, поэтому вы можете с уверенностью доверить нам свое здоровье, а мы гарантируем скорейшее выздоровление!
              </p>
            </div>
          </div>

          {/* Second Block */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Запись к врачу в Голицыно: как выбрать специалиста и записаться к нему на прием
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Если вы не можете определиться, медицинская помощь какого именно специалиста вам требуется, свяжитесь с консультантами клиники по указанному пользуясь формой обратной связи. Компетентный сотрудник «Альтамед Голицыно» вас выслушает, вникнет в проблему и запишет к нужному врачу онлайн.
              </p>
              
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">
                Какие специалисты ведут прием в клинике «Альтамед Голицыно»
              </h3>
              
              <p className="mb-4">
                У нас вы можете получить профессиональную консультацию ведущих специалистов, а именно:
              </p>
              
              <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                <li>терапевта и остеопата;</li>
                <li>гинеколога и маммолога;</li>
                <li>кардиолога;</li>
                <li>хирурга;</li>
                <li>отоларинголога;</li>
                <li>эндокринолога;</li>
                <li>гастроэнтеролога;</li>
                <li>косметолога-массажиста, дерматокосметолога,</li>
                <li>психиатра-психотерапевта;</li>
                <li>офтальмолога и др.</li>
              </ul>
              
              <p>
                Кроме консультации, специалистами будет проведены необходимые диагностические мероприятия и назначено грамотное, эффективное лечение.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <AppointmentForm />
    </div>
  );
}
