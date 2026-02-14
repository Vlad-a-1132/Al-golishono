'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AppointmentForm from '@/components/AppointmentForm';

export default function ImplantationPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  // Полный список услуг имплантации
  const fullServicesData = [
    {
      subtitle: "Имплантация зубов",
      services: [
        { code: "", name: "Установка имплантата", price: 35000 },
        { code: "A16.07.054.000.02", name: "Внутрикостная дентальная имплантация (винтового) импланта системы Implantium Dentium/ без ст-ти матеиала/", price: 35020 },
        { code: "A16.07.054.000.04", name: "Внутрикостная дентальная имплантация временного импланта", price: 18110 },
        { code: "A16.07.054.000.12", name: "Установка формирователя десны Dentium", price: 6040 },
        { code: "", name: "Костная пластика от", price: 20000 },
        { code: "A16.07.041.000.20", name: "Операция направленной регенерации кости (НРК) (без стоимости остеоиндуктивного материала)1ед.", price: 36230 },
        { code: "", name: "Синус-лифтинг от", price: 30000 },
        { code: "A16.07.055.000.01", name: "Синус-лифтинг (костная пластика, остеопластика) открытый (без стоимости остеоиндуктивного материала)", price: 50720 },
        { code: "A16.07.055.000.02", name: "Синус-лифтинг (костная пластика, остеопластика) закрытый (без стоимости остеоиндуктивного материала)", price: 28980 },
        { code: "A16.07.055.000.03", name: "Операция имплантации барьерной мембраны (без стоимости мембраны)", price: 6040 },
        { code: "A16.07.055.000.04", name: "Забор аутотрансплантанта кости из внутриротовых участков", price: 14490 },
        { code: "A16.07.041.000.21", name: "Операция реконструкции костного гребня 2-х сторонними блоками (3D пластика)", price: 48060 },
        { code: "A16.07.041.000.22", name: "Расщепление альвеолярного гребня", price: 18110 },
        { code: "A16.07.040.000.20", name: "Забор соединительнотканного трансплантанта", price: 7250 },
        { code: "A16.07.040.000.21", name: "Пластика мягких тканей в области имплантанта", price: 9180 },
        { code: "A16.07.040.000.22", name: "Увеличение зоны прикрепленной кератинизированной десны", price: 15210 },
        { code: "A16.07.054.000.11", name: "Удаление неинтегрированного импланта", price: 3620 },
        { code: "A16.07.054.000.10", name: "Удаление интегрированного импланта", price: 8450 },
        { code: "A23.07.002.000.40", name: "Изготовление индивидуального шаблона", price: 9660 },
        { code: "A16.07.041.000.23", name: "Подготовка альвеолярного гребня к имплантации", price: 8450 },
        { code: "A16.07.041.000.24", name: "Пластика альвеолярного гребня 1ед.", price: 24150 }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-full bg-white mx-auto">
      <section className="py-4">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-emerald-600">Главная</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-emerald-600">Услуги</Link>
            <span>/</span>
            <Link href="/services/dentistry" className="hover:text-emerald-600">Стоматология</Link>
            <span>/</span>
            <span className="text-gray-900">Имплантация зубов</span>
          </nav>
        </div>
      </section>

      <main className="py-3">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <header className="mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight px-4 md:px-0">
              Имплантация зубов в Альтамед Голицыно — современные методы восстановления зубов в «<span className="italic">Альтамед Голицыно</span>»
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Профессиональная имплантация зубов в Альтамед Голицыно. Современные импланты, опытные специалисты, гарантия качества. Восстановление зубов с помощью дентальной имплантации.
            </p>
          </header>

          {/* Баннер с изображением */}
          <div className="mb-8">
            <div className="block md:hidden w-full h-[300px] flex flex-col rounded-[20px] overflow-hidden shadow-md mx-auto relative">
              <Image 
                src="/images/services/Dental implantation.webp"
                alt="Имплантация зубов"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-transparent"></div>
              <div className="relative z-10 bg-white p-4 flex flex-col justify-between items-start gap-3 mt-auto">
                <div className="text-black font-medium text-sm">Имплантация зубов в Альтамед Голицыно</div>
                <Link href="https://reg.altamed-golitsino.ru/" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white rounded-full flex items-center justify-center w-full h-[46px] text-sm hover:bg-blue-600 transition-colors">
                  Записаться на прием
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="hidden md:block h-[445px] relative overflow-hidden rounded-[20px] shadow-lg">
              <Image 
                src="/images/services/Dental implantation.webp"
                alt="Имплантация зубов"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-black z-10">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Имплантация зубов в Альтамед Голицыно</h2>
                <p className="text-lg md:text-xl mb-6 max-w-md">Современные методы восстановления зубов с помощью дентальной имплантации</p>
                <Link href="https://reg.altamed-golitsino.ru/" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white rounded-full px-8 py-3 font-medium hover:bg-blue-600 transition-colors">
                  Записаться на прием
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="py-12 bg-white">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-[20px] shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              Услуги имплантации зубов в Альтамед Голицыно
            </h2>
            
            <div className="bg-white rounded-[20px] shadow-lg p-6 md:p-8">
              <div className="space-y-8">
                {fullServicesData.map((subcat, subcatIndex) => (
                  <div key={subcatIndex} className="mb-6">
                    <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-emerald-500">
                      {subcat.subtitle}
                    </h4>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {subcat.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex justify-between items-start p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                          <div className="flex-1">
                            {service.code && (
                              <span className="text-xs text-gray-500 block mb-1">{service.code}</span>
                            )}
                            <span className="text-gray-800 text-sm md:text-base">{service.name}</span>
                          </div>
                          <span className="text-emerald-600 font-semibold ml-4 whitespace-nowrap">
                            {service.price.toLocaleString('ru-RU')} ₽
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <AppointmentForm />
    </div>
  );
}

