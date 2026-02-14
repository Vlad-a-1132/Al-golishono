import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Эстетическая стоматология в Альтамед Голицыно - Отбеливание зубов ZOOM4 | Альтамед Голицыно',
  description: 'Эстетическая стоматология в Альтамед Голицыно. Профессиональное отбеливание зубов системой PHILIPS ZOOM4. Улучшение внешнего вида зубов в клинике Альтамед Голицыно.',
  keywords: [
    'эстетическая стоматология Голицыно',
    'отбеливание зубов Голицыно',
    'zoom4 Голицыно',
    'отбеливание zoom Голицыно',
    'профессиональное отбеливание зубов Голицыно',
    'philips zoom Голицыно'
  ],
  openGraph: {
    title: 'Эстетическая стоматология в Альтамед Голицыно - Отбеливание зубов ZOOM4 | Альтамед Голицыно',
    description: 'Эстетическая стоматология в Альтамед Голицыно. Профессиональное отбеливание зубов системой PHILIPS ZOOM4.',
    url: 'https://altamed-golitsino.ru/services/dentistry/aesthetic',
    siteName: 'Альтамед Голицыно',
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

