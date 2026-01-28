import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Удаление зубов в Альтамед Голицино - Простое и сложное удаление | Альтамед Голицино',
  description: 'Удаление зубов в Альтамед Голицино. Простое и сложное удаление зубов, удаление ретинированных зубов, сопутствующие процедуры. Безболезненное удаление в клинике Альтамед Голицино.',
  keywords: [
    'удаление зубов голицино',
    'удаление зуба голицино',
    'сложное удаление зуба голицино',
    'удаление ретинированного зуба голицино',
    'удаление зуба мудрости голицино'
  ],
  openGraph: {
    title: 'Удаление зубов в Альтамед Голицино - Простое и сложное удаление | Альтамед Голицино',
    description: 'Удаление зубов в Альтамед Голицино. Простое и сложное удаление зубов, удаление ретинированных зубов.',
    url: 'https://altamed-golitsino.ru/services/dentistry/extraction',
    siteName: 'Альтамед Голицино',
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

