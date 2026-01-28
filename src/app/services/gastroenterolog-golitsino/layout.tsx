import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Гастроэнтеролог Голицино — приём, консультация, лечение ЖКТ | Альтамед Голицино',
  description: 'Гастроэнтеролог в Голицино: приём и консультация врача-гастроэнтеролога, детский гастроэнтеролог, диспансерный приём 60 мин. Клиника Альтамед Голицино. Запись на приём.',
  keywords: [
    'гастроэнтеролог Голицино',
    'врач гастроэнтеролог Голицино',
    'гастроэнтерология Голицино',
    'лечение ЖКТ Голицино',
    'приём гастроэнтеролога Голицино',
    'консультация гастроэнтеролога Голицино',
    'детский гастроэнтеролог Голицино',
    'диспансерный приём гастроэнтеролога Голицино',
    'гастроэнтеролог Альтамед Голицино',
    'записаться к гастроэнтерологу Голицино',
    'Московская область гастроэнтеролог Голицино',
    'гастроэнтеролог Голицыно',
  ],
  openGraph: {
    title: 'Гастроэнтеролог Голицино — приём, консультация, лечение ЖКТ | Альтамед Голицино',
    description: 'Гастроэнтеролог в Голицино: приём врача-гастроэнтеролога, детский гастроэнтеролог, диспансерный приём. Клиника Альтамед Голицино.',
    url: 'https://altamed-golitsino.ru/services/gastroenterolog-golitsino',
    siteName: 'Альтамед Голицино',
    images: [
      {
        url: 'https://altamed-golitsino.ru/images/images%20allergoly/gas.webp',
        width: 1200,
        height: 630,
        alt: 'Гастроэнтеролог в Альтамед Голицино',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Гастроэнтеролог Голицино — приём, консультация | Альтамед Голицино',
    description: 'Гастроэнтеролог в Голицино: приём врача-гастроэнтеролога, лечение ЖКТ. Клиника Альтамед Голицино.',
    images: ['https://altamed-golitsino.ru/images/images%20allergoly/gas.webp'],
  },
  alternates: {
    canonical: 'https://altamed-golitsino.ru/services/gastroenterolog-golitsino',
  },
};

export default function GastroenterologGolitsinoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
