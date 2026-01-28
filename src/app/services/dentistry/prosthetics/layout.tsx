import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Протезирование зубов в Альтамед Голицино - Коронки на имплантатах, All-on-4 | Альтамед Голицино',
  description: 'Протезирование зубов в Альтамед Голицино. Протезирование на имплантатах, коронки из диоксида циркония, металлокерамика, протез All-on-4. Каппы при бруксизме в клинике Альтамед Голицино.',
  keywords: [
    'протезирование зубов голицино',
    'коронки на имплантатах голицино',
    'протез all-on-4 голицино',
    'циркониевые коронки голицино',
    'каппа при бруксизме голицино'
  ],
  openGraph: {
    title: 'Протезирование зубов в Альтамед Голицино - Коронки на имплантатах, All-on-4 | Альтамед Голицино',
    description: 'Протезирование зубов в Альтамед Голицино. Протезирование на имплантатах, коронки из диоксида циркония, металлокерамика, протез All-on-4.',
    url: 'https://altamed-golitsino.ru/services/dentistry/prosthetics',
    siteName: 'Альтамед Голицино',
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

