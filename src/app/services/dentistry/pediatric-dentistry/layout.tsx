import type { Metadata } from "next";

const WORDSTAT_KEYWORDS: string[] = [
  "детский стоматолог Голицыно",
  "детский стоматолог в Альтамед Голицыно",
  "стоматолог детский Голицыно",
  "Голицыно детский стоматолог цена",
  "детский стоматолог Голицыно отзывы",
  "стоматология детская Голицыно",
  "лечение зубов детям Голицыно",
  "детская стоматология Голицыно",
  "стоматолог детский Голицыно цены",
  "лечение молочных зубов Голицыно"
];

export const metadata: Metadata = {
  title: "Детский стоматолог в Альтамед Голицыно | Клиника «Альтамед Голицыно»",
  description:
    "Детский стоматолог в Альтамед Голицыно — клиника «Альтамед Голицыно»: лечение молочных и постоянных зубов, безболезненное лечение, адаптация детей, профилактика кариеса, опытные детские стоматологи.",
  keywords: WORDSTAT_KEYWORDS,
  alternates: {
    canonical: "https://altamed-golitsino.ru/services/dentistry/pediatric-dentistry"
  },
  openGraph: {
    title: "Детский стоматолог в Альтамед Голицыно — стоматология «Альтамед Голицыно»",
    description:
      "Детский стоматолог в Альтамед Голицыно: лечение молочных и постоянных зубов, безболезненное лечение, адаптация детей, профилактика кариеса и герметизация фиссур.",
    url: "https://altamed-golitsino.ru/services/dentistry/pediatric-dentistry",
    type: "article",
    images: [
      {
        url: "https://altamed-golitsino.ru/images/dentisrty/task_01kb590e4demkax3am17hree6h_1764335184_img_0.webp",
        width: 1200,
        height: 630,
        alt: "Детский стоматолог в клинике Альтамед Голицыно в Альтамед Голицыно"
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
