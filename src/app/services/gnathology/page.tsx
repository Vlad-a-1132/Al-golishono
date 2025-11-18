import Link from "next/link";
import AppointmentForm from "@/components/AppointmentForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Гнатолог в Одинцово | Гнатология в клинике «Альтамед-С»",
  description:
    "Гнатология в клинике «Альтамед-С» в Одинцово: диагностика и лечение дисфункций ВНЧС, подбор окклюзионных шин, TENS-терапия, коррекция прикуса у взрослых и детей.",
  keywords: [
    "гнатология Одинцово",
    "гнатолог Одинцово",
    "лечение ВНЧС Одинцово",
    "окклюзионная шина Одинцово",
    "TENS терапия ВНЧС",
    "альтамед-с гнатология"
  ],
  alternates: {
    canonical: "https://altamed-c.ru/services/gnathology"
  },
  openGraph: {
    title: "Гнатолог в Одинцово — клиника «Альтамед-С»",
    description:
      "Комплексная гнатологическая помощь: диагностика ВНЧС, лечение болевых синдромов, коррекция прикуса и индивидуальные окклюзионные шины.",
    url: "https://altamed-c.ru/services/gnathology",
    type: "article",
    images: [
      {
        url: "https://altamed-c.ru/images/yslugi/gnatologia.webp",
        width: 1200,
        height: 630,
        alt: "Гнатологическое лечение в клинике Альтамед-С в Одинцово"
      }
    ]
  }
};

export default function GnathologyPage() {
  const consultationReasons = [
    "Болезненность при жевании или разговоре, особенно в области ВНЧС",
    "Хронические или периодические боли с одной стороны лица или челюсти",
    "Щелчки, хруст, ограничения при открытии или смыкании рта",
    "Нарушение окклюзии, ощущение смещения зубов или прикуса",
    "Скрежет зубами во сне, напряжение жевательных мышц",
    "Асимметрия лица, припухлость мягких тканей, визуальный дискомфорт",
    "Головные боли, отдающие в шею и плечи, шум в ушах, храп, дыхание ртом"
  ];

  const appointmentSteps = [
    {
      title: "Первичный осмотр",
      description:
        "Гнатолог оценивает симметрию, амплитуду движений и смыкание челюстей, анализирует жалобы и сопутствующие симптомы."
    },
    {
      title: "Инструментальная диагностика",
      description:
        "По показаниям назначается КТ или МРТ, проводится кондилография для детального анализа движений ВНЧС."
    },
    {
      title: "Функциональные тесты",
      description:
        "При необходимости выполняется TENS-диагностика, позволяющая расслабить мышцы и восстановить естественный прикус."
    },
    {
      title: "План лечения",
      description:
        "Врач формирует индивидуальную программу терапии с учётом выявленных причин дисфункции."
    }
  ];

  const therapyDirections = [
    {
      title: "Снятие боли и щелчков",
      description:
        "Применяются техники для устранения дискомфорта, воспаления и застойных явлений в суставе."
    },
    {
      title: "Нормализация мышечного тонуса",
      description:
        "Используются TENS-терапия, миогимнастика, мануальные техники для стабилизации работы мышц."
    },
    {
      title: "Коррекция прикуса",
      description:
        "По показаниям назначаются окклюзионные шины, элайнеры, брекет-системы и реставрации."
    }
  ];

  const faqItems = [
    {
      question: "Что лечит гнатолог и чем отличается от стоматолога?",
      answer:
        "Гнатолог занимается диагностикой и лечением дисфункций височно-нижнечелюстного сустава, нарушений прикуса, болевых синдромов и мышечного напряжения. Он работает в тесной связке со стоматологом, но акцент делает на функции сустава и мышц."
    },
    {
      question: "Сколько длится курс гнатологического лечения в «Альтамед-С»?",
      answer:
        "Длительность зависит от первичных симптомов и выбранных методов. В среднем курс занимает от нескольких недель до нескольких месяцев и включает ношение шин, упражнения, аппаратные процедуры."
    },
    {
      question: "Можно ли комбинировать гнатологию с ортодонтическим лечением?",
      answer:
        "Да. Консультация гнатолога необходима перед ортодонтией, протезированием и имплантацией. Врач оценивает работу ВНЧС, чтобы лечение прошло без осложнений и закрепило устойчивый результат."
    }
  ];

  return (
    <div className="flex flex-col min-h-full bg-white">
      <section className="py-4">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link
                  href="/"
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-emerald-600"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  Главная
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <Link
                    href="/services"
                    className="ml-1 text-sm font-medium text-gray-700 hover:text-emerald-600 md:ml-2"
                  >
                    Услуги
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">
                    Гнатология
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "Клиника «Альтамед-С» — гнатолог в Одинцово",
              url: "https://altamed-c.ru/services/gnathology",
              image: "https://altamed-c.ru/images/yslugi/gnatologia.webp",
              medicalSpecialty: "Dentistry",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Одинцово",
                addressRegion: "Московская область",
                streetAddress: "ул. Советская, 9"
              },
              description:
                "Гнатология в Одинцово: диагностика и лечение ВНЧС, TENS-терапия, индивидуальные окклюзионные шины и коррекция прикуса в клинике «Альтамед-С».",
              telephone: "+7 (495) 640-09-03"
            })
          }}
        />
      </section>

      <main className="py-3">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <header className="mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight px-4 md:px-0">
              Гнатология в клинике «<span className="italic">Альтамед-С</span>» в Одинцово
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Комплексная диагностика и лечение дисфункций височно-нижнечелюстного сустава
            </p>
          </header>

          <div className="mb-8">
            <div className="block md:hidden w-full h-[300px] flex flex-col rounded-[20px] overflow-hidden shadow-md mx-auto">
              <div className="h-[220px] bg-[#4A5568] relative overflow-hidden">
                <img
                  src="/images/yslugi/gnatologia.webp"
                  alt="Гнатология в Одинцово"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-white p-4 flex flex-col justify-between items-start gap-3">
                <div className="text-black font-medium text-sm">Гнатологическая помощь</div>
                <Link 
                  href="https://online.altamed-c.ru/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#4A5568] text-white rounded-full flex items-center justify-center w-full h-[46px] text-sm hover:bg-[#3d4454] transition-colors"
                >
                  Записаться
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="hidden md:block h-[445px] bg-[#4A5568] relative overflow-hidden rounded-[20px] shadow-lg">
              <img
                src="/images/yslugi/gnatologia.webp"
                alt="Гнатолог в Одинцово"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-black">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Гнатолог в Одинцово</h2>
                <p className="text-lg md:text-xl mb-6 max-w-xl">
                  Современный подход к диагностике и лечению дисфункций ВНЧС в медицинском центре
                  «Альтамед-С»
                </p>
                <Link 
                  href="https://online.altamed-c.ru/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#4A5568] text-white rounded-full px-8 py-3 font-medium hover:bg-[#3d4454] transition-colors"
                >
                  Записаться к гнатологу
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Гнатология в деталях: как это работает и кому помогает
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>Гнатология</strong> — современное направление стоматологии, изучающее
                работу височно-нижнечелюстного сустава (ВНЧС), жевательной мускулатуры и нервно-сосудистых
                структур. Специалисты клиники «Альтамед-С» в Одинцово проводят комплексную диагностику
                и помогают пациентам с нарушениями жевательной функции, болевыми синдромами и
                эстетическими изменениями лица.
              </p>
              <p>
                Гнатологическая помощь особенно важна перед протезированием, ортодонтическим лечением,
                имплантацией. Корректная оценка состояния ВНЧС позволяет избежать осложнений,
                восстановить симметрию улыбки и комфорт при ежедневной нагрузке на челюсть.
              </p>
            </div>
            <div className="bg-gray-50 rounded-[20px] p-6 shadow-md border-l-4 border-[#4A5568]">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Врач-гнатолог в Одинцово — кто это?</h3>
              <p className="text-gray-700">
                Гнатолог объединяет знания стоматологии, оториноларингологии, неврологии,
                кинезиологии. Он оценивает взаимосвязь зубочелюстной системы с осанкой, работой
                суставов, органами слуха. Специалист выявляет причины боли, ограничений движений,
                характерных звуков при смыкании и подбирает индивидуальное лечение.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Когда нужна консультация гнатолога</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {consultationReasons.map((reason, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-[20px] shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#4A5568] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700 text-sm md:text-base">{reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Как проходит приём у гнатолога</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {appointmentSteps.map((step, index) => (
              <div key={index} className="bg-gray-50 rounded-[20px] p-6 shadow-md border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#4A5568] text-white flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                  <h3 className="ml-4 text-lg font-semibold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-emerald-50 border border-emerald-100 rounded-[20px] p-6 text-gray-700 leading-relaxed">
            Результат консультации — чёткое понимание причин дискомфорта, прогноз восстановления и
            персонализированный план лечения, который учитывает привычки пациента, состояние зубных
            рядов и сопутствующие заболевания.
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Лечение ВНЧС в «Альтамед-С»: основные направления
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {therapyDirections.map((direction, index) => (
              <div key={index} className="bg-white rounded-[20px] p-6 shadow-md border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{direction.title}</h3>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  {direction.description}
                </p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mt-6">
            Комплексная программа может включать ношение индивидуальной окклюзионной шины, TENS-терапию,
            миогимнастику, инъекции нейропротеинов. Коррекция прикуса проводится при помощи элайнеров
            или брекет-систем, а при выраженных дегенеративных изменениях назначается медикаментозная
            поддержка. В сложных случаях гнатолог совместно с хирургом рассматривает возможность
            оперативного лечения.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Частые вопросы о гнатологии</h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <details key={index} className="group bg-white rounded-[20px] shadow-md border border-gray-100">
                <summary className="cursor-pointer px-6 py-4 flex items-center justify-between text-left">
                  <span className="text-lg font-semibold text-gray-900 group-open:text-emerald-700 transition-colors duration-300">
                    {item.question}
                  </span>
                  <svg
                    className="w-5 h-5 text-[#4A5568] group-open:rotate-180 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-4 text-gray-700 leading-relaxed">{item.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <div className="bg-gradient-to-r from-[#4A5568] to-[#5A6474] rounded-[20px] p-8 md:p-12 text-white flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Гнатология в Одинцово от «Альтамед-С»</h2>
              <p className="text-white/90 text-sm md:text-base leading-relaxed">
                Наши гнатологи работают в тесном сотрудничестве с ортодонтами, хирургами, терапевтами и
                стоматологами клиники. Мы используем современные методы диагностики и лечения, чтобы
                восстановить гармонию улыбки, снять боль и вернуть комфорт каждому пациенту.
              </p>
            </div>
            <Link
              href="https://online.altamed-c.ru/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#4A5568] rounded-full px-8 py-3 font-medium hover:bg-gray-100 transition-colors text-center"
            >
              Записаться на консультацию
            </Link>
          </div>
        </div>
      </section>

      <AppointmentForm />
    </div>
  );
}

