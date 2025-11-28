import type { Metadata } from "next";

const WORDSTAT_KEYWORDS: string[] = [
  "консультация стоматолога одинцово",
  "прием стоматолога одинцово",
  "стоматолог одинцово",
  "одинцово стоматолог цена",
  "консультация стоматолога одинцово отзывы",
  "стоматология одинцово",
  "прием стоматолога одинцово цены",
  "стоматолог терапевт одинцово",
  "консультация стоматолога в одинцове",
  "стоматолог одинцово запись"
];

export const metadata: Metadata = {
  title: "Консультация стоматолога в Одинцово | Клиника «Альтамед-С»",
  description:
    "Консультация стоматолога в Одинцово — клиника «Альтамед-С»: первичный и повторный прием, осмотр, составление плана лечения, оформление справок, опытные врачи и доступные цены.",
  keywords: WORDSTAT_KEYWORDS,
  alternates: {
    canonical: "https://altamed-c.ru/services/dentistry/consultation"
  },
  openGraph: {
    title: "Консультация стоматолога в Одинцово — стоматология «Альтамед-С»",
    description:
      "Консультация стоматолога в Одинцово: первичный и повторный прием, осмотр полости рта, составление плана лечения по КТ, оформление справок о санации.",
    url: "https://altamed-c.ru/services/dentistry/consultation",
    type: "article",
    images: [
      {
        url: "https://altamed-c.ru/images/dentisrty/dc792999-799a-442d-b88d-d1e7eadaae11 1.webp",
        width: 1200,
        height: 630,
        alt: "Консультация стоматолога в клинике Альтамед-С в Одинцово"
      }
    ]
  }
};

export default function ConsultationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
