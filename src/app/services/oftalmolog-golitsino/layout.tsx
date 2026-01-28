import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Офтальмолог Голицино — приём, проверка зрения, подбор очков | Альтамед Голицино',
  description: 'Офтальмолог в Голицино: приём врача-офтальмолога, проверка зрения, подбор очковой и контактной коррекции, диагностика глаз. Клиника Альтамед Голицино. Запись на приём.',
  keywords: [
    'офтальмолог Голицино',
    'окулист Голицино',
    'офтальмология Голицино',
    'проверка зрения Голицино',
    'подбор очков Голицино',
    'офтальмолог Альтамед Голицино',
    'записаться к офтальмологу Голицино',
    'Московская область офтальмолог Голицино',
    'офтальмолог Голицыно',
  ],
  openGraph: {
    title: 'Офтальмолог Голицино — приём, проверка зрения | Альтамед Голицино',
    description: 'Офтальмолог в Голицино: приём врача-офтальмолога, подбор очков и контактных линз, диагностика глаз. Клиника Альтамед Голицино.',
    url: 'https://altamed-golitsino.ru/services/oftalmolog-golitsino',
    siteName: 'Альтамед Голицино',
    images: [{ url: 'https://altamed-golitsino.ru/images/images%20allergoly/oftalmologia.webp', width: 1200, height: 630, alt: 'Офтальмолог в Альтамед Голицино' }],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Офтальмолог Голицино | Альтамед Голицино', description: 'Офтальмолог в Голицино: приём, проверка зрения, подбор очков. Клиника Альтамед Голицино.', images: ['https://altamed-golitsino.ru/images/images%20allergoly/oftalmologia.webp'] },
  alternates: { canonical: 'https://altamed-golitsino.ru/services/oftalmolog-golitsino' },
};

export default function OftalmologGolitsinoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
