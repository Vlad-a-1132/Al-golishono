import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Кардиолог Голицино — приём, консультация, тропонины | Альтамед Голицино',
  description: 'Кардиолог в Голицино: приём (осмотр, консультация) врача-кардиолога, экспресс-исследование уровня тропонинов в крови. Клиника Альтамед Голицино. Запись на приём.',
  keywords: [
    'кардиолог Голицино',
    'кардиология Голицино',
    'приём кардиолога Голицино',
    'консультация кардиолога Голицино',
    'тропонины Голицино',
    'Альтамед Голицино кардиолог',
    'записаться к кардиологу Голицино',
    'Московская область кардиолог Голицино',
    'кардиолог Голицыно',
  ],
  openGraph: {
    title: 'Кардиолог Голицино — приём, консультация, тропонины | Альтамед Голицино',
    description: 'Кардиолог в Голицино: приём врача-кардиолога, экспресс-исследование тропонинов. Клиника Альтамед Голицино.',
    url: 'https://altamed-golitsino.ru/services/cardiology',
    siteName: 'Альтамед Голицино',
    images: [{ url: 'https://altamed-golitsino.ru/images/images%20allergoly/kardiolog.webp', width: 1200, height: 630, alt: 'Кардиолог в Альтамед Голицино' }],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Кардиолог Голицино | Альтамед Голицино', description: 'Кардиолог в Голицино: приём, консультация, тропонины. Клиника Альтамед Голицино.' },
  alternates: { canonical: 'https://altamed-golitsino.ru/services/cardiology' },
};

export default function CardiologyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
