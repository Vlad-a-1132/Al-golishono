import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Пластическая хирургия в Альтамед Голицыно - Пластика мягких тканей | Альтамед Голицыно',
  description: 'Пластическая хирургия в Альтамед Голицыно. Пластика уздечек, вестибулопластика, гингивопластика, лоскутные операции. Пластика мягких тканей в клинике Альтамед Голицыно.',
  keywords: [
    'пластическая хирургия Голицыно',
    'пластика уздечки Голицыно',
    'вестибулопластика Голицыно',
    'гингивопластика Голицыно',
    'лоскутные операции Голицыно'
  ],
  openGraph: {
    title: 'Пластическая хирургия в Альтамед Голицыно - Пластика мягких тканей | Альтамед Голицыно',
    description: 'Пластическая хирургия в Альтамед Голицыно. Пластика уздечек, вестибулопластика, гингивопластика, лоскутные операции.',
    url: 'https://altamed-golitsino.ru/services/dentistry/plastic',
    siteName: 'Альтамед Голицыно',
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

