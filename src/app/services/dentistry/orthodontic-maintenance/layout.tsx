import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Обслуживание ортодонтических аппаратов в Альтамед Голицино - Ремонт брекетов | Стоматология Альтамед Голицино',
  description: 'Обслуживание ортодонтических аппаратов в Альтамед Голицино - ремонт брекетов, замена дуг, лигатур, активация аппаратов. Полный спектр услуг по обслуживанию брекет-систем. Запись на прием.',
  keywords: [
    'обслуживание брекетов Альтамед Голицино',
    'ремонт брекетов Альтамед Голицино',
    'замена дуги брекетов Альтамед Голицино',
    'активация брекетов Альтамед Голицино',
    'ортодонтия Альтамед Голицино',
    'записаться к ортодонту Альтамед Голицино',
    'Московская область ортодонтия',
    'Голицино брекеты'
  ],
  openGraph: {
    title: 'Обслуживание ортодонтических аппаратов в Альтамед Голицино - Ремонт брекетов | Альтамед Голицино',
    description: 'Обслуживание ортодонтических аппаратов в Альтамед Голицино - ремонт брекетов, замена дуг, лигатур.',
    url: 'https://altamed-golitsino.ru/services/dentistry/orthodontic-maintenance',
    siteName: 'Альтамед Голицино',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://altamed-golitsino.ru/services/dentistry/orthodontic-maintenance',
  },
};

export default function OrthodonticMaintenanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

