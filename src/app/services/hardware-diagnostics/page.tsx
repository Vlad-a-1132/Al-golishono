"use client";

import Link from 'next/link';
import AppointmentForm from '@/components/AppointmentForm';

export default function HardwareDiagnosticsPage() {
  return (
    <div className="flex flex-col min-h-full bg-white">
      {/* Breadcrumbs */}
      <section className="py-4">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-emerald-600">Главная</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-emerald-600">Услуги</Link>
            <span>/</span>
            <span className="text-gray-900">Аппаратная диагностика</span>
          </nav>
        </div>
      </section>

      {/* Hero Endoscopy block */}
      <section className="pb-6">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-[#6B8190] rounded-[20px] overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image */}
              <div className="relative min-h-[260px] md:min-h-[340px]">
                <img src="/images/services/Screenshot_1831.png" alt="Эндоскопия" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              {/* Content */}
              <div className="p-6 md:p-10 text-white flex flex-col justify-center">
                <h1 className="text-2xl md:text-4xl font-semibold mb-4">Эндоскопия</h1>
                <p className="text-sm md:text-base opacity-90 mb-6">
                  Благодаря современному видеооборудованию эндоскопия даёт возможность врачу провести тщательный визуальный осмотр слизистых оболочек внутренних органов пациента.
                </p>
                <div className="grid grid-cols-1 gap-3">
                  <button className="bg-[#5A7384] hover:bg-[#4c6372] transition-colors text-white rounded-full py-2 px-4 text-sm">Гастроскопия</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards grid: УЗИ / Рентген */}
      <section className="py-6">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* УЗИ */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md">
              <div className="relative h-[220px]">
                <img src="/images/services/Screenshot_1835.png" alt="УЗИ" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2">УЗИ</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Ультразвуковое исследование является одним из самых распространённых методов диагностики. Популярность УЗИ обусловлена безопасностью и информативностью метода.
                </p>
              </div>
            </div>

            
            {/* Рентген */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md">
              <div className="relative h-[220px]">
                <img src="/images/services/Screenshot_1830.png" alt="Рентген" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2">Рентген</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Рентгенография — метод диагностики, основанный на способности рентгеновских лучей проходить через ткани, выявляя изменения их структуры.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Функциональная диагностика (hero) */}
      <section className="py-6">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="bg-red-600 rounded-[20px] overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image */}
              <div className="relative min-h-[260px] md:min-h-[340px] order-2 md:order-1">
                <img src="/images/services/Screenshot_1832.png" alt="Функциональная диагностика" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              {/* Content */}
              <div className="p-6 md:p-10 text-white flex flex-col justify-center order-1 md:order-2">
                <h2 className="text-2xl md:text-4xl font-semibold mb-4">Функциональная диагностика</h2>
                <p className="text-sm md:text-base opacity-90 mb-6">
                  Методы функциональной диагностики направлены на определение функционального состояния жизненно важных органов и систем человека.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {['ЭКГ','ЭХО КГ','Холтер'].map((label) => (
                    <button key={label} className="bg-[#B24B4B] hover:bg-[#9e3f3f] transition-colors text-white rounded-full py-2 px-4 text-sm">
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Appointment Form */}
      <AppointmentForm />
    </div>
  );
}
