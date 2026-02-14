import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Кардиолог Голицыно — приём, консультация, тропонины | Альтамед Голицыно',
  description: 'Кардиолог в Голицыно: приём (осмотр, консультация) врача-кардиолога, экспресс-исследование уровня тропонинов в крови. Клиника Альтамед Голицыно. Запись на приём.',
  keywords: [
    'кардиолог Голицыно',
    'кардиология Голицыно',
    'приём кардиолога Голицыно',
    'консультация кардиолога Голицыно',
    'тропонины Голицыно',
    'Альтамед Голицыно кардиолог',
    'записаться к кардиологу Голицыно',
    'Московская область кардиолог Голицыно',
    'кардиолог Голицыно',
  ],
  openGraph: {
    title: 'Кардиолог Голицыно — приём, консультация, тропонины | Альтамед Голицыно',
    description: 'Кардиолог в Голицыно: приём врача-кардиолога, экспресс-исследование тропонинов. Клиника Альтамед Голицыно.',
    url: 'https://altamed-golitsino.ru/services/cardiology',
    siteName: 'Альтамед Голицыно',
    images: [{ url: 'https://altamed-golitsino.ru/images/images%20allergoly/kardiolog.webp', width: 1200, height: 630, alt: 'Кардиолог в Альтамед Голицыно' }],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Кардиолог Голицыно | Альтамед Голицыно', description: 'Кардиолог в Голицыно: приём, консультация, тропонины. Клиника Альтамед Голицыно.' },
  alternates: { canonical: 'https://altamed-golitsino.ru/services/cardiology' },
};

export default function CardiologyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
