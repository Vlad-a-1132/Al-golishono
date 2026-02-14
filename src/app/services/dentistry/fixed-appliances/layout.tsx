import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Несъемные ортодонтические аппараты в Альтамед Голицыно - Ретейнеры, аппарат Forsus | Стоматология Альтамед Голицыно',
  description: 'Несъемные ортодонтические аппараты в Альтамед Голицыно - ретейнеры, аппарат Forsus. Фиксация ретейнеров, установка и активация аппарата Forsus. Запись на консультацию к ортодонту.',
  keywords: [
    'ретейнеры Альтамед Голицыно',
    'несъемные аппараты Альтамед Голицыно',
    'аппарат Forsus Альтамед Голицыно',
    'фиксация ретейнера Альтамед Голицыно',
    'ортодонтия Альтамед Голицыно',
    'записаться к ортодонту Альтамед Голицыно',
    'Московская область ортодонтия',
    'Голицыно ретейнеры'
  ],
  openGraph: {
    title: 'Несъемные ортодонтические аппараты в Альтамед Голицыно - Ретейнеры, аппарат Forsus | Альтамед Голицыно',
    description: 'Несъемные ортодонтические аппараты в Альтамед Голицыно - ретейнеры, аппарат Forsus.',
    url: 'https://altamed-golitsino.ru/services/dentistry/fixed-appliances',
    siteName: 'Альтамед Голицыно',
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

