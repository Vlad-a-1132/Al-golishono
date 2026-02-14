import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Съемные ортодонтические аппараты в Альтамед Голицыно - Элайнеры, каппы | Стоматология Альтамед Голицыно',
  description: 'Съемные ортодонтические аппараты в Альтамед Голицыно - элайнеры, каппы для исправления прикуса. Лечение элайнерами простого и сложного случая. Запись на консультацию к ортодонту.',
  keywords: [
    'элайнеры Альтамед Голицыно',
    'съемные аппараты Альтамед Голицыно',
    'ортодонтические каппы Альтамед Голицыно',
    'лечение элайнерами Альтамед Голицыно',
    'исправление прикуса элайнерами Альтамед Голицыно',
    'ортодонтия Альтамед Голицыно',
    'записаться на элайнеры Альтамед Голицыно',
    'Московская область элайнеры',
    'Голицыно ортодонтия'
  ],
  openGraph: {
    title: 'Съемные ортодонтические аппараты в Альтамед Голицыно - Элайнеры, каппы | Альтамед Голицыно',
    description: 'Съемные ортодонтические аппараты в Альтамед Голицыно - элайнеры, каппы для исправления прикуса.',
    url: 'https://altamed-golitsino.ru/services/dentistry/removable-appliances',
    siteName: 'Альтамед Голицыно',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://altamed-golitsino.ru/services/dentistry/removable-appliances',
  },
};

export default function RemovableAppliancesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

