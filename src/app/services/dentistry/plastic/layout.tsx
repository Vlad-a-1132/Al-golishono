import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Пластическая хирургия в Альтамед Голицино - Пластика мягких тканей | Альтамед Голицино',
  description: 'Пластическая хирургия в Альтамед Голицино. Пластика уздечек, вестибулопластика, гингивопластика, лоскутные операции. Пластика мягких тканей в клинике Альтамед Голицино.',
  keywords: [
    'пластическая хирургия голицино',
    'пластика уздечки голицино',
    'вестибулопластика голицино',
    'гингивопластика голицино',
    'лоскутные операции голицино'
  ],
  openGraph: {
    title: 'Пластическая хирургия в Альтамед Голицино - Пластика мягких тканей | Альтамед Голицино',
    description: 'Пластическая хирургия в Альтамед Голицино. Пластика уздечек, вестибулопластика, гингивопластика, лоскутные операции.',
    url: 'https://altamed-golitsino.ru/services/dentistry/plastic',
    siteName: 'Альтамед Голицино',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://altamed-golitsino.ru/services/dentistry/plastic',
  },
};

export default function PlasticLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

