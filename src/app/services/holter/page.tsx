"use client";

import Link from "next/link";
import Image from "next/image";
import AppointmentForm from "@/components/AppointmentForm";

export default function HolterPage() {
  const indications = [
    { column: 1, text: "перебои в работе сердца;" },
    { column: 1, text: "обмороки, головокружения;" },
    { column: 2, text: "подозрение на аритмии;" },
    { column: 2, text: "подозрение на ишемическую болезнь сердца;" },
    { column: 3, text: "контроль эффективности антиаритмической терапии;" },
    { column: 3, text: "оценка работы кардиостимулятора." },
  ];
  const col1 = indications.filter((i) => i.column === 1);
  const col2 = indications.filter((i) => i.column === 2);
  const col3 = indications.filter((i) => i.column === 3);

  return (
    <div className="flex flex-col bg-white">
      <section className="pt-4 md:pt-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
            <Link href="/" className="hover:text-emerald-600">Главная</Link>
            <span>/</span>
            <Link href="/diagnostics" className="hover:text-emerald-600">Диагностика</Link>
            <span>/</span>
            <span className="text-gray-900">Холтерское мониторирование ЭКГ</span>
          </nav>
          <h1 className="text-2xl md:text-4xl font-bold text-black">
            Холтерское мониторирование электрокардиограммы в Голицино — исследование в медицинском центре Альтамед Голицино
          </h1>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-1/2">
              <div className="relative w-full aspect-square max-w-md mx-auto rounded-full overflow-hidden">
                <Image
                  src="/images/services/Screenshot_1832.png"
                  alt="Холтер в Альтамед Голицино"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 text-gray-700 space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-black">Холтеровское мониторирование ЭКГ в Голицино</h2>
              <p>
                Холтеровское мониторирование ЭКГ — непрерывная запись электрокардиограммы в течение 24 часов (или дольше) в условиях обычной активности пациента. Позволяет выявить нарушения ритма и проводимости, эпизоды ишемии миокарда, которые не фиксируются при разовой ЭКГ.
              </p>
              <p>
                На тело пациента устанавливается портативный регистратор, данные затем анализирует врач. В медицинском центре Альтамед Голицино исследование проводится на современном оборудовании. Холтеровское мониторирование позволяет зафиксировать нарушения ритма и проводимости, эпизоды ишемии миокарда, которые не видны на разовой ЭКГ в покое — они возникают при нагрузке, стрессе или во сне.
              </p>
              <p>
                Запись на установку Холтера — через форму на сайте или по телефону. Исследование назначается кардиологом или терапевтом при жалобах на перебои в работе сердца, обмороки, головокружения, для оценки эффективности антиаритмической терапии и работы кардиостимулятора.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Что такое Холтеровское мониторирование и зачем оно нужно</h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            Холтеровское мониторирование ЭКГ (названо по имени изобретателя Нормана Холтера) — метод непрерывной записи электрокардиограммы в течение 24 часов (иногда 48–72 часов) в условиях обычной активности пациента. Регистратор размером с небольшой телефон крепится на пояс или ремень; электроды накладываются на грудь и соединяются с регистратором проводами. Прибор записывает ЭКГ непрерывно; пациент ведёт обычный образ жизни — ходит на работу, спит, ест, выполняет нагрузки.
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            Разовая ЭКГ в покое фиксирует состояние сердца лишь в момент записи — несколько десятков секунд. Многие аритмии и эпизоды ишемии возникают эпизодически: при нагрузке, стрессе, во сне. Холтер позволяет «поймать» эти эпизоды и связать их с жалобами пациента (если он ведёт дневник активности и отмечает время появления симптомов). В медицинском центре Альтамед Голицино расшифровку и заключение выполняет врач функциональной диагностики.
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            Исследование неинвазивно, не несёт лучевой нагрузки и безопасно для пациентов любого возраста. Единственное неудобство — необходимость носить регистратор и электроды сутки, не мочить аппарат и вести дневник. Результаты выдаются в течение 1–2 рабочих дней после снятия аппарата.
          </p>
        </div>
      </section>

      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Когда стоит пройти Холтер в Голицино</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ul className="space-y-2">
              {col1.map((item, idx) => (
                <li key={idx} className="flex items-start text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {col2.map((item, idx) => (
                <li key={idx} className="flex items-start text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {col3.map((item, idx) => (
                <li key={idx} className="flex items-start text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4">Как проходит Холтер в Альтамед Голицино</h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            В день установки врач или медсестра накладывает электроды на грудь в определённых точках и фиксирует портативный регистратор на пояс или ремень. Электроды соединяются с регистратором проводами. Пациент получает инструкции по ношению аппарата и ведению дневника. Через 24 часа (или указанный срок — 48–72 часа) нужно вернуться в клинику для снятия аппарата. В течение суток ведите обычный образ жизни, при этом ведите дневник активности и жалоб — это поможет врачу при расшифровке. Результаты выдаются в течение 1–2 рабочих дней.
          </p>
        </div>
      </section>

      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4">Что анализирует врач при расшифровке Холтера в Голицино</h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            Врач функциональной диагностики медицинского центра Альтамед Голицино при расшифровке суточной записи ЭКГ оценивает:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-base md:text-lg mb-4">
            <li>ритм и частоту сердечных сокращений в течение суток (в покое, при нагрузке, во сне);</li>
            <li>наличие аритмий (экстрасистолы, фибрилляция предсердий, пароксизмальная тахикардия и др.);</li>
            <li>эпизоды ишемии миокарда (изменения сегмента ST при нагрузке или в покое);</li>
            <li>связь жалоб пациента с изменениями на ЭКГ (если велся дневник);</li>
            <li>работу кардиостимулятора (если установлен);</li>
            <li>эффективность антиаритмической терапии (если пациент принимает препараты).</li>
          </ul>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            На основе этих данных формулируется заключение и даются рекомендации по дальнейшему обследованию или лечению. Холтер в Альтамед Голицино — информативный метод диагностики скрытых нарушений ритма и ишемии сердца.
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4">Рекомендации во время ношения Холтера в Голицино</h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            Во время суточного мониторирования ЭКГ в медицинском центре Альтамед Голицино пациенту рекомендуется вести обычный образ жизни — ходить на работу, выполнять привычные нагрузки, спать. Нельзя мочить регистратор и электроды: душ и ванна исключаются на период исследования. Одежда должна быть удобной, не натирать провода и электроды. Желательно вести дневник: записывать время сна, пробуждения, приёма пищи, нагрузок (ходьба, подъём по лестнице), стрессовых ситуаций и время появления жалоб (боли в сердце, перебои, головокружение и т.д.).
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            Если электрод отклеился или регистратор издает звуковой сигнал, необходимо связаться с клиникой. После снятия аппарата результаты обрабатываются врачом; заключение и рекомендации выдаются в течение 1–2 рабочих дней. В Альтамед Голицино Холтеровское мониторирование выполняется на современном оборудовании опытными специалистами.
          </p>
        </div>
      </section>

      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Преимущества Холтера в Альтамед Голицино</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Суточная запись</h3>
              <p className="text-gray-700">Фиксация ЭКГ в условиях обычной активности и сна</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Выявление скрытых нарушений</h3>
              <p className="text-gray-700">Аритмии и эпизоды ишемии, не видимые на разовой ЭКГ</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Опытные специалисты</h3>
              <p className="text-gray-700">Расшифровка и заключение врача функциональной диагностики</p>
            </div>
          </div>
        </div>
      </section>

      <AppointmentForm />
    </div>
  );
}
