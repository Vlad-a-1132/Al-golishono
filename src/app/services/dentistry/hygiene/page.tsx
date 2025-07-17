"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

// Компонент для интерактивного сравнения изображений
const BeforeAfterSlider = ({ beforeImage, afterImage, title }: { 
  beforeImage: string, 
  afterImage: string, 
  title: string 
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  // Обработчики для touch событий
  const handleTouchStart = () => {
    setIsDragging(true);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    const handleGlobalTouchEnd = () => setIsDragging(false);

    if (isDragging) {
      document.addEventListener('mouseup', handleGlobalMouseUp);
      document.addEventListener('touchend', handleGlobalTouchEnd);
    }

    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('touchend', handleGlobalTouchEnd);
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-64 overflow-hidden rounded-[20px] cursor-col-resize select-none"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* Изображение "После" (фон) */}
      <div className="absolute inset-0">
        <Image
          src={afterImage}
          alt={`После - ${title}`}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 right-2 bg-emerald-500 text-white px-2 py-1 rounded text-xs z-10">
          После
        </div>
      </div>
      
      {/* Изображение "До" (перекрывающее) */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt={`До - ${title}`}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 left-2 bg-gray-800 text-white px-2 py-1 rounded text-xs z-10">
          До
        </div>
      </div>
      
      {/* Вертикальная линия с кнопкой */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white z-20 cursor-col-resize"
        style={{ left: `${sliderPosition}%` }}
      >
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center cursor-col-resize"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default function HygienePage() {
  // State for tracking current slide
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activePriceCategory, setActivePriceCategory] = useState(0);
  
  // Ref for doctors slider
  const doctorsSliderRef = useRef<HTMLDivElement>(null);

  const tabs = [
    { name: "Гигиена", href: "/services/dentistry/hygiene" },
    { name: "Наши врачи", href: "/doctors" },
    { name: "Цены", href: "/prices" },
    { name: "Услуги", href: "/services/dentistry" }
  ];

  // Slides data for hygiene
  const slides = [
    {
      title: "Профессиональная гигиена полости рта",
      buttonText: "Записаться",
      buttonLink: "/appointments",
      buttonColor: "#13AB7B",
      image: "/images/baner/banner.webp"
    },
    {
      title: "Современные методы чистки зубов",
      buttonText: "Узнать больше",
      buttonLink: "/services/dentistry/hygiene",
      buttonColor: "#10B981",
      image: "/images/baner/PROMOKT2.png"
    },
    {
      title: "Здоровье ваших зубов",
      subtitle: "Профилактика лучше лечения",
      buttonText: "Консультация",
      buttonLink: "/appointments",
      buttonColor: "#3B82F6",
      image: "/images/baner/banner2.webp",
      mobileImage: "/images/baner/banner2.webp"
    }
  ];

  // Hygiene services data - обновленный дизайн как на treatment
  const hygieneServices = [
    {
      id: 1,
      name: "Профессиональная чистка зубов",
      price: "от 6 860 руб.",
      image: "/images/dentisrty/220e48b394396d372de4544c24c0c9d8.jpg",
      description: "Комплексная чистка зубов с удалением зубного налета и камня"
    },
    {
      id: 3,
      name: "Удаление зубного камня", 
      price: "от 230 руб.",
      image: "/images/dentisrty/2b77774e06097e672c3fc8040bb16767.jpg",
      description: "Удаление твердых отложений с поверхности зубов"
    },
    {
      id: 4,
      name: "Ультразвуковая чистка зубов",
      price: "от 230 руб.", 
      image: "/images/dentisrty/zpdvfmkcvtqta57aazp2vcyc2qtbfcm3.jpg",
      description: "Безболезненная чистка зубов ультразвуком"
    },
    {
      id: 5,
      name: "Фторирование зубов",
      price: "от 1 730 руб.",
      image: "/images/dentisrty/77.jpg",
      description: "Укрепление эмали зубов фторсодержащими препаратами"
    }
  ];

  // Before/After cases data для гигиены
  const beforeAfterCases = [
    {
      id: 1,
      title: "Профессиональная чистка зубов",
      description: "Удаление зубного налета и камня",
      beforeImage: "/images/dentisrty/до.webp",
      afterImage: "/images/dentisrty/после.webp",
      doctor: "Прикуле Елена Юрьевна"
    },
    {
      id: 3,
      title: "Ультразвуковая чистка",
      description: "Эффективное удаление зубного камня",
      beforeImage: "/images/dentisrty/Коррекция до.webp",
      afterImage: "/images/dentisrty/Коррекция после.webp",
      doctor: "Крошкин Александр Дмитриевич"
    },
    {
      id: 4,
      title: "Комплексная гигиена",
      description: "Полный комплекс гигиенических процедур",
      beforeImage: "/images/dentisrty/перелом до.webp",
      afterImage: "/images/dentisrty/перелом после.webp",
      doctor: "Рубцов Роман Владимирович"
    }
  ];

  // Price categories data
  const priceCategories = [
    {
      title: "Профессиональная гигиена",
      services: [
        { name: "Профессиональная чистка зубов", price: "От 6 860 руб." },
        { name: "Удаление зубного камня", price: "От 230 руб." },
        { name: "Ультразвуковая чистка зубов", price: "От 230 руб." },
        { name: "Фторирование зубов", price: "От 1 730 руб." }
      ]
    },
    {
      title: "Дополнительные услуги",
      services: [
        { name: "Полировка зубов", price: "От 500 руб." },
        { name: "Обучение правильной гигиене полости рта", price: "Бесплатно" },
        { name: "Подбор средств гигиены", price: "Бесплатно" },
        { name: "Профилактический осмотр", price: "От 1 500 руб." }
      ]
    }
  ];

  // Functions for slide navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Function to scroll doctors slider left
  const scrollDoctorsLeft = () => {
    if (doctorsSliderRef.current) {
      doctorsSliderRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };
  
  // Function to scroll doctors slider right
  const scrollDoctorsRight = () => {
    if (doctorsSliderRef.current) {
      doctorsSliderRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  // CSS for hiding scrollbars
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }
      .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-full bg-white mx-auto">
      {/* Основной раздел с заголовком */}
      <section className="py-4">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <nav className="flex text-sm text-gray-600 ml-0 md:ml-4 lg:ml-8">
            <Link href="/" className="hover:text-emerald-500">Главная</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-emerald-500">Услуги</Link>
            <span className="mx-2">/</span>
            <Link href="/services/dentistry" className="hover:text-emerald-500">Стоматология</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">Профессиональная гигиена</span>
          </nav>
        </div>
      </section>

      {/* Header section */}
      <section className="py-4 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight px-4 md:px-0">
              Профессиональная гигиена в клинике «<span className="italic">Альтамед-с</span>»
            </h1>
            <p className="text-gray-600 mt-2 px-4 md:px-0 text-sm md:text-base">
              Современные методы профессиональной чистки зубов для здоровья и красоты вашей улыбки
            </p>
          </div>

          {/* Slider */}
          <div className="w-full mx-auto px-4 md:px-0" style={{ maxWidth: '83rem' }}>
            {/* Мобильный слайдер */}
            <div className="block md:hidden w-full md:w-[548px] h-[300px] flex flex-col rounded-[20px] overflow-hidden shadow-md flex-shrink-0 mx-auto md:mx-0">
              <div className="h-[220px] bg-emerald-500 relative overflow-hidden">
                <div className="w-full h-full relative">
                  <Image
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    fill
                    className=""
                    unoptimized
                    priority
                  />
                </div>
                {/* Прогресс-бар */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-white" : "bg-white/50"}`}
                    ></button>
                  ))}
                </div>
              </div>
              {/* Нижняя часть */}
              <div className="bg-white p-4 flex flex-col justify-between items-start gap-3">
                <div className="text-black font-medium text-sm">{slides[currentSlide].title}</div>
                <Link 
                  href={slides[currentSlide].buttonLink} 
                  className={`bg-[${slides[currentSlide].buttonColor}] text-white rounded-full flex items-center justify-center w-full h-[46px] text-sm`}
                  style={{ backgroundColor: slides[currentSlide].buttonColor }}
                >
                  {slides[currentSlide].buttonText}
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            {/* Десктопный слайдер */}
            <div className="hidden md:block h-[445px] bg-emerald-500 relative overflow-hidden rounded-[20px] shadow-lg">
              <div className="w-full h-full relative">
                {slides[currentSlide].mobileImage ? (
                  <>
                    <Image
                      src={slides[currentSlide].mobileImage}
                      alt={slides[currentSlide].title}
                      fill
                      className="object-cover block md:hidden"
                      unoptimized
                      priority
                    />
                    <Image
                      src={slides[currentSlide].image}
                      alt={slides[currentSlide].title}
                      fill
                      className="object-cover hidden md:block"
                      unoptimized
                      priority
                    />
                  </>
                ) : (
                  <Image
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    fill
                    className="object-cover"
                    unoptimized
                    priority
                  />
                )}
              </div>
              
              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-white">
                {currentSlide === 0 ? (
                  <>
                    <div className="mt-40"></div>
                  </>
                ) : (
                  <>
                    <h2 className="text-2xl md:text-4xl font-bold mb-4">{slides[currentSlide].title}</h2>
                    <p className="text-lg md:text-xl mb-6 max-w-md">{slides[currentSlide].subtitle}</p>
                    {currentSlide !== 1 && slides[currentSlide].buttonText && slides[currentSlide].buttonLink && (
                      <Link 
                        href={slides[currentSlide].buttonLink} 
                        className="bg-emerald-500 text-white rounded-full px-8 py-3 font-medium hover:bg-emerald-600 transition-colors"
                      >
                        {slides[currentSlide].buttonText}
                      </Link>
                    )}
                  </>
                )}
              </div>
              
              {/* Navigation arrows */}
              <button 
                onClick={prevSlide} 
                className="hidden md:block absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/70 rounded-full p-2 shadow-md hover:bg-white"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextSlide} 
                className="hidden md:block absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/70 rounded-full p-2 shadow-md hover:bg-white"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Progress dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full ${
                      currentSlide === index ? "bg-white" : "bg-white/50"
                    }`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid - обновленный дизайн как на treatment */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-8 text-center ml-0 md:ml-4 lg:ml-8">
            Услуги профессиональной гигиены
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {hygieneServices.map((service) => (
              service.id === 1 ? (
                <Link
                  key={service.id}
                  href="/services/dentistry/professional-cleaning"
                  className="bg-white rounded-[20px] shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group block"
                >
                  <div className="h-48 relative">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black mb-2">{service.name}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-emerald-500">{service.price}</span>
                      <span className="bg-emerald-500 text-white px-6 py-2 rounded-full hover:bg-emerald-600 transition-colors">
                        Записаться
                      </span>
                    </div>
                  </div>
                </Link>
              ) : (
                <div
                  key={service.id}
                  className="bg-white rounded-[20px] shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
                >
                  <div className="h-48 relative">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black mb-2">{service.name}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-emerald-500">{service.price}</span>
                      <span className="bg-emerald-500 text-white px-6 py-2 rounded-full hover:bg-emerald-600 transition-colors">
                        Записаться
                      </span>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Cases */}
      <section className="py-8 bg-gray-50">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-2 text-center">
            Выполненные работы
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Результаты профессиональной гигиены наших пациентов
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 md:mx-0">
            {beforeAfterCases.map((case_item) => (
              <div key={case_item.id} className="bg-white rounded-[20px] shadow-lg overflow-hidden">
                <BeforeAfterSlider 
                  beforeImage={case_item.beforeImage}
                  afterImage={case_item.afterImage}
                  title={case_item.title}
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 text-center uppercase">
                    {case_item.title}
                  </h3>
                  <p className="text-sm text-gray-600 text-center mb-2">
                    {case_item.description}
                  </p>
                  <p className="text-xs text-gray-500 text-center">
                    Врач: {case_item.doctor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 text-center md:text-left">
            Наши врачи
          </h2>
          
          {/* Контейнер с врачами - единый слайдер для всех устройств */}
          <div className="relative mx-auto">
            {/* Горизонтальный слайдер для всех устройств */}
            <div className="relative overflow-hidden">
              <div 
                className="flex gap-4 md:gap-6 pb-6 md:pb-10 w-full overflow-x-auto scrollbar-hide" 
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                ref={doctorsSliderRef}
              >
                {/* Врач 1 - Прикуле Елена Юрьевна */}
                <div className="w-[280px] md:w-[290px] h-[400px] md:h-[452px] bg-white rounded-[20px] border border-gray-100 shadow-sm overflow-hidden flex-shrink-0">
                  <div className="h-[180px] md:h-[220px] bg-gray-50">
                    <Image 
                      src="/images/doctors/prikule-elena-yurevna Альтамед-с Одинцово.png" 
                      alt="Прикуле Елена Юрьевна" 
                      width={210} 
                      height={120}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 md:p-6 flex flex-col justify-between h-[220px] md:h-[232px]">
                    <div>
                      <h3 className="font-bold text-lg text-black mb-2">Прикуле Елена Юрьевна</h3>
                      <p className="text-sm text-gray-600 mb-3">Стаж: с 2002 года</p>
                      <p className="text-sm text-gray-700 leading-relaxed">Стоматолог-терапевт</p>
                    </div>
                    <button className="w-full h-12 bg-emerald-500 text-white rounded-full text-sm font-medium hover:bg-emerald-600 transition-colors">
                      Записаться онлайн
                    </button>
                  </div>
                </div>
                
                {/* Врач 2 - Ярулова Вероника Юрьевна */}
                <div className="w-[280px] md:w-[290px] h-[400px] md:h-[452px] bg-white rounded-[20px] border border-gray-100 shadow-sm overflow-hidden flex-shrink-0">
                  <div className="h-[180px] md:h-[220px] bg-gray-50">
                    <Image
                      src="/images/doctors/Ярулова Вероника Юрьевна Стоматолог Альтамед-с Одинцово записаться на примем - +8 (495) 255-44-50.webp" 
                      alt="Ярулова Вероника Юрьевна" 
                      width={290} 
                      height={220}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 md:p-6 flex flex-col justify-between h-[220px] md:h-[232px]">
                    <div>
                      <h3 className="font-bold text-lg text-black mb-2">Ярулова Вероника Юрьевна</h3>
                      <p className="text-sm text-gray-600 mb-3">Стаж: с 2002 года</p>
                      <p className="text-sm text-gray-700 leading-relaxed">Стоматолог-терапевт</p>
                    </div>
                    <button className="w-full h-12 bg-emerald-500 text-white rounded-full text-sm font-medium hover:bg-emerald-600 transition-colors">
                      Записаться онлайн
                    </button>
                  </div>
                </div>
                
                {/* Врач 3 - Крошкин Александр Дмитриевич */}
                <div className="w-[280px] md:w-[290px] h-[400px] md:h-[452px] bg-white rounded-[20px] border border-gray-100 shadow-sm overflow-hidden flex-shrink-0">
                  <div className="h-[180px] md:h-[220px] bg-gray-50">
                    <Image
                      src="/images/doctors/Крошкин-Александр-Дмитриевич-Стоматолог-Альтамед-с-Одинцово-записаться-на-примем-8-_495_-255-44-50.webp" 
                      alt="Крошкин Александр Дмитриевич" 
                      width={290} 
                      height={220}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 md:p-6 flex flex-col justify-between h-[220px] md:h-[232px]">
                    <div>
                      <h3 className="font-bold text-lg text-black mb-2">Крошкин Александр Дмитриевич</h3>
                      <p className="text-sm text-gray-600 mb-3">Стаж: с 2006 года</p>
                      <p className="text-sm text-gray-700 leading-relaxed">Стоматолог-ортопед</p>
                    </div>
                    <button className="w-full h-12 bg-emerald-500 text-white rounded-full text-sm font-medium hover:bg-emerald-600 transition-colors">
                      Записаться онлайн
                    </button>
                  </div>
                </div>
                
                {/* Врач 4 - Рубцов Роман Владимирович */}
                <div className="w-[280px] md:w-[290px] h-[400px] md:h-[452px] bg-white rounded-[20px] border border-gray-100 shadow-sm overflow-hidden flex-shrink-0">
                  <div className="h-[180px] md:h-[220px] bg-gray-50">
                    <Image
                      src="/images/doctors/Рубцов-Роман-Владимирович Альтамед-с Одинцово.webp" 
                      alt="Рубцов Роман Владимирович" 
                      width={290} 
                      height={220}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 md:p-6 flex flex-col justify-between h-[220px] md:h-[232px]">
                    <div>
                      <h3 className="font-bold text-lg text-black mb-2">Рубцов Роман Владимирович</h3>
                      <p className="text-sm text-gray-600 mb-3">Стаж: с 2000 года</p>
                      <p className="text-sm text-gray-700 leading-relaxed">Стоматолог-ортопед</p>
                    </div>
                    <button className="w-full h-12 bg-emerald-500 text-white rounded-full text-sm font-medium hover:bg-emerald-600 transition-colors">
                      Записаться онлайн
                    </button>
                  </div>
                </div>

                {/* Врач 5 - Рубцова Ольга Юрьевна */}
                <div className="w-[280px] md:w-[290px] h-[400px] md:h-[452px] bg-white rounded-[20px] border border-gray-100 shadow-sm overflow-hidden flex-shrink-0">
                  <div className="h-[180px] md:h-[220px] bg-gray-50">
                    <Image
                      src="/images/doctors/Рубцова-Ольга-Юрьевна_-Стоматолог-хирург-—-Медицинский-центр-Альтамед-С.webp" 
                      alt="Рубцова Ольга Юрьевна" 
                      width={290} 
                      height={220}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 md:p-6 flex flex-col justify-between h-[220px] md:h-[232px]">
                    <div>
                      <h3 className="font-bold text-lg text-black mb-2">Рубцова Ольга Юрьевна</h3>
                      <p className="text-sm text-gray-600 mb-3">Стаж: с 2001 года</p>
                      <p className="text-sm text-gray-700 leading-relaxed">Стоматолог-хирург, стоматолог-терапевт</p>
                    </div>
                    <button className="w-full h-12 bg-emerald-500 text-white rounded-full text-sm font-medium hover:bg-emerald-600 transition-colors">
                      Записаться онлайн
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Навигационные кнопки для слайдера */}
            <button 
              onClick={scrollDoctorsLeft} 
              className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 z-10 hover:bg-gray-50"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={scrollDoctorsRight} 
              className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 z-10 hover:bg-gray-50"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Кнопка "Все врачи" */}
          <div className="mt-6 flex justify-center">
            <button className="bg-gray-100 text-black py-2 px-6 rounded-full flex items-center text-sm md:text-base hover:bg-gray-200">
              Все врачи
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Licenses Section */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 text-center md:text-left max-w-full overflow-hidden text-ellipsis">
            Лицензии
          </h2>
          
          <div className="bg-[#e9f5f0] rounded-[20px] p-4 md:p-6 lg:p-8 relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="w-full md:w-1/5 mb-6 md:mb-0">
                <div className="bg-white p-4 rounded-md shadow-sm w-32 h-40 flex items-center justify-center mx-auto">
                  {/* License document placeholder */}
                  <div className="w-24 h-32 bg-gray-100 flex flex-col justify-start p-2">
                    <div className="border-b border-gray-400 w-full mb-2"></div>
                    <div className="border-b border-gray-400 w-full mb-2"></div>
                    <div className="border-b border-gray-400 w-full mb-2"></div>
                    <div className="border-b border-gray-400 w-1/2 mb-2"></div>
                    <div className="mt-4 flex flex-col gap-1">
                      <div className="h-2 bg-gray-300 w-full"></div>
                      <div className="h-2 bg-gray-300 w-full"></div>
                      <div className="h-2 bg-gray-300 w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-3/5 px-0 md:px-4 text-center md:text-left">
                <p className="text-gray-700 mb-6 max-w-xl text-sm md:text-base">
                  Мы осуществляем деятельность на основании медицинских лицензий в соответствии с рекомендациями Минздрава
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <button className="bg-emerald-500 text-white px-6 py-3 rounded-md hover:bg-emerald-600 transition text-sm md:text-base">
                    Посмотреть лицензии
                  </button>
                  <button className="bg-emerald-500 text-white px-6 py-3 rounded-md hover:bg-emerald-600 transition text-sm md:text-base">
                    Правовая информация
                  </button>
                </div>
              </div>
              
              <div className="hidden md:block w-1/5 relative">
                <div className="h-48 relative">
                  {/* Placeholder for additional content */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price section */}
      <section className="py-8">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-8 text-center ml-0 md:ml-4 lg:ml-8">
            Цены на профессиональную гигиену
          </h2>
          
          <div className="bg-white rounded-[20px] shadow-lg overflow-hidden mx-4 md:mx-0">
            <div className="flex flex-col md:flex-row min-h-[400px]">
              {/* Левая навигационная панель */}
              <div className="w-full md:w-1/3 bg-slate-700">
                <div className="p-6">
                  <div className="space-y-2">
                    {priceCategories.map((category, index) => (
                      <button
                        key={index}
                        onClick={() => setActivePriceCategory(index)}
                        className={`w-full text-left p-4 rounded-lg transition-all duration-200 flex items-center justify-between group ${
                          activePriceCategory === index
                            ? 'bg-emerald-500 text-white'
                            : 'text-gray-300 hover:bg-slate-600 hover:text-white'
                        }`}
                      >
                        <span className="font-medium">{category.title}</span>
                        <svg 
                          className={`w-5 h-5 transition-transform duration-200 ${
                            activePriceCategory === index ? 'rotate-90' : ''
                          }`} 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Правая панель с услугами */}
              <div className="w-full md:w-2/3 p-6 md:p-8">
                <div className="mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                    {priceCategories[activePriceCategory].title}
                  </h3>
                  <div className="h-1 bg-emerald-500 w-16 rounded"></div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {priceCategories[activePriceCategory].services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer border border-gray-200"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 font-medium text-sm md:text-base leading-tight">
                          {service.name}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 flex-shrink-0 ml-4">
                        <span className="font-semibold text-emerald-600 text-sm md:text-base whitespace-nowrap">
                          {service.price}
                        </span>
                        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <button className="bg-emerald-500 text-white px-8 py-3 rounded-full font-medium hover:bg-emerald-600 transition-colors">
                    Записаться на процедуру
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 