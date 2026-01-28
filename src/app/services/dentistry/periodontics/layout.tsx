import type { Metadata } from "next";

const WORDSTAT_KEYWORDS: string[] = [
  "пародонтолог Альтамед Голицино",
  "лечение десен Альтамед Голицино",
  "пародонтология Альтамед Голицино",
  "Альтамед Голицино пародонтолог цена",
  "пародонтолог Альтамед Голицино отзывы",
  "лечение пародонтита Альтамед Голицино",
  "лечение пародонтоза Альтамед Голицино",
  "стоматология пародонтология Альтамед Голицино",
  "пародонтолог Альтамед Голицино цены",
  "лечение десен Альтамед Голицино цены"
];

export const metadata: Metadata = {
  title: "Пародонтолог в Альтамед Голицино | Клиника «Альтамед Голицино»",
  description:
    "Пародонтолог в Альтамед Голицино — клиника «Альтамед Голицино»: лечение заболеваний десен, пародонтит, пародонтоз, шинирование зубов, лоскутные операции, опытные пародонтологи.",
  keywords: WORDSTAT_KEYWORDS,
  alternates: {
    canonical: "https://altamed-golitsino.ru/services/dentistry/periodontics"
  },
  openGraph: {
    title: "Пародонтолог в Альтамед Голицино — стоматология «Альтамед Голицино»",
    description:
      "Пародонтолог в Альтамед Голицино: лечение заболеваний десен, пародонтит, пародонтоз, шинирование подвижных зубов, лоскутные операции и пластика десны.",
    url: "https://altamed-golitsino.ru/services/dentistry/periodontics",
    type: "article",
    images: [
      {
        url: "https://altamed-golitsino.ru/images/dentisrty/image (1) 2.webp",
        width: 1200,
        height: 630,
        alt: "Пародонтолог в клинике Альтамед Голицино в Альтамед Голицино"
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
