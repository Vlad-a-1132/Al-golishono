import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Удаление зубных отложений в Альтамед Голицыно - Снятие налета и камня | Альтамед Голицыно',
  description: 'Удаление зубных отложений в Альтамед Голицыно. Ультразвуковое удаление зубного камня, Air Flow для снятия налета. Базовые процедуры гигиены полости рта в клинике Альтамед Голицыно.',
  keywords: [
    'удаление зубного камня Голицыно',
    'снятие налета Голицыно',
    'air flow Голицыно',
    'ультразвуковая чистка Голицыно',
    'удаление зубных отложений Голицыно'
  ],
  openGraph: {
    title: 'Удаление зубных отложений в Альтамед Голицыно - Снятие налета и камня | Альтамед Голицыно',
    description: 'Удаление зубных отложений в Альтамед Голицыно. Ультразвуковое удаление зубного камня, Air Flow для снятия налета.',
    url: 'https://altamed-golitsino.ru/services/dentistry/deposits',
    siteName: 'Альтамед Голицыно',
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

