import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Педиатр Голицыно — приём, консультация, справки для детей | Альтамед Голицыно',
  description: 'Педиатр в Голицыно: приём и консультация врача-педиатра, справки в сад, школу, бассейн, спортивную секцию. Обследование новорожденных, диспансерный приём. Клиника Альтамед Голицыно. Запись на приём.',
  keywords: [
    'педиатр Голицыно',
    'детский врач Голицыно',
    'педиатр Голицыно цена',
    'приём педиатра Голицыно',
    'консультация педиатра Голицыно',
    'педиатр Альтамед Голицыно',
    'справка в сад Голицыно',
    'справка в школу Голицыно',
    'справка в бассейн Голицыно',
    'диспансерный приём педиатра Голицыно',
    'педиатр новорожденным Голицыно',
    'записаться к педиатру Голицыно',
    'Московская область педиатр Голицыно',
    'педиатр Голицыно',
  ],
  openGraph: {
    title: 'Педиатр Голицыно — приём, консультация, справки для детей | Альтамед Голицыно',
    description: 'Педиатр в Голицыно: приём врача-педиатра, справки в сад, школу, бассейн. Клиника Альтамед Голицыно.',
    url: 'https://altamed-golitsino.ru/services/pediatr-golitsino',
    siteName: 'Альтамед Голицыно',
    images: [
      {
        url: 'https://altamed-golitsino.ru/images/yslugi/Pediatrician.webp',
        width: 1200,
        height: 630,
        alt: 'Педиатр в Альтамед Голицыно',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Педиатр Голицыно — приём, консультация | Альтамед Голицыно',
    description: 'Педиатр в Голицыно: приём врача-педиатра, справки для детей. Клиника Альтамед Голицыно.',
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
