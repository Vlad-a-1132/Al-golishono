import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Стоматологические конструкции в Альтамед Голицыно - Изготовление и ремонт протезов | Альтамед Голицыно',
  description: 'Стоматологические конструкции в Альтамед Голицыно. Изготовление съемных протезов, коронок, ремонт и коррекция протезов. Профессиональное изготовление ортопедических конструкций в клинике Альтамед Голицыно.',
  keywords: [
    'стоматологические конструкции Голицыно',
    'изготовление протезов Голицыно',
    'ремонт протезов Голицыно',
    'съемные протезы Голицыно',
    'изготовление коронок Голицыно'
  ],
  openGraph: {
    title: 'Стоматологические конструкции в Альтамед Голицыно - Изготовление и ремонт протезов | Альтамед Голицыно',
    description: 'Стоматологические конструкции в Альтамед Голицыно. Изготовление съемных протезов, коронок, ремонт и коррекция протезов.',
    url: 'https://altamed-golitsino.ru/services/dentistry/constructions',
    siteName: 'Альтамед Голицыно',
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

