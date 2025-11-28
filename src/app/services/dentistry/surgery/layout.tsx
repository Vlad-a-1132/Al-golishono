import type { Metadata } from "next";

const WORDSTAT_KEYWORDS: string[] = [
  "стоматолог хирург одинцово",
  "стоматолог хирург в одинцове",
  "хирургическая стоматология одинцово",
  "одинцово стоматолог хирург цена",
  "стоматолог хирург одинцово отзывы",
  "стоматология хирургия одинцово",
  "удаление зубов одинцово",
  "имплантация одинцово",
  "стоматолог хирург одинцово цены",
  "челюстно лицевая хирургия одинцово"
];

export const metadata: Metadata = {
  title: "Стоматолог-хирург в Одинцово | Клиника «Альтамед-С»",
  description:
    "Стоматолог-хирург в Одинцово — клиника «Альтамед-С»: удаление зубов, имплантация, челюстно-лицевая хирургия, костная пластика, опытные хирурги и современные методики.",
  keywords: WORDSTAT_KEYWORDS,
  alternates: {
    canonical: "https://altamed-c.ru/services/dentistry/surgery"
  },
  openGraph: {
    title: "Стоматолог-хирург в Одинцово — стоматология «Альтамед-С»",
    description:
      "Стоматолог-хирург в Одинцово: удаление зубов, имплантация, челюстно-лицевая хирургия, костная пластика, синус-лифтинг и пластика мягких тканей.",
    url: "https://altamed-c.ru/services/dentistry/surgery",
    type: "article",
    images: [
      {
        url: "https://altamed-c.ru/images/dentisrty/stom surgeon.webp",
        width: 1200,
        height: 630,
        alt: "Стоматолог-хирург в клинике Альтамед-С в Одинцово"
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
