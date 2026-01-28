import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CAD/CAM-технологии в Альтамед Голицино - Керамические вкладки, виниры, коронки | Альтамед Голицино',
  description: 'CAD/CAM-технологии в Альтамед Голицино. Керамические вкладки, виниры e-max, коронки из диоксида циркония, прозрачный цирконий Prettau. Современное протезирование в клинике Альтамед Голицино.',
  keywords: [
    'cad cam технологии голицино',
    'керамические вкладки голицино',
    'виниры e-max голицино',
    'циркониевые коронки голицино',
    'prettau голицино',
    'cad cam протезирование голицино'
  ],
  openGraph: {
    title: 'CAD/CAM-технологии в Альтамед Голицино - Керамические вкладки, виниры, коронки | Альтамед Голицино',
    description: 'CAD/CAM-технологии в Альтамед Голицино. Керамические вкладки, виниры e-max, коронки из диоксида циркония, прозрачный цирконий Prettau.',
    url: 'https://altamed-golitsino.ru/services/dentistry/cadcam',
    siteName: 'Альтамед Голицино',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://altamed-golitsino.ru/services/dentistry/cadcam',
  },
};

export default function CADCAMLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

