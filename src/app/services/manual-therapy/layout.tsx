import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Мануальная терапия в Голицыно — приём врача 30/60 мин, цены | Альтамед Голицыно',
  description: 'Мануальная терапия в Голицыно: приём врача мануальной терапии 30 и 60 мин, дети до 14 лет. Лечение позвоночника и суставов, остеохондроз, грыжи. Прайс, запись в Альтамед Голицыно.',
  keywords: [
    'мануальная терапия Голицыно',
    'мануальный терапевт Голицыно',
    'приём мануального терапевта Голицыно',
    'лечение позвоночника Голицыно',
    'лечение суставов Голицыно',
    'Альтамед Голицыно мануальная терапия',
    'записаться к мануальному терапевту Голицыно',
  ],
  openGraph: {
    title: 'Мануальная терапия в Голицыно — приём врача, прайс | Альтамед Голицыно',
    description: 'Мануальная терапия в Голицыно: приём врача 30/60 мин, дети. Лечение позвоночника и суставов. Клиника Альтамед Голицыно.',
    url: 'https://altamed-golitsino.ru/services/manual-therapy',
    siteName: 'Альтамед Голицыно',
    images: [{ url: 'https://altamed-golitsino.ru/images/yslugi/massaj.webp', width: 1200, height: 630, alt: 'Мануальная терапия в Альтамед Голицыно' }],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Мануальная терапия Голицыно | Альтамед Голицыно', description: 'Мануальная терапия в Голицыно: приём врача, лечение позвоночника и суставов.' },
  alternates: { canonical: 'https://altamed-golitsino.ru/services/manual-therapy' },
};

export default function ManualTherapyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
