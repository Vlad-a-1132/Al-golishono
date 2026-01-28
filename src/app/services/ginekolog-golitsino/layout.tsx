import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Гинеколог Голицино — приём, кольпоскопия, радиоволновая хирургия | Альтамед Голицино',
  description: 'Гинеколог в Голицино: приём врача-акушера-гинеколога, кольпоскопия, мазки, ВМС, радиоволновая хирургия, гинекологические манипуляции. Клиника Альтамед Голицино. Запись на приём.',
  keywords: [
    'гинеколог Голицино',
    'акушер-гинеколог Голицино',
    'гинекология Голицино',
    'кольпоскопия Голицино',
    'гинеколог Альтамед Голицино',
    'записаться к гинекологу Голицино',
    'Московская область гинеколог Голицино',
    'гинеколог Голицыно',
  ],
  openGraph: {
    title: 'Гинеколог Голицино — приём, кольпоскопия | Альтамед Голицино',
    description: 'Гинеколог в Голицино: приём врача-акушера-гинеколога, кольпоскопия, гинекологические манипуляции, радиоволновая хирургия. Клиника Альтамед Голицино.',
    url: 'https://altamed-golitsino.ru/services/ginekolog-golitsino',
    siteName: 'Альтамед Голицино',
    images: [{ url: 'https://altamed-golitsino.ru/images/images%20allergoly/ginokologia.webp', width: 1200, height: 630, alt: 'Гинеколог в Альтамед Голицино' }],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Гинеколог Голицино | Альтамед Голицино', description: 'Гинеколог в Голицино: приём, кольпоскопия, гинекологические манипуляции. Клиника Альтамед Голицино.', images: ['https://altamed-golitsino.ru/images/images%20allergoly/ginokologia.webp'] },
  alternates: { canonical: 'https://altamed-golitsino.ru/services/ginekolog-golitsino' },
};

export default function GinekologGolitsinoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
