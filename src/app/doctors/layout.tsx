import { Metadata } from 'next';
import { doctors } from '../../data/static-data';

export function generateStaticParams() {
  return doctors.map((doctor) => ({
    slug: doctor.slug,
  }));
}

export const metadata: Metadata = {
  title: 'Врачи - Медицинский центр Альтамед-С Голицино | Список врачей, специалисты',
  description: 'Врачи медицинского центра Альтамед-С Голицино - список врачей, специалистов, запись на прием. Опытные врачи всех специальностей: терапевты, педиатры, гинекологи, стоматологи, кардиологи, неврологи и другие.',
  keywords: [
    'врачи Голицино',
    'специалисты клиники Голицино',
    'список врачей Альтамед-с',
    'врачи медицинского центра Голицино',
    'терапевт Голицино',
    'педиатр Голицино',
    'гинеколог Голицино',
    'стоматолог Голицино',
    'кардиолог Голицино',
    'невролог Голицино',
    'запись к врачу Голицино',
    'выбрать врача Голицино',
    'врачи Альтамед-с',
    'Московская область врачи',
    'Голицино специалисты'
  ],
  openGraph: {
    title: 'Врачи - Медицинский центр Альтамед-С Голицино',
    description: 'Врачи медицинского центра Альтамед-С Голицино - список врачей, специалистов, запись на прием. Опытные врачи всех специальностей.',
    url: 'https://altamed-s.ru/doctors',
    siteName: 'Альтамед-с',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://altamed-s.ru/doctors',
  },
};

export default function DoctorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

