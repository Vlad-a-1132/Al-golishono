import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Терапевт Голицыно — приём, консультация, справки | Альтамед Голицыно',
  description: 'Терапевт в Голицыно: приём и консультация врача-терапевта, оформление справок (070/у, 072/у, 095/у), диспансерный приём. Клиника Альтамед Голицыно. Запись на приём к терапевту.',
  keywords: [
    'терапевт Голицыно',
    'врач терапевт Голицыно',
    'терапия Голицыно',
    'приём терапевта Голицыно',
    'консультация терапевта Голицыно',
    'справка 070 у Голицыно',
    'санаторно-курортная карта Голицыно',
    'справка 095 у Голицыно',
    'диспансерный приём терапевта Голицыно',
    'терапевт Альтамед Голицыно',
    'записаться к терапевту Голицыно',
    'Московская область терапевт Голицыно',
    'терапевт Голицыно'
  ],
  openGraph: {
    title: 'Терапевт Голицыно — приём, консультация, справки | Альтамед Голицыно',
    description: 'Терапевт в Голицыно: приём и консультация врача-терапевта, оформление справок. Клиника Альтамед Голицыно.',
    url: 'https://altamed-golitsino.ru/services/terapevt-golitsino',
    siteName: 'Альтамед Голицыно',
    images: [
      {
        url: 'https://altamed-golitsino.ru/images/yslugi/terapiay-1.webp',
        width: 1200,
        height: 630,
        alt: 'Терапевт в Альтамед Голицыно',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Терапевт Голицыно — приём, консультация | Альтамед Голицыно',
    description: 'Терапевт в Голицыно: приём врача-терапевта, оформление справок. Клиника Альтамед Голицыно.',
    images: ['https://altamed-golitsino.ru/images/yslugi/terapiay-1.webp'],
  },
  alternates: {
    canonical: 'https://altamed-golitsino.ru/services/terapevt-golitsino',
  },
};

export default function TerapevtGolitsinoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
