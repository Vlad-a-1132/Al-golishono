import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AIRFLOW Prophylaxis Master - Профессиональная чистка зубов по протоколу GBT в Альтамед Голицыно | Альтамед Голицыно",
  description:
    "Профессиональная гигиена полости рта по протоколу GBT аппаратом AIRFLOW® Prophylaxis Master в Альтамед Голицыно. Безболезненное удаление биоплёнки, пигментаций и зубных отложений. Швейцарское оборудование, опытные гигиенисты. Запись онлайн.",
  keywords: [
    "AIRFLOW Prophylaxis Master Альтамед Голицыно",
    "профессиональная гигиена полости рта Альтамед Голицыно",
    "GBT протокол Альтамед Голицыно",
    "чистка зубов Альтамед Голицыно",
    "удаление биоплёнки Альтамед Голицыно",
    "профгигиена Альтамед Голицыно",
    "AIRFLOW Альтамед Голицыно",
    "PERIOFLOW Альтамед Голицыно",
    "PIEZON NO PAIN",
    "профессиональная чистка зубов Альтамед Голицыно",
    "гигиена полости рта Альтамед Голицыно",
    "стоматологическая гигиена Альтамед Голицыно",
    "чистка зубов аппаратом AIRFLOW",
    "профгигиена по протоколу GBT",
    "безболезненная чистка зубов"
  ],
  alternates: {
    canonical: "https://altamed-golitsino.ru/services/airflow-prophylaxis-master"
  },
  openGraph: {
    title: "AIRFLOW Prophylaxis Master - Профессиональная чистка зубов по протоколу GBT в Альтамед Голицыно | Альтамед Голицыно",
    description:
      "Профессиональная гигиена полости рта по протоколу GBT с использованием швейцарского аппарата AIRFLOW® Prophylaxis Master в Альтамед Голицыно. Безболезненное удаление биоплёнки и зубных отложений.",
    url: "https://altamed-golitsino.ru/services/airflow-prophylaxis-master",
    type: "article",
    images: [
      {
        url: "https://altamed-golitsino.ru/images/yslugi/air flow.webp",
        width: 1200,
        height: 630,
        alt: "AIRFLOW Prophylaxis Master - профессиональная гигиена зубов в Альтамед Голицыно"
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

