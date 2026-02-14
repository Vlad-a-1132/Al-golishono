import type { Metadata } from "next";

const WORDSTAT_KEYWORDS: string[] = [
  "стоматолог ортодонт Альтамед Голицыно",
  "ортодонт Альтамед Голицыно",
  "исправление прикуса Альтамед Голицыно",
  "Альтамед Голицыно стоматолог ортодонт цена",
  "ортодонт Альтамед Голицыно отзывы",
  "ортодонтия Альтамед Голицыно",
  "брекеты Альтамед Голицыно",
  "элайнеры Альтамед Голицыно",
  "стоматолог ортодонт Альтамед Голицыно цены",
  "исправление прикуса Альтамед Голицыно цены"
];

export const metadata: Metadata = {
  title: "Стоматолог-ортодонт в Альтамед Голицыно | Клиника «Альтамед Голицыно»",
  description:
    "Стоматолог-ортодонт в Альтамед Голицыно — клиника «Альтамед Голицыно»: исправление прикуса, брекеты, элайнеры, ретейнеры, опытные ортодонты и современные методики.",
  keywords: WORDSTAT_KEYWORDS,
  alternates: {
    canonical: "https://altamed-golitsino.ru/services/dentistry/orthodontics"
  },
  openGraph: {
    title: "Стоматолог-ортодонт в Альтамед Голицыно — стоматология «Альтамед Голицыно»",
    description:
      "Стоматолог-ортодонт в Альтамед Голицыно: исправление прикуса брекетами, элайнерами и ретейнерами, металлические, керамические и сапфировые брекеты.",
    url: "https://altamed-golitsino.ru/services/dentistry/orthodontics",
    type: "article",
    images: [
      {
        url: "https://altamed-golitsino.ru/images/dentisrty/task_01kb59xabnenht3qwt33mm5r8v_1764336113_img_0.webp",
        width: 1200,
        height: 630,
        alt: "Стоматолог-ортодонт в клинике Альтамед Голицыно в Альтамед Голицыно"
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
