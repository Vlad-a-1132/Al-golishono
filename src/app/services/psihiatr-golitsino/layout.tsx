import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Психиатр Голицино — приём психиатра и психолога | Альтамед Голицино',
  description: 'Психиатр и психолог в Голицино: приём (осмотр, консультация) врача-психиатра и врача-психолога. Клиника Альтамед Голицино. Запись на приём.',
  keywords: [
    'психиатр Голицино',
    'психолог Голицино',
    'приём психиатра Голицино',
    'консультация психолога Голицино',
    'Альтамед Голицино психиатр',
    'записаться к психиатру Голицино',
    'Московская область психиатр Голицино',
    'психиатр Голицыно',
  ],
  openGraph: {
    title: 'Психиатр Голицино — приём психиатра и психолога | Альтамед Голицино',
    description: 'Психиатр и психолог в Голицино: приём врача-психиатра и врача-психолога. Клиника Альтамед Голицино.',
    url: 'https://altamed-golitsino.ru/services/psihiatr-golitsino',
    siteName: 'Альтамед Голицино',
    images: [{ url: 'https://altamed-golitsino.ru/images/yslugi/terapiay%201.webp', width: 1200, height: 630, alt: 'Психиатр в Альтамед Голицино' }],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Психиатр Голицино | Альтамед Голицино', description: 'Психиатр и психолог в Голицино: приём, консультация. Клиника Альтамед Голицино.' },
  alternates: { canonical: 'https://altamed-golitsino.ru/services/psihiatr-golitsino' },
};

export default function PsihiatrGolitsinoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
