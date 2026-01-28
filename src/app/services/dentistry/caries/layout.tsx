import type { Metadata } from "next";

const WORDSTAT_KEYWORDS: string[] = [
  "лечение кариеса голицыно",
  "лечение кариеса в голицыно",
  "кариес лечение голицыно",
  "голицыно лечение кариеса цена",
  "лечение кариеса голицыно отзывы",
  "стоматология лечение кариеса голицыно",
  "лечение кариеса голицыно цены",
  "пломба голицыно",
  "лечение кариеса зубов голицыно",
  "стоматолог терапевт голицыно"
];

export const metadata: Metadata = {
  title: "Лечение кариеса в Альтамед Голицино | Клиника «Альтамед Голицино»",
  description:
    "Лечение кариеса всех стадий в Альтамед Голицино — клиника «Альтамед Голицино»: безболезненное лечение, современные материалы, качественные пломбы, доступные цены и опытные стоматологи-терапевты.",
  keywords: WORDSTAT_KEYWORDS,
  alternates: {
    canonical: "https://altamed-golitsino.ru/services/dentistry/caries"
  },
  openGraph: {
    title: "Лечение кариеса в Альтамед Голицино — стоматология «Альтамед Голицино»",
    description:
      "Лечение кариеса в Альтамед Голицино: поверхностный, средний и глубокий кариес, качественные пломбы, безболезненное лечение, современные материалы и доступные цены.",
    url: "https://altamed-golitsino.ru/services/dentistry/caries",
    type: "article",
    images: [
      {
        url: "https://altamed-golitsino.ru/images/dentisrty/task_01kb5855rne17bddh7ks55a0ze_1764334299_img_1.webp",
        width: 1200,
        height: 630,
        alt: "Лечение кариеса в клинике Альтамед Голицино"
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
