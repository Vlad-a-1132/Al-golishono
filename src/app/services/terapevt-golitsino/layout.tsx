import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Терапевт Голицино — приём, консультация, справки | Альтамед Голицино',
  description: 'Терапевт в Голицино: приём и консультация врача-терапевта, оформление справок (070/у, 072/у, 095/у), диспансерный приём. Клиника Альтамед Голицино. Запись на приём к терапевту.',
  keywords: [
    'терапевт Голицино',
    'врач терапевт Голицино',
    'терапия Голицино',
    'приём терапевта Голицино',
    'консультация терапевта Голицино',
    'справка 070 у Голицино',
    'санаторно-курортная карта Голицино',
    'справка 095 у Голицино',
    'диспансерный приём терапевта Голицино',
    'терапевт Альтамед Голицино',
    'записаться к терапевту Голицино',
    'Московская область терапевт Голицино',
    'терапевт Голицыно'
  ],
  openGraph: {
    title: 'Терапевт Голицино — приём, консультация, справки | Альтамед Голицино',
    description: 'Терапевт в Голицино: приём и консультация врача-терапевта, оформление справок. Клиника Альтамед Голицино.',
    url: 'https://altamed-golitsino.ru/services/terapevt-golitsino',
    siteName: 'Альтамед Голицино',
    images: [
      {
        url: 'https://altamed-golitsino.ru/images/yslugi/terapiay-1.webp',
        width: 1200,
        height: 630,
        alt: 'Терапевт в Альтамед Голицино',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Терапевт Голицино — приём, консультация | Альтамед Голицино',
    description: 'Терапевт в Голицино: приём врача-терапевта, оформление справок. Клиника Альтамед Голицино.',
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
