import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Онколог Голицыно — приём врача-онколога и детского онколога | Альтамед Голицыно',
  description: 'Онколог в Голицыно: приём врача-онколога и детского онколога, диспансерный приём. Консультации и наблюдение в клинике Альтамед Голицыно. Запись на приём.',
  keywords: [
    'онколог Голицыно',
    'врач-онколог Голицыно',
    'детский онколог Голицыно',
    'онкология Голицыно',
    'приём онколога Голицыно',
    'Альтамед Голицыно онколог',
    'записаться к онкологу Голицыно',
    'диспансерный приём онколога Голицыно',
    'Голицыно онколог',
  ],
  openGraph: {
    title: 'Онколог Голицыно — приём врача-онколога | Альтамед Голицыно',
    description: 'Онколог в Голицыно: приём врача-онколога и детского онколога, диспансерный приём. Клиника Альтамед Голицыно.',
    url: 'https://altamed-golitsino.ru/services/onkolog-golitsino',
    siteName: 'Альтамед Голицыно',
    images: [{ url: 'https://altamed-golitsino.ru/images/yslugi/mammalogy.webp', width: 1200, height: 630, alt: 'Онколог в Альтамед Голицыно' }],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Онколог Голицыно | Альтамед Голицыно', description: 'Онколог в Голицыно: приём врача-онколога и детского онколога. Клиника Альтамед Голицыно.' },
  alternates: { canonical: 'https://altamed-golitsino.ru/services/onkolog-golitsino' },
};

export default function OnkologGolitsinoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
