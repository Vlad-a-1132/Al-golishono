import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ЛОР Голицыно — оториноларинголог, приём, лечение уха горла носа | Альтамед Голицыно',
  description: 'ЛОР (оториноларинголог) в Голицыно: приём врача-оториноларинголога, диспансерный приём, промывание пазух, процедуры при заболеваниях уха, горла и носа. Клиника Альтамед Голицыно. Запись на приём.',
  keywords: [
    'ЛОР Голицыно',
    'оториноларинголог Голицыно',
    'отоларинголог Голицыно',
    'ЛОР-врач Голицыно',
    'приём ЛОР Голицыно',
    'лечение ЛОР-заболеваний Голицыно',
    'промывание пазух Голицыно',
    'ЛОР Альтамед Голицыно',
    'записаться к ЛОРу Голицыно',
    'Московская область ЛОР Голицыно',
    'ЛОР Голицыно',
  ],
  openGraph: {
    title: 'ЛОР Голицыно — оториноларинголог, приём, лечение | Альтамед Голицыно',
    description: 'ЛОР (оториноларинголог) в Голицыно: приём врача, диспансерный приём, процедуры при заболеваниях уха, горла и носа. Клиника Альтамед Голицыно.',
    url: 'https://altamed-golitsino.ru/services/otorinolaringolog-golitsino',
    siteName: 'Альтамед Голицыно',
    images: [
      { url: 'https://altamed-golitsino.ru/images/images%20allergoly/otolaryngologia.webp', width: 1200, height: 630, alt: 'ЛОР в Альтамед Голицыно' },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ЛОР Голицыно — оториноларинголог | Альтамед Голицыно',
    description: 'ЛОР в Голицыно: приём врача-оториноларинголога, лечение уха, горла и носа. Клиника Альтамед Голицыно.',
    images: ['https://altamed-golitsino.ru/images/images%20allergoly/otolaryngologia.webp'],
  },
  alternates: { canonical: 'https://altamed-golitsino.ru/services/otorinolaringolog-golitsino' },
};

export default function OtorinolaringologGolitsinoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
