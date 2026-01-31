import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Съемные ортодонтические аппараты в Альтамед Голицино - Элайнеры, каппы | Стоматология Альтамед Голицино',
  description: 'Съемные ортодонтические аппараты в Альтамед Голицино - элайнеры, каппы для исправления прикуса. Лечение элайнерами простого и сложного случая. Запись на консультацию к ортодонту.',
  keywords: [
    'элайнеры Альтамед Голицино',
    'съемные аппараты Альтамед Голицино',
    'ортодонтические каппы Альтамед Голицино',
    'лечение элайнерами Альтамед Голицино',
    'исправление прикуса элайнерами Альтамед Голицино',
    'ортодонтия Альтамед Голицино',
    'записаться на элайнеры Альтамед Голицино',
    'Московская область элайнеры',
    'Голицино ортодонтия'
  ],
  openGraph: {
    title: 'Съемные ортодонтические аппараты в Альтамед Голицино - Элайнеры, каппы | Альтамед Голицино',
    description: 'Съемные ортодонтические аппараты в Альтамед Голицино - элайнеры, каппы для исправления прикуса.',
    url: 'https://altamed-golitsino.ru/services/dentistry/removable-appliances',
    siteName: 'Альтамед Голицино',
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

