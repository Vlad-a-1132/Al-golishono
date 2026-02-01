"use client";

import Link from "next/link";
import Image from "next/image";
import AppointmentForm from "@/components/AppointmentForm";

export default function EkgPage() {
  const indications = [
    { column: 1, text: "боли в области сердца, одышка;" },
    { column: 1, text: "головокружения, обмороки;" },
    { column: 2, text: "перебои в работе сердца;" },
    { column: 2, text: "повышенное артериальное давление;" },
    { column: 3, text: "подготовка к операции, плановое обследование;" },
    { column: 3, text: "контроль эффективности лечения." },
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
            <span className="text-gray-900">ЭКГ</span>
          </nav>
          <h1 className="text-2xl md:text-4xl font-bold text-black">
            Снятие электрокардиограммы (ЭКГ) в Голицино — исследование в медицинском центре Альтамед Голицино
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
                  alt="ЭКГ в Альтамед Голицино"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 text-gray-700 space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-black">Электрокардиография в Голицино</h2>
              <p>
                Электрокардиография (ЭКГ) — метод регистрации электрической активности сердца. Исследование позволяет выявить нарушения ритма и проводимости, признаки ишемии, гипертрофию отделов сердца и другие изменения. В медицинском центре Альтамед Голицино ЭКГ выполняется на современном оборудовании.
              </p>
              <p>
                Процедура занимает несколько минут, безболезненна и не требует специальной подготовки. Результаты выдаются в день обращения. В медицинском центре Альтамед Голицино ЭКГ выполняется на современных электрокардиографах с цифровой регистрацией и возможностью расшифровки врачом функциональной диагностики.
              </p>
              <p>
                Записаться на ЭКГ можно через форму на сайте или по телефону клиники. Исследование проводится по направлению врача или самостоятельно при жалобах на сердце, перед операцией, при плановом обследовании и для контроля эффективности лечения.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Что такое электрокардиография и как она работает</h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            Электрокардиография (ЭКГ) — метод регистрации электрической активности сердца во времени. Сердце при каждом сокращении генерирует электрические импульсы; они распространяются по проводящей системе и миокарду. Электроды, наложенные на кожу груди, запястий и лодыжек, улавливают эти сигналы, а электрокардиограф усиливает их и записывает в виде кривой — электрокардиограммы.
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            На ЭКГ видны зубцы и интервалы, отражающие работу предсердий и желудочков, проведение импульса, ритм сердца. По изменениям кривой врач выявляет нарушения ритма (аритмии), блокады проводимости, признаки ишемии миокарда, гипертрофию отделов сердца, последствия инфаркта. ЭКГ — базовый метод кардиологической диагностики; без неё не обходится ни одно обследование сердца. В Альтамед Голицино ЭКГ выполняется быстро и с высокой точностью.
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            Исследование неинвазивно, не несёт лучевой нагрузки и может проводиться многократно. Оно безопасно для детей, беременных и пожилых людей. Единственное условие — пациент должен лежать спокойно несколько минут, чтобы запись не была искажена движением или мышечным напряжением.
          </p>
        </div>
      </section>

      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Когда стоит сделать ЭКГ в Голицино</h2>
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
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4">Как проходит ЭКГ в Альтамед Голицино</h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            Пациент лежит на кушетке на спине. Медсестра или врач накладывает электроды: на грудь — в определённых точках, на запястья и лодыжки — в виде зажимов или липких электродов. Кожа в местах наложения может быть слегка обезжирена для лучшего контакта. В течение одной-двух минут регистрируется электрическая активность сердца в покое. Пациент должен лежать спокойно, не двигаться и не разговаривать. Подготовка не требуется. Результат с расшифровкой выдаётся в день исследования.
          </p>
        </div>
      </section>

      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4">Что показывает электрокардиограмма в Голицино</h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            Врач функциональной диагностики медицинского центра Альтамед Голицино при расшифровке ЭКГ оценивает:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-base md:text-lg mb-4">
            <li>ритм и частоту сердечных сокращений (синусовый ритм, тахикардия, брадикардия, аритмии);</li>
            <li>проведение импульса (блокады ножек пучка Гиса, атриовентрикулярные блокады);</li>
            <li>признаки ишемии миокарда (изменения сегмента ST, зубца T);</li>
            <li>гипертрофию предсердий и желудочков;</li>
            <li>признаки перенесённого инфаркта миокарда (рубцовые изменения);</li>
            <li>дополнительные изменения (экстрасистолы, фибрилляция предсердий и др.).</li>
          </ul>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            На основе этих данных формулируется заключение. При выявлении значимых изменений врач рекомендует дообследование (УЗИ сердца, Холтер, консультация кардиолога) или лечение. ЭКГ в Альтамед Голицино — быстрый и информативный первый шаг в диагностике заболеваний сердца.
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4">Подготовка к ЭКГ в Голицино</h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            Специальная подготовка к электрокардиографии не требуется. Исследование можно проводить в любое время суток, натощак или после еды. Рекомендуется надеть удобную одежду, которую легко снять или расстегнуть до пояса для наложения грудных электродов. Перед исследованием желательно не курить и не употреблять кофеин за 2–3 часа — это может временно учащать пульс и влиять на ритм.
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            ЭКГ не имеет противопоказаний. Метод безопасен для детей, беременных и пожилых людей. В Альтамед Голицино ЭКГ выполняется опытными специалистами; результат с расшифровкой выдаётся в день обращения.
          </p>
        </div>
      </section>

      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Преимущества ЭКГ в Альтамед Голицино</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Быстро</h3>
              <p className="text-gray-700">Процедура занимает несколько минут, результат в день обращения</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Безболезненно</h3>
              <p className="text-gray-700">Неинвазивное исследование без дискомфорта</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Информативно</h3>
              <p className="text-gray-700">Выявление нарушений ритма, проводимости и ишемии</p>
            </div>
          </div>
        </div>
      </section>

      <AppointmentForm />
    </div>
  );
}
