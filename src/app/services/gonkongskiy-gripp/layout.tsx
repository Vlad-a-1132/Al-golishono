import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Гонконгский грипп H3N2: информация и рекомендации | Клиника «Альтамед Голицыно»",
  description:
    "Подробная информация о гонконгском гриппе H3N2: симптомы, группы риска, осложнения, диагностика, лечение и профилактика. Рекомендации специалистов клиники «Альтамед Голицыно» в Голицыно.",
  keywords: [
    "гонконгский грипп",
    "грипп H3N2",
    "симптомы гриппа",
    "лечение гриппа",
    "профилактика гриппа",
    "грипп у детей",
    "грипп Голицыно",
    "Альтамед Голицыно грипп",
    "грипп А H3N2",
    "симптомы гонконгского гриппа",
    "лечение гриппа H3N2",
    "вакцинация от гриппа",
    "профилактика гриппа Голицыно",
    "грипп 2025",
    "подтип K гриппа",
    "антигенный дрейф"
  ],
  openGraph: {
    title: "Гонконгский грипп H3N2: информация и рекомендации — клиника «Альтамед Голицыно»",
    description:
      "Все о гонконгском гриппе H3N2: от симптомов до профилактики. Узнайте, как защитить себя и свою семью. Клиника «Альтамед Голицыно» в Голицыно.",
    type: "article",
    url: "https://altamed-s.ru/services/gonkongskiy-gripp",
    locale: "ru_RU",
    siteName: "Альтамед Голицыно",
    images: [
      {
        url: "https://altamed-s.ru/images/yslugi/h3n2.webp",
        width: 1200,
        height: 630,
        alt: "Гонконгский грипп H3N2",
      },
    ],
  },
  alternates: {
    canonical: "https://altamed-s.ru/services/gonkongskiy-gripp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function GonkongskiyGrippLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

