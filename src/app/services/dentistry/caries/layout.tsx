import type { Metadata } from "next";

const WORDSTAT_KEYWORDS: string[] = [
  "лечение кариеса одинцово",
  "лечение кариеса в одинцове",
  "кариес лечение одинцово",
  "одинцово лечение кариеса цена",
  "лечение кариеса одинцово отзывы",
  "стоматология лечение кариеса одинцово",
  "лечение кариеса одинцово цены",
  "пломба одинцово",
  "лечение кариеса зубов одинцово",
  "стоматолог терапевт одинцово"
];

export const metadata: Metadata = {
  title: "Лечение кариеса в Одинцово | Клиника «Альтамед-С»",
  description:
    "Лечение кариеса всех стадий в Одинцово — клиника «Альтамед-С»: безболезненное лечение, современные материалы, качественные пломбы, доступные цены и опытные стоматологи-терапевты.",
  keywords: WORDSTAT_KEYWORDS,
  alternates: {
    canonical: "https://altamed-c.ru/services/dentistry/caries"
  },
  openGraph: {
    title: "Лечение кариеса в Одинцово — стоматология «Альтамед-С»",
    description:
      "Лечение кариеса в Одинцово: поверхностный, средний и глубокий кариес, качественные пломбы, безболезненное лечение, современные материалы и доступные цены.",
    url: "https://altamed-c.ru/services/dentistry/caries",
    type: "article",
    images: [
      {
        url: "https://altamed-c.ru/images/dentisrty/task_01kb5855rne17bddh7ks55a0ze_1764334299_img_1.webp",
        width: 1200,
        height: 630,
        alt: "Лечение кариеса в клинике Альтамед-С в Одинцово"
      }
    ]
  }
};

export default function CariesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
