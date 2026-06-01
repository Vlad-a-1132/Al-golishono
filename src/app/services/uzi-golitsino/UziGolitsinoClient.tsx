"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AppointmentForm from "@/components/AppointmentForm";
import { formatPriceRub } from "@/lib/format-price-rub";
import type { PagePriceService } from "@/lib/page-price-service";
import {
  BOOKING_SIDEBAR_IMAGE,
  CLINIC_ADDRESS,
  CLINIC_PHONE,
  CLINIC_PHONE_TEL,
  HERO_IMAGE,
  REG_URL,
} from "./uzi-price-config";

type Props = {
  services: PagePriceService[];
  priceFrom: number | null;
};

const anchorLinks = [
  { href: "#symptoms", label: "Что смотрим" },
  { href: "#reasons", label: "Когда нужно" },
  { href: "#prices", label: "Цены" },
  { href: "#prep", label: "Подготовка" },
  { href: "#faq", label: "FAQ" },
  { href: "#address", label: "Адрес" },
];

const whyItems = [
  "Врачи УЗ-диагностики с опытом",
  "Широкий спектр исследований (сосуды, сердце, органы, беременность)",
  "Современное оборудование и выдача результатов после исследования",
  "Удобная запись и приём в Голицыно",
];

const symptoms = [
  "УЗИ органов брюшной полости, печени, желчного пузыря",
  "УЗИ почек, мочевого пузыря, мочевыводящих путей",
  "УЗИ щитовидной железы, молочных желез, лимфоузлов",
  "УЗИ малого таза (трансабдоминально/трансвагинально/трансректально)",
  "Эхокардиография (УЗИ сердца), допплерография и дуплексное сканирование",
  "УЗИ при беременности и допплерометрия",
];

const helpsWith = [
  "профилактические обследования и динамическое наблюдение",
  "оценка сосудов шеи и конечностей (УЗДГ/дуплекс)",
  "диагностика заболеваний внутренних органов",
  "контроль беременности и развития плода (скрининги, допплер)",
  "поиск кист, гематом, воспалений мягких тканей",
];

const prep = [
  "Брюшная полость: голод 6–8 часов, за 2–3 дня ограничить продукты, вызывающие газообразование.",
  "Малый таз (трансабдоминально): наполненный мочевой пузырь (выпить 1–1.5 л воды за ~1 час).",
  "Щитовидная железа, молочные железы, суставы: обычно без подготовки.",
];

const faqItems = [
  {
    q: "Как подготовиться к УЗИ?",
    a: "Подготовка зависит от исследования. Для брюшной полости обычно требуется голод 6–8 часов. Для УЗИ малого таза трансабдоминально нужен наполненный мочевой пузырь. Для щитовидной железы, молочных желез и суставов подготовка обычно не требуется — уточним при записи.",
  },
  {
    q: "Сколько длится УЗИ?",
    a: "В среднем 15–30 минут (комплексные исследования могут занимать больше). Заключение выдаётся после исследования.",
  },
  {
    q: "Безопасно ли УЗИ при беременности?",
    a: "Да, ультразвуковое исследование является безопасным методом диагностики. В клинике выполняются УЗИ-скрининги и допплерометрия по показаниям.",
  },
];

function Breadcrumbs() {
  return (
    <nav className="flex text-sm text-gray-500" aria-label="Breadcrumb">
      <Link href="/" className="hover:text-emerald-700">
        Главная
      </Link>
      <span className="mx-2">/</span>
      <Link href="/services" className="hover:text-emerald-700">
        Услуги
      </Link>
      <span className="mx-2">/</span>
      <span className="text-gray-800">УЗИ</span>
    </nav>
  );
}

function BookingSidebar() {
  return (
    <aside className="rounded-2xl border border-gray-200 bg-white px-5 py-6 shadow-sm lg:sticky lg:top-24">
      <div className="mb-5 flex justify-center">
        <Image
          src={BOOKING_SIDEBAR_IMAGE}
          alt=""
          width={160}
          height={160}
          className="h-auto w-[160px] object-contain"
        />
      </div>
      <p className="mb-5 text-center text-sm leading-relaxed text-gray-700">
        Заполните форму{" "}
        <strong className="font-semibold text-gray-900">
          «Записаться в клинику»
        </strong>{" "}
        чтобы выбрать время и уточнить стоимость исследования.
      </p>
      <div className="mb-5 space-y-1 text-center text-sm">
        <Link
          href={REG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block font-medium text-emerald-700 hover:underline"
        >
          Записаться онлайн
        </Link>
        <a
          href={CLINIC_PHONE_TEL}
          className="block text-gray-900 hover:text-emerald-700"
        >
          {CLINIC_PHONE}
        </a>
      </div>
      <Link
        href={REG_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full rounded-xl bg-emerald-600 py-3.5 text-center text-sm font-semibold text-white hover:bg-emerald-700"
      >
        Записаться в клинику
      </Link>
    </aside>
  );
}

export default function UziGolitsinoClient({ services, priceFrom }: Props) {
  const [expanded, setExpanded] = useState<number | null>(null);
  const priceFromText =
    priceFrom != null ? formatPriceRub(priceFrom) : "уточняйте при записи";

  return (
    <div className="flex min-h-full flex-col bg-white">
      <div className="mx-auto w-full px-4 py-4" style={{ maxWidth: "83rem" }}>
        <Breadcrumbs />
      </div>

      <section className="border-b border-gray-100 bg-gradient-to-b from-emerald-50/40 to-white pb-10 pt-2">
        <div
          className="mx-auto grid gap-8 px-4 lg:grid-cols-2 lg:items-center"
          style={{ maxWidth: "83rem" }}
        >
          <div>
            <h1 className="text-2xl font-bold leading-tight text-gray-900 md:text-4xl">
              УЗИ в Голицыно — ультразвуковая диагностика и запись в «Альтамед
              Голицыно»
            </h1>
            <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
              УЗИ сосудов и сердца, органов брюшной полости и малого таза, УЗИ
              при беременности, исследования желез и мягких тканей — по
              прейскуранту клиники.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={REG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-medium text-white hover:bg-emerald-700"
              >
                Записаться
              </Link>
              <a
                href={CLINIC_PHONE_TEL}
                className="rounded-full border-2 border-emerald-600 px-6 py-3 text-sm font-medium text-emerald-700 hover:bg-emerald-50"
              >
                Позвонить
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Консультация врача УЗД —{" "}
              <span className="font-semibold text-gray-900">
                {priceFrom != null ? `от ${priceFromText}` : priceFromText}
              </span>
            </p>
          </div>
          <div className="relative h-[260px] overflow-hidden rounded-2xl shadow-lg md:h-[360px]">
            <Image
              src={HERO_IMAGE}
              alt="УЗИ в Голицыно"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      <nav className="sticky top-0 z-20 border-b border-gray-200 bg-white/95 backdrop-blur">
        <div
          className="mx-auto flex flex-wrap gap-x-4 gap-y-2 px-4 py-3 text-sm font-medium"
          style={{ maxWidth: "83rem" }}
        >
          {anchorLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-emerald-700 hover:text-emerald-900 hover:underline"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <section className="py-12">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="mb-10 text-center text-2xl font-bold text-gray-900 md:text-3xl">
            Почему «Альтамед Голицыно»?
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyItems.map((text, i) => (
              <div key={text} className="text-center">
                <div className="relative mx-auto mb-4 h-16 w-16">
                  <img
                    src="/images/yslugi/star 1.webp"
                    alt=""
                    className="h-full w-full object-contain"
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white">
                    {i + 1}
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-700 md:text-base">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="symptoms" className="scroll-mt-24 bg-gray-50 py-12">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="mb-8 text-2xl font-bold text-gray-900 md:text-3xl">
            Что можно сделать на УЗИ
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {symptoms.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-gray-200 bg-white px-5 py-4 text-center text-sm text-gray-800 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reasons" className="scroll-mt-24 py-12">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="mb-8 text-2xl font-bold text-gray-900 md:text-3xl">
            Когда нужно УЗИ
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {helpsWith.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 text-center text-sm text-gray-800"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="prep" className="scroll-mt-24 bg-gray-50 py-12">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="mb-8 text-2xl font-bold text-gray-900 md:text-3xl">
            Подготовка к УЗИ
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {prep.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-gray-200 bg-white px-5 py-6 text-sm text-gray-800 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="scroll-mt-24 py-12">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="mb-8 text-2xl font-bold text-gray-900 md:text-3xl">
            Услуги и цены
          </h2>

          <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-gray-900">
                Полный прайс
              </h3>
              <div className="max-h-[70vh] overflow-y-auto overflow-hidden rounded-xl border border-gray-200">
                <div className="sticky top-0 grid grid-cols-[1fr_auto] bg-slate-100 px-4 py-3 text-sm font-semibold text-gray-800">
                  <span>Услуга</span>
                  <span>Цена</span>
                </div>
                {services.map((service, index) => (
                  <div
                    key={`row-${service.code}-${index}`}
                    className={`grid grid-cols-[1fr_auto] gap-4 border-t border-gray-100 px-4 py-3 text-sm ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50/80"
                    }`}
                  >
                    <div>
                      <span className="mb-0.5 block font-mono text-xs text-gray-500">
                        {service.code}
                      </span>
                      <span className="text-gray-800">{service.name}</span>
                    </div>
                    <span className="whitespace-nowrap font-semibold text-gray-900">
                      {formatPriceRub(service.price)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <BookingSidebar />
          </div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-24 border-t border-gray-100 py-12">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="mb-8 text-2xl font-bold text-gray-900 md:text-3xl">
            Часто задаваемые вопросы
          </h2>
          <div className="space-y-2">
            {faqItems.map((item, index) => (
              <div
                key={item.q}
                className="rounded-xl border border-gray-200 bg-white"
              >
                <button
                  type="button"
                  onClick={() => setExpanded(expanded === index ? null : index)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left"
                >
                  <h3 className="pr-4 text-base font-semibold text-gray-900">
                    {item.q}
                  </h3>
                  <span
                    className={`text-2xl text-emerald-600 transition-transform ${
                      expanded === index ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {expanded === index && (
                  <p className="border-t border-gray-100 px-5 pb-4 text-gray-600">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="address" className="scroll-mt-24 bg-gray-50 py-12">
        <div className="mx-auto px-4" style={{ maxWidth: "83rem" }}>
          <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">
            Адрес клиники
          </h2>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="font-medium text-gray-900">
              Медицинский центр «Альтамед Голицыно»
            </p>
            <p className="mt-2 text-gray-600">{CLINIC_ADDRESS}</p>
            <p className="mt-4">
              <a
                href={CLINIC_PHONE_TEL}
                className="font-medium text-emerald-700 hover:underline"
              >
                {CLINIC_PHONE}
              </a>
            </p>
            <Link
              href="/contacts"
              className="mt-4 inline-block text-sm font-medium text-emerald-700 hover:underline"
            >
              Все контакты и карта →
            </Link>
          </div>
        </div>
      </section>

      <AppointmentForm />
    </div>
  );
}

