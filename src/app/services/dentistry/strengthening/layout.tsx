import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Укрепление тканей зуба в Альтамед Голицино - Фторирование эмали | Альтамед Голицино',
  description: 'Укрепление тканей зуба в Альтамед Голицино. Глубокое фторирование эмали, покрытие фторсодержащими препаратами, запечатывание фиссур. Профилактика кариеса в клинике Альтамед Голицино.',
  keywords: [
    'фторирование зубов голицино',
    'укрепление эмали голицино',
    'глубокое фторирование голицино',
    'запечатывание фиссур голицино',
    'профилактика кариеса голицино',
    'флюокаль гель голицино'
  ],
  openGraph: {
    title: 'Укрепление тканей зуба в Альтамед Голицино - Фторирование эмали | Альтамед Голицино',
    description: 'Укрепление тканей зуба в Альтамед Голицино. Глубокое фторирование эмали, покрытие фторсодержащими препаратами, запечатывание фиссур.',
    url: 'https://altamed-golitsino.ru/services/dentistry/strengthening',
    siteName: 'Альтамед Голицино',
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

