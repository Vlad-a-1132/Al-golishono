import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Уролог Голицыно — приём, диагностика, лечение | Альтамед Голицыно',
  description: 'Уролог в Голицыно: приём врача-уролога и детского уролога-андролога, диспансерный приём, УЗИ надпочечников, катетеризация и инстилляция мочевого пузыря, массаж простаты, физиотерапия и другие услуги. Клиника Альтамед Голицыно. Запись на приём.',
  keywords: [
    'уролог Голицыно',
    'детский уролог Голицыно',
    'урология Голицыно',
    'приём уролога Голицыно',
    'Альтамед Голицыно уролог',
    'записаться к урологу Голицыно',
    'Московская область уролог Голицыно',
    'уролог Голицыно',
  ],
  openGraph: {
    title: 'Уролог Голицыно — приём, диагностика, лечение | Альтамед Голицыно',
    description: 'Уролог в Голицыно: приём врача-уролога, детского уролога-андролога, УЗИ, манипуляции, физиотерапия. Клиника Альтамед Голицыно.',
    url: 'https://altamed-golitsino.ru/services/urology',
    siteName: 'Альтамед Голицыно',
    images: [{ url: 'https://altamed-golitsino.ru/images/yslugi/yrolog.webp', width: 1200, height: 630, alt: 'Уролог в Альтамед Голицыно' }],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Уролог Голицыно | Альтамед Голицыно', description: 'Уролог в Голицыно: приём, диагностика, манипуляции. Клиника Альтамед Голицыно.' },
  alternates: { canonical: 'https://altamed-golitsino.ru/services/urology' },
};

export default function UrologyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
