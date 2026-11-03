import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Психолог в Голицыно — консультация | Альтамед Голицыно',
  description: 'Консультация психолога в клинике Альтамед Голицыно. Запись на приём.',
  keywords: ['психолог Голицыно', 'консультация психолога Голицыно', 'Альтамед Голицыно психолог'],
  openGraph: {
    title: 'Психолог в Голицыно | Альтамед Голицыно',
    description: 'Консультация психолога в клинике Альтамед Голицыно.',
    url: 'https://altamed-golitsino.ru/services/psiholog-golitsino',
    images: [{ url: 'https://altamed-golitsino.ru/images/yslugi/terapiay%201.webp', width: 1200, height: 630, alt: 'Психолог в Альтамед Голицыно' }],
  },
  twitter: { card: 'summary_large_image', title: 'Психолог в Голицыно | Альтамед Голицыно', description: 'Консультация психолога в клинике Альтамед Голицыно.' },
  alternates: { canonical: 'https://altamed-golitsino.ru/services/psiholog-golitsino' },
};

export default function PsychologistLayout({ children }: { children: React.ReactNode }) {
  return children;
}
