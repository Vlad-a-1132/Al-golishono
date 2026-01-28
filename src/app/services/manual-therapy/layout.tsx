import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Мануальная терапия в Голицино — приём врача 30/60 мин, цены | Альтамед Голицино',
  description: 'Мануальная терапия в Голицино: приём врача мануальной терапии 30 и 60 мин, дети до 14 лет. Лечение позвоночника и суставов, остеохондроз, грыжи. Прайс, запись в Альтамед Голицино.',
  keywords: [
    'мануальная терапия Голицино',
    'мануальный терапевт Голицино',
    'приём мануального терапевта Голицино',
    'лечение позвоночника Голицино',
    'лечение суставов Голицино',
    'Альтамед Голицино мануальная терапия',
    'записаться к мануальному терапевту Голицино',
  ],
  openGraph: {
    title: 'Мануальная терапия в Голицино — приём врача, прайс | Альтамед Голицино',
    description: 'Мануальная терапия в Голицино: приём врача 30/60 мин, дети. Лечение позвоночника и суставов. Клиника Альтамед Голицино.',
    url: 'https://altamed-golitsino.ru/services/manual-therapy',
    siteName: 'Альтамед Голицино',
    images: [{ url: 'https://altamed-golitsino.ru/images/yslugi/massaj.webp', width: 1200, height: 630, alt: 'Мануальная терапия в Альтамед Голицино' }],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Мануальная терапия Голицино | Альтамед Голицино', description: 'Мануальная терапия в Голицино: приём врача, лечение позвоночника и суставов.' },
  alternates: { canonical: 'https://altamed-golitsino.ru/services/manual-therapy' },
};

export default function ManualTherapyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
