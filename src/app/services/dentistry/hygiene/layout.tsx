import type { Metadata } from "next";

const WORDSTAT_KEYWORDS: string[] = [
  "гигиена полости рта одинцово",
  "чистка зубов одинцово",
  "профессиональная гигиена одинцово",
  "одинцово гигиена полости рта цена",
  "чистка зубов одинцово отзывы",
  "air flow одинцово",
  "ультразвуковая чистка одинцово",
  "стоматология гигиена одинцово",
  "гигиена полости рта одинцово цены",
  "профессиональная чистка зубов одинцово"
];

export const metadata: Metadata = {
  title: "Гигиена полости рта в Одинцово | Клиника «Альтамед-С»",
  description:
    "Гигиена полости рта в Одинцово — клиника «Альтамед-С»: профессиональная чистка зубов AIR FLOW, ультразвук, полировка, удаление налета и камня, опытные гигиенисты.",
  keywords: WORDSTAT_KEYWORDS,
  alternates: {
    canonical: "https://altamed-c.ru/services/dentistry/hygiene"
  },
  openGraph: {
    title: "Гигиена полости рта в Одинцово — стоматология «Альтамед-С»",
    description:
      "Гигиена полости рта в Одинцово: профессиональная чистка зубов с использованием AIR FLOW, ультразвука и полировки, удаление зубного налета и камня.",
    url: "https://altamed-c.ru/services/dentistry/hygiene",
    type: "article",
    images: [
      {
        url: "https://altamed-c.ru/images/dentisrty/ff0799f0-79d9-49cb-b32a-bac2ce8b6d2e 1.webp",
        width: 1200,
        height: 630,
        alt: "Гигиена полости рта в клинике Альтамед-С в Одинцово"
      }
    ]
  }
};

export default function HygieneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
