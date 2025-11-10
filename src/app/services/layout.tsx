import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Услуги | Альтамед-с',
  description: 'Медицинские услуги клиники Альтамед-Сдля взрослых и детей',
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
