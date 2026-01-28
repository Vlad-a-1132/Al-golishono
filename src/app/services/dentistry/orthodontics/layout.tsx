import type { Metadata } from "next";

const WORDSTAT_KEYWORDS: string[] = [
  "стоматолог ортодонт Альтамед Голицино",
  "ортодонт Альтамед Голицино",
  "исправление прикуса Альтамед Голицино",
  "Альтамед Голицино стоматолог ортодонт цена",
  "ортодонт Альтамед Голицино отзывы",
  "ортодонтия Альтамед Голицино",
  "брекеты Альтамед Голицино",
  "элайнеры Альтамед Голицино",
  "стоматолог ортодонт Альтамед Голицино цены",
  "исправление прикуса Альтамед Голицино цены"
];

export const metadata: Metadata = {
  title: "Стоматолог-ортодонт в Альтамед Голицино | Клиника «Альтамед Голицино»",
  description:
    "Стоматолог-ортодонт в Альтамед Голицино — клиника «Альтамед Голицино»: исправление прикуса, брекеты, элайнеры, ретейнеры, опытные ортодонты и современные методики.",
  keywords: WORDSTAT_KEYWORDS,
  alternates: {
    canonical: "https://altamed-golitsino.ru/services/dentistry/orthodontics"
  },
  openGraph: {
    title: "Стоматолог-ортодонт в Альтамед Голицино — стоматология «Альтамед Голицино»",
    description:
      "Стоматолог-ортодонт в Альтамед Голицино: исправление прикуса брекетами, элайнерами и ретейнерами, металлические, керамические и сапфировые брекеты.",
    url: "https://altamed-golitsino.ru/services/dentistry/orthodontics",
    type: "article",
    images: [
      {
        url: "https://altamed-golitsino.ru/images/dentisrty/task_01kb59xabnenht3qwt33mm5r8v_1764336113_img_0.webp",
        width: 1200,
        height: 630,
        alt: "Стоматолог-ортодонт в клинике Альтамед Голицино в Альтамед Голицино"
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
