import type { Metadata } from "next";

const WORDSTAT_KEYWORDS: string[] = [
  "консультация стоматолога Голицыно",
  "прием стоматолога Голицыно",
  "стоматолог Голицыно",
  "Голицыно стоматолог цена",
  "консультация стоматолога Голицыно отзывы",
  "стоматология Голицыно",
  "прием стоматолога Голицыно цены",
  "стоматолог терапевт Голицыно",
  "консультация стоматолога в Альтамед Голицыно",
  "стоматолог Голицыно запись"
];

export const metadata: Metadata = {
  title: "Консультация стоматолога в Альтамед Голицыно | Клиника «Альтамед Голицыно»",
  description:
    "Консультация стоматолога в Альтамед Голицыно — клиника «Альтамед Голицыно»: первичный и повторный прием, осмотр, составление плана лечения, оформление справок, опытные врачи и доступные цены.",
  keywords: WORDSTAT_KEYWORDS,
  alternates: {
    canonical: "https://altamed-golitsino.ru/services/dentistry/consultation"
  },
  openGraph: {
    title: "Консультация стоматолога в Альтамед Голицыно — стоматология «Альтамед Голицыно»",
    description:
      "Консультация стоматолога в Альтамед Голицыно: первичный и повторный прием, осмотр полости рта, составление плана лечения, оформление справок о санации.",
    url: "https://altamed-golitsino.ru/services/dentistry/consultation",
    type: "article",
    images: [
      {
        url: "https://altamed-golitsino.ru/images/dentisrty/dc792999-799a-442d-b88d-d1e7eadaae11 1.webp",
        width: 1200,
        height: 630,
        alt: "Консультация стоматолога в клинике Альтамед Голицыно"
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
