import type { Metadata } from "next";

const WORDSTAT_KEYWORDS: string[] = [
  "стоматолог ортопед Альтамед Голицыно",
  "ортопед стоматолог Альтамед Голицыно",
  "протезирование зубов Альтамед Голицыно",
  "Альтамед Голицыно стоматолог ортопед цена",
  "стоматолог ортопед Альтамед Голицыно отзывы",
  "ортопедическая стоматология Альтамед Голицыно",
  "коронки Альтамед Голицыно",
  "виниры Альтамед Голицыно",
  "стоматолог ортопед Альтамед Голицыно цены",
  "протезирование зубов Альтамед Голицыно цены"
];

export const metadata: Metadata = {
  title: "Стоматолог-ортопед в Альтамед Голицыно | Клиника «Альтамед Голицыно»",
  description:
    "Стоматолог-ортопед в Альтамед Голицыно — клиника «Альтамед Голицыно»: протезирование зубов, коронки, виниры, мосты, съемные протезы, опытные ортопеды и современные материалы.",
  keywords: WORDSTAT_KEYWORDS,
  alternates: {
    canonical: "https://altamed-golitsino.ru/services/dentistry/prosthodontics"
  },
  openGraph: {
    title: "Стоматолог-ортопед в Альтамед Голицыно — стоматология «Альтамед Голицыно»",
    description:
      "Стоматолог-ортопед в Альтамед Голицыно: протезирование зубов, коронки из диоксида циркония, виниры, мосты, съемные протезы и протезирование на имплантах.",
    url: "https://altamed-golitsino.ru/services/dentistry/prosthodontics",
    type: "article",
    images: [
      {
        url: "https://altamed-golitsino.ru/images/dentisrty/task_01kb59j9wbe6ma7c4wg6n4yecp_1764335787_img_0.webp",
        width: 1200,
        height: 630,
        alt: "Стоматолог-ортопед в клинике Альтамед Голицыно в Альтамед Голицыно"
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
