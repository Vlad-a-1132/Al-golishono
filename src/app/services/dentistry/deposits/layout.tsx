import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Удаление зубных отложений в Альтамед Голицино - Снятие налета и камня | Альтамед Голицино',
  description: 'Удаление зубных отложений в Альтамед Голицино. Ультразвуковое удаление зубного камня, Air Flow для снятия налета. Базовые процедуры гигиены полости рта в клинике Альтамед Голицино.',
  keywords: [
    'удаление зубного камня голицино',
    'снятие налета голицино',
    'air flow голицино',
    'ультразвуковая чистка голицино',
    'удаление зубных отложений голицино'
  ],
  openGraph: {
    title: 'Удаление зубных отложений в Альтамед Голицино - Снятие налета и камня | Альтамед Голицино',
    description: 'Удаление зубных отложений в Альтамед Голицино. Ультразвуковое удаление зубного камня, Air Flow для снятия налета.',
    url: 'https://altamed-golitsino.ru/services/dentistry/deposits',
    siteName: 'Альтамед Голицино',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://altamed-golitsino.ru/services/dentistry/deposits',
  },
};

export default function DepositsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

