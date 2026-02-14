"use client";

import Image from "next/image";
import Link from "next/link";
import AppointmentForm from "@/components/AppointmentForm";

const oncologyServices = [
  { code: "B01.027.001", name: "Прием (осмотр, консультация) врача-онколога", price: 2530 },
  { code: "B04.009.001", name: "Диспансерный прием (осмотр, консультация) врача-детского онколога", price: 1820 },
  { code: "B04.027.001", name: "Диспансерный прием (осмотр, консультация) врача-онколога", price: 1820 },
];

export default function OnkologGolitsinoPage() {
  return (
    <div className="flex flex-col min-h-full bg-white mx-auto">
      {/* Breadcrumb */}
      <section className="py-4">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <nav className="flex text-sm text-gray-600 ml-0 md:ml-4 lg:ml-8" aria-label="Хлебные крошки">
            <Link href="/" className="hover:text-emerald-500">Главная</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <Link href="/services" className="hover:text-emerald-500">Услуги</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-gray-800">Онколог Голицыно</span>
          </nav>
        </div>
      </section>

      {/* Main section with header and banner */}
      <main className="py-3">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <header className="mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight px-4 md:px-0">
              Онколог в Голицыно — приём в «Альтамед Голицыно»
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Приём врача-онколога и детского онколога, консультации и диспансерное наблюдение в Голицыно
            </p>
          </header>

          <div className="w-full mx-auto px-4 md:px-0" style={{ maxWidth: "83rem" }}>
            <div className="block md:hidden w-full h-[300px] flex flex-col rounded-[20px] overflow-hidden shadow-md mx-auto">
              <div className="h-[220px] bg-emerald-500 relative overflow-hidden">
                <div className="w-full h-full relative">
                  <Image
                    src="/images/yslugi/mammalogy.webp"
                    alt="Онколог Голицыно"
                    fill
                    className="object-cover"
                    unoptimized
                    priority
                  />
                </div>
              </div>
              <div className="bg-white p-4 flex flex-col justify-between items-start gap-3">
                <div className="text-black font-medium text-sm">Онколог в Голицыно</div>
                <Link
                  href="https://reg.altamed-golitsino.ru/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white rounded-full flex items-center justify-center w-full h-[46px] text-sm hover:bg-blue-600 transition-colors"
                >
                  Консультация
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="hidden md:block h-[445px] bg-emerald-500 relative overflow-hidden rounded-[20px] shadow-lg">
              <div className="w-full h-full relative">
                <Image
                  src="/images/yslugi/mammalogy.webp"
                  alt="Онколог Голицыно"
                  fill
                  className="object-cover"
                  unoptimized
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-black">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Онколог в Голицыно</h2>
                <p className="text-lg md:text-xl mb-6 max-w-md">Приём онколога и детского онколога, консультации и диспансерное наблюдение в Альтамед Голицыно</p>
                <Link
                  href="https://reg.altamed-golitsino.ru/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white rounded-full px-8 py-3 font-medium hover:bg-blue-600 transition-colors"
                >
                  Консультация
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* SEO-текст: Онкология в Голицыно */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Онкология в Голицыно</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Онколог в Голицыно — специалист по диагностике, лечению и наблюдению пациентов с онкологическими заболеваниями и подозрением на них. В медицинском центре «Альтамед Голицыно» ведут приём врачи-онкологи и детские онкологи: первичный приём (осмотр, консультация), диспансерный приём для контроля состояния и наблюдения после лечения.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Записаться к онкологу в Голицыно можно онлайн на сайте регистратуры или по телефону клиники. «Альтамед Голицыно» находится по адресу: Голицыно, Советская улица, 58. Онкологическая помощь взрослым и детям — жителям Голицыно и Одинцовского городского округа Московской области.
          </p>
          <p className="text-gray-600 leading-relaxed">
            К онкологу обращаются при подозрении на новообразования, для интерпретации результатов обследований, составления плана лечения и диспансерного наблюдения. Детский онколог в Голицыно принимает детей для консультаций и диспансерного наблюдения по направлению педиатра или других специалистов.
          </p>
        </div>
      </section>

      {/* Дополнительный SEO‑блок: когда обращаться к онкологу */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Когда нужно обратиться к онкологу в Голицыно
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Важно не откладывать консультацию врача-онколога, если вы заметили изменения в состоянии здоровья
                или получили результаты обследований, вызывающие тревогу. Раннее обращение к специалисту позволяет
                подтвердить или опровергнуть онкологический диагноз и подобрать безопасную тактику наблюдения.
              </p>
              <p className="text-gray-700 leading-relaxed">
                В «Альтамед Голицыно» онколог проводит первичную и повторную консультацию, помогает с выбором
                специализированного стационара, оценивает динамику лечения и контролирует состояние пациентов,
                прошедших хирургическое, лучевое или лекарственное лечение в других медицинских учреждениях.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Поводы записаться к онкологу
              </h3>
              <ul className="space-y-2 text-sm md:text-base text-gray-700 list-disc list-inside">
                <li>появление или рост уплотнений, узлов, новообразований на коже или в мягких тканях;</li>
                <li>необычные выделения, кровоточивость, изменение родинок и пигментных пятен;</li>
                <li>необъяснимая потеря веса, слабость, длительное повышение температуры;</li>
                <li>длительно сохраняющиеся боли, дискомфорт, нарушение функций органов;</li>
                <li>необходимость онкологического контроля после проведённого лечения.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEO‑блок: подготовка к приёму онколога */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Как подготовиться к консультации онколога
              </h2>
              <p className="text-gray-700 mb-3 leading-relaxed">
                Чтобы приём онколога в Голицыно был максимально информативным, заранее соберите медицинскую
                документацию: выписки из стационаров, результаты КТ, МРТ, УЗИ, гистологии и лабораторных анализов.
                Это поможет врачу быстрее оценить ситуацию и избежать повторных исследований.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Желательно составить список принимаемых препаратов, хронических заболеваний и аллергических реакций.
                Если вы уже проходите лечение у онколога в другом учреждении, возьмите с собой план терапии и
                заключения специалистов — это позволит получить второе мнение или скорректировать наблюдение.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Преимущества наблюдения у онколога в «Альтамед Голицыно»
              </h3>
              <ul className="space-y-2 text-sm md:text-base text-gray-700 list-disc list-inside">
                <li>удобное расположение для жителей Голицыно и близлежащих населённых пунктов;</li>
                <li>возможность регулярного диспансерного наблюдения у одного специалиста;</li>
                <li>комплексный подход с привлечением смежных специалистов клиники;</li>
                <li>помощь в подборе профильных онкологических центров для госпитализации и лечения;</li>
                <li>поддержка пациента и его семьи на всех этапах наблюдения.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Почему Альтамед Голицыно */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Почему «Альтамед Голицыно»?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Лечение в соответствии с мировыми клиническими рекомендациями",
              "Комплексная оценка заболевания и прогноза лечения",
              "Современное диагностическое оборудование и собственная лаборатория",
              "Высокий уровень сервиса и взвешенная ценовая политика",
            ].map((text, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 relative">
                  <img src="/images/yslugi/star 1.webp" alt="" className="w-full h-full object-contain" />
                  <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">{i + 1}</span>
                </div>
                <p className="text-gray-700 font-medium">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Услуги онколога */}
      <section className="py-16" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="services-heading" className="text-2xl md:text-3xl font-bold text-black mb-8 text-center">
            Услуги онколога в Голицыно
          </h2>
          <p className="text-amber-800 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-6 max-w-3xl mx-auto text-center text-sm">
            Стоимость указана в рублях и носит информационный характер; уточняйте цены при записи.
          </p>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-4">
              <h3 className="text-xl font-semibold text-white">Онколог</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {oncologyServices.map((service, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-gray-500 font-mono mb-1">{service.code}</div>
                      <h4 className="font-medium text-gray-900 text-sm leading-tight">{service.name}</h4>
                      <div className="text-emerald-600 font-semibold text-lg mt-2">{service.price.toLocaleString("ru-RU")} ₽</div>
                    </div>
                    <Link
                      href="https://reg.altamed-golitsino.ru/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-600 text-white px-4 py-2 rounded-md text-sm hover:bg-emerald-700 transition-colors flex-shrink-0 text-center whitespace-nowrap"
                    >
                      Записаться
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-8 text-xs md:text-sm text-gray-500 max-w-4xl mx-auto text-center">
            Стоимость медицинских услуг указана в рублях и не является публичной офертой. Актуальные цены уточняйте у администраторов клиники или по телефону регистратуры.
          </p>
        </div>
      </section>

      <AppointmentForm />
    </div>
  );
}
