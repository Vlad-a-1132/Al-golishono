import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Стоматологические конструкции в Альтамед Голицино - Изготовление и ремонт протезов | Альтамед Голицино',
  description: 'Стоматологические конструкции в Альтамед Голицино. Изготовление съемных протезов, коронок, ремонт и коррекция протезов. Профессиональное изготовление ортопедических конструкций в клинике Альтамед Голицино.',
  keywords: [
    'стоматологические конструкции голицино',
    'изготовление протезов голицино',
    'ремонт протезов голицино',
    'съемные протезы голицино',
    'изготовление коронок голицино'
  ],
  openGraph: {
    title: 'Стоматологические конструкции в Альтамед Голицино - Изготовление и ремонт протезов | Альтамед Голицино',
    description: 'Стоматологические конструкции в Альтамед Голицино. Изготовление съемных протезов, коронок, ремонт и коррекция протезов.',
    url: 'https://altamed-golitsino.ru/services/dentistry/constructions',
    siteName: 'Альтамед Голицино',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://altamed-golitsino.ru/services/dentistry/constructions',
  },
};

export default function ConstructionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

