import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AIRFLOW Prophylaxis Master - Профессиональная чистка зубов по протоколу GBT в Альтамед Голицино | Альтамед Голицино",
  description:
    "Профессиональная гигиена полости рта по протоколу GBT аппаратом AIRFLOW® Prophylaxis Master в Альтамед Голицино. Безболезненное удаление биоплёнки, пигментаций и зубных отложений. Швейцарское оборудование, опытные гигиенисты. Запись онлайн.",
  keywords: [
    "AIRFLOW Prophylaxis Master Альтамед Голицино",
    "профессиональная гигиена полости рта Альтамед Голицино",
    "GBT протокол Альтамед Голицино",
    "чистка зубов Альтамед Голицино",
    "удаление биоплёнки Альтамед Голицино",
    "профгигиена Альтамед Голицино",
    "AIRFLOW Альтамед Голицино",
    "PERIOFLOW Альтамед Голицино",
    "PIEZON NO PAIN",
    "профессиональная чистка зубов Альтамед Голицино",
    "гигиена полости рта Альтамед Голицино",
    "стоматологическая гигиена Альтамед Голицино",
    "чистка зубов аппаратом AIRFLOW",
    "профгигиена по протоколу GBT",
    "безболезненная чистка зубов"
  ],
  alternates: {
    canonical: "https://altamed-golitsino.ru/services/airflow-prophylaxis-master"
  },
  openGraph: {
    title: "AIRFLOW Prophylaxis Master - Профессиональная чистка зубов по протоколу GBT в Альтамед Голицино | Альтамед Голицино",
    description:
      "Профессиональная гигиена полости рта по протоколу GBT с использованием швейцарского аппарата AIRFLOW® Prophylaxis Master в Альтамед Голицино. Безболезненное удаление биоплёнки и зубных отложений.",
    url: "https://altamed-golitsino.ru/services/airflow-prophylaxis-master",
    type: "article",
    images: [
      {
        url: "https://altamed-golitsino.ru/images/yslugi/air flow.webp",
        width: 1200,
        height: 630,
        alt: "AIRFLOW Prophylaxis Master - профессиональная гигиена зубов в Альтамед Голицино"
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function AirflowProphylaxisMasterLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

