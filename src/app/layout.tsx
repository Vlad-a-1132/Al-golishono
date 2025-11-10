import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "../components/ClientLayout";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Медицинский центр Альтамед-с в Одинцово - Запись к врачу онлайн | Многопрофильная клиника",
  description: "Медицинский центр Альтамед-с в Одинцово - многопрофильная клиника с широким спектром медицинских услуг. Запись к врачу онлайн, современное оборудование, опытные специалисты. Терапия, педиатрия, гинекология, стоматология, диагностика и многое другое.",
  keywords: [
    'медицинский центр Одинцово',
    'клиника Одинцово',
    'Альтамед-с Одинцово',
    'врач Одинцово',
    'запись к врачу Одинцово',
    'запись к врачу онлайн Одинцово',
    'многопрофильная клиника Одинцово',
    'медицинские услуги Одинцово',
    'терапевт Одинцово',
    'педиатр Одинцово',
    'гинеколог Одинцово',
    'стоматолог Одинцово',
    'диагностика Одинцово',
    'анализы Одинцово',
    'УЗИ Одинцово',
    'медицинский центр Альтамед-с',
    'клиника Альтамед-с',
    'записаться на прием Одинцово',
    'Московская область медицинский центр',
    'Одинцовский район клиника'
  ],
  openGraph: {
    title: 'Медицинский центр Альтамед-с в Одинцово - Запись к врачу онлайн',
    description: 'Медицинский центр Альтамед-с в Одинцово - многопрофильная клиника с широким спектром медицинских услуг. Запись к врачу онлайн, современное оборудование, опытные специалисты.',
    url: 'https://altamed-s.ru',
    siteName: 'Альтамед-с',
    images: [
      {
        url: 'https://altamed-s.ru/images/icons/S.webp',
        width: 1200,
        height: 630,
        alt: 'Медицинский центр Альтамед-с',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Медицинский центр Альтамед-с в Одинцово - Запись к врачу онлайн',
    description: 'Медицинский центр Альтамед-с в Одинцово - многопрофильная клиника с широким спектром медицинских услуг.',
    images: ['https://altamed-s.ru/images/icons/S.webp'],
  },
  alternates: {
    canonical: 'https://altamed-s.ru',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
