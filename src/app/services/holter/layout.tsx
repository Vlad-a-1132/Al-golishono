import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Холтерское мониторирование ЭКГ в Голицыно | Альтамед Голицыно',
  description: 'Холтерское мониторирование электрокардиограммы (Холтер) в Альтамед Голицыно — суточная запись ЭКГ для выявления нарушений ритма и ишемии. Запись на исследование.',
  keywords: ['Холтер Голицыно', 'холтеровское мониторирование ЭКГ', 'суточное мониторирование ЭКГ Голицыно', 'Холтер Альтамед Голицыно'],
  openGraph: {
    title: 'Холтерское мониторирование ЭКГ в Голицыно | Альтамед Голицыно',
    description: 'Холтер в Альтамед Голицыно — суточная запись ЭКГ для выявления нарушений ритма и ишемии сердца.',
    type: 'website',
    url: 'https://altamed-golitsino.ru/services/holter',
    locale: 'ru_RU',
    siteName: 'Альтамед Голицыно',
  },
  alternates: { canonical: 'https://altamed-golitsino.ru/services/holter' },
};

export default function HolterLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
