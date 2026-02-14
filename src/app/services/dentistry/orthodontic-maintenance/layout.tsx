import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Обслуживание ортодонтических аппаратов в Альтамед Голицыно - Ремонт брекетов | Стоматология Альтамед Голицыно',
  description: 'Обслуживание ортодонтических аппаратов в Альтамед Голицыно - ремонт брекетов, замена дуг, лигатур, активация аппаратов. Полный спектр услуг по обслуживанию брекет-систем. Запись на прием.',
  keywords: [
    'обслуживание брекетов Альтамед Голицыно',
    'ремонт брекетов Альтамед Голицыно',
    'замена дуги брекетов Альтамед Голицыно',
    'активация брекетов Альтамед Голицыно',
    'ортодонтия Альтамед Голицыно',
    'записаться к ортодонту Альтамед Голицыно',
    'Московская область ортодонтия',
    'Голицыно брекеты'
  ],
  openGraph: {
    title: 'Обслуживание ортодонтических аппаратов в Альтамед Голицыно - Ремонт брекетов | Альтамед Голицыно',
    description: 'Обслуживание ортодонтических аппаратов в Альтамед Голицыно - ремонт брекетов, замена дуг, лигатур.',
    url: 'https://altamed-golitsino.ru/services/dentistry/orthodontic-maintenance',
    siteName: 'Альтамед Голицыно',
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

