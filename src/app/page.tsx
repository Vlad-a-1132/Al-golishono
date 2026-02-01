"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef, useMemo } from "react";
import AppointmentForm from "@/components/AppointmentForm";
import Snowfall from "@/components/Snowfall";
import { doctors as defaultDoctors } from "@/data/static-data";

interface Schedule {
  start: string;
  end: string;
}

interface DoctorSchedule {
  Monday?: Schedule;
  Tuesday?: Schedule;
  Wednesday?: Schedule;
  Thursday?: Schedule;
  Friday?: Schedule;
  Saturday?: Schedule;
  Sunday?: Schedule;
}

interface DoctorScheduleRowProps {
  name: string;
  specialty: string;
  schedule: DoctorSchedule;
}

function DoctorCardMobile({ name, specialty, schedule }: DoctorScheduleRowProps) {
  const days = [
    { key: 'Monday', label: 'Пн', data: schedule.Monday },
    { key: 'Tuesday', label: 'Вт', data: schedule.Tuesday },
    { key: 'Wednesday', label: 'Ср', data: schedule.Wednesday },
    { key: 'Thursday', label: 'Чт', data: schedule.Thursday },
    { key: 'Friday', label: 'Пт', data: schedule.Friday },
    { key: 'Saturday', label: 'Сб', data: schedule.Saturday },
    { key: 'Sunday', label: 'Вс', data: schedule.Sunday }
  ];

  const hasSchedule = days.some(day => day.data);

  return (
    <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100">
      <div className="mb-3">
        <h3 className="font-bold text-gray-900 text-sm">{name}</h3>
        <p className="text-gray-600 text-xs mt-1">{specialty}</p>
      </div>
      {hasSchedule && (
        <div className="grid grid-cols-2 gap-2">
          {days.map((day) => (
            day.data && (
              <div key={day.key} className="bg-amber-50 rounded-md px-3 py-2">
                <span className="font-semibold text-emerald-700 text-xs">{day.label}</span>
                <span className="block text-emerald-700 font-medium text-xs mt-0.5">
                  {day.data.start}–{day.data.end}
                </span>
              </div>
            )
          ))}
        </div>
      )}
      {!hasSchedule && (
        <p className="text-gray-400 text-xs">В данный момент расписание не доступно</p>
      )}
    </div>
  );
}

function DoctorScheduleRow({ name, specialty, schedule }: DoctorScheduleRowProps) {
  const TimeCell = ({ daySchedule }: { daySchedule?: Schedule }) => {
    if (!daySchedule) {
      return <td className="px-3 py-3 text-center text-gray-300 text-sm">-</td>;
    }
    return (
      <td className="px-3 py-3 text-center bg-amber-50 text-emerald-700 font-medium text-sm rounded-md">
        {daySchedule.start}–{daySchedule.end}
      </td>
    );
  };

  return (
    <tr className="border-b border-gray-100 hover:bg-emerald-50/30 transition-colors">
      <td className="px-4 py-3 text-left font-medium text-gray-900 text-sm">{name}</td>
      <td className="px-4 py-3 text-left text-gray-600 text-sm">{specialty}</td>
      <TimeCell daySchedule={schedule.Monday} />
      <TimeCell daySchedule={schedule.Tuesday} />
      <TimeCell daySchedule={schedule.Wednesday} />
      <TimeCell daySchedule={schedule.Thursday} />
      <TimeCell daySchedule={schedule.Friday} />
      <TimeCell daySchedule={schedule.Saturday} />
      <TimeCell daySchedule={schedule.Sunday} />
    </tr>
  );
}

export default function Home() {
  // State for tracking current slide
  const [currentSlide, setCurrentSlide] = useState(0);
  // State for tracking current promotion slide (mobile)
  const [currentPromoSlide, setCurrentPromoSlide] = useState(0);
  // State for selected branch
  const [selectedBranch, setSelectedBranch] = useState('branch1');
  
  // Ref for doctors slider
  const doctorsSliderRef = useRef<HTMLDivElement>(null);
  
  // Slides data - используем нейтральные пути чтобы избежать блокировки рекламы
  const slides = [
    {
      title: "Профессиональная гигиена полости рта — 4600 ₽",
      buttonText: "Подробнее",
      buttonLink: "/promo/promo-1",
      buttonColor: "#13AB7B",
      image: "/images/dentisrty/ff0799f0-79d9-49cb-b32a-bac2ce8b6d2e 1.webp"
    },
    {
      title: "Лечение зубов — скидка 20%",
      buttonText: "Подробнее",
      buttonLink: "/promo/promo-2",
      buttonColor: "#13AB7B",
      image: "/images/promo/st prom.png"
    },
    {
      title: "Имплантация зубов — скидка 30%",
      buttonText: "Подробнее",
      buttonLink: "/promo/promo-3",
      buttonColor: "#13AB7B",
      image: "/images/yslugi/implant.webp"
    },
    {
      title: "Скидки на анализы! Пн, ср, пт — 10%, Вс — 15%",
      buttonText: "Подробнее",
      buttonLink: "/promo/promo-4",
      buttonColor: "#13AB7B",
      image: "/images/slides/3-analizy.webp"
    },
    {
      title: "23 февраля — мужчинам скидка 20%",
      buttonText: "Подробнее",
      buttonLink: "/promo/promo-6",
      buttonColor: "#13AB7B",
      image: "/images/promo/23prom.png"
    },
    {
      title: "Скидки для пенсионеров 10%",
      buttonText: "Подробнее",
      buttonLink: "/promo/promo-7",
      buttonColor: "#13AB7B",
      image: "/images/slides/2-pensia.webp"
    }
  ];

  // Function to go to next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Function to go to previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Function to go to specific slide
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Functions for promotion slider
  const nextPromoSlide = () => {
    setCurrentPromoSlide((prev) => (prev === 2 ? 0 : prev + 1)); // 3 slides total
  };

  const prevPromoSlide = () => {
    setCurrentPromoSlide((prev) => (prev === 0 ? 2 : prev - 1));
  };

  const goToPromoSlide = (index: number) => {
    setCurrentPromoSlide(index);
  };
  // gallery slider state and data
  const [galleryIndex, setGalleryIndex] = useState(0);
  const galleryTouchStartX = useRef<number | null>(null);
  const galleryImages = useMemo(() => {
    // All images in fotogelery. First image must be home; others shuffled.
    const home = "/images/fotogelery/Altamed-C home.webp";
    const others = [
      "/images/fotogelery/kt-Altamed-C.webp",
      "/images/fotogelery/Altamed-С Odintsovo.webp",
      "/images/fotogelery/Altamed-С Odintsovo1.webp",
      "/images/fotogelery/Altamed-С Odintsovo2.webp",
      "/images/fotogelery/Altamed-С Odintsovo3.webp",
      "/images/fotogelery/Altamed-С Odintsovo4.webp",
      "/images/fotogelery/Altamed-С Odintsovo5.webp",
      "/images/fotogelery/Altamed-С Odintsovo6.webp",
      "/images/fotogelery/Altamed-С Odintsovo7.webp",
      "/images/fotogelery/Altamed-С Odintsovo8.webp",
      "/images/fotogelery/Altamed-С Odintsovo9.webp",
      "/images/fotogelery/Altamed-С Odintsovo10.webp",
      "/images/fotogelery/Altamed-С Odintsovo11.webp",
      "/images/fotogelery/Altamed-С Odintsovo12.webp",
      "/images/fotogelery/Altamed-С Odintsovo13.webp",
      "/images/fotogelery/Altamed-С Odintsovo14.webp",
      "/images/fotogelery/Altamed-С Odintsovo15.webp",
      "/images/fotogelery/Altamed-С Odintsovo16.webp",
      "/images/fotogelery/Altamed-С Odintsovo17.webp",
      "/images/fotogelery/Altamed-С Odintsovo18.webp",
      "/images/fotogelery/Altamed-С Odintsovo19.webp",
      "/images/fotogelery/Altamed-С Odintsovo20.webp",
      "/images/fotogelery/Altamed-С Odintsovo21.webp",
      "/images/fotogelery/Altamed-С Odintsovo22.webp",
      "/images/fotogelery/Altamed-С Odintsovo23.webp",
      "/images/fotogelery/Altamed-С Odintsovo24.webp",
      "/images/fotogelery/Altamed-С Odintsovo25.webp",
      "/images/fotogelery/Altamed-С Odintsovo26.webp",
    ];
    // Shuffle others with Fisher–Yates
    for (let i = others.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = others[i];
      others[i] = others[j];
      others[j] = temp;
    }
    return [home, ...others];
  }, []);

  // autoplay gallery
  useEffect(() => {
    if (galleryImages.length <= 1) return;
    const id = setInterval(() => {
      setGalleryIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(id);
  }, [galleryImages.length]);

  const handleGalleryTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    galleryTouchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const handleGalleryTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (galleryTouchStartX.current === null) return;
    const endX = e.changedTouches[0]?.clientX ?? galleryTouchStartX.current;
    const deltaX = endX - galleryTouchStartX.current;
    const threshold = 40; // px
    if (Math.abs(deltaX) > threshold) {
      setGalleryIndex((prev) => {
        if (deltaX > 0) {
          return prev === 0 ? galleryImages.length - 1 : prev - 1;
        }
        return (prev + 1) % galleryImages.length;
      });
    }
    galleryTouchStartX.current = null;
  };

  // Load doctors from localStorage or use default
  const [doctors, setDoctors] = useState(defaultDoctors);
  
  useEffect(() => {
    // Загрузка данных из localStorage
    const saved = localStorage.getItem('admin_doctors_data');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setDoctors(parsed);
      } catch (e) {
        // Если ошибка парсинга, используем дефолтные данные
      }
    }
  }, []);

  // Shuffled doctors array for slider - only shuffle on client after hydration
  const [shuffledDoctors, setShuffledDoctors] = useState(doctors);
  
  useEffect(() => {
    // Shuffle only on client side after hydration
    const doctorsCopy = [...doctors];
    // Shuffle using Fisher–Yates algorithm
    for (let i = doctorsCopy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = doctorsCopy[i];
      doctorsCopy[i] = doctorsCopy[j];
      doctorsCopy[j] = temp;
    }
    setShuffledDoctors(doctorsCopy);
  }, [doctors]);
  
  // Интересы для нижней секции
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const interests = [
    { title: "Специалисты", icon: "👨‍⚕️", link: "/doctors" },
    { title: "Анализы", icon: "🧪", link: "/analyses" },
    { title: "Заболевания", icon: "🩺", link: "/diseases" },
    { title: "Симптомы", icon: "🤒", link: "/symptoms" },
  ];

  // Автоматическое переключение слайдов (только на клиенте)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Меняем слайд каждые 5 секунд

    return () => clearInterval(interval); // Очищаем интервал при размонтировании
  }, [slides.length]);

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
    // Add CSS to head to hide scrollbars globally on the slider
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

  // Load Yandex Maps script
  useEffect(() => {
    const loadMapScript = (containerId: string, innerContainerId: string, height: string) => {
      const container = document.getElementById(containerId);
      const innerContainer = document.getElementById(innerContainerId);
      if (!container || !innerContainer || innerContainer.querySelector('script')) {
        return; // Container doesn't exist or script already loaded
      }

      // Get container width for proper map sizing
      const containerWidth = container.offsetWidth || 500;
      
      // Create and load the script for this specific container
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.charset = 'utf-8';
      script.async = true;
      script.src = `https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A107b2d29e874da2b55f76a21eb40dc0d6cd90094a7e623655885d705a9628487&width=${containerWidth}&height=${height}&lang=ru_RU&scroll=true`;
      script.id = `yandex-map-script-${containerId}`;
      
      innerContainer.appendChild(script);
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      // Load mobile map (always visible on mobile)
      if (window.innerWidth < 768) {
        const checkAndLoad = () => {
          const container = document.getElementById('yandex-map-mobile');
          if (container) {
            loadMapScript('yandex-map-mobile', 'yandex-map-mobile-inner', '250');
          } else {
            setTimeout(checkAndLoad, 100);
          }
        };
        checkAndLoad();
      }

      // Load desktop map (visible on md+)
      if (window.innerWidth >= 768) {
        const checkAndLoad = () => {
          const container = document.getElementById('yandex-map-desktop');
          if (container) {
            loadMapScript('yandex-map-desktop', 'yandex-map-desktop-inner', '404');
          } else {
            setTimeout(checkAndLoad, 100);
          }
        };
        checkAndLoad();
      }
    }, 300);

    // Handle window resize for responsive maps
    const handleResize = () => {
      const mobileInner = document.getElementById('yandex-map-mobile-inner');
      const desktopInner = document.getElementById('yandex-map-desktop-inner');

      if (window.innerWidth < 768) {
        // Mobile view
        if (mobileInner && !mobileInner.querySelector('script')) {
          loadMapScript('yandex-map-mobile', 'yandex-map-mobile-inner', '250');
        }
      } else {
        // Desktop view
        if (desktopInner && !desktopInner.querySelector('script')) {
          loadMapScript('yandex-map-desktop', 'yandex-map-desktop-inner', '404');
        }
      }
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className="flex flex-col min-h-full bg-white mx-auto">
      {/* Основной раздел с заголовком */}
      <section className="py-3">
        <div className="mx-auto px-4" style={{ maxWidth: '83rem' }}>
          <div className="mb-6 ml-0 md:ml-4 lg:ml-8">
            <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight px-4 md:px-0">
              Сеть медицинских центров «<span className="italic">Альтамед-С</span>»
            </h1>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center mx-auto px-4 md:px-0">
            {/* Левая колонка с семейной картинкой и блоком для взрослых и детей - теперь слайдер */}
            <div className="w-full md:w-[548px] flex-shrink-0 mx-auto md:mx-0">
              <div className="h-[380px] md:h-[445px] flex flex-col rounded-[20px] overflow-hidden shadow-md">
                {/* Слайдер */}
                <div className="h-[300px] md:h-[358px] bg-emerald-500 relative overflow-hidden">
                  {/* Контент для текущего слайда остается тем же */}
                  <div className="w-full h-full relative">
                    <img
                      src={slides[currentSlide]?.image || slides[0].image}
                      alt={slides[currentSlide]?.title || slides[0].title}
                      className="w-full h-full object-cover"
                      style={{ display: 'block' }}
                      onError={(e) => {
                        console.error('Failed to load image:', (slides[currentSlide]?.image || slides[0].image));
                      }}
                    />
                  </div>
                  
                  {/* Навигационные стрелки - скрываем на мобильных */}
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
                  
                  {/* Прогресс-бар в виде точек */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2" suppressHydrationWarning>
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full ${
                          currentSlide === index ? "bg-white" : "bg-white/50"
                        }`}
                        suppressHydrationWarning
                      ></button>
                    ))}
                  </div>
                </div>

                {/* Нижняя часть - белый блок с текстом и кнопкой, меняется в зависимости от текущего слайда */}
                <div className="bg-white p-3 md:p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-0" suppressHydrationWarning>
                  <div className="text-black font-medium text-sm md:text-base flex-1" suppressHydrationWarning>{slides[currentSlide]?.title || slides[0].title}</div>
                  <Link 
                    href={slides[currentSlide]?.buttonLink || slides[0].buttonLink} 
                    className="text-white rounded-full flex items-center justify-center px-4 py-2 md:w-[185px] md:h-[46px] h-[36px] text-xs md:text-base"
                    style={{ backgroundColor: slides[currentSlide]?.buttonColor || slides[0].buttonColor }}
                    suppressHydrationWarning
                  >
                    <span suppressHydrationWarning>{slides[currentSlide]?.buttonText || slides[0].buttonText}</span>
                    <svg className="w-4 h-4 md:w-5 md:h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Правая колонка с услугами */}
            {/* Мобильная версия - цветные блоки 2x6 */}
            <div className="md:hidden grid grid-cols-2 gap-3 w-full max-w-sm mx-auto">
              <Link href="/services/gastroenterolog-golitsino" className="bg-[#FFE8E1] p-3 rounded-[20px] flex items-center justify-between h-[80px] relative overflow-hidden">
                <Image 
                  src="/images/yslugi/png-klev-club-k98x-p-vetki-yeli-s-igrushkami-png-27 1.webp"
                  alt=""
                  width={40}
                  height={40}
                  className="absolute top-0 right-0 w-10 h-10 object-contain"
                />
                <span className="font-medium text-sm text-gray-800">Гастроэнтерология</span>
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link href="/services/ginekolog-golitsino" className="bg-[#E8F5E8] p-3 rounded-[20px] flex items-center justify-between h-[80px] relative overflow-hidden">
                <Image 
                  src="/images/yslugi/png-klev-club-k98x-p-vetki-yeli-s-igrushkami-png-27 1.webp"
                  alt=""
                  width={40}
                  height={40}
                  className="absolute top-0 right-0 w-10 h-10 object-contain"
                />
                <span className="font-medium text-sm text-gray-800">Гинекология</span>
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link href="/services/dentistry/implantation" className="bg-[#E8F0F8] p-3 rounded-[20px] flex items-center justify-between h-[80px] relative overflow-hidden">
                <Image 
                  src="/images/yslugi/png-klev-club-k98x-p-vetki-yeli-s-igrushkami-png-27 1.webp"
                  alt=""
                  width={40}
                  height={40}
                  className="absolute top-0 right-0 w-10 h-10 object-contain"
                />
                <span className="font-medium text-sm text-gray-800">Имплантация</span>
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link href="/services/dermatolog-golitsino" className="bg-[#FFF8E1] p-3 rounded-[20px] flex items-center justify-between h-[80px] relative overflow-hidden">
                <Image 
                  src="/images/yslugi/png-klev-club-k98x-p-vetki-yeli-s-igrushkami-png-27 1.webp"
                  alt=""
                  width={40}
                  height={40}
                  className="absolute top-0 right-0 w-10 h-10 object-contain"
                />
                <span className="font-medium text-sm text-gray-800">Дерматология</span>
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link href="/services/cardiology" className="bg-[#E8F4FD] p-3 rounded-[20px] flex items-center justify-between h-[80px] relative overflow-hidden">
                <Image 
                  src="/images/yslugi/png-klev-club-k98x-p-vetki-yeli-s-igrushkami-png-27 1.webp"
                  alt=""
                  width={40}
                  height={40}
                  className="absolute top-0 right-0 w-10 h-10 object-contain"
                />
                <span className="font-medium text-sm text-gray-800">Кардиология</span>
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link href="/services/dentistry" className="bg-[#FFE8F0] p-3 rounded-[20px] flex items-center justify-between h-[80px] relative overflow-hidden">
                <Image 
                  src="/images/yslugi/png-klev-club-k98x-p-vetki-yeli-s-igrushkami-png-27 1.webp"
                  alt=""
                  width={40}
                  height={40}
                  className="absolute top-0 right-0 w-10 h-10 object-contain"
                />
                <span className="font-medium text-sm text-gray-800">Стоматология</span>
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link href="/services/mammology" className="bg-[#FFE8E1] p-3 rounded-[20px] flex items-center justify-between h-[80px] relative overflow-hidden">
                <Image 
                  src="/images/yslugi/png-klev-club-k98x-p-vetki-yeli-s-igrushkami-png-27 1.webp"
                  alt=""
                  width={40}
                  height={40}
                  className="absolute top-0 right-0 w-10 h-10 object-contain"
                />
                <span className="font-medium text-sm text-gray-800">Маммология</span>
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link href="/services/nevrolog-golitsino" className="bg-[#F0E8FF] p-3 rounded-[20px] flex items-center justify-between h-[80px] relative overflow-hidden">
                <Image 
                  src="/images/yslugi/png-klev-club-k98x-p-vetki-yeli-s-igrushkami-png-27 1.webp"
                  alt=""
                  width={40}
                  height={40}
                  className="absolute top-0 right-0 w-10 h-10 object-contain"
                />
                <span className="font-medium text-sm text-gray-800">Неврология</span>
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              <Link href="/services/otorinolaringolog-golitsino" className="bg-[#F2F6D6] p-3 rounded-[20px] flex items-center justify-between h-[80px] relative overflow-hidden">
                <Image 
                  src="/images/yslugi/png-klev-club-k98x-p-vetki-yeli-s-igrushkami-png-27 1.webp"
                  alt=""
                  width={40}
                  height={40}
                  className="absolute top-0 right-0 w-10 h-10 object-contain"
                />
                <span className="font-medium text-sm text-gray-800">Отоларингология</span>
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              <Link href="/services/oftalmolog-golitsino" className="bg-[#E2F5F0] p-3 rounded-[20px] flex items-center justify-between h-[80px] relative overflow-hidden">
                <Image 
                  src="/images/yslugi/png-klev-club-k98x-p-vetki-yeli-s-igrushkami-png-27 1.webp"
                  alt=""
                  width={40}
                  height={40}
                  className="absolute top-0 right-0 w-10 h-10 object-contain"
                />
                <span className="font-medium text-sm text-gray-800">Офтальмология</span>
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              <Link href="/services/pediatr-golitsino" className="bg-[#EEE0EE] p-3 rounded-[20px] flex items-center justify-between h-[80px] relative overflow-hidden">
                <Image 
                  src="/images/yslugi/png-klev-club-k98x-p-vetki-yeli-s-igrushkami-png-27 1.webp"
                  alt=""
                  width={40}
                  height={40}
                  className="absolute top-0 right-0 w-10 h-10 object-contain"
                />
                <span className="font-medium text-sm text-gray-800">Педиатрия</span>
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              <Link href="/services/proctology" className="bg-[#DFDBF0] p-3 rounded-[20px] flex items-center justify-between h-[80px] relative overflow-hidden">
                <Image 
                  src="/images/yslugi/png-klev-club-k98x-p-vetki-yeli-s-igrushkami-png-27 1.webp"
                  alt=""
                  width={40}
                  height={40}
                  className="absolute top-0 right-0 w-10 h-10 object-contain"
                />
                <span className="font-medium text-sm text-gray-800">Проктология</span>
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Кнопка "Все услуги" для мобильной версии */}
            <div className="md:hidden mt-4 flex justify-center w-full max-w-sm mx-auto">
              <Link 
                href="/services" 
                className="christmas-button text-white rounded-full py-3 flex items-center justify-center font-medium text-sm transition-colors w-full"
                style={{ paddingLeft: 'calc(2rem + 2px)', paddingRight: 'calc(2rem + 2px)', backgroundColor: '#5E0D0C' }}
              >
                Все услуги
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Десктопная версия - оригинальные серые блоки */}
            <div className="hidden md:flex flex-col space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <Link href="/services/gastroenterolog-golitsino" className="bg-[#FFDCC7] p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px] relative overflow-hidden">
                  <Image 
                    src="/images/yslugi/png-klev-club-k98x-p-vetki-yeli-s-igrushkami-png-27 1.webp"
                    alt=""
                    width={50}
                    height={50}
                    className="absolute top-0 right-0 w-12 h-12 object-contain"
                  />
                  <span className="font-medium text-sm md:text-base">Гастроэнтерология</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                <Link href="/services/ginekolog-golitsino" className="bg-[#F6F8F7] p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px] relative overflow-hidden">
                  <Image 
                    src="/images/yslugi/png-klev-club-k98x-p-vetki-yeli-s-igrushkami-png-27 1.webp"
                    alt=""
                    width={50}
                    height={50}
                    className="absolute top-0 right-0 w-12 h-12 object-contain"
                  />
                  <span className="font-medium text-sm md:text-base">Гинекология</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                <Link href="/services/dentistry/implantation" className="bg-[#E8F0F8] p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px] relative overflow-hidden">
                  <Image 
                    src="/images/yslugi/png-klev-club-k98x-p-vetki-yeli-s-igrushkami-png-27 1.webp"
                    alt=""
                    width={50}
                    height={50}
                    className="absolute top-0 right-0 w-12 h-12 object-contain"
                  />
                  <span className="font-medium text-sm md:text-base">Имплантация</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <Link href="/services/dermatolog-golitsino" className="bg-[#F2F6D6] p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px] relative overflow-hidden">
                  <Image 
                    src="/images/yslugi/png-klev-club-k98x-p-vetki-yeli-s-igrushkami-png-27 1.webp"
                    alt=""
                    width={50}
                    height={50}
                    className="absolute top-0 right-0 w-12 h-12 object-contain"
                  />
                  <span className="font-medium text-sm md:text-base">Дерматология</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                <Link href="/services/cardiology" className="bg-[#E2F5F0] p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px] relative overflow-hidden">
                  <Image 
                    src="/images/yslugi/png-klev-club-k98x-p-vetki-yeli-s-igrushkami-png-27 1.webp"
                    alt=""
                    width={50}
                    height={50}
                    className="absolute top-0 right-0 w-12 h-12 object-contain"
                  />
                  <span className="font-medium text-sm md:text-base">Кардиология</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                <Link href="/services/dentistry" className="bg-[#FDE3E2] p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px] relative overflow-hidden">
                  <Image 
                    src="/images/yslugi/png-klev-club-k98x-p-vetki-yeli-s-igrushkami-png-27 1.webp"
                    alt=""
                    width={50}
                    height={50}
                    className="absolute top-0 right-0 w-12 h-12 object-contain"
                  />
                  <span className="font-medium text-sm md:text-base">Стоматология</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <Link href="/services/mammology" className="bg-[#EBD8C9] p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px] relative overflow-hidden">
                  <Image 
                    src="/images/yslugi/png-klev-club-k98x-p-vetki-yeli-s-igrushkami-png-27 1.webp"
                    alt=""
                    width={50}
                    height={50}
                    className="absolute top-0 right-0 w-12 h-12 object-contain"
                  />
                  <span className="font-medium text-sm md:text-base">Маммология</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                <Link href="/services/nevrolog-golitsino" className="bg-[#EEE0EE] p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px] relative overflow-hidden">
                  <Image 
                    src="/images/yslugi/png-klev-club-k98x-p-vetki-yeli-s-igrushkami-png-27 1.webp"
                    alt=""
                    width={50}
                    height={50}
                    className="absolute top-0 right-0 w-12 h-12 object-contain"
                  />
                  <span className="font-medium text-sm md:text-base">Неврология</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                <Link href="/services/otorinolaringolog-golitsino" className="bg-[#DBF0E9] p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px] relative overflow-hidden">
                  <Image 
                    src="/images/yslugi/png-klev-club-k98x-p-vetki-yeli-s-igrushkami-png-27 1.webp"
                    alt=""
                    width={50}
                    height={50}
                    className="absolute top-0 right-0 w-12 h-12 object-contain"
                  />
                  <span className="font-medium text-sm md:text-base">Отоларингология</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <Link href="/services/oftalmolog-golitsino" className="bg-[#DBF0E1] p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px] relative overflow-hidden">
                  <Image 
                    src="/images/yslugi/png-klev-club-k98x-p-vetki-yeli-s-igrushkami-png-27 1.webp"
                    alt=""
                    width={50}
                    height={50}
                    className="absolute top-0 right-0 w-12 h-12 object-contain"
                  />
                  <span className="font-medium text-sm md:text-base">Офтальмология</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                <Link href="/services/pediatr-golitsino" className="bg-[#DBE5F0] p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px] relative overflow-hidden">
                  <Image 
                    src="/images/yslugi/png-klev-club-k98x-p-vetki-yeli-s-igrushkami-png-27 1.webp"
                    alt=""
                    width={50}
                    height={50}
                    className="absolute top-0 right-0 w-12 h-12 object-contain"
                  />
                  <span className="font-medium text-sm md:text-base">Педиатрия</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                <Link href="/services/proctology" className="bg-[#DFDBF0] p-4 rounded-[20px] flex items-center justify-between w-full md:w-[224px] h-[89px] relative overflow-hidden">
                  <Image 
                    src="/images/yslugi/png-klev-club-k98x-p-vetki-yeli-s-igrushkami-png-27 1.webp"
                    alt=""
                    width={50}
                    height={50}
                    className="absolute top-0 right-0 w-12 h-12 object-contain"
                  />
                  <span className="font-medium text-sm md:text-base">Проктология</span>
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              {/* Кнопка "Все услуги" для десктопа */}
              <div className="flex justify-center">
                <Link 
                  href="/services" 
                  className="christmas-button text-white rounded-full py-3 flex items-center justify-center font-medium text-sm transition-colors"
                  style={{ paddingLeft: 'calc(8rem + 2px)', paddingRight: 'calc(8rem + 2px)', backgroundColor: '#5E0D0C' }}
                >
                  Все услуги
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
             
            </div>
          </div>
        </div>
      </section>

      {/* Что Вас интересует с картой */}
      <section className="pt-0 pb-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 text-center md:text-left">
            Что Вас интересует?
          </h2>

          <div className="flex flex-col lg:flex-row w-full justify-center gap-6">


            {/* Мобильная версия - блоки интересов */}
            <div className="lg:hidden flex flex-col gap-6 w-full px-4">
              {/* Блок Специалисты с изображением врача */}
              <Link href="/doctors" className="bg-gray-50 rounded-[20px] p-4 h-[125px] flex relative overflow-hidden w-full">
                <div className="flex flex-col justify-start flex-1 pr-4">
                  <span className="text-2xl font-bold mb-3">Специалисты</span>
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <div className="absolute transform -translate-y-1/2" style={{ top: '58%', right: '2px' }}>
                  <div className="w-[100px] h-[100px] overflow-hidden rounded-lg">
                    <Image
                      src="/images/doctors/doctor.png"
                      alt="Доктор"
                      width={100}
                      height={100}
                      style={{ objectFit: "cover", width: "100%", height: "100%" }}
                      priority
                    />
                  </div>
                </div>
              </Link>

              {/* Блоки Диагностика и Анализы в ряд */}
              <div className="grid grid-cols-2 gap-4">
                <Link href="/diagnostics" className="bg-gray-50 rounded-[20px] p-3 h-[125px] flex flex-col justify-between w-full">
                  <span className="text-lg font-semibold">Диагностика</span>
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center self-end">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>

                <Link href="/services/lab-tests" className="bg-gray-50 rounded-[20px] p-3 h-[125px] flex flex-col justify-between w-full">
                  <span className="text-lg font-semibold">Анализы</span>
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center self-end">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </div>

              {/* Блоки Реабилитация и Акции в ряд */}
              <div className="grid grid-cols-2 gap-4">
                <Link href="/rehabilitation" className="bg-gray-50 rounded-[20px] p-3 h-[125px] flex flex-col justify-between w-full">
                  <span className="text-lg font-semibold">Реабилитация</span>
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center self-end">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>

                <Link href="/promo" className="bg-gray-50 rounded-[20px] p-3 h-[125px] flex flex-col justify-between w-full">
                  <span className="text-lg font-semibold">Акции</span>
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center self-end">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </div>

              {/* Мобильная карта */}
              <div className="w-full">
                <div className="w-full h-[250px] rounded-[20px] overflow-hidden mb-4" id="yandex-map-mobile">
                  <div id="yandex-map-mobile-inner" style={{ width: '100%', height: '100%' }}></div>
                </div>
              </div>
            </div>

            {/* Десктопная версия - оригинальные блоки */}
            <div className="hidden lg:flex flex-col lg:flex-row w-full justify-center gap-6">
            {/* Левая колонка с блоками */}
              <div className="flex flex-col gap-[15px] w-full lg:w-[574px] flex-shrink-0 mx-auto lg:mx-0 px-4 lg:px-0">
              {/* Блок Специалисты */}
              <Link href="/doctors" className="bg-gray-50 rounded-[20px] p-4 w-full h-[140px] flex items-center relative overflow-hidden">
                <div className="flex flex-col max-w-[60%] z-10">
                    <div className="text-lg md:text-xl font-semibold mb-2">Специалисты</div>
                    <p className="text-gray-600 text-sm md:text-base">
                    Найдите подходящего врача в нашей клинике
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-emerald-500 rounded-full ml-2">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </p>
                </div>
                <div className="absolute right-4 top-0 h-[140px] overflow-hidden">
                  <Image
                    src="/images/doctors/doctor.png"
                    alt="Доктор"
                    width={150}
                    height={140}
                    style={{ objectFit: "cover", height: "100%" }}
                    priority
                  />
                </div>
              </Link>

              {/* Два блока в ряд: Диагностика и Анализы */}
                <div className="flex flex-col md:flex-row gap-4">
                  <Link href="/diagnostics" className="bg-gray-50 rounded-[20px] p-4 w-full md:w-[279px] h-[116px] relative">
                    <div className="text-lg md:text-xl font-semibold mb-2">Диагностика</div>
                    <p className="text-gray-600 text-sm md:text-base">Современное оборудование</p>
                  <div className="absolute right-4 bottom-4">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
                
                  <Link href="/services/lab-tests" className="bg-gray-50 rounded-[20px] p-4 w-full md:w-[279px] h-[116px] relative">
                    <div className="text-lg md:text-xl font-semibold mb-2">Анализы</div>
                    <p className="text-gray-600 text-sm md:text-base">Быстро и точно</p>
                  <div className="absolute right-4 bottom-4">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Два блока в ряд: Реабилитация и Акции */}
                <div className="flex flex-col md:flex-row gap-4">
                  <Link href="/rehabilitation" className="bg-gray-50 rounded-[20px] p-4 w-full md:w-[279px] h-[116px] relative">
                    <div className="text-lg md:text-xl font-semibold mb-2">Реабилитация</div>
                    <p className="text-gray-600 text-sm md:text-base">Восстановление здоровья</p>
                  <div className="absolute right-4 bottom-4">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
                
                  <Link href="/promo" className="bg-gray-50 rounded-[20px] p-4 w-full md:w-[279px] h-[116px] relative">
                    <div className="text-lg md:text-xl font-semibold mb-2">Акции</div>
                    <p className="text-gray-600 text-sm md:text-base">Специальные предложения</p>
                  <div className="absolute right-4 bottom-4">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>

            {/* Статистика удалена по запросу */}
            </div>

            {/* Закрываем левую колонку (desktop) */}
            </div>

            {/* Правая колонка */}
              <div className="flex flex-col w-full lg:w-[715px] flex-shrink-0 mx-auto lg:mx-[15px] px-4 lg:px-0">
              {/* Яндекс карта — показываем только на md+ чтобы не дублировать мобильную карту */}
                <div className="hidden md:block w-full h-[404px] rounded-[20px] overflow-hidden mb-8" id="yandex-map-desktop">
                  <div id="yandex-map-desktop-inner" style={{ width: '100%', height: '100%' }}></div>
                </div>

            </div>
          </div>
          {/* Отзывы из Яндекс Карт */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mt-6">
            <div className="bg-white rounded-[20px] border border-gray-100 shadow-sm p-4 md:p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-black">Отзывы пациентов</h3>
                <a 
                  href="https://yandex.ru/maps/org/altamed_golitsyno/1109627586/reviews" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-emerald-600 hover:text-emerald-700 font-medium flex items-center"
                >
                  Все отзывы
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              
              {/* Рейтинг и статистика */}
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-[16px] p-6 md:p-8 mb-6">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                      <span className="text-4xl md:text-5xl font-bold text-gray-900">4.7</span>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm md:text-base mb-1">265 отзывов</p>
                    <p className="text-gray-500 text-xs md:text-sm">891 оценка</p>
                  </div>
                  <div className="flex-1">
                    <div className="space-y-2">
                      {[
                        { label: '5 звезд', value: 85, color: 'bg-emerald-500' },
                        { label: '4 звезды', value: 10, color: 'bg-emerald-400' },
                        { label: '3 звезды', value: 3, color: 'bg-yellow-400' },
                        { label: '2 звезды', value: 1, color: 'bg-orange-400' },
                        { label: '1 звезда', value: 1, color: 'bg-red-400' },
                      ].map((item) => (
                        <div key={item.label} className="flex items-center gap-3">
                          <span className="text-sm text-gray-600 w-16">{item.label}</span>
                          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className={`h-full ${item.color} rounded-full transition-all`}
                              style={{ width: `${item.value}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-600 w-10 text-right">{item.value}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Кнопка для просмотра всех отзывов */}
              <div className="text-center">
                <a 
                  href="https://yandex.ru/maps/org/altamed_golitsyno/1109627586/reviews" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-emerald-500 text-white px-8 py-4 rounded-full font-medium hover:bg-emerald-600 transition-colors shadow-md hover:shadow-lg"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  Посмотреть все отзывы на Яндекс.Картах
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <p className="text-gray-500 text-sm mt-4">
                  Нажмите на кнопку, чтобы прочитать все 265 отзывов пациентов о нашей клинике
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Акции и специальные предложения */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 text-center md:text-left px-4 md:px-0 max-w-full overflow-hidden text-ellipsis">
            Акции и специальные предложения
          </h2>
          
          {/* Контейнер для акций */}
          {/* Мобильная версия - 3 блока без слайдера */}
          <div className="md:hidden px-4">
            <div className="flex flex-col gap-4">
              {/* Блок "Скидки на анализы!" */}
              <Link href="/promo/promo-4" className="bg-[#DAF2FF] rounded-[20px] p-5 h-auto min-h-[160px] flex flex-col justify-between">
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Скидки на анализы!</h3>
                    <p className="text-base text-gray-700 mb-1">Понедельник, среда, пятница — 10%</p>
                    <p className="text-base text-gray-700">Воскресенье — 15%</p>
                  </div>
                </div>
                <div className="flex items-center justify-end mt-4">
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>

              {/* Блок "Скидки пенсионерам" */}
              <Link href="/promo" className="bg-[#FADFFF] rounded-[20px] p-5 h-auto min-h-[140px] flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">Скидки пенсионерам</h3>
                  <p className="text-base text-gray-700">Специальные условия</p>
                </div>
                <div className="flex items-center justify-end mt-4">
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>

              {/* Блок "Имплантация зубов" */}
              <Link href="/promo/promo-3" className="bg-[#FFF6C1] rounded-[20px] p-5 h-auto min-h-[140px] flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">Имплантация зубов</h3>
                  <p className="text-base text-gray-700">Скидка 30% — цена: 41160 ₽ (было 58800 ₽)</p>
                </div>
                <div className="flex items-center justify-end mt-4">
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </div>

            {/* Кнопка "Все акции и спецпредложения" для мобильной версии */}
            <Link href="/promo" className="w-full bg-white border border-gray-200 text-black rounded-[20px] h-[46px] shadow-sm flex items-center justify-center font-medium text-sm mt-4 hover:bg-gray-50 transition-colors">
              Все акции и спецпредложения &gt;
            </Link>
          </div>

          {/* Десктопная версия - оригинальные блоки */}
          <div className="hidden md:flex flex-col lg:flex-row gap-6 justify-center max-w-[1300px] mx-auto px-4 lg:px-0">
            {/* Левый большой блок */}
            <Link href="/promo/promo-4" className="bg-[#DAF2FF] rounded-[20px] w-full lg:w-[593px] h-[300px] md:h-[374px] flex flex-shrink-0 relative overflow-hidden cursor-pointer">
              <div className="p-6 md:p-8 flex flex-col justify-between z-10 w-full lg:w-[60%]">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Скидки на анализы!</h3>
                  <div className="text-black text-sm md:text-base">
                    <p>Понедельник, среда, пятница — 10%</p>
                    <p>Воскресенье — 15%</p>
                  </div>
                </div>
                
                <div className="bg-white text-black rounded-full px-8 py-2 w-fit hover:bg-gray-50 transition-colors">
                  Подробнее
                </div>
              </div>
              
              <div className="hidden lg:block absolute bottom-0 right-0 h-full w-[40%]">
                <Image 
                  src="/images/doctors/Альтамед врачи.png" 
                  alt="Альтамед врачи" 
                  width={450} 
                  height={650}
                  className="object-contain absolute bottom-0 right-4"
                />
              </div>
            </Link>
            
            {/* Правая колонка с 4 блоками */}
            <div className="flex flex-col gap-4 md:gap-6 flex-1">
              {/* Верхний ряд */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                {/* Блок 2 */}
                <Link href="/promo" className="bg-[#FADFFF] rounded-[20px] w-full md:w-full h-[175px] p-4 md:p-6 flex flex-col items-center justify-center relative overflow-hidden cursor-pointer">
                  <div className="text-center mb-4 z-10">
                    <h3 className="text-lg md:text-2xl font-bold mb-2 text-gray-900">Скидки пенсионерам</h3>
                  </div>
                  
                  <div className="bg-white text-gray-900 rounded-full px-6 md:px-8 py-2 md:py-3 text-sm md:text-base font-semibold shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-200 z-10">
                    Подробнее
                  </div>
                  
                  <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2">
                    <Image 
                      src="/images/icons/promo-5.png" 
                      alt="Пластика век" 
                      width={250} 
                      height={120}
                      className="object-contain"
                    />
                  </div>
                </Link>
              </div>
              
              {/* Нижний ряд */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                {/* Блок 4 — Имплантация зубов */}
                <Link href="/promo/promo-3" className="bg-[#FFF6C1] rounded-[20px] w-full md:w-full h-[175px] p-4 md:p-6 flex flex-col items-center justify-center relative overflow-hidden cursor-pointer">
                  <div className="text-center mb-4 z-10">
                    <h3 className="text-lg md:text-2xl font-bold mb-2 text-gray-900">
                      Имплантация зубов
                    </h3>
                    <p className="text-gray-700 text-sm md:text-base">Скидка 30% — цена: 41160 ₽ (было 58800 ₽)</p>
                  </div>
                  
                  <div className="bg-white text-gray-900 rounded-full px-6 md:px-8 py-2 md:py-3 text-sm md:text-base font-semibold shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-200 z-10">
                    Подробнее
                  </div>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Кнопка "Все акции и спецпредложения" */}
          <div className="hidden md:flex mt-6 justify-center md:justify-start px-4 md:px-0">
            <Link href="/promo" className="bg-white border border-gray-200 text-black rounded-[40px] w-full md:w-[316.63px] h-[46px] shadow-sm flex items-center justify-center font-medium text-sm md:text-base hover:bg-gray-50 transition-colors">
              Все акции и спецпредложения&gt;
            </Link>
          </div>
        </div>
      </section>

      {/* Специалисты слайдер */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 text-center md:text-left">
            Наши специалисты
          </h2>
          
          {/* Контейнер с врачами - единый слайдер для всех устройств */}
          <div className="relative mx-auto">
            {/* Горизонтальный слайдер для всех устройств */}
            <div className="relative overflow-hidden">
              <div 
                className="flex gap-4 md:gap-6 pb-6 md:pb-10 w-full overflow-x-auto scrollbar-hide" 
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                ref={doctorsSliderRef}
                suppressHydrationWarning
              >
                {shuffledDoctors.map((doctor) => (
                  <div 
                    key={doctor.id} 
                    className="w-[280px] md:w-[290px] h-[400px] md:h-[452px] bg-white rounded-[20px] border border-gray-100 shadow-sm overflow-hidden flex-shrink-0"
                  >
                  <div className="h-[180px] md:h-[220px] bg-gray-50">
                    <Image 
                        src={doctor.photo} 
                        alt={doctor.name} 
                      width={290} 
                      height={220}
                      className="w-full h-full object-cover"
                      suppressHydrationWarning
                    />
                  </div>
                  <div className="p-4 md:p-6 flex flex-col justify-between h-[220px] md:h-[232px]">
                    <div>
                        <h3 className="font-bold text-lg text-black mb-2">{doctor.name}</h3>
                        <p className="text-sm text-gray-700 leading-relaxed">{doctor.specialization}</p>
                    </div>
                      <Link 
                        href={`/doctors/${doctor.slug}`}
                        className="w-full h-12 bg-emerald-500 text-white rounded-full text-sm font-medium hover:bg-emerald-600 transition-colors flex items-center justify-center"
                      >
                      Записаться онлайн
                      </Link>
                  </div>
                </div>
                ))}
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

            {/* Индикаторы слайдера для мобильных */}
            <div className="md:hidden flex justify-center mt-4 space-x-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
          </div>
          
          {/* Кнопка "Все врачи" */}
          <div className="mt-6 flex justify-center">
            <Link href="/doctors" className="bg-gray-100 text-black py-2 px-6 rounded-full flex items-center text-sm md:text-base hover:bg-gray-200 transition-colors">
              Все врачи
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Пресс-центр */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl font-bold text-black mb-6 self-start max-w-full overflow-hidden text-ellipsis">
            Пресс-центр
          </h2>
          
          {/* Навигационные табы */}
          <div className="flex space-x-3 mb-6">
            <button className="bg-emerald-500 text-white py-2 px-6 rounded-full">
              Новости
            </button>
            <button className="bg-gray-100 text-black py-2 px-6 rounded-full">
              Статьи
            </button>
            <button className="bg-gray-100 text-black py-2 px-6 rounded-full">
              СМИ
            </button>
          </div>
          
          {/* Карточки новостей */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {/* Новость 1 */}
            <div className="bg-gray-50 rounded-[20px] overflow-hidden">
              <div className="relative">
                <div className="w-full h-[180px] overflow-hidden">
                  <Image
                    src="/images/news/sert-ivanova-1200x831.jpg"
                    alt="День донора в СМ-Клиника"
                    width={400}
                    height={180}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-md text-sm">
                  06.05.2025
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 line-clamp-2">Иванова Ольга Юрьевна посетила XXVI Конгресс педиатров России</h3>
                <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                ВРАЧ СУРДОЛОГ – ОТОРИНОЛАРИНГОЛОГ
Участвовала в научной программе XXVI Конгресса педиатров России с международным участием
«Актуальные проблемы педиатрии»

                </p>
                <button className="text-black font-medium">
                  Подробнее
                </button>
              </div>
            </div>
            
            {/* Новость 2 */}
            <div className="bg-gray-50 rounded-[20px] overflow-hidden">
              <div className="relative">
                <div className="w-full h-[180px] overflow-hidden">
                  <Image
                    src="/images/news/Интервью с Еленой Будко.webp"
                    alt="Интервью с Еленой Будко"
                    width={400}
                    height={180}
                    className="w-full object-cover"
                    style={{ height: '341px' }}
                  />
                </div>
                <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-md text-sm">
                  06.05.2025
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 line-clamp-2">Интервью с Еленой Будко</h3>
                <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                Прежде всего, профессия врача – это большая ответственность за здоровье и жизнь другого человека. Грамотный врач должен непрерывно развиваться и расширять свои знания в различных областях медицины
                </p>
                <button className="text-black font-medium">
                  Подробнее
                </button>
              </div>
            </div>
            
            {/* Новость 3 */}
            <div className="bg-gray-50 rounded-[20px] overflow-hidden">
              <div className="relative">
                <div className="w-full h-[180px] overflow-hidden">
                  <Image
                    src="/images/news/11222-1-1.webp"
                    alt="Интервью с Еленой Будко"
                    width={400}
                    height={180}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-md text-sm">
                  30.04.2025
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 line-clamp-2">Высокоинтенсивная магнитотерапия (SIS)</h3>
                <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                Высокоинтенсивная магнитотерапия (SIS) — это супериндуктивная система, которая состоит из блока управления и специальной катушки. Аппарат создает магнитное поле частотой до 150 Гц. Это запатентованная и уже проверенная в США и западных странах процедура, которая сегодня нашла применение в медицине, реабилитации и спорте. Высокоинтенсивная магнитотерапия помогает облегчить боль, улучшает подвижность суставов, стимулирует заживление переломов костей, вызывает мышечные сокращения и миорелаксацию. Во время процедуры происходят повторяющиеся сокращения мышечных волокон, которые:
                </p>
                <button className="text-black font-medium">
                  Подробнее
                </button>
              </div>
            </div>
          </div>
          
          {/* Кнопка "Смотреть все" */}
          <div className="mt-6">
            <button className="bg-gray-100 text-black py-2 px-6 rounded-full flex items-center">
              Смотреть все
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Форма записи на прием */}
      <AppointmentForm />
      
      {/* Эффект падающего снега */}
      <Snowfall />
  
    </div>
  );
}
