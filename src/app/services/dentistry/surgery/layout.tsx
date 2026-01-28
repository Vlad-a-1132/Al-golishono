import type { Metadata } from "next";

const WORDSTAT_KEYWORDS: string[] = [
  "стоматолог хирург голицино",
  "стоматолог хирург в Альтамед Голицино",
  "хирургическая стоматология голицино",
  "голицино стоматолог хирург цена",
  "стоматолог хирург голицино отзывы",
  "стоматология хирургия голицино",
  "удаление зубов голицино",
  "имплантация голицино",
  "стоматолог хирург голицино цены",
  "челюстно лицевая хирургия голицино"
];

export const metadata: Metadata = {
  title: "Стоматолог-хирург в Альтамед Голицино | Клиника «Альтамед Голицино»",
  description:
    "Стоматолог-хирург в Альтамед Голицино — клиника «Альтамед Голицино»: удаление зубов, имплантация, челюстно-лицевая хирургия, костная пластика, опытные хирурги и современные методики.",
  keywords: WORDSTAT_KEYWORDS,
  alternates: {
    canonical: "https://altamed-golitsino.ru/services/dentistry/surgery"
  },
  openGraph: {
    title: "Стоматолог-хирург в Альтамед Голицино — стоматология «Альтамед Голицино»",
    description:
      "Стоматолог-хирург в Альтамед Голицино: удаление зубов, имплантация, челюстно-лицевая хирургия, костная пластика, синус-лифтинг и пластика мягких тканей.",
    url: "https://altamed-golitsino.ru/services/dentistry/surgery",
    type: "article",
    images: [
      {
        url: "https://altamed-golitsino.ru/images/dentisrty/stom surgeon.webp",
        width: 1200,
        height: 630,
        alt: "Стоматолог-хирург в клинике Альтамед Голицино в Альтамед Голицино"
      }
    ]
  }
};

export default function SurgeryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
