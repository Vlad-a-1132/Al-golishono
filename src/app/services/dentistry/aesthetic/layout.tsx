import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Эстетическая стоматология в Альтамед Голицино - Отбеливание зубов ZOOM4 | Альтамед Голицино',
  description: 'Эстетическая стоматология в Альтамед Голицино. Профессиональное отбеливание зубов системой PHILIPS ZOOM4. Улучшение внешнего вида зубов в клинике Альтамед Голицино.',
  keywords: [
    'эстетическая стоматология голицино',
    'отбеливание зубов голицино',
    'zoom4 голицино',
    'отбеливание zoom голицино',
    'профессиональное отбеливание зубов голицино',
    'philips zoom голицино'
  ],
  openGraph: {
    title: 'Эстетическая стоматология в Альтамед Голицино - Отбеливание зубов ZOOM4 | Альтамед Голицино',
    description: 'Эстетическая стоматология в Альтамед Голицино. Профессиональное отбеливание зубов системой PHILIPS ZOOM4.',
    url: 'https://altamed-golitsino.ru/services/dentistry/aesthetic',
    siteName: 'Альтамед Голицино',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://altamed-golitsino.ru/services/dentistry/aesthetic',
  },
};

export default function AestheticLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

