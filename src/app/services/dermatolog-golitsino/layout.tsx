import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Дерматолог Голицино — приём, дерматоскопия, удаление новообразований | Альтамед Голицино',
  description: 'Дерматолог в Голицино: приём врача-дерматовенеролога, дерматоскопия, удаление новообразований кожи, лечение акне и кожных заболеваний. Клиника Альтамед Голицино. Запись на приём.',
  keywords: [
    'дерматолог Голицино',
    'дерматовенеролог Голицино',
    'дерматология Голицино',
    'дерматоскопия Голицино',
    'удаление родинок Голицино',
    'дерматолог Альтамед Голицино',
    'записаться к дерматологу Голицино',
    'Московская область дерматолог Голицино',
    'дерматолог Голицыно',
  ],
  openGraph: {
    title: 'Дерматолог Голицино — приём, дерматоскопия | Альтамед Голицино',
    description: 'Дерматолог в Голицино: приём врача-дерматовенеролога, дерматоскопия, удаление новообразований. Клиника Альтамед Голицино.',
    url: 'https://altamed-golitsino.ru/services/dermatolog-golitsino',
    siteName: 'Альтамед Голицино',
    images: [{ url: 'https://altamed-golitsino.ru/images/images%20allergoly/Dermat1ology.webp', width: 1200, height: 630, alt: 'Дерматолог в Альтамед Голицино' }],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Дерматолог Голицино | Альтамед Голицино', description: 'Дерматолог в Голицино: приём, дерматоскопия, удаление новообразований. Клиника Альтамед Голицино.', images: ['https://altamed-golitsino.ru/images/images%20allergoly/Dermat1ology.webp'] },
  alternates: { canonical: 'https://altamed-golitsino.ru/services/dermatolog-golitsino' },
};

export default function DermatologGolitsinoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
