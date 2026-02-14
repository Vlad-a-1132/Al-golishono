import type { Metadata } from "next";

const WORDSTAT_KEYWORDS: string[] = [
  "стоматолог хирург Голицыно",
  "стоматолог хирург в Альтамед Голицыно",
  "хирургическая стоматология Голицыно",
  "Голицыно стоматолог хирург цена",
  "стоматолог хирург Голицыно отзывы",
  "стоматология хирургия Голицыно",
  "удаление зубов Голицыно",
  "имплантация Голицыно",
  "стоматолог хирург Голицыно цены",
  "челюстно лицевая хирургия Голицыно"
];

export const metadata: Metadata = {
  title: "Стоматолог-хирург в Альтамед Голицыно | Клиника «Альтамед Голицыно»",
  description:
    "Стоматолог-хирург в Альтамед Голицыно — клиника «Альтамед Голицыно»: удаление зубов, имплантация, челюстно-лицевая хирургия, костная пластика, опытные хирурги и современные методики.",
  keywords: WORDSTAT_KEYWORDS,
  alternates: {
    canonical: "https://altamed-golitsino.ru/services/dentistry/surgery"
  },
  openGraph: {
    title: "Стоматолог-хирург в Альтамед Голицыно — стоматология «Альтамед Голицыно»",
    description:
      "Стоматолог-хирург в Альтамед Голицыно: удаление зубов, имплантация, челюстно-лицевая хирургия, костная пластика, синус-лифтинг и пластика мягких тканей.",
    url: "https://altamed-golitsino.ru/services/dentistry/surgery",
    type: "article",
    images: [
      {
        url: "https://altamed-golitsino.ru/images/dentisrty/stom surgeon.webp",
        width: 1200,
        height: 630,
        alt: "Стоматолог-хирург в клинике Альтамед Голицыно в Альтамед Голицыно"
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
