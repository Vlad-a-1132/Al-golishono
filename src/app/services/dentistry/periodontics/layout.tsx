import type { Metadata } from "next";

const WORDSTAT_KEYWORDS: string[] = [
  "пародонтолог одинцово",
  "лечение десен одинцово",
  "пародонтология одинцово",
  "одинцово пародонтолог цена",
  "пародонтолог одинцово отзывы",
  "лечение пародонтита одинцово",
  "лечение пародонтоза одинцово",
  "стоматология пародонтология одинцово",
  "пародонтолог одинцово цены",
  "лечение десен одинцово цены"
];

export const metadata: Metadata = {
  title: "Пародонтолог в Одинцово | Клиника «Альтамед-С»",
  description:
    "Пародонтолог в Одинцово — клиника «Альтамед-С»: лечение заболеваний десен, пародонтит, пародонтоз, шинирование зубов, лоскутные операции, опытные пародонтологи.",
  keywords: WORDSTAT_KEYWORDS,
  alternates: {
    canonical: "https://altamed-c.ru/services/dentistry/periodontics"
  },
  openGraph: {
    title: "Пародонтолог в Одинцово — стоматология «Альтамед-С»",
    description:
      "Пародонтолог в Одинцово: лечение заболеваний десен, пародонтит, пародонтоз, шинирование подвижных зубов, лоскутные операции и пластика десны.",
    url: "https://altamed-c.ru/services/dentistry/periodontics",
    type: "article",
    images: [
      {
        url: "https://altamed-c.ru/images/dentisrty/image (1) 2.webp",
        width: 1200,
        height: 630,
        alt: "Пародонтолог в клинике Альтамед-С в Одинцово"
      }
    ]
  }
};

export default function PeriodonticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
