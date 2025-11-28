import type { Metadata } from "next";

const WORDSTAT_KEYWORDS: string[] = [
  "стоматолог ортопед одинцово",
  "ортопед стоматолог одинцово",
  "протезирование зубов одинцово",
  "одинцово стоматолог ортопед цена",
  "стоматолог ортопед одинцово отзывы",
  "ортопедическая стоматология одинцово",
  "коронки одинцово",
  "виниры одинцово",
  "стоматолог ортопед одинцово цены",
  "протезирование зубов одинцово цены"
];

export const metadata: Metadata = {
  title: "Стоматолог-ортопед в Одинцово | Клиника «Альтамед-С»",
  description:
    "Стоматолог-ортопед в Одинцово — клиника «Альтамед-С»: протезирование зубов, коронки, виниры, мосты, съемные протезы, опытные ортопеды и современные материалы.",
  keywords: WORDSTAT_KEYWORDS,
  alternates: {
    canonical: "https://altamed-c.ru/services/dentistry/prosthodontics"
  },
  openGraph: {
    title: "Стоматолог-ортопед в Одинцово — стоматология «Альтамед-С»",
    description:
      "Стоматолог-ортопед в Одинцово: протезирование зубов, коронки из диоксида циркония, виниры, мосты, съемные протезы и протезирование на имплантах.",
    url: "https://altamed-c.ru/services/dentistry/prosthodontics",
    type: "article",
    images: [
      {
        url: "https://altamed-c.ru/images/dentisrty/task_01kb59j9wbe6ma7c4wg6n4yecp_1764335787_img_0.webp",
        width: 1200,
        height: 630,
        alt: "Стоматолог-ортопед в клинике Альтамед-С в Одинцово"
      }
    ]
  }
};

export default function ProsthodonticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
