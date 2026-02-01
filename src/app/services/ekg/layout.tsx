import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Снятие электрокардиограммы (ЭКГ) в Голицыно | Альтамед Голицыно',
  description: 'Электрокардиография (ЭКГ) в Альтамед Голицыно — регистрация электрической активности сердца. Быстро, безболезненно. Запись на ЭКГ в медицинском центре.',
  keywords: ['ЭКГ Голицыно', 'электрокардиография Голицыно', 'снять ЭКГ', 'ЭКГ Альтамед Голицыно', 'ЭКГ с расшифровкой'],
  openGraph: {
    title: 'Снятие электрокардиограммы (ЭКГ) в Голицыно | Альтамед Голицыно',
    description: 'ЭКГ в Альтамед Голицыно — регистрация электрической активности сердца. Быстро и безболезненно.',
    type: 'website',
    url: 'https://altamed-golitsino.ru/services/ekg',
    locale: 'ru_RU',
    siteName: 'Альтамед Голицыно',
  },
  alternates: { canonical: 'https://altamed-golitsino.ru/services/ekg' },
};

export default function EkgLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
