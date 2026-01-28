import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Экстренная хирургия в Альтамед Голицино - Гнойная хирургия | Альтамед Голицино',
  description: 'Экстренная и гнойная хирургия в Альтамед Голицино. Хирургическая обработка ран, вскрытие абсцессов, лечение альвеолита. Экстренная помощь в клинике Альтамед Голицино.',
  keywords: [
    'экстренная хирургия голицино',
    'гнойная хирургия голицино',
    'лечение альвеолита голицино',
    'вскрытие абсцесса голицино',
    'хирургическая обработка раны голицино'
  ],
  openGraph: {
    title: 'Экстренная хирургия в Альтамед Голицино - Гнойная хирургия | Альтамед Голицино',
    description: 'Экстренная и гнойная хирургия в Альтамед Голицино. Хирургическая обработка ран, вскрытие абсцессов, лечение альвеолита.',
    url: 'https://altamed-golitsino.ru/services/dentistry/emergency',
    siteName: 'Альтамед Голицино',
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

