import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Невролог в Одинцово — приём, школы для больных, реабилитация, блокады, ФормТотикс | Альтамед-с',
  description: 'Невролог в Одинцово: приём врача-невролога, диспансерный приём, школы для больных (рассеянный склероз, эпилепсия, Паркинсон), реабилитация после инсульта и ЧМТ, блокады периферических нервов, ортопедические стельки ФормТотикс. Прайс, запись в клинике Альтамед-с.',
  keywords: [
    'невролог Одинцово',
    'неврология Одинцово',
    'лечение нервной системы Одинцово',
    'заболевания позвоночника Одинцово',
    'головные боли Одинцово',
    'мигрень Одинцово',
    'остеохондроз Одинцово',
    'инсульт реабилитация Одинцово',
    'эпилепсия Одинцово',
    'школа для больных Паркинсон Одинцово',
    'блокада нерва Одинцово',
    'ФормТотикс Одинцово',
    'Альтамед-с невролог',
    'Московская область неврология',
    'здоровье нервной системы Одинцово'
  ],
  openGraph: {
    title: 'Невролог в Одинцово — приём, школы для больных, реабилитация, блокады | Альтамед-с',
    description: 'Невролог в Одинцово: приём врача-невролога, школы для больных, реабилитация после инсульта и ЧМТ, блокады, ортопедические стельки ФормТотикс. Клиника Альтамед-с.',
    type: 'website',
    url: 'https://altamed-s.ru/services/neurology',
    locale: 'ru_RU',
    siteName: 'Альтамед-с',
    images: [
      {
        url: '/images/images allergoly/nevrolog.webp',
        width: 1200,
        height: 630,
        alt: 'Невролог в Одинцово - Альтамед-с',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Невролог в Одинцово - Диагностика и лечение заболеваний нервной системы | Альтамед-с',
    description: 'Профессиональная неврология в Одинцово. Диагностика и лечение заболеваний нервной системы, консультация невролога, рефлексотерапия.',
    images: ['/images/images allergoly/nevrolog.webp'],
  },
  alternates: {
    canonical: 'https://altamed-s.ru/services/neurology',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Placeholder
  },
  other: {
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "Альтамед-с Неврология в Одинцово",
      "description": "Невролог в Одинцово: приём врача-невролога, школы для больных (рассеянный склероз, эпилепсия, Паркинсон), реабилитация после инсульта и ЧМТ, блокады, ортопедические стельки ФормТотикс.",
      "url": "https://altamed-s.ru/services/neurology",
      "telephone": "+7 (495) 255-44-50",
      "email": "info@altamed-s.ru",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Одинцово",
        "addressRegion": "Московская область",
        "addressCountry": "RU",
        "postalCode": "143000"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "55.6789",
        "longitude": "37.2794"
      },
      "medicalSpecialty": "Неврология",
      "areaServed": [
        {
          "@type": "City",
          "name": "Одинцово"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Московская область"
        }
      ],
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "55.6789",
          "longitude": "37.2794"
        },
        "geoRadius": "50000"
      },
      "openingHours": "Mo-Fr 08:00-20:00, Sa-Su 09:00-18:00",
      "priceRange": "₽₽",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Услуги неврологии в Одинцово",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MedicalProcedure",
              "name": "Консультация невролога в Одинцово",
              "description": "Первичная консультация и осмотр у врача-невролога в Одинцово"
            },
            "price": "3200",
            "priceCurrency": "RUB",
            "availability": "InStock"
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "MedicalProcedure",
              "name": "Рефлексотерапия в Одинцово",
              "description": "Рефлексотерапевтические процедуры"
            },
            "price": "3700",
            "priceCurrency": "RUB",
            "availability": "InStock"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MedicalProcedure", 
              "name": "Медицинская реабилитация в Одинцово",
              "description": "Услуги по медицинской реабилитации пациентов"
            },
            "price": "2800",
            "priceCurrency": "RUB",
            "availability": "InStock"
          }
        ]
      },
      "provider": {
        "@type": "MedicalOrganization",
        "name": "Альтамед-с",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Одинцово",
          "addressRegion": "Московская область",
          "addressCountry": "RU"
        }
      }
    }),
  },
};

export default function NeurologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
