import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Услуги | Альтамед Голицыно',
  description: 'Медицинские услуги клиники Альтамед Голицыно для взрослых и детей',
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
