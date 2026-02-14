import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Укрепление тканей зуба в Альтамед Голицыно - Фторирование эмали | Альтамед Голицыно',
  description: 'Укрепление тканей зуба в Альтамед Голицыно. Глубокое фторирование эмали, покрытие фторсодержащими препаратами, запечатывание фиссур. Профилактика кариеса в клинике Альтамед Голицыно.',
  keywords: [
    'фторирование зубов Голицыно',
    'укрепление эмали Голицыно',
    'глубокое фторирование Голицыно',
    'запечатывание фиссур Голицыно',
    'профилактика кариеса Голицыно',
    'флюокаль гель Голицыно'
  ],
  openGraph: {
    title: 'Укрепление тканей зуба в Альтамед Голицыно - Фторирование эмали | Альтамед Голицыно',
    description: 'Укрепление тканей зуба в Альтамед Голицыно. Глубокое фторирование эмали, покрытие фторсодержащими препаратами, запечатывание фиссур.',
    url: 'https://altamed-golitsino.ru/services/dentistry/strengthening',
    siteName: 'Альтамед Голицыно',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://altamed-golitsino.ru/services/dentistry/strengthening',
  },
};

export default function StrengtheningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

