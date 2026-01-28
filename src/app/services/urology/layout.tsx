import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Уролог Голицино — приём, диагностика, лечение | Альтамед Голицино',
  description: 'Уролог в Голицино: приём врача-уролога и детского уролога-андролога, диспансерный приём, УЗИ надпочечников, катетеризация и инстилляция мочевого пузыря, массаж простаты, физиотерапия и другие услуги. Клиника Альтамед Голицино. Запись на приём.',
  keywords: [
    'уролог Голицино',
    'детский уролог Голицино',
    'урология Голицино',
    'приём уролога Голицино',
    'Альтамед Голицино уролог',
    'записаться к урологу Голицино',
    'Московская область уролог Голицино',
    'уролог Голицыно',
  ],
  openGraph: {
    title: 'Уролог Голицино — приём, диагностика, лечение | Альтамед Голицино',
    description: 'Уролог в Голицино: приём врача-уролога, детского уролога-андролога, УЗИ, манипуляции, физиотерапия. Клиника Альтамед Голицино.',
    url: 'https://altamed-golitsino.ru/services/urology',
    siteName: 'Альтамед Голицино',
    images: [{ url: 'https://altamed-golitsino.ru/images/yslugi/yrolog.webp', width: 1200, height: 630, alt: 'Уролог в Альтамед Голицино' }],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Уролог Голицино | Альтамед Голицино', description: 'Уролог в Голицино: приём, диагностика, манипуляции. Клиника Альтамед Голицино.' },
  alternates: { canonical: 'https://altamed-golitsino.ru/services/urology' },
};

export default function UrologyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
