import type { Metadata } from "next";

const WORDSTAT_KEYWORDS: string[] = [
  "консультация стоматолога голицино",
  "прием стоматолога голицино",
  "стоматолог голицино",
  "голицино стоматолог цена",
  "консультация стоматолога голицино отзывы",
  "стоматология голицино",
  "прием стоматолога голицино цены",
  "стоматолог терапевт голицино",
  "консультация стоматолога в Альтамед Голицино",
  "стоматолог голицино запись"
];

export const metadata: Metadata = {
  title: "Консультация стоматолога в Альтамед Голицино | Клиника «Альтамед Голицино»",
  description:
    "Консультация стоматолога в Альтамед Голицино — клиника «Альтамед Голицино»: первичный и повторный прием, осмотр, составление плана лечения, оформление справок, опытные врачи и доступные цены.",
  keywords: WORDSTAT_KEYWORDS,
  alternates: {
    canonical: "https://altamed-golitsino.ru/services/dentistry/consultation"
  },
  openGraph: {
    title: "Консультация стоматолога в Альтамед Голицино — стоматология «Альтамед Голицино»",
    description:
      "Консультация стоматолога в Альтамед Голицино: первичный и повторный прием, осмотр полости рта, составление плана лечения по КТ, оформление справок о санации.",
    url: "https://altamed-golitsino.ru/services/dentistry/consultation",
    type: "article",
    images: [
      {
        url: "https://altamed-golitsino.ru/images/dentisrty/dc792999-799a-442d-b88d-d1e7eadaae11 1.webp",
        width: 1200,
        height: 630,
        alt: "Консультация стоматолога в клинике Альтамед Голицино"
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
