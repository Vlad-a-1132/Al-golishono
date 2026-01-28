import type { Metadata } from "next";

const WORDSTAT_KEYWORDS: string[] = [
  "детский стоматолог голицино",
  "детский стоматолог в Альтамед Голицино",
  "стоматолог детский голицино",
  "голицино детский стоматолог цена",
  "детский стоматолог голицино отзывы",
  "стоматология детская голицино",
  "лечение зубов детям голицино",
  "детская стоматология голицино",
  "стоматолог детский голицино цены",
  "лечение молочных зубов голицино"
];

export const metadata: Metadata = {
  title: "Детский стоматолог в Альтамед Голицино | Клиника «Альтамед Голицино»",
  description:
    "Детский стоматолог в Альтамед Голицино — клиника «Альтамед Голицино»: лечение молочных и постоянных зубов, безболезненное лечение, адаптация детей, профилактика кариеса, опытные детские стоматологи.",
  keywords: WORDSTAT_KEYWORDS,
  alternates: {
    canonical: "https://altamed-golitsino.ru/services/dentistry/pediatric-dentistry"
  },
  openGraph: {
    title: "Детский стоматолог в Альтамед Голицино — стоматология «Альтамед Голицино»",
    description:
      "Детский стоматолог в Альтамед Голицино: лечение молочных и постоянных зубов, безболезненное лечение, адаптация детей, профилактика кариеса и герметизация фиссур.",
    url: "https://altamed-golitsino.ru/services/dentistry/pediatric-dentistry",
    type: "article",
    images: [
      {
        url: "https://altamed-golitsino.ru/images/dentisrty/task_01kb590e4demkax3am17hree6h_1764335184_img_0.webp",
        width: 1200,
        height: 630,
        alt: "Детский стоматолог в клинике Альтамед Голицино в Альтамед Голицино"
      }
    ]
  }
};

export default function PediatricDentistryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
