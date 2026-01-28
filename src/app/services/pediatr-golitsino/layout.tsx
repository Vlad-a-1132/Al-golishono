import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Педиатр Голицино — приём, консультация, справки для детей | Альтамед Голицино',
  description: 'Педиатр в Голицино: приём и консультация врача-педиатра, справки в сад, школу, бассейн, спортивную секцию. Обследование новорожденных, диспансерный приём. Клиника Альтамед Голицино. Запись на приём.',
  keywords: [
    'педиатр Голицино',
    'детский врач Голицино',
    'педиатр Голицино цена',
    'приём педиатра Голицино',
    'консультация педиатра Голицино',
    'педиатр Альтамед Голицино',
    'справка в сад Голицино',
    'справка в школу Голицино',
    'справка в бассейн Голицино',
    'диспансерный приём педиатра Голицино',
    'педиатр новорожденным Голицино',
    'записаться к педиатру Голицино',
    'Московская область педиатр Голицино',
    'педиатр Голицыно',
  ],
  openGraph: {
    title: 'Педиатр Голицино — приём, консультация, справки для детей | Альтамед Голицино',
    description: 'Педиатр в Голицино: приём врача-педиатра, справки в сад, школу, бассейн. Клиника Альтамед Голицино.',
    url: 'https://altamed-golitsino.ru/services/pediatr-golitsino',
    siteName: 'Альтамед Голицино',
    images: [
      {
        url: 'https://altamed-golitsino.ru/images/yslugi/Pediatrician.webp',
        width: 1200,
        height: 630,
        alt: 'Педиатр в Альтамед Голицино',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Педиатр Голицино — приём, консультация | Альтамед Голицино',
    description: 'Педиатр в Голицино: приём врача-педиатра, справки для детей. Клиника Альтамед Голицино.',
    images: ['https://altamed-golitsino.ru/images/yslugi/Pediatrician.webp'],
  },
  alternates: {
    canonical: 'https://altamed-golitsino.ru/services/pediatr-golitsino',
  },
};

export default function PediatrGolitsinoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
