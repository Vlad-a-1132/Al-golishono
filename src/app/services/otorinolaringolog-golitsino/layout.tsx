import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ЛОР Голицино — оториноларинголог, приём, лечение уха горла носа | Альтамед Голицино',
  description: 'ЛОР (оториноларинголог) в Голицино: приём врача-оториноларинголога, диспансерный приём, промывание пазух, процедуры при заболеваниях уха, горла и носа. Клиника Альтамед Голицино. Запись на приём.',
  keywords: [
    'ЛОР Голицино',
    'оториноларинголог Голицино',
    'отоларинголог Голицино',
    'ЛОР-врач Голицино',
    'приём ЛОР Голицино',
    'лечение ЛОР-заболеваний Голицино',
    'промывание пазух Голицино',
    'ЛОР Альтамед Голицино',
    'записаться к ЛОРу Голицино',
    'Московская область ЛОР Голицино',
    'ЛОР Голицыно',
  ],
  openGraph: {
    title: 'ЛОР Голицино — оториноларинголог, приём, лечение | Альтамед Голицино',
    description: 'ЛОР (оториноларинголог) в Голицино: приём врача, диспансерный приём, процедуры при заболеваниях уха, горла и носа. Клиника Альтамед Голицино.',
    url: 'https://altamed-golitsino.ru/services/otorinolaringolog-golitsino',
    siteName: 'Альтамед Голицино',
    images: [
      { url: 'https://altamed-golitsino.ru/images/images%20allergoly/otolaryngologia.webp', width: 1200, height: 630, alt: 'ЛОР в Альтамед Голицино' },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ЛОР Голицино — оториноларинголог | Альтамед Голицино',
    description: 'ЛОР в Голицино: приём врача-оториноларинголога, лечение уха, горла и носа. Клиника Альтамед Голицино.',
    images: ['https://altamed-golitsino.ru/images/images%20allergoly/otolaryngologia.webp'],
  },
  alternates: { canonical: 'https://altamed-golitsino.ru/services/otorinolaringolog-golitsino' },
};

export default function OtorinolaringologGolitsinoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
