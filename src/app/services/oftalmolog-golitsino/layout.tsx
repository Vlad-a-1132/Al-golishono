import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Офтальмолог Голицыно — приём, проверка зрения, подбор очков | Альтамед Голицыно',
  description: 'Офтальмолог в Голицыно: приём врача-офтальмолога, проверка зрения, подбор очковой и контактной коррекции, диагностика глаз. Клиника Альтамед Голицыно. Запись на приём.',
  keywords: [
    'офтальмолог Голицыно',
    'окулист Голицыно',
    'офтальмология Голицыно',
    'проверка зрения Голицыно',
    'подбор очков Голицыно',
    'офтальмолог Альтамед Голицыно',
    'записаться к офтальмологу Голицыно',
    'Московская область офтальмолог Голицыно',
    'офтальмолог Голицыно',
  ],
  openGraph: {
    title: 'Офтальмолог Голицыно — приём, проверка зрения | Альтамед Голицыно',
    description: 'Офтальмолог в Голицыно: приём врача-офтальмолога, подбор очков и контактных линз, диагностика глаз. Клиника Альтамед Голицыно.',
    url: 'https://altamed-golitsino.ru/services/oftalmolog-golitsino',
    siteName: 'Альтамед Голицыно',
    images: [{ url: 'https://altamed-golitsino.ru/images/images%20allergoly/oftalmologia.webp', width: 1200, height: 630, alt: 'Офтальмолог в Альтамед Голицыно' }],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Офтальмолог Голицыно | Альтамед Голицыно', description: 'Офтальмолог в Голицыно: приём, проверка зрения, подбор очков. Клиника Альтамед Голицыно.', images: ['https://altamed-golitsino.ru/images/images%20allergoly/oftalmologia.webp'] },
  alternates: { canonical: 'https://altamed-golitsino.ru/services/oftalmolog-golitsino' },
};

export default function OftalmologGolitsinoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
