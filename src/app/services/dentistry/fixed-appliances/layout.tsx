import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Несъемные ортодонтические аппараты в Альтамед Голицино - Ретейнеры, аппарат Forsus | Стоматология Альтамед Голицино',
  description: 'Несъемные ортодонтические аппараты в Альтамед Голицино - ретейнеры, аппарат Forsus. Фиксация ретейнеров, установка и активация аппарата Forsus. Запись на консультацию к ортодонту.',
  keywords: [
    'ретейнеры Альтамед Голицино',
    'несъемные аппараты Альтамед Голицино',
    'аппарат Forsus Альтамед Голицино',
    'фиксация ретейнера Альтамед Голицино',
    'ортодонтия Альтамед Голицино',
    'записаться к ортодонту Альтамед Голицино',
    'Московская область ортодонтия',
    'Голицино ретейнеры'
  ],
  openGraph: {
    title: 'Несъемные ортодонтические аппараты в Альтамед Голицино - Ретейнеры, аппарат Forsus | Альтамед Голицино',
    description: 'Несъемные ортодонтические аппараты в Альтамед Голицино - ретейнеры, аппарат Forsus.',
    url: 'https://altamed-golitsino.ru/services/dentistry/fixed-appliances',
    siteName: 'Альтамед Голицино',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://altamed-golitsino.ru/services/dentistry/fixed-appliances',
  },
};

export default function FixedAppliancesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

