import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Удаление зубов в Альтамед Голицыно - Простое и сложное удаление | Альтамед Голицыно',
  description: 'Удаление зубов в Альтамед Голицыно. Простое и сложное удаление зубов, удаление ретинированных зубов, сопутствующие процедуры. Безболезненное удаление в клинике Альтамед Голицыно.',
  keywords: [
    'удаление зубов Голицыно',
    'удаление зуба Голицыно',
    'сложное удаление зуба Голицыно',
    'удаление ретинированного зуба Голицыно',
    'удаление зуба мудрости Голицыно'
  ],
  openGraph: {
    title: 'Удаление зубов в Альтамед Голицыно - Простое и сложное удаление | Альтамед Голицыно',
    description: 'Удаление зубов в Альтамед Голицыно. Простое и сложное удаление зубов, удаление ретинированных зубов.',
    url: 'https://altamed-golitsino.ru/services/dentistry/extraction',
    siteName: 'Альтамед Голицыно',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://altamed-golitsino.ru/services/dentistry/extraction',
  },
};

export default function ExtractionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

