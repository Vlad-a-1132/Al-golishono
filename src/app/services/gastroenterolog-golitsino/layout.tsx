import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Гастроэнтеролог Голицыно — приём, консультация, лечение ЖКТ | Альтамед Голицыно',
  description: 'Гастроэнтеролог в Голицыно: приём и консультация врача-гастроэнтеролога, детский гастроэнтеролог, диспансерный приём 60 мин. Клиника Альтамед Голицыно. Запись на приём.',
  keywords: [
    'гастроэнтеролог Голицыно',
    'врач гастроэнтеролог Голицыно',
    'гастроэнтерология Голицыно',
    'лечение ЖКТ Голицыно',
    'приём гастроэнтеролога Голицыно',
    'консультация гастроэнтеролога Голицыно',
    'детский гастроэнтеролог Голицыно',
    'диспансерный приём гастроэнтеролога Голицыно',
    'гастроэнтеролог Альтамед Голицыно',
    'записаться к гастроэнтерологу Голицыно',
    'Московская область гастроэнтеролог Голицыно',
    'гастроэнтеролог Голицыно',
  ],
  openGraph: {
    title: 'Гастроэнтеролог Голицыно — приём, консультация, лечение ЖКТ | Альтамед Голицыно',
    description: 'Гастроэнтеролог в Голицыно: приём врача-гастроэнтеролога, детский гастроэнтеролог, диспансерный приём. Клиника Альтамед Голицыно.',
    url: 'https://altamed-golitsino.ru/services/gastroenterolog-golitsino',
    siteName: 'Альтамед Голицыно',
    images: [
      {
        url: 'https://altamed-golitsino.ru/images/images%20allergoly/gas.webp',
        width: 1200,
        height: 630,
        alt: 'Гастроэнтеролог в Альтамед Голицыно',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Гастроэнтеролог Голицыно — приём, консультация | Альтамед Голицыно',
    description: 'Гастроэнтеролог в Голицыно: приём врача-гастроэнтеролога, лечение ЖКТ. Клиника Альтамед Голицыно.',
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
