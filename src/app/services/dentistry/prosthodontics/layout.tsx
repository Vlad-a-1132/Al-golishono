import type { Metadata } from "next";

const WORDSTAT_KEYWORDS: string[] = [
  "стоматолог ортопед Альтамед Голицино",
  "ортопед стоматолог Альтамед Голицино",
  "протезирование зубов Альтамед Голицино",
  "Альтамед Голицино стоматолог ортопед цена",
  "стоматолог ортопед Альтамед Голицино отзывы",
  "ортопедическая стоматология Альтамед Голицино",
  "коронки Альтамед Голицино",
  "виниры Альтамед Голицино",
  "стоматолог ортопед Альтамед Голицино цены",
  "протезирование зубов Альтамед Голицино цены"
];

export const metadata: Metadata = {
  title: "Стоматолог-ортопед в Альтамед Голицино | Клиника «Альтамед Голицино»",
  description:
    "Стоматолог-ортопед в Альтамед Голицино — клиника «Альтамед Голицино»: протезирование зубов, коронки, виниры, мосты, съемные протезы, опытные ортопеды и современные материалы.",
  keywords: WORDSTAT_KEYWORDS,
  alternates: {
    canonical: "https://altamed-golitsino.ru/services/dentistry/prosthodontics"
  },
  openGraph: {
    title: "Стоматолог-ортопед в Альтамед Голицино — стоматология «Альтамед Голицино»",
    description:
      "Стоматолог-ортопед в Альтамед Голицино: протезирование зубов, коронки из диоксида циркония, виниры, мосты, съемные протезы и протезирование на имплантах.",
    url: "https://altamed-golitsino.ru/services/dentistry/prosthodontics",
    type: "article",
    images: [
      {
        url: "https://altamed-golitsino.ru/images/dentisrty/task_01kb59j9wbe6ma7c4wg6n4yecp_1764335787_img_0.webp",
        width: 1200,
        height: 630,
        alt: "Стоматолог-ортопед в клинике Альтамед Голицино в Альтамед Голицино"
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
