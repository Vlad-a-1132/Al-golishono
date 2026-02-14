import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CAD/CAM-технологии в Альтамед Голицыно - Керамические вкладки, виниры, коронки | Альтамед Голицыно',
  description: 'CAD/CAM-технологии в Альтамед Голицыно. Керамические вкладки, виниры e-max, коронки из диоксида циркония, прозрачный цирконий Prettau. Современное протезирование в клинике Альтамед Голицыно.',
  keywords: [
    'cad cam технологии Голицыно',
    'керамические вкладки Голицыно',
    'виниры e-max Голицыно',
    'циркониевые коронки Голицыно',
    'prettau Голицыно',
    'cad cam протезирование Голицыно'
  ],
  openGraph: {
    title: 'CAD/CAM-технологии в Альтамед Голицыно - Керамические вкладки, виниры, коронки | Альтамед Голицыно',
    description: 'CAD/CAM-технологии в Альтамед Голицыно. Керамические вкладки, виниры e-max, коронки из диоксида циркония, прозрачный цирконий Prettau.',
    url: 'https://altamed-golitsino.ru/services/dentistry/cadcam',
    siteName: 'Альтамед Голицыно',
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

