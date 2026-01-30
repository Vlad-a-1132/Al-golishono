"use client";

import Link from 'next/link';
import { useEffect } from 'react';

export default function ContactsPage() {
  const addresses = [
    {
      title: 'Медицинский центр Альтамед Голицино',
      address: '143040, Московская область, Одинцовский городской округ, Голицыно, Советская улица, 58',
      mapLink: 'https://yandex.ru/maps/org/altamed_golitsyno/1109627586',
    },
  ];

  const contactInfo = {
    phone: '+7 (495) 989-64-80',
    email: 'medcentr@altamed-golitsino.ru',
    workingHours: 'Ежедневно: 8:00 - 20:00',
    labHours: 'Прием анализов: ежедневно 8:00 - 12:00',
    labDiscount: 'Каждую среду, пятницу и воскресенье скидка на анализы 10%',
  };


  // Load Yandex Maps script
  useEffect(() => {
    const loadMapScript = () => {
      const container = document.getElementById('yandex-map-contacts');
      const innerContainer = document.getElementById('yandex-map-contacts-inner');
      if (!container || !innerContainer || innerContainer.querySelector('script')) {
        return; // Container doesn't exist or script already loaded
      }

      // Get container width for proper map sizing
      const containerWidth = container.offsetWidth || 500;
      const containerHeight = container.offsetHeight || 384; // h-96 = 384px
      
      // Create and load the script for this specific container
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.charset = 'utf-8';
      script.async = true;
      script.src = `https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A107b2d29e874da2b55f76a21eb40dc0d6cd90094a7e623655885d705a9628487&width=${containerWidth}&height=${containerHeight}&lang=ru_RU&scroll=true`;
      script.id = 'yandex-map-script-contacts';
      
      innerContainer.appendChild(script);
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      loadMapScript();
    }, 100);

    // Handle window resize
    const handleResize = () => {
      const innerContainer = document.getElementById('yandex-map-contacts-inner');
      if (innerContainer && !innerContainer.querySelector('script')) {
        loadMapScript();
      }
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-full">
      {/* Hero Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-blue-900 mb-6">Контакты</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
              Вы можете связаться с нами любым удобным для вас способом. 
              Мы всегда готовы ответить на ваши вопросы и помочь вам.
            </p>
            <div className="bg-white rounded-xl p-6 max-w-4xl mx-auto shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Мы рядом</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Мы работаем ежедневно с 8:00 - 20:00. Вы можете позвонить в любое время. Мы ответим Вам так скоро, как представится возможным.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-600">
                <p className="text-gray-700 font-semibold mb-2">Прием анализов ежедневно 8:00 - 12:00</p>
                <p className="text-gray-700">
                  Каждую среду, пятницу и воскресенье скидка на анализы <span className="font-bold text-blue-600">10%</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Phone */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm flex flex-col items-center text-center">
              <svg className="w-8 h-8 text-blue-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Телефон</h3>
              <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="text-gray-600 hover:text-blue-600">
                {contactInfo.phone}
              </a>
            </div>

            {/* Email */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm flex flex-col items-center text-center">
              <svg className="w-8 h-8 text-blue-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
              <a href={`mailto:${contactInfo.email}`} className="text-gray-600 hover:text-blue-600">
                {contactInfo.email}
              </a>
            </div>

            {/* Working Hours */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm flex flex-col items-center text-center">
              <svg className="w-8 h-8 text-blue-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">График работы</h3>
              <p className="text-gray-600">{contactInfo.workingHours}</p>
            </div>

            {/* Location */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm flex flex-col items-center text-center">
              <svg className="w-8 h-8 text-blue-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Адрес</h3>
              <p className="text-gray-600 text-sm">Голицыно, Советская улица, 58</p>
            </div>
          </div>
        </div>
      </section>

      {/* Addresses Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Посетите наш Медцентр</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {addresses.map((address, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{address.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{address.address}</p>
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="hover:text-blue-600 font-medium">
                        {contactInfo.phone}
                      </a>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href={`mailto:${contactInfo.email}`} className="hover:text-blue-600 font-medium">
                        {contactInfo.email}
                      </a>
                    </div>
                    <a
                      href={address.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      проложить маршрут
                    </a>
                  </div>
                </div>
              ))}
              
              {/* How to get there */}
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Как добраться на общественном транспорте</h3>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                    <p><strong>На электричке</strong> от станции Белорусская до станции Голицыно</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                    <p><strong>На автобусе №1055</strong> из города Одинцово до остановки "Девятки"</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                    <p><strong>На автобусе №45</strong> из города Кубинка до остановки "Девятки"</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                    <p><strong>На автобусе №22</strong> из города Звенигород до остановки "Девятки"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white p-8 rounded-xl shadow-sm mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Голицыно — Яндекс Карты</h2>
            <div className="relative h-96 w-full mb-4 overflow-hidden rounded-lg" id="yandex-map-contacts">
              <div id="yandex-map-contacts-inner" style={{ width: '100%', height: '100%' }}></div>
            </div>
          </div>

          {/* Working Hours and Contact Methods */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Working Hours */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">График работы</h2>
              <div className="space-y-4">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-gray-900 font-semibold">{contactInfo.workingHours}</p>
                    <p className="text-gray-600 text-sm mt-2">Вы можете позвонить в любое время. Мы ответим Вам так скоро, как представится возможным.</p>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-600 mb-4">
                  <p className="text-gray-900 font-semibold mb-1">{contactInfo.labHours}</p>
                  <p className="text-gray-700 text-sm">{contactInfo.labDiscount}</p>
                </div>
                <a href="https://reg.altamed-golitsino.ru/" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-700 transition inline-block">
                  Записаться на прием
                </a>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Свяжитесь с нами</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Позвоните нам
                  </h3>
                  <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="text-blue-600 hover:text-blue-700 font-medium text-lg">
                    {contactInfo.phone}
                  </a>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Напишите нам
                  </h3>
                  <a href={`mailto:${contactInfo.email}`} className="text-blue-600 hover:text-blue-700 font-medium">
                    {contactInfo.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-600 text-center leading-relaxed">
            Вся информация на сайте имеет ознакомительный характер.<br />
            Не используйте данную информацию для самолечения.<br />
            Возможны противопоказания.<br />
            Обязательно проконсультируйтесь с врачом.
          </p>
        </div>
      </section>
    </div>
  );
}
