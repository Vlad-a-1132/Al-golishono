import type { Metadata } from "next";

const WORDSTAT_KEYWORDS: string[] = [
  "гигиена полости рта Альтамед Голицино",
  "чистка зубов Альтамед Голицино",
  "профессиональная гигиена Альтамед Голицино",
  "Альтамед Голицино гигиена полости рта цена",
  "чистка зубов Альтамед Голицино отзывы",
  "air flow Альтамед Голицино",
  "ультразвуковая чистка Альтамед Голицино",
  "стоматология гигиена Альтамед Голицино",
  "гигиена полости рта Альтамед Голицино цены",
  "профессиональная чистка зубов Альтамед Голицино"
];

export const metadata: Metadata = {
  title: "Гигиена полости рта в Альтамед Голицино | Клиника «Альтамед Голицино»",
  description:
    "Гигиена полости рта в Альтамед Голицино — клиника «Альтамед Голицино»: профессиональная чистка зубов AIR FLOW, ультразвук, полировка, удаление налета и камня, опытные гигиенисты.",
  keywords: WORDSTAT_KEYWORDS,
  alternates: {
    canonical: "https://altamed-golitsino.ru/services/dentistry/hygiene"
  },
  openGraph: {
    title: "Гигиена полости рта в Альтамед Голицино — стоматология «Альтамед Голицино»",
    description:
      "Гигиена полости рта в Альтамед Голицино: профессиональная чистка зубов с использованием AIR FLOW, ультразвука и полировки, удаление зубного налета и камня.",
    url: "https://altamed-golitsino.ru/services/dentistry/hygiene",
    type: "article",
    images: [
      {
        url: "https://altamed-golitsino.ru/images/dentisrty/ff0799f0-79d9-49cb-b32a-bac2ce8b6d2e 1.webp",
        width: 1200,
        height: 630,
        alt: "Гигиена полости рта в клинике Альтамед Голицино в Альтамед Голицино"
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
