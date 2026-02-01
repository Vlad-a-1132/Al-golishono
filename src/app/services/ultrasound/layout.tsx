import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ультразвуковое обследование (УЗИ) в Голицыно | Альтамед Голицыно',
  description: 'Ультразвуковое исследование (сонография) — информативный и безопасный метод диагностики в Альтамед Голицыно. УЗИ органов брюшной полости, малого таза, сердца, поверхностных структур. Без лучевой нагрузки.',
  keywords: [
    'УЗИ Голицыно',
    'ультразвуковое исследование Голицыно',
    'УЗИ брюшной полости',
    'УЗИ малого таза',
    'УЗИ сердца',
    'эхокардиография Голицыно',
    'УЗИ Альтамед Голицыно',
    'сонография',
    'где сделать УЗИ Голицыно',
  ],
  openGraph: {
    title: 'Ультразвуковое обследование (УЗИ) в Голицыно | Альтамед Голицыно',
    description: 'Ультразвуковое исследование — безопасный и информативный метод диагностики. УЗИ органов, сосудов, сердца в клинике Альтамед Голицыно.',
    type: 'website',
    url: 'https://altamed-golitsino.ru/services/ultrasound',
    locale: 'ru_RU',
    siteName: 'Альтамед Голицыно',
    images: [
      {
        url: '/images/documents/ultrazvukovoe-obsledovanie-uzi_3.jpg',
        width: 1200,
        height: 630,
        alt: 'Ультразвуковое исследование в Альтамед Голицыно',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ультразвуковое обследование (УЗИ) в Голицыно | Альтамед Голицыно',
    description: 'Ультразвуковое исследование — безопасный и информативный метод диагностики в Альтамед Голицыно.',
    images: ['/images/documents/ultrazvukovoe-obsledovanie-uzi_3.jpg'],
  },
  alternates: {
    canonical: 'https://altamed-golitsino.ru/services/ultrasound',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function UltrasoundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

