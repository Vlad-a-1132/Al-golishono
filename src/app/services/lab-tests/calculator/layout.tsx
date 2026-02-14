import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Калькулятор анализов - Рассчитать стоимость анализов | Альтамед Голицыно',
  description: 'Калькулятор анализов - рассчитайте стоимость лабораторных анализов онлайн. Выберите нужные анализы и узнайте общую стоимость. Удобный инструмент для планирования обследования в медицинском центре Альтамед Голицыно.',
  keywords: [
    'калькулятор анализов Голицыно',
    'рассчитать стоимость анализов Голицыно',
    'цена анализов Голицыно',
    'стоимость лабораторных анализов Голицыно',
    'калькулятор стоимости анализов',
    'Московская область калькулятор анализов',
    'Голицыно стоимость анализов'
  ],
  openGraph: {
    title: 'Калькулятор анализов - Рассчитать стоимость анализов | Альтамед Голицыно',
    description: 'Калькулятор анализов - рассчитайте стоимость лабораторных анализов онлайн. Выберите нужные анализы и узнайте общую стоимость.',
    url: 'https://altamed-s.ru/services/lab-tests/calculator',
    siteName: 'Альтамед Голицыно',
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

