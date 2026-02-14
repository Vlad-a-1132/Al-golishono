import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Экстренная хирургия в Альтамед Голицыно - Гнойная хирургия | Альтамед Голицыно',
  description: 'Экстренная и гнойная хирургия в Альтамед Голицыно. Хирургическая обработка ран, вскрытие абсцессов, лечение альвеолита. Экстренная помощь в клинике Альтамед Голицыно.',
  keywords: [
    'экстренная хирургия Голицыно',
    'гнойная хирургия Голицыно',
    'лечение альвеолита Голицыно',
    'вскрытие абсцесса Голицыно',
    'хирургическая обработка раны Голицыно'
  ],
  openGraph: {
    title: 'Экстренная хирургия в Альтамед Голицыно - Гнойная хирургия | Альтамед Голицыно',
    description: 'Экстренная и гнойная хирургия в Альтамед Голицыно. Хирургическая обработка ран, вскрытие абсцессов, лечение альвеолита.',
    url: 'https://altamed-golitsino.ru/services/dentistry/emergency',
    siteName: 'Альтамед Голицыно',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://altamed-golitsino.ru/services/dentistry/emergency',
  },
};

export default function EmergencyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

