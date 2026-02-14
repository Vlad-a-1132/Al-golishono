import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Протезирование зубов в Альтамед Голицыно - Коронки на имплантатах, All-on-4 | Альтамед Голицыно',
  description: 'Протезирование зубов в Альтамед Голицыно. Протезирование на имплантатах, коронки из диоксида циркония, металлокерамика, протез All-on-4. Каппы при бруксизме в клинике Альтамед Голицыно.',
  keywords: [
    'протезирование зубов Голицыно',
    'коронки на имплантатах Голицыно',
    'протез all-on-4 Голицыно',
    'циркониевые коронки Голицыно',
    'каппа при бруксизме Голицыно'
  ],
  openGraph: {
    title: 'Протезирование зубов в Альтамед Голицыно - Коронки на имплантатах, All-on-4 | Альтамед Голицыно',
    description: 'Протезирование зубов в Альтамед Голицыно. Протезирование на имплантатах, коронки из диоксида циркония, металлокерамика, протез All-on-4.',
    url: 'https://altamed-golitsino.ru/services/dentistry/prosthetics',
    siteName: 'Альтамед Голицыно',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://altamed-golitsino.ru/services/dentistry/prosthetics',
  },
};

export default function ProstheticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

