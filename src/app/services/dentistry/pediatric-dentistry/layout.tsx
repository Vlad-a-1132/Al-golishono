import type { Metadata } from "next";

const WORDSTAT_KEYWORDS: string[] = [
  "детский стоматолог одинцово",
  "детский стоматолог в одинцове",
  "стоматолог детский одинцово",
  "одинцово детский стоматолог цена",
  "детский стоматолог одинцово отзывы",
  "стоматология детская одинцово",
  "лечение зубов детям одинцово",
  "детская стоматология одинцово",
  "стоматолог детский одинцово цены",
  "лечение молочных зубов одинцово"
];

export const metadata: Metadata = {
  title: "Детский стоматолог в Одинцово | Клиника «Альтамед-С»",
  description:
    "Детский стоматолог в Одинцово — клиника «Альтамед-С»: лечение молочных и постоянных зубов, безболезненное лечение, адаптация детей, профилактика кариеса, опытные детские стоматологи.",
  keywords: WORDSTAT_KEYWORDS,
  alternates: {
    canonical: "https://altamed-c.ru/services/dentistry/pediatric-dentistry"
  },
  openGraph: {
    title: "Детский стоматолог в Одинцово — стоматология «Альтамед-С»",
    description:
      "Детский стоматолог в Одинцово: лечение молочных и постоянных зубов, безболезненное лечение, адаптация детей, профилактика кариеса и герметизация фиссур.",
    url: "https://altamed-c.ru/services/dentistry/pediatric-dentistry",
    type: "article",
    images: [
      {
        url: "https://altamed-c.ru/images/dentisrty/task_01kb590e4demkax3am17hree6h_1764335184_img_0.webp",
        width: 1200,
        height: 630,
        alt: "Детский стоматолог в клинике Альтамед-С в Одинцово"
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
