import type { Metadata } from "next";

const WORDSTAT_KEYWORDS: string[] = [
  "гигиена полости рта Альтамед Голицыно",
  "чистка зубов Альтамед Голицыно",
  "профессиональная гигиена Альтамед Голицыно",
  "Альтамед Голицыно гигиена полости рта цена",
  "чистка зубов Альтамед Голицыно отзывы",
  "air flow Альтамед Голицыно",
  "ультразвуковая чистка Альтамед Голицыно",
  "стоматология гигиена Альтамед Голицыно",
  "гигиена полости рта Альтамед Голицыно цены",
  "профессиональная чистка зубов Альтамед Голицыно"
];

export const metadata: Metadata = {
  title: "Гигиена полости рта в Альтамед Голицыно | Клиника «Альтамед Голицыно»",
  description:
    "Гигиена полости рта в Альтамед Голицыно — клиника «Альтамед Голицыно»: профессиональная чистка зубов AIR FLOW, ультразвук, полировка, удаление налета и камня, опытные гигиенисты.",
  keywords: WORDSTAT_KEYWORDS,
  alternates: {
    canonical: "https://altamed-golitsino.ru/services/dentistry/hygiene"
  },
  openGraph: {
    title: "Гигиена полости рта в Альтамед Голицыно — стоматология «Альтамед Голицыно»",
    description:
      "Гигиена полости рта в Альтамед Голицыно: профессиональная чистка зубов с использованием AIR FLOW, ультразвука и полировки, удаление зубного налета и камня.",
    url: "https://altamed-golitsino.ru/services/dentistry/hygiene",
    type: "article",
    images: [
      {
        url: "https://altamed-golitsino.ru/images/dentisrty/ff0799f0-79d9-49cb-b32a-bac2ce8b6d2e 1.webp",
        width: 1200,
        height: 630,
        alt: "Гигиена полости рта в клинике Альтамед Голицыно в Альтамед Голицыно"
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
