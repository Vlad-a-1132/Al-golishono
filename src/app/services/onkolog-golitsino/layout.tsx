import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Онколог Голицино — приём врача-онколога и детского онколога | Альтамед Голицино',
  description: 'Онколог в Голицино: приём врача-онколога и детского онколога, диспансерный приём. Консультации и наблюдение в клинике Альтамед Голицино. Запись на приём.',
  keywords: [
    'онколог Голицино',
    'врач-онколог Голицино',
    'детский онколог Голицино',
    'онкология Голицино',
    'приём онколога Голицино',
    'Альтамед Голицино онколог',
    'записаться к онкологу Голицино',
    'диспансерный приём онколога Голицино',
    'Голицыно онколог',
  ],
  openGraph: {
    title: 'Онколог Голицино — приём врача-онколога | Альтамед Голицино',
    description: 'Онколог в Голицино: приём врача-онколога и детского онколога, диспансерный приём. Клиника Альтамед Голицино.',
    url: 'https://altamed-golitsino.ru/services/onkolog-golitsino',
    siteName: 'Альтамед Голицино',
    images: [{ url: 'https://altamed-golitsino.ru/images/yslugi/mammalogy.webp', width: 1200, height: 630, alt: 'Онколог в Альтамед Голицино' }],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Онколог Голицино | Альтамед Голицино', description: 'Онколог в Голицино: приём врача-онколога и детского онколога. Клиника Альтамед Голицино.' },
  alternates: { canonical: 'https://altamed-golitsino.ru/services/onkolog-golitsino' },
};

export default function OnkologGolitsinoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
