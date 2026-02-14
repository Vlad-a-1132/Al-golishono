import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Психиатр Голицыно — приём психиатра и психолога | Альтамед Голицыно',
  description: 'Психиатр и психолог в Голицыно: приём (осмотр, консультация) врача-психиатра и врача-психолога. Клиника Альтамед Голицыно. Запись на приём.',
  keywords: [
    'психиатр Голицыно',
    'психолог Голицыно',
    'приём психиатра Голицыно',
    'консультация психолога Голицыно',
    'Альтамед Голицыно психиатр',
    'записаться к психиатру Голицыно',
    'Московская область психиатр Голицыно',
    'психиатр Голицыно',
  ],
  openGraph: {
    title: 'Психиатр Голицыно — приём психиатра и психолога | Альтамед Голицыно',
    description: 'Психиатр и психолог в Голицыно: приём врача-психиатра и врача-психолога. Клиника Альтамед Голицыно.',
    url: 'https://altamed-golitsino.ru/services/psihiatr-golitsino',
    siteName: 'Альтамед Голицыно',
    images: [{ url: 'https://altamed-golitsino.ru/images/yslugi/terapiay%201.webp', width: 1200, height: 630, alt: 'Психиатр в Альтамед Голицыно' }],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Психиатр Голицыно | Альтамед Голицыно', description: 'Психиатр и психолог в Голицыно: приём, консультация. Клиника Альтамед Голицыно.' },
  alternates: { canonical: 'https://altamed-golitsino.ru/services/psihiatr-golitsino' },
};

export default function PsihiatrGolitsinoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
