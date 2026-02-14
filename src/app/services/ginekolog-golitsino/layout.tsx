import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Гинеколог Голицыно — приём, кольпоскопия, радиоволновая хирургия | Альтамед Голицыно',
  description: 'Гинеколог в Голицыно: приём врача-акушера-гинеколога, кольпоскопия, мазки, ВМС, радиоволновая хирургия, гинекологические манипуляции. Клиника Альтамед Голицыно. Запись на приём.',
  keywords: [
    'гинеколог Голицыно',
    'акушер-гинеколог Голицыно',
    'гинекология Голицыно',
    'кольпоскопия Голицыно',
    'гинеколог Альтамед Голицыно',
    'записаться к гинекологу Голицыно',
    'Московская область гинеколог Голицыно',
    'гинеколог Голицыно',
  ],
  openGraph: {
    title: 'Гинеколог Голицыно — приём, кольпоскопия | Альтамед Голицыно',
    description: 'Гинеколог в Голицыно: приём врача-акушера-гинеколога, кольпоскопия, гинекологические манипуляции, радиоволновая хирургия. Клиника Альтамед Голицыно.',
    url: 'https://altamed-golitsino.ru/services/ginekolog-golitsino',
    siteName: 'Альтамед Голицыно',
    images: [{ url: 'https://altamed-golitsino.ru/images/images%20allergoly/ginokologia.webp', width: 1200, height: 630, alt: 'Гинеколог в Альтамед Голицыно' }],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Гинеколог Голицыно | Альтамед Голицыно', description: 'Гинеколог в Голицыно: приём, кольпоскопия, гинекологические манипуляции. Клиника Альтамед Голицыно.', images: ['https://altamed-golitsino.ru/images/images%20allergoly/ginokologia.webp'] },
  alternates: { canonical: 'https://altamed-golitsino.ru/services/ginekolog-golitsino' },
};

export default function GinekologGolitsinoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
