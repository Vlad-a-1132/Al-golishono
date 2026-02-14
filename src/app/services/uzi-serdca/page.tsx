"use client";

import Link from "next/link";
import Image from "next/image";
import AppointmentForm from "@/components/AppointmentForm";

export default function UziSerdcaPage() {
  const indications = [
    { column: 1, text: "боли в области сердца, одышка;" },
    { column: 1, text: "перебои в работе сердца;" },
    { column: 2, text: "повышенное артериальное давление;" },
    { column: 2, text: "подозрение на пороки сердца, ишемическую болезнь;" },
    { column: 3, text: "контроль после инфаркта, операций на сердце;" },
    { column: 3, text: "профилактическое обследование при факторах риска." },
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
            <span className="text-gray-900">УЗИ сердца</span>
          </nav>
          <h1 className="text-2xl md:text-4xl font-bold text-black">
            УЗИ сердца (эхокардиография) в Голицыно — исследование в медицинском центре Альтамед Голицыно
          </h1>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-1/2">
              <div className="relative w-full aspect-square max-w-md mx-auto rounded-full overflow-hidden">
                <Image
                  src="/images/yslugi/Hardware diagnostics.webp"
                  alt="УЗИ сердца в Альтамед Голицыно"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 text-gray-700 space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-black">Эхокардиография в Голицыно</h2>
              <p>
                УЗИ сердца (эхокардиография) — ультразвуковое исследование сердца, позволяющее оценить его структуру, размеры камер, состояние клапанов, сократительную способность миокарда и кровоток. В медицинском центре Альтамед Голицыно исследование проводится на современном оборудовании экспертного класса.
              </p>
              <p>
                Эхокардиография безопасна, неинвазивна и не несёт лучевой нагрузки. Результаты выдаются в день исследования. Врачи медицинского центра Альтамед Голицыно проводят исследование на современных ультразвуковых сканерах с режимом допплерографии, что позволяет оценить не только анатомию сердца, но и кровоток через клапаны и крупные сосуды.
              </p>
              <p>
                Записаться на УЗИ сердца можно через форму на сайте или по телефону клиники. Исследование выполняется по направлению врача или по желанию пациента для профилактического обследования при наличии факторов риска сердечно-сосудистых заболеваний.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Что такое эхокардиография и как она работает</h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            Эхокардиография (УЗИ сердца) — метод ультразвуковой диагностики, основанный на отражении ультразвуковых волн от структур сердца. Датчик генерирует волны высокой частоты, они проходят через ткани и отражаются от границ между различными средами (кровь, мышца, клапаны). Отражённый сигнал обрабатывается компьютером и выводится на экран в виде изображения в реальном времени.
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            В медицинском центре Альтамед Голицыно используется режим допплерографии — он позволяет оценить направление и скорость кровотока. Это необходимо для диагностики пороков сердца, оценки степени регургитации (обратного заброса крови через клапаны), выявления сужений и аневризм. Эхокардиография не имеет лучевой нагрузки и может проводиться многократно, в том числе у детей и беременных.
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            Исследование выполняется в положении лёжа на левом боку или на спине. Врач наносит гель на область грудины и левую половину грудной клетки и прикладывает датчик. Пациент не испытывает боли; при необходимости врач может попросить задержать дыхание или сменить положение для лучшей визуализации. Длительность процедуры — обычно 15–30 минут. Результаты с описанием и основными показателями выдаются в день обращения.
          </p>
        </div>
      </section>

      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Когда стоит обратиться на УЗИ сердца в Голицыно</h2>
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
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4">Как проходит УЗИ сердца в Альтамед Голицыно</h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            Исследование выполняется в положении лёжа на левом боку или на спине. Врач наносит гель на область грудины и левую половину грудной клетки и прикладывает датчик. Пациент не испытывает боли; при необходимости врач может попросить задержать дыхание или сменить положение. Процедура занимает 15–30 минут. Специальная подготовка не требуется. Результаты с описанием и основными показателями выдаются в день обращения.
          </p>
        </div>
      </section>

      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4">Что оценивает врач при УЗИ сердца в Голицыно</h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            В ходе эхокардиографии в медицинском центре Альтамед Голицыно врач функциональной диагностики оценивает следующие параметры:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-base md:text-lg mb-4">
            <li>размеры камер сердца (предсердия, желудочки) и толщину стенок;</li>
            <li>состояние клапанов (митральный, аортальный, трикуспидальный, лёгочный) — наличие пороков, кальциноза, пролапса;</li>
            <li>сократительную способность миокарда (фракция выброса левого желудочка);</li>
            <li>наличие жидкости в полости перикарда, утолщение перикарда;</li>
            <li>кровоток через клапаны и крупные сосуды (допплерография);</li>
            <li>наличие тромбов, опухолей, аневризм.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            На основе этих данных формулируется заключение и при необходимости даются рекомендации по дальнейшему обследованию или лечению. УЗИ сердца в Альтамед Голицыно позволяет выявить ишемическую болезнь сердца, пороки, кардиомиопатии, последствия инфаркта и другие патологии.
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4">Подготовка и противопоказания к УЗИ сердца</h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            Специальная подготовка к эхокардиографии не требуется. Исследование можно проводить в любое время суток, натощак или после еды. Рекомендуется надеть удобную одежду, которую легко снять или расстегнуть до пояса. Перед исследованием желательно не курить и не употреблять кофеин за 2–3 часа — это может временно учащать пульс и влиять на некоторые показатели.
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            УЗИ сердца не имеет абсолютных противопоказаний. Метод безопасен для детей, беременных и пожилых людей. Ограничением может служить выраженная деформация грудной клетки или открытая рана в области наложения датчика — в таких случаях врач подберёт альтернативные доступы или методы диагностики. В Альтамед Голицыно эхокардиография выполняется опытными специалистами на современном оборудовании.
          </p>
        </div>
      </section>

      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Преимущества УЗИ сердца в Альтамед Голицыно</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Безопасность</h3>
              <p className="text-gray-700">Без лучевой нагрузки, можно повторять многократно</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Информативность</h3>
              <p className="text-gray-700">Оценка структуры и функции сердца в реальном времени</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Быстрый результат</h3>
              <p className="text-gray-700">Результаты с описанием в день исследования</p>
            </div>
          </div>
        </div>
      </section>

      <AppointmentForm />
    </div>
  );
}
