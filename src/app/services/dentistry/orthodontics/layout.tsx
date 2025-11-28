import type { Metadata } from "next";

const WORDSTAT_KEYWORDS: string[] = [
  "стоматолог ортодонт одинцово",
  "ортодонт одинцово",
  "исправление прикуса одинцово",
  "одинцово стоматолог ортодонт цена",
  "ортодонт одинцово отзывы",
  "ортодонтия одинцово",
  "брекеты одинцово",
  "элайнеры одинцово",
  "стоматолог ортодонт одинцово цены",
  "исправление прикуса одинцово цены"
];

export const metadata: Metadata = {
  title: "Стоматолог-ортодонт в Одинцово | Клиника «Альтамед-С»",
  description:
    "Стоматолог-ортодонт в Одинцово — клиника «Альтамед-С»: исправление прикуса, брекеты, элайнеры, ретейнеры, опытные ортодонты и современные методики.",
  keywords: WORDSTAT_KEYWORDS,
  alternates: {
    canonical: "https://altamed-c.ru/services/dentistry/orthodontics"
  },
  openGraph: {
    title: "Стоматолог-ортодонт в Одинцово — стоматология «Альтамед-С»",
    description:
      "Стоматолог-ортодонт в Одинцово: исправление прикуса брекетами, элайнерами и ретейнерами, металлические, керамические и сапфировые брекеты.",
    url: "https://altamed-c.ru/services/dentistry/orthodontics",
    type: "article",
    images: [
      {
        url: "https://altamed-c.ru/images/dentisrty/task_01kb59xabnenht3qwt33mm5r8v_1764336113_img_0.webp",
        width: 1200,
        height: 630,
        alt: "Стоматолог-ортодонт в клинике Альтамед-С в Одинцово"
      }
    ]
  }
};

export default function OrthodonticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
