import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Дерматолог Голицыно — приём, дерматоскопия, удаление новообразований | Альтамед Голицыно',
  description: 'Дерматолог в Голицыно: приём врача-дерматовенеролога, дерматоскопия, удаление новообразований кожи, лечение акне и кожных заболеваний. Клиника Альтамед Голицыно. Запись на приём.',
  keywords: [
    'дерматолог Голицыно',
    'дерматовенеролог Голицыно',
    'дерматология Голицыно',
    'дерматоскопия Голицыно',
    'удаление родинок Голицыно',
    'дерматолог Альтамед Голицыно',
    'записаться к дерматологу Голицыно',
    'Московская область дерматолог Голицыно',
    'дерматолог Голицыно',
  ],
  openGraph: {
    title: 'Дерматолог Голицыно — приём, дерматоскопия | Альтамед Голицыно',
    description: 'Дерматолог в Голицыно: приём врача-дерматовенеролога, дерматоскопия, удаление новообразований. Клиника Альтамед Голицыно.',
    url: 'https://altamed-golitsino.ru/services/dermatolog-golitsino',
    siteName: 'Альтамед Голицыно',
    images: [{ url: 'https://altamed-golitsino.ru/images/images%20allergoly/Dermat1ology.webp', width: 1200, height: 630, alt: 'Дерматолог в Альтамед Голицыно' }],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Дерматолог Голицыно | Альтамед Голицыно', description: 'Дерматолог в Голицыно: приём, дерматоскопия, удаление новообразований. Клиника Альтамед Голицыно.', images: ['https://altamed-golitsino.ru/images/images%20allergoly/Dermat1ology.webp'] },
  alternates: { canonical: 'https://altamed-golitsino.ru/services/dermatolog-golitsino' },
};

export default function DermatologGolitsinoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
