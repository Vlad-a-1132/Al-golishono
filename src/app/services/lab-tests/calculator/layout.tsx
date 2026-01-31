import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Калькулятор анализов - Рассчитать стоимость анализов | Альтамед-СГолицино',
  description: 'Калькулятор анализов - рассчитайте стоимость лабораторных анализов онлайн. Выберите нужные анализы и узнайте общую стоимость. Удобный инструмент для планирования обследования в медицинском центре Альтамед-Св Голицино.',
  keywords: [
    'калькулятор анализов Голицино',
    'рассчитать стоимость анализов Голицино',
    'цена анализов Голицино',
    'стоимость лабораторных анализов Голицино',
    'калькулятор стоимости анализов',
    'Московская область калькулятор анализов',
    'Голицино стоимость анализов'
  ],
  openGraph: {
    title: 'Калькулятор анализов - Рассчитать стоимость анализов | Альтамед-с',
    description: 'Калькулятор анализов - рассчитайте стоимость лабораторных анализов онлайн. Выберите нужные анализы и узнайте общую стоимость.',
    url: 'https://altamed-s.ru/services/lab-tests/calculator',
    siteName: 'Альтамед-с',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://altamed-s.ru/services/lab-tests/calculator',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

