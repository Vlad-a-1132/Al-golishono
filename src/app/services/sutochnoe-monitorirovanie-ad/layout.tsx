import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Суточное мониторирование артериального давления в Голицыно | Альтамед Голицыно',
  description: 'Суточное мониторирование артериального давления (СМАД) в Альтамед Голицыно — непрерывная регистрация АД в течение 24 часов. Диагностика гипертонии, подбор терапии. Запись на исследование.',
  keywords: ['СМАД Голицыно', 'суточное мониторирование АД', 'мониторирование давления Голицыно', 'СМАД Альтамед Голицыно'],
  openGraph: {
    title: 'Суточное мониторирование артериального давления в Голицыно | Альтамед Голицыно',
    description: 'Суточное мониторирование АД в Альтамед Голицыно — регистрация давления в течение 24 часов в условиях обычной активности.',
    type: 'website',
    url: 'https://altamed-golitsino.ru/services/sutochnoe-monitorirovanie-ad',
    locale: 'ru_RU',
    siteName: 'Альтамед Голицыно',
  },
  alternates: { canonical: 'https://altamed-golitsino.ru/services/sutochnoe-monitorirovanie-ad' },
};

export default function SutochnoeMonitorirovanieAdLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
