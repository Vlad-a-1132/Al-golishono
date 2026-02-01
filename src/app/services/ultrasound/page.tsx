"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AppointmentForm from '@/components/AppointmentForm';

export default function UltrasoundPage() {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const ultrasoundServices = [
    {
      category: 'Дуплексное сканирование и допплерография',
      services: [
        { name: "Дуплексное сканирование БЦА с цветным доплеровским картированием кровотока", price: 3900 },
        { name: "Дуплексное сканирование экстракраниальных отделов БЦА", price: 3900 },
        { name: "Ультразвуковая допплерография сосудов (артерий и вен) верхних конечностей", price: 3900 },
        { name: "Дуплексное сканирование вен верхних конечностей", price: 4300 },
        { name: "Дуплексное сканирование вен нижних конечностей", price: 4300 },
        { name: "Дуплексное сканирование артерий нижних конечностей", price: 4700 },
        { name: "Дуплексное сканирование брюшного отдела аорты, подвздошных и общих бедренных артерий", price: 3300 },
        { name: "Дуплексное сканирование транскраниальное артерий и вен", price: 3600 },
        { name: "Дуплексное сканирование сосудов гепатобиллиарной зоны", price: 3300 },
        { name: "Дуплексное сканирование нижней полой и почечных вен", price: 3300 },
        { name: "Дуплексное сканирование нижней полой вены и вен портальной системы", price: 3300 },
        { name: "Дуплексное сканирование артерий почек + брюшной отдел аорты", price: 3300 },
        { name: "Ультразвуковая допплерография артерий верхних конечностей", price: 4700 },
        { name: "Ультразвуковая допплерография артерий нижних конечностей", price: 4700 },
        { name: "УЗДГ брахиоцефальных артерий с функциональными пробами, интракраниальным сегментом позвоночной артерии V4", price: 3600 }
      ]
    },
    {
      category: 'Эхокардиография',
      services: [
        { name: "Эхокардиография", price: 4700 }
      ]
    },
    {
      category: 'Комплексные УЗИ для детей',
      services: [
        { name: "Комплекс для малышей с 1 месяца (нейросонография + УЗИ гепатобиллиарной зоны + УЗИ тазобедренных суставов + УЗИ почек + УЗИ селезенки)", price: 8700 },
        { name: "Нейросонография", price: 2400 }
      ]
    },
    {
      category: 'УЗИ органов брюшной полости',
      services: [
        { name: "Ультразвуковое исследование гепатобиллиарной зоны (печень, желч. пузырь, внутри/внепеченочные протоки, поджелудочная железа)", price: 2000 },
        { name: "Ультразвуковое исследование гепатобиллиарной зоны с функциональными пробами", price: 2400 },
        { name: "Ультразвуковое исследование желчного пузыря и протоков", price: 900 },
        { name: "Ультразвуковое исследование желчного пузыря с определением его сократимости", price: 2400 },
        { name: "Ультразвуковое исследование печени", price: 900 },
        { name: "Ультразвуковое исследование поджелудочной железы", price: 900 },
        { name: "Ультразвуковое исследование селезенки", price: 900 },
        { name: "Ультразвуковое исследование забрюшинного пространства", price: 2000 },
        { name: "Ультразвуковое определение жидкости в брюшной полости", price: 900 }
      ]
    },
    {
      category: 'УЗИ органов малого таза',
      services: [
        { name: "Ультразвуковое исследование органов малого таза (комплексное)", price: 3300 },
        { name: "Ультразвуковое исследование матки и придатков трансабдоминальное", price: 1900 },
        { name: "Ультразвуковое исследование матки и придатков трансвагиальное", price: 2000 },
        { name: "Ультразвуковое исследование матки и придатков трансректальное", price: 2000 },
        { name: "Ультразвуковое исследование предстательной железы", price: 2000 },
        { name: "Ультразвуковое исследование предстательной железы трансректальное", price: 2500 },
        { name: "Ультразвуковое исследование мочевого пузыря", price: 900 },
        { name: "Ультразвуковое исследование мочевого пузыря с определением остаточной мочи", price: 900 },
        { name: "Ультразвуковое исследование мочевыводящих путей", price: 2100 }
      ]
    },
    {
      category: 'УЗИ почек и надпочечников',
      services: [
        { name: "Ультразвуковое исследование почек", price: 2000 },
        { name: "Ультразвуковое исследование почек и надпочечников", price: 2100 },
        { name: "Ультразвуковое исследование надпочечников", price: 2000 }
      ]
    },
    {
      category: 'УЗИ желез',
      services: [
        { name: "Ультразвуковое исследование молочных желез", price: 2000 },
        { name: "Ультразвуковое исследование молочных желез с допплеровским исследованием", price: 3200 },
        { name: "Ультразвуковое исследование щитовидной железы и паращитовидных желез", price: 1900 },
        { name: "Ультразвуковое исследование паращитовидных желез", price: 1900 },
        { name: "Ультразвуковое исследование слюнных желез", price: 1900 }
      ]
    },
    {
      category: 'Эластография',
      services: [
        { name: "Эластография молочных желез", price: 1100 },
        { name: "Эластография щитовидной железы", price: 1400 },
        { name: "Эластография почек", price: 1400 },
        { name: "Эластография матки и придатков", price: 1100 },
        { name: "Эластография кожи", price: 1100 },
        { name: "Эластография поджелудочной железы", price: 1100 },
        { name: "Эластография мягких тканей", price: 1100 },
        { name: "Эластография печени/методом сдвиговой волны с качественным и количественным определением степени жесткости", price: 2700 }
      ]
    },
    {
      category: 'УЗИ суставов и мягких тканей',
      services: [
        { name: "Ультразвуковое исследование сустава", price: 2000 },
        { name: "Ультразвуковое исследование тазобедренных суставов", price: 2400 },
        { name: "Ультразвуковое исследование мягких тканей (одна анатомическая зона)", price: 1900 },
        { name: "Ультразвуковое исследование лимфатических узлов (одна анатомическая зона)", price: 1900 },
        { name: "Ультразвуковое исследование плевральной полости", price: 900 },
        { name: "Ультразвуковое исследование головного мозга", price: 2400 },
        { name: "Ультразвуковое исследование органов мошонки", price: 1900 },
        { name: "Ультразвуковое исследование вилочковой железы", price: 1900 }
      ]
    },
    {
      category: 'УЗИ при беременности',
      services: [
        { name: "Определение беременности", price: 2000 },
        { name: "Ультразвуковое исследование плода", price: 2700 },
        { name: "Дуплексное сканирование сердца и сосудов плода", price: 4000 },
        { name: "Ультразвуковое исследование фолликулогенеза", price: 900 },
        { name: "Ультразвуковая допплерография маточно-плацентарного кровотока", price: 4000 }
      ]
    },
    {
      category: 'УЗИ шеи и сосудов',
      services: [
        { name: "УЗИ сосудов шеи", price: 3900 }
      ]
    }
  ];

  const indications = [
    "Заболевания органов брюшной полости и почек",
    "Болезни органов малого таза",
    "Патологии щитовидной и молочных желез",
    "Заболевания сосудов и сердца",
    "Проблемы с суставами и мягкими тканями",
    "Исследование беременных",
    "Контроль развития плода",
    "Заболевания предстательной железы",
    "Эхокардиография",
    "Допплеровское исследование сосудов",
    "Патологии лимфатических узлов",
    "Онкологические скрининги"
  ];

  const advantages = [
    "Полная безопасность - нет излучения",
    "Отсутствие побочных эффектов",
    "Безболезненность процедуры",
    "Высокая информативность",
    "Немедленные результаты",
    "Возможность многократных исследований"
  ];

  const faqItems = [
    {
      question: "Как подготовиться к УЗИ в Голицино?",
      answer: "Подготовка зависит от типа исследования. Для УЗИ брюшной полости в клинике «Альтамед-С» требуется голод 6-8 часов и за 3 дня исключить продукты, вызывающие газообразование. Для УЗИ органов малого таза нужен наполненный мочевой пузырь. Для УЗИ щитовидной железы и УЗИ суставов подготовка не требуется. Подробную инструкцию по подготовке к конкретному УЗИ вы получите при записи в Голицино."
    },
    {
      question: "Сколько длится процедура УЗИ в Голицино?",
      answer: "Обычно УЗИ в клинике «Альтамед-С» занимает 15-30 минут в зависимости от области исследования и сложности случая. Комплексные исследования могут длиться до 45 минут. Результаты с описанием выдаются сразу после процедуры на руки пациенту."
    },
    {
      question: "Безопасно ли УЗИ при беременности в Голицино?",
      answer: "Да, ультразвуковое исследование абсолютно безопасно для беременных и плода. В клинике «Альтамед-С» проводятся все необходимые УЗИ-скрининги: определение беременности, исследование плода, допплерография сосудов плода и маточно-плацентарного кровотока. ВОЗ рекомендует плановые УЗИ на определенных сроках беременности для контроля развития ребенка."
    },
    {
      question: "С какого возраста можно делать УЗИ детям в Голицино?",
      answer: "УЗИ в клинике «Альтамед-С» можно делать детям с самого рождения. Это один из самых безопасных методов диагностики, часто используемый для обследования грудничков. В Голицино мы проводим нейросонографию (УЗИ головного мозга), УЗИ тазобедренных суставов, УЗИ внутренних органов. Опытные врачи создают комфортную атмосферу для проведения исследования."
    },
    {
      question: "Сколько стоит сделать УЗИ в Голицино?",
      answer: "Стоимость УЗИ в клинике «Альтамед-С» зависит от типа исследования. Цены начинаются от 900 рублей за УЗИ отдельных органов (печень, желчный пузырь, селезенка). УЗИ комплексов органов обходится дороже. Например, УЗИ органов малого таза стоит от 1900 рублей, УЗИ сосудов — от 3300 рублей, эхокардиография — 4700 рублей. Уточнить точную стоимость конкретного УЗИ вы можете при записи или по телефону клиники в Голицино."
    },
    {
      question: "Где можно сделать УЗИ в Голицино платно?",
      answer: "Медицинский центр «Альтамед-С» в Голицино предлагает широкий спектр ультразвуковых исследований на современном оборудовании экспертного класса. Клиника работает ежедневно, записаться на УЗИ можно по телефону или через форму записи на сайте. При необходимости возможно проведение УЗИ в день обращения. Врачи-диагносты высшей категории обеспечивают высокое качество исследований."
    }
  ];

  return (
    <div className="flex flex-col bg-white">
      <section className="pt-4 md:pt-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
            <Link href="/" className="hover:text-emerald-600">Главная</Link>
            <span>/</span>
            <Link href="/diagnostics" className="hover:text-emerald-600">Диагностика</Link>
            <span>/</span>
            <span className="text-gray-900">УЗИ</span>
          </nav>
          <h1 className="text-2xl md:text-4xl font-bold text-black">
            Ультразвуковое обследование (УЗИ) в Голицино — исследование в медицинском центре Альтамед Голицино
          </h1>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-1/2">
              <div className="relative w-full aspect-square max-w-md mx-auto rounded-full overflow-hidden">
                <Image
                  src="/images/documents/ultrazvukovoe-obsledovanie-uzi_3.jpg"
                  alt="УЗИ в Альтамед Голицино"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 text-gray-700 space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-black">УЗИ в Голицино</h2>
              <p>
                Ультразвуковое исследование (сонография) — один из наиболее современных, информативных и доступных методов инструментальной диагностики. В медицинском центре Альтамед Голицино УЗИ проводится на современном оборудовании экспертного класса. Несомненным преимуществом УЗИ является неинвазивность и отсутствие лучевой нагрузки.
              </p>
              <p>
                Для изучения внутренних органов применяются звуковые волны сверхвысокой частоты. «Картинка» выводится на экран в режиме реального времени, что даёт возможность отслеживать динамические процессы, в частности движение крови в сосудах.
              </p>
              <p>
                В медицинском центре Альтамед Голицино УЗИ проводится на современном оборудовании экспертного класса. Врачи-диагносты имеют большой опыт работы и проводят исследования по стандартизированным протоколам. Записаться на УЗИ можно через форму на сайте или по телефону клиники.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Ультразвуковое исследование — что это такое?</h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            Ультразвуковое исследование (сонография) – это один из наиболее современных, информативных и доступных методов инструментальной диагностики. Несомненным преимуществом УЗИ является его неинвазивность, т. е. в процессе исследования на кожу и другие ткани не оказывается повреждающего механического воздействия. Диагностика не связана с болевыми или иными неприятными для пациента ощущениями. В отличие от широко распространенной рентгенографии, при УЗИ не используются опасные для организма излучения.
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            Для изучения внутренних органов применяются звуковые волны сверхвысокой частоты – ультразвук. Поскольку «картинка» выводится на экран в режиме реального времени, это дает возможность отслеживать ряд динамических процессов, происходящих в организме, в частности – движение крови в сосудах. С точки зрения физики ультразвуковое исследование базируется на пьезоэлектрическом эффекте.
          </p>
          <h3 className="text-xl font-bold text-black mt-8 mb-3">Принцип действия</h3>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            В качестве пьезоэлементов, которые попеременно работают в качестве передатчика и приемника сигнала, используются монокристаллы кварца или титаната бария. При воздействии на них высокочастотных звуковых колебаний на поверхности возникают заряды, а при подаче на кристаллы тока – механические вибрации, сопровождающиеся излучением ультразвука. Пьезоэлементы-трансдюсеры являются базовой составляющей диагностических аппаратов. Базовой характеристикой исследуемой среды является ее акустический импеданс — степень сопротивления ультразвуку.
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4">Противопоказания и ограничения к УЗИ в Голицино</h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            Ультразвуковое исследование не имеет абсолютных противопоказаний. Метод безопасен для детей любого возраста, беременных и пожилых людей; его можно проводить многократно без вреда для здоровья. В отличие от рентгена и КТ, при УЗИ не используется ионизирующее излучение.
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
            Ограничения могут быть связаны с типом исследования: например, при УЗИ органов брюшной полости информативность снижается при выраженном метеоризме (газ в кишечнике плохо пропускает ультразвук), поэтому важна подготовка — диета и голод перед исследованием. При УЗИ органов малого таза трансабдоминальным доступом нужен наполненный мочевой пузырь; при трансвагинальном или трансректальном доступе подготовка не требуется. В медицинском центре Альтамед Голицино врачи подберут оптимальный вид исследования и дадут рекомендации по подготовке.
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Наименования обследований</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
              <thead>
                <tr className="bg-emerald-600 text-white">
                  <th className="border border-gray-300 px-3 py-2 text-left">Наименование обследования</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Комплекс</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Отдельный орган</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="bg-gray-50"><td className="border border-gray-300 px-3 py-2 font-medium">Органы брюшной полости</td><td className="border border-gray-300 px-3 py-2">— печень, желчный пузырь, поджелудочная железа, селезенка</td><td className="border border-gray-300 px-3 py-2">— печень, желчный пузырь, желчные протоки, поджелудочная железа, селезенка</td></tr>
                <tr><td className="border border-gray-300 px-3 py-2">УЗИ органов брюшной полости с пробным завтраком</td><td className="border border-gray-300 px-3 py-2"></td><td className="border border-gray-300 px-3 py-2"></td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-300 px-3 py-2 font-medium">Органы мочеполовой системы (женские)</td><td className="border border-gray-300 px-3 py-2">— почки, мочевой пузырь, матка, придатки</td><td className="border border-gray-300 px-3 py-2">— почки, мочевой пузырь, матка, придатки</td></tr>
                <tr><td className="border border-gray-300 px-3 py-2 font-medium">Органы мочеполовой системы (мужские)</td><td className="border border-gray-300 px-3 py-2">— почки, мочевой пузырь (+остаточная моча), простата, мошонка, семенные пузырьки</td><td className="border border-gray-300 px-3 py-2">— почки, мочевой пузырь с определением остаточной мочи, мочевой пузырь, простата, простата (чрезпузырно), простата (трансректально), ТРУЗИ, органы мошонки, семенные пузырьки, почки, надпочечники</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-300 px-3 py-2 font-medium">Беременность</td><td className="border border-gray-300 px-3 py-2"></td><td className="border border-gray-300 px-3 py-2">— определение беременности до 10–15 недель; УЗИ оценка (фетометрия) плода &gt; 10 недель; фетометрия + УЗИ внутренних органов плода II–III триместр; мониторинг фолликулогенеза</td></tr>
                <tr><td className="border border-gray-300 px-3 py-2 font-medium">УЗИ поверхностных структур</td><td className="border border-gray-300 px-3 py-2"></td><td className="border border-gray-300 px-3 py-2">— щитовидная железа, молочные железы, лимфатические узлы подкожные внутримышечные, образования</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-300 px-3 py-2">Комплексное исследование 3-х зон</td><td className="border border-gray-300 px-3 py-2">(по желанию пациента)</td><td className="border border-gray-300 px-3 py-2"></td></tr>
                <tr><td className="border border-gray-300 px-3 py-2">Комплексное исследование 4-х зон</td><td className="border border-gray-300 px-3 py-2">(по желанию пациента)</td><td className="border border-gray-300 px-3 py-2"></td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-300 px-3 py-2 font-medium">Полное комплексное исследование 5-ти зон</td><td className="border border-gray-300 px-3 py-2">— щитовидная железа, молочные железы, брюшная полость, мочевой пузырь, матка, придатки</td><td className="border border-gray-300 px-3 py-2"></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Услуги УЗИ */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Услуги ультразвуковой диагностики
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Полный спектр УЗИ-исследований в клинике «Альтамед-С» в Голицино
            </p>
          </div>

          <div className="space-y-8">
            {ultrasoundServices.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-[#2C83A7] to-[#3C93B7] px-6 py-4">
                  <h3 className="text-xl font-semibold text-white">{category.category}</h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.services.map((service, serviceIndex) => (
                      <div 
                        key={serviceIndex}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1 pr-2">
                            <h4 className="font-medium text-gray-900 text-sm leading-tight mb-2">
                              {service.name}
                            </h4>
                            <div className="text-[#2C83A7] font-semibold text-lg">
                              {service.price} ₽
                            </div>
                          </div>
                          <Link 
                            href="https://reg.altamed-golitsino.ru/" target="_blank" rel="noopener noreferrer"
                            className="ml-3 bg-[#2C83A7] text-white px-3 py-1 rounded-md text-sm hover:bg-[#267399] transition-colors duration-300 flex-shrink-0 whitespace-nowrap"
                          >
                            Записаться
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link 
              href="https://reg.altamed-golitsino.ru/" target="_blank" rel="noopener noreferrer" 
              className="inline-flex items-center bg-[#2C83A7] text-white rounded-full px-8 py-3 font-medium hover:bg-[#267399] transition-colors"
            >
              Записаться на УЗИ
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Описание */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">УЗИ в Голицино: современная безопасная диагностика</h2>
          <div className="mb-8">
            <p className="text-gray-700 mb-4 leading-relaxed">
              <strong>Ультразвуковое исследование (УЗИ)</strong> — это безопасный, безболезненный и высокоинформативный метод диагностики, использующий ультразвуковые волны для визуализации внутренних органов и тканей. В медицинском центре «Альтамед-С» в Голицино УЗИ выполняется на современном оборудовании экспертного класса, что обеспечивает высочайшую точность диагностики и качественные изображения.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Основные преимущества УЗИ в Голицино — полная безопасность (нет ионизирующего излучения), безболезненность процедуры, немедленное получение результатов, возможность многократного исследования, высокая информативность. В клинике «Альтамед-С» проводятся все виды ультразвуковой диагностики: УЗИ органов брюшной полости, УЗИ малого таза, УЗИ сосудов шеи и конечностей, УЗИ сердца (эхокардиография), УЗИ щитовидной железы, УЗИ молочных желез, УЗИ при беременности, УЗИ детям.
            </p>
            <div className="bg-gray-50 rounded-[20px] p-6 shadow-md border-l-4 border-[#2C83A7]">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Преимущества УЗИ в клинике «Альтамед-С» в Голицино:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#2C83A7] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Оборудование экспертного класса — современные ультразвуковые сканеры с высокой разрешающей способностью</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#2C83A7] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Врачи-диагносты высшей категории с большим опытом работы</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#2C83A7] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Широкий спектр исследований — более 80 видов УЗИ-диагностики</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#2C83A7] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Быстрая выдача результатов — описание и снимки на руки сразу после процедуры</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#2C83A7] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Удобное расположение в центре Голицино</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Показания */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Показания к УЗИ в Голицино</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {indications.map((indication, idx) => (
              <div key={idx} className="bg-white p-6 rounded-[20px] shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#2C83A7] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">{indication}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Популярные УЗИ */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Популярные УЗИ-исследования в Голицино</h2>
          <p className="text-gray-700 mb-6 text-center max-w-3xl mx-auto">
            В медицинском центре «Альтамед-С» в Голицино наиболее часто выполняются следующие виды ультразвуковой диагностики:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-[20px] shadow-md hover:shadow-lg transition-shadow border border-blue-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">УЗИ сосудов шеи в Голицино</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                УЗИ сосудов шеи (дуплексное сканирование брахиоцефальных артерий) — исследование сосудов, питающих головной мозг. Проводится при головных болях, головокружениях, для оценки риска инсульта. В клинике «Альтамед-С» выполняется с функциональными пробами и интракраниальным сегментом.
              </p>
              <div className="text-[#2C83A7] font-semibold text-lg">
                От 3900 ₽
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-[20px] shadow-md hover:shadow-lg transition-shadow border border-blue-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">УЗИ вен нижних конечностей в Голицино</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                УЗИ вен нижних конечностей — дуплексное сканирование для диагностики варикозной болезни, тромбозов глубоких вен. Позволяет оценить состояние вен, клапанов, наличие тромбов, скорость кровотока. Незаменимо для профилактики и лечения заболеваний вен.
              </p>
              <div className="text-[#2C83A7] font-semibold text-lg">
                От 4300 ₽
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-[20px] shadow-md hover:shadow-lg transition-shadow border border-blue-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">УЗИ малого таза в Голицино</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                УЗИ органов малого таза у женщин (матки и придатков) и мужчин (предстательной железы) — трансабдоминальное, трансвагинальное или трансректальное. Используется для диагностики гинекологических и урологических заболеваний, оценки состояния органов.
              </p>
              <div className="text-[#2C83A7] font-semibold text-lg">
                От 1900 ₽
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-[20px] shadow-md hover:shadow-lg transition-shadow border border-blue-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">УЗИ сердца (эхокардиография) в Голицино</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                Эхокардиография — УЗИ сердца для оценки его структуры и функции, диагностики пороков, ишемической болезни, кардиомиопатий. Позволяет визуализировать камеры сердца, клапаны, скорость кровотока, состояние миокарда.
              </p>
              <div className="text-[#2C83A7] font-semibold text-lg">
                4700 ₽
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-[20px] shadow-md hover:shadow-lg transition-shadow border border-blue-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">УЗИ брюшной полости в Голицино</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                УЗИ гепатобиллиарной зоны — комплексное исследование печени, желчного пузыря, протоков, поджелудочной железы. Используется для диагностики гепатитов, холециститов, панкреатитов, желчнокаменной болезни. Может проводиться с функциональными пробами.
              </p>
              <div className="text-[#2C83A7] font-semibold text-lg">
                От 2000 ₽
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-[20px] shadow-md hover:shadow-lg transition-shadow border border-blue-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">УЗИ молочных желез в Голицино</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                УЗИ молочных желез — безопасный метод диагностики заболеваний груди, особенно эффективен у женщин моложе 40 лет. Позволяет выявить кисты, фиброаденомы, мастопатию, провести скрининг рака молочной железы. Может дополняться эластографией.
              </p>
              <div className="text-[#2C83A7] font-semibold text-lg">
                От 2000 ₽
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* УЗИ детям */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">УЗИ детям в Голицино</h2>
          <div className="bg-white rounded-[20px] p-8 shadow-lg border-l-4 border-[#2C83A7]">
            <p className="text-gray-700 mb-4 leading-relaxed">
              В медицинском центре «Альтамед-С» в Голицино УЗИ детям проводится с особой заботой и вниманием. Ультразвуковая диагностика абсолютно безопасна для детей любого возраста, включая новорожденных, и может проводиться многократно без вреда для здоровья.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              <strong>Специальный комплекс для малышей с 1 месяца</strong> включает: нейросонографию (УЗИ головного мозга через открытый родничок), УЗИ гепатобиллиарной зоны, УЗИ тазобедренных суставов для раннего выявления дисплазии, УЗИ почек, УЗИ селезенки. Этот комплекс позволяет провести полное обследование малыша на раннем этапе развития и своевременно выявить возможные патологии.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Врачи клиники «Альтамед-С» имеют большой опыт работы с детьми, создают комфортную и спокойную атмосферу, используют специальные протоколы исследования. УЗИ детям в Голицино — это безопасный, быстрый и информативный метод диагностики.
            </p>
          </div>
        </div>
      </section>

      {/* Подготовка к УЗИ */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Подготовка к УЗИ в Голицино</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-blue-100 rounded-[20px] p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">УЗИ брюшной полости</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#2C83A7] mr-2">•</span>
                  <span>Голод 6-8 часов</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2C83A7] mr-2">•</span>
                  <span>За 3 дня исключить газообразующие продукты</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2C83A7] mr-2">•</span>
                  <span>Прием ферментов по назначению врача</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border-2 border-blue-100 rounded-[20px] p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">УЗИ органов малого таза</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#2C83A7] mr-2">•</span>
                  <span>Наполненный мочевой пузырь</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2C83A7] mr-2">•</span>
                  <span>Выпить 1-1.5 литра воды за час до исследования</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2C83A7] mr-2">•</span>
                  <span>Трансвагинальное — без подготовки</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border-2 border-blue-100 rounded-[20px] p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">УЗИ почек и мочевого пузыря</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#2C83A7] mr-2">•</span>
                  <span>Наполненный мочевой пузырь</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2C83A7] mr-2">•</span>
                  <span>Выпить воду за час до исследования</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border-2 border-blue-100 rounded-[20px] p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">УЗИ щитовидной железы</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#2C83A7] mr-2">•</span>
                  <span>Без подготовки</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2C83A7] mr-2">•</span>
                  <span>Не требуется голод</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Часто задаваемые вопросы об УЗИ в Голицино</h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-[20px] shadow-md overflow-hidden">
                <button
                  onClick={() => toggleExpanded(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900">{item.question}</span>
                  <svg
                    className={`w-5 h-5 text-[#2C83A7] transform transition-transform ${expandedItems.includes(index) ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedItems.includes(index) && (
                  <div className="px-6 pb-4 text-gray-600">{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <AppointmentForm />
    </div>
  );
}
