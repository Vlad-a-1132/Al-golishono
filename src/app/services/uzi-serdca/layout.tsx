import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'УЗИ сердца (эхокардиография) в Голицыно | Альтамед Голицыно',
  description: 'УЗИ сердца (эхокардиография) в Альтамед Голицыно — оценка структуры и функции сердца. Безопасное ультразвуковое исследование на современном оборудовании. Запись на эхокардиографию.',
  keywords: ['УЗИ сердца Голицыно', 'эхокардиография Голицыно', 'ЭхоКГ', 'УЗИ сердца Альтамед', 'эхокардиография Альтамед Голицыно'],
  openGraph: {
    title: 'УЗИ сердца (эхокардиография) в Голицыно | Альтамед Голицыно',
    description: 'УЗИ сердца в Альтамед Голицыно — оценка структуры и функции сердца. Эхокардиография на современном оборудовании.',
    type: 'website',
    url: 'https://altamed-golitsino.ru/services/uzi-serdca',
    locale: 'ru_RU',
    siteName: 'Альтамед Голицыно',
  },
  alternates: { canonical: 'https://altamed-golitsino.ru/services/uzi-serdca' },
};

export default function UziSerdcaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
