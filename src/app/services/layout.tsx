import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Услуги | Альтамед Голицино',
  description: 'Медицинские услуги клиники Альтамед Голицино для взрослых и детей',
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
