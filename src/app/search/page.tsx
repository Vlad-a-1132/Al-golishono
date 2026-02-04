"use client";

import { useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { doctors } from '../../data/static-data';

function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [results, setResults] = useState<{
    doctors: typeof doctors;
    services: Array<{ name: string; url: string; category: string }>;
    pages: Array<{ title: string; url: string; description: string; keywords?: string[] }>;
  }>({
    doctors: [],
    services: [],
    pages: []
  });

  // Список страниц для поиска (включая категории услуг с ключевыми словами)
  const sitePages = [
    { title: 'Врачи', url: '/doctors', description: 'Наши специалисты', keywords: ['врач', 'специалист', 'доктор'] },
    { title: 'Услуги', url: '/services', description: 'Медицинские услуги', keywords: ['услуга', 'медицинский'] },
    { title: 'Диагностика', url: '/diagnostics', description: 'Диагностические услуги', keywords: ['диагностика', 'обследование'] },
    { title: 'Анализы', url: '/services/lab-tests', description: 'Лабораторные анализы', keywords: ['анализ', 'лаборатория', 'лабораторный'] },
    { title: 'Реабилитация', url: '/rehabilitation', description: 'Реабилитационные услуги', keywords: ['реабилитация', 'восстановление'] },
    { title: 'Акции', url: '/promo', description: 'Акции и специальные предложения', keywords: ['акция', 'скидка', 'промо'] },
    { title: 'Расписание', url: '/schedule', description: 'Расписание работы врачей', keywords: ['расписание', 'запись', 'время'] },
    { title: 'О нас', url: '/about', description: 'О клинике Альтамед Голицино', keywords: ['о нас', 'клиника', 'информация'] },
    { title: 'Контакты', url: '/contacts', description: 'Контактная информация', keywords: ['контакт', 'адрес', 'телефон'] },
    
    // Стоматология
    { title: 'Стоматология', url: '/services/dentistry', description: 'Стоматологические услуги', keywords: ['стоматология', 'стоматолог', 'зуб', 'зубы', 'зубной'] },
    { title: 'Терапевтическая стоматология', url: '/services/dentistry/therapeutic', description: 'Лечение кариеса, пульпита, периодонтита', keywords: ['терапевтическая стоматология', 'терапевт стоматолог', 'лечение кариеса', 'пульпит', 'периодонтит'] },
    { title: 'Хирургическая стоматология', url: '/services/dentistry/surgery', description: 'Удаление зубов, имплантация', keywords: ['хирургическая стоматология', 'стоматолог хирург', 'удаление зуба', 'имплантация зубов'] },
    { title: 'Ортопедическая стоматология', url: '/services/dentistry/prosthodontics', description: 'Протезирование зубов', keywords: ['ортопедическая стоматология', 'стоматолог ортопед', 'протезирование', 'протез', 'коронка'] },
    { title: 'Ортодонтия', url: '/services/dentistry/orthodontics', description: 'Исправление прикуса', keywords: ['ортодонтия', 'ортодонт', 'прикус', 'брекеты', 'исправление прикуса'] },
    { title: 'Детская стоматология', url: '/services/dentistry/pediatric-dentistry', description: 'Стоматология для детей', keywords: ['детская стоматология', 'стоматолог детский', 'детский стоматолог', 'стоматология для детей'] },
    { title: 'Пародонтология', url: '/services/dentistry/periodontics', description: 'Лечение заболеваний пародонта', keywords: ['пародонтология', 'пародонт', 'десна', 'заболевание десен'] },
    
    // Основные категории услуг
    { title: 'Кардиология', url: '/services/cardiology', description: 'Диагностика и лечение заболеваний сердца и сосудов', keywords: ['кардиология', 'кардиолог', 'сердце', 'сосуд', 'сердечно-сосудистый'] },
    { title: 'Невролог Голицино', url: '/services/nevrolog-golitsino', description: 'Невролог в Голицино: приём, школы для больных, реабилитация после инсульта, блокады, ФормТотикс. Альтамед Голицино.', keywords: ['неврология', 'невролог', 'невролог Голицино', 'головная боль', 'мигрень', 'Альтамед Голицино'] },
    { title: 'Гинеколог Голицино', url: '/services/ginekolog-golitsino', description: 'Гинеколог в Голицино: приём врача-акушера-гинеколога, кольпоскопия, гинекологические манипуляции, радиоволновая хирургия. Клиника Альтамед Голицино.', keywords: ['гинекология', 'гинеколог', 'гинеколог Голицино', 'Альтамед Голицино', 'женское здоровье'] },
    { title: 'Уролог Голицино', url: '/services/urolog-golitsino', description: 'Уролог в Голицино: приём врача-уролога и детского уролога-андролога, УЗИ, манипуляции, физиотерапия. Альтамед Голицино.', keywords: ['уролог Голицино', 'урология Голицино', 'уролог', 'андролог', 'Альтамед Голицино'] },
    { title: 'Терапевт Голицино', url: '/services/terapevt-golitsino', description: 'Приём врача-терапевта в Голицино, консультации, оформление справок (070/у, 072/у, 095/у)', keywords: ['терапия', 'терапевт', 'терапевт Голицино', 'Альтамед Голицино'] },
    { title: 'Дерматолог Голицино', url: '/services/dermatolog-golitsino', description: 'Дерматолог в Голицино: приём, дерматоскопия, удаление новообразований кожи', keywords: ['дерматология', 'дерматолог', 'дерматолог Голицино', 'Альтамед Голицино'] },
    { title: 'Гастроэнтеролог Голицино', url: '/services/gastroenterolog-golitsino', description: 'Приём гастроэнтеролога в Голицино, детский гастроэнтеролог, диспансерный приём', keywords: ['гастроэнтерология', 'гастроэнтеролог', 'гастроэнтеролог Голицино', 'Альтамед Голицино', 'ЖКТ'] },
    { title: 'Эндокринология', url: '/services/endocrinology', description: 'Лечение заболеваний эндокринной системы', keywords: ['эндокринология', 'эндокринолог', 'гормон', 'щитовидная железа'] },
    { title: 'Офтальмолог Голицино', url: '/services/oftalmolog-golitsino', description: 'Офтальмолог в Голицино: приём, проверка зрения, подбор очков и контактных линз', keywords: ['офтальмология', 'офтальмолог', 'офтальмолог Голицино', 'Альтамед Голицино'] },
    { title: 'ЛОР Голицино', url: '/services/otorinolaringolog-golitsino', description: 'ЛОР (оториноларинголог) в Голицино: приём, промывание пазух, процедуры при заболеваниях уха, горла и носа', keywords: ['отоларингология', 'отоларинголог', 'ЛОР', 'ЛОР Голицино', 'Альтамед Голицино'] },
    { title: 'Сурдология', url: '/services/surdology', description: 'Диагностика и лечение нарушений слуха', keywords: ['сурдология', 'сурдолог', 'слух', 'нарушение слуха'] },
    { title: 'Педиатр Голицино', url: '/services/pediatr-golitsino', description: 'Приём педиатра в Голицино, справки в сад, школу, бассейн, спортивную секцию', keywords: ['педиатрия', 'педиатр', 'педиатр Голицино', 'Альтамед Голицино', 'детский врач'] },
    { title: 'Маммология', url: '/services/mammology', description: 'Диагностика и лечение заболеваний молочных желез', keywords: ['маммология', 'маммолог', 'молочная железа', 'грудь'] },
    { title: 'Онколог Голицино', url: '/services/onkolog-golitsino', description: 'Онколог в Голицино: приём врача-онколога и детского онколога, диспансерный приём. Клиника Альтамед Голицино.', keywords: ['онколог Голицино', 'онкология Голицино', 'Альтамед Голицино', 'приём онколога'] },
    { title: 'Хирург Голицино', url: '/services/surgery', description: 'Хирург в Голицино: приём врача-хирурга, биопсии, пункции, удаление новообразований, лечение ран, малая хирургия. Клиника Альтамед Голицино.', keywords: ['хирургия', 'хирург', 'хирург Голицино', 'Альтамед Голицино', 'операция'] },
    { title: 'Травматология', url: '/services/traumatology', description: 'Лечение травм и повреждений', keywords: ['травматология', 'травматолог', 'ортопед', 'травма', 'перелом'] },
    { title: 'Проктология', url: '/services/proctology', description: 'Лечение заболеваний прямой кишки', keywords: ['проктология', 'проктолог', 'колопроктолог', 'прямая кишка'] },
    { title: 'УЗИ Голицино', url: '/services/uzi-golitsino', description: 'УЗИ в Голицино: ультразвуковая диагностика, сосуды, сердце, малый таз, УЗИ детям. Альтамед Голицино.', keywords: ['УЗИ Голицино', 'ультразвук Голицино', 'УЗИ', 'Альтамед Голицино'] },
    { title: 'Рентген', url: '/services/xray', description: 'Рентгенографические исследования', keywords: ['рентген', 'рентгенография', 'рентгенолог', 'снимок'] },
    { title: 'Эндоскопия', url: '/services/endoscopy', description: 'Эндоскопические исследования', keywords: ['эндоскопия', 'эндоскоп', 'гастроскопия', 'колоноскопия'] },
    { title: 'Остеопатия', url: '/services/osteopathy', description: 'Остеопатическое лечение', keywords: ['остеопатия', 'остеопат', 'мануальный терапевт'] },
    { title: 'Функциональная диагностика Голицино', url: '/services/functional-diagnostics', description: 'Функциональная диагностика в Голицино: ЭКГ, ЭхоКГ, Холтер, спирометрия, КТГ. Альтамед Голицино.', keywords: ['функциональная диагностика Голицино', 'ЭКГ Голицино', 'Холтер Голицино', 'Альтамед Голицино'] },
    { title: 'Манипуляции общего назначения Голицино', url: '/services/general-manipulations', description: 'Манипуляции общего назначения в Голицино: лечебные блокады, инфузионная терапия, мониторирование АД и Холтер. Альтамед Голицино.', keywords: ['манипуляции общего назначения Голицино', 'лечебная блокада Голицино', 'инфузионная терапия Голицино', 'Альтамед Голицино'] },
  ];

  // Список услуг для поиска
  const services = [
    { name: 'Лечение кариеса', url: '/services/dentistry/caries', category: 'Стоматология' },
    { name: 'Лечение пульпита', url: '/services/dentistry/therapeutic', category: 'Стоматология' },
    { name: 'Лечение периодонтита', url: '/services/dentistry/therapeutic', category: 'Стоматология' },
    { name: 'Имплантация зубов', url: '/services/dentistry/implantation', category: 'Стоматология' },
    { name: 'Профессиональная гигиена', url: '/services/dentistry/therapeutic', category: 'Стоматология' },
    { name: 'Отбеливание зубов', url: '/services/dentistry/therapeutic', category: 'Стоматология' },
    { name: 'Компьютерная томография', url: '/services/dentistry/ct', category: 'Диагностика' },
    { name: 'Рентгенография', url: '/services/dentistry/xray', category: 'Диагностика' },
    { name: 'УЗИ Голицино', url: '/services/uzi-golitsino', category: 'Диагностика' },
    { name: 'Эндоскопия', url: '/services/endoscopy', category: 'Диагностика' },
  ];

  useEffect(() => {
    const query = searchQuery.trim().toLowerCase();
    
    if (!query) {
      setResults({ doctors: [], services: [], pages: [] });
      return;
    }

    // Поиск по докторам
    const matchedDoctors = doctors.filter(doctor => {
      const nameMatch = doctor.name.toLowerCase().includes(query);
      const specMatch = doctor.specialization.toLowerCase().includes(query);
      const descMatch = doctor.description?.toLowerCase().includes(query);
      return nameMatch || specMatch || descMatch;
    });

    // Поиск по услугам
    const matchedServices = services.filter(service => {
      return service.name.toLowerCase().includes(query) || 
             service.category.toLowerCase().includes(query);
    });

    // Поиск по страницам (включая ключевые слова)
    const matchedPages = sitePages.filter(page => {
      const titleMatch = page.title.toLowerCase().includes(query);
      const descMatch = page.description.toLowerCase().includes(query);
      const keywordsMatch = page.keywords?.some(keyword => 
        keyword.toLowerCase().includes(query)
      ) || false;
      return titleMatch || descMatch || keywordsMatch;
    });

    setResults({
      doctors: matchedDoctors,
      services: matchedServices,
      pages: matchedPages
    });
  }, [searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const totalResults = results.doctors.length + results.services.length + results.pages.length;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Поиск по сайту</h1>
        
        {/* Поисковая форма */}
        <form onSubmit={handleSearch} className="mb-8">
          <div className="relative max-w-2xl">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Введите запрос для поиска..."
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              autoFocus
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-teal-600"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </form>

        {/* Результаты поиска */}
        {!searchQuery.trim() ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">Введите запрос для поиска</p>
          </div>
        ) : totalResults === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg mb-2">Ничего не найдено</p>
            <p className="text-gray-500">Попробуйте изменить запрос</p>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Врачи */}
            {results.doctors.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Врачи ({results.doctors.length})
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {results.doctors.map((doctor) => (
                    <Link
                      key={doctor.id}
                      href={`/doctors/${doctor.slug}`}
                      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                    >
                      {doctor.photo && (
                        <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                          <Image
                            src={doctor.photo}
                            alt={doctor.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {doctor.name}
                      </h3>
                      <p className="text-sm text-teal-600 mb-2">{doctor.specialization}</p>
                      {doctor.description && (
                        <p className="text-sm text-gray-600 line-clamp-2">{doctor.description}</p>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Услуги */}
            {results.services.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Услуги ({results.services.length})
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {results.services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.url}
                      className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {service.name}
                      </h3>
                      <p className="text-sm text-gray-600">{service.category}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Страницы */}
            {results.pages.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Страницы ({results.pages.length})
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {results.pages.map((page, index) => (
                    <Link
                      key={index}
                      href={page.url}
                      className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {page.title}
                      </h3>
                      <p className="text-sm text-gray-600">{page.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600"></div>
          <p className="mt-4 text-gray-600">Загрузка...</p>
        </div>
      </div>
    }>
      <SearchContent />
    </Suspense>
  );
}

