import type { Metadata } from "next";

const WORDSTAT_KEYWORDS: string[] = [
  "пародонтолог Альтамед Голицыно",
  "лечение десен Альтамед Голицыно",
  "пародонтология Альтамед Голицыно",
  "Альтамед Голицыно пародонтолог цена",
  "пародонтолог Альтамед Голицыно отзывы",
  "лечение пародонтита Альтамед Голицыно",
  "лечение пародонтоза Альтамед Голицыно",
  "стоматология пародонтология Альтамед Голицыно",
  "пародонтолог Альтамед Голицыно цены",
  "лечение десен Альтамед Голицыно цены"
];

export const metadata: Metadata = {
  title: "Пародонтолог в Альтамед Голицыно | Клиника «Альтамед Голицыно»",
  description:
    "Пародонтолог в Альтамед Голицыно — клиника «Альтамед Голицыно»: лечение заболеваний десен, пародонтит, пародонтоз, шинирование зубов, лоскутные операции, опытные пародонтологи.",
  keywords: WORDSTAT_KEYWORDS,
  alternates: {
    canonical: "https://altamed-golitsino.ru/services/dentistry/periodontics"
  },
  openGraph: {
    title: "Пародонтолог в Альтамед Голицыно — стоматология «Альтамед Голицыно»",
    description:
      "Пародонтолог в Альтамед Голицыно: лечение заболеваний десен, пародонтит, пародонтоз, шинирование подвижных зубов, лоскутные операции и пластика десны.",
    url: "https://altamed-golitsino.ru/services/dentistry/periodontics",
    type: "article",
    images: [
      {
        url: "https://altamed-golitsino.ru/images/dentisrty/image (1) 2.webp",
        width: 1200,
        height: 630,
        alt: "Пародонтолог в клинике Альтамед Голицыно в Альтамед Голицыно"
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
