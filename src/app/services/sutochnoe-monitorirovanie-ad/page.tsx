"use client";

import Link from "next/link";
import Image from "next/image";
import AppointmentForm from "@/components/AppointmentForm";

export default function SutochnoeMonitorirovanieAdPage() {
  const indications = [
    { column: 1, text: "подозрение на артериальную гипертонию;" },
    { column: 1, text: "«гипертония белого халата»;" },
    { column: 2, text: "оценка эффективности лечения гипертонии;" },
    { column: 2, text: "ночная гипертония;" },
    { column: 3, text: "головокружения, обмороки неясной причины;" },
    { column: 3, text: "обследование при беременности (при необходимости)." },
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
            <span className="text-gray-900">Суточное мониторирование АД</span>
          </nav>
          <h1 className="text-2xl md:text-4xl font-bold text-black">
            Суточное мониторирование артериального давления в Голицыно — исследование в медицинском центре Альтамед Голицыно
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
                  alt="СМАД в Альтамед Голицыно"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 text-gray-700 space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-black">СМАД в Голицыно</h2>
              <p>
                Суточное мониторирование артериального давления (СМАД) — метод непрерывной регистрации АД в течение 24 часов в условиях обычной активности пациента. Прибор автоматически измеряет давление через заданные интервалы. Исследование позволяет оценить суточный ритм АД, выявить скрытую гипертонию, оценить эффективность гипотензивной терапии и подобрать оптимальное лечение.
              </p>
              <p>
                В медицинском центре Альтамед Голицыно СМАД проводится на современном оборудовании. Прибор автоматически измеряет давление через заданные интервалы (днём чаще, ночью реже), что позволяет оценить суточный ритм АД, выявить скрытую гипертонию и «гипертонию белого халата», подобрать оптимальное лечение.
              </p>
              <p>
                Запись на установку монитора — через форму на сайте или по телефону клиники. Исследование назначается терапевтом или кардиологом при подозрении на артериальную гипертонию, для оценки эффективности гипотензивной терапии и при головокружениях неясной причины.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Что такое СМАД и зачем он нужен</h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            Суточное мониторирование артериального давления (СМАД) — метод непрерывной регистрации АД в течение 24 часов в условиях обычной активности пациента. На плечо пациента надевается манжета (как у обычного тонометра), соединённая с портативным регистратором, который крепится на пояс или ремень. Прибор автоматически накачивает манжету и измеряет давление через заданные интервалы: днём чаще (каждые 15–30 минут), ночью реже (каждые 30–60 минут). Пациент ведёт обычный образ жизни — ходит на работу, спит, ест.
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            Разовое измерение давления в кабинете врача не всегда отражает истинную картину: у многих пациентов в больнице давление повышается из-за волнения («гипертония белого халата»), а дома — в норме. У других, наоборот, давление в кабинете нормальное, а дома или ночью — повышенное. СМАД позволяет оценить АД в условиях обычной активности и сна, выявить скрытую гипертонию, «гипертонию белого халата», ночную гипертонию, оценить эффективность гипотензивных препаратов и подобрать оптимальное время приёма лекарств.
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            В медицинском центре Альтамед Голицыно расшифровку и заключение выполняет врач функциональной диагностики. Результаты выдаются в течение 1–2 рабочих дней после снятия аппарата. Исследование неинвазивно и безопасно для пациентов любого возраста.
          </p>
        </div>
      </section>

      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Когда стоит пройти СМАД в Голицыно</h2>
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
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4">Как проходит СМАД в Альтамед Голицыно</h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            В день установки врач или медсестра надевает на плечо пациента манжету (на нерабочую руку) и соединяет её с портативным регистратором, который крепится на пояс или ремень. Пациент получает инструкции по ношению аппарата. В течение 24 часов прибор автоматически накачивает манжету и измеряет давление через заданные интервалы (днём чаще, ночью реже). В момент измерения желательно остановиться и держать руку расслабленной. На следующий день нужно вернуться в клинику для снятия аппарата. Результаты с заключением врача выдаются в течение 1–2 рабочих дней.
          </p>
        </div>
      </section>

      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4">Что анализирует врач при расшифровке СМАД в Голицыно</h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            Врач функциональной диагностики медицинского центра Альтамед Голицыно при расшифровке суточной записи АД оценивает:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-base md:text-lg mb-4">
            <li>средние значения систолического и диастолического АД за сутки, день и ночь;</li>
            <li>суточный ритм АД (снижение давления ночью — в норме; отсутствие снижения или повышение ночью — фактор риска);</li>
            <li>вариабельность АД (колебания в течение суток);</li>
            <li>индекс времени гипертонии (процент измерений с повышенным АД);</li>
            <li>наличие «гипертонии белого халата» или скрытой гипертонии;</li>
            <li>эффективность гипотензивной терапии (если пациент принимает препараты).</li>
          </ul>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            На основе этих данных формулируется заключение и даются рекомендации по дальнейшему обследованию или коррекции лечения. СМАД в Альтамед Голицыно — информативный метод диагностики артериальной гипертонии и подбора терапии.
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4">Рекомендации во время ношения СМАД в Голицыно</h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            Во время суточного мониторирования АД в медицинском центре Альтамед Голицыно пациенту рекомендуется вести обычный образ жизни. Манжету нельзя снимать и мочить: душ и ванна исключаются на период исследования. В момент накачивания манжеты желательно остановиться, опустить руку с манжетой вдоль тела и не двигать ею до окончания измерения. Регистратор не мочить; при необходимости можно отстегнуть его на время душа, не снимая манжету с руки (уточните у врача).
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            Желательно вести дневник: записывать время сна, пробуждения, приёма лекарств (если принимаете гипотензивные), стрессовых ситуаций и время появления жалоб (головная боль, головокружение и т.д.). Это поможет врачу при расшифровке. После снятия аппарата результаты обрабатываются врачом; заключение и рекомендации выдаются в течение 1–2 рабочих дней. В Альтамед Голицыно СМАД выполняется на современном оборудовании опытными специалистами.
          </p>
        </div>
      </section>

      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Преимущества СМАД в Альтамед Голицыно</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Объективная картина</h3>
              <p className="text-gray-700">Оценка АД в условиях обычной активности и сна</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Подбор терапии</h3>
              <p className="text-gray-700">Контроль эффективности гипотензивных препаратов</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Выявление скрытой гипертонии</h3>
              <p className="text-gray-700">В том числе «гипертонии белого халата» и ночной гипертонии</p>
            </div>
          </div>
        </div>
      </section>

      <AppointmentForm />
    </div>
  );
}
