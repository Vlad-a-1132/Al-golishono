import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Маммолог в Голицыно - Диагностика и лечение заболеваний молочных желез | Альтамед Голицыно',
  description: 'Маммолог в Голицыно - профессиональная диагностика и лечение заболеваний молочных желез. УЗИ молочных желез, маммография, лечение мастопатии. Запись на прием к маммологу в клинике Альтамед Голицыно.',
  keywords: [
    'маммолог Голицыно',
    'маммология Голицыно',
    'диагностика молочных желез Голицыно',
    'маммолог Альтамед Голицыно',
    'УЗИ молочных желез Голицыно',
    'маммография Голицыно',
    'лечение мастопатии Голицыно',
    'лечение кист молочных желез Голицыно',
    'рак молочной железы Голицыно',
    'профилактика рака груди Голицыно',
    'самообследование молочных желез Голицыно',
    'гормональная терапия Голицыно',
    'беременность и молочные железы Голицыно',
    'записаться к маммологу Голицыно',
    'прием маммолога Голицыно',
    'консультация маммолога Голицыно',
    'Московская область маммолог',
    'Голицыно маммология'
  ],
  openGraph: {
    title: 'Маммолог в Голицыно - Диагностика и лечение заболеваний молочных желез | Альтамед Голицыно',
    description: 'Маммолог в Голицыно - профессиональная диагностика и лечение заболеваний молочных желез. УЗИ молочных желез, маммография, лечение мастопатии. Запись на прием к маммологу в клинике Альтамед Голицыно.',
    type: 'website',
    url: 'https://altamed-s.ru/services/mammology',
    locale: 'ru_RU',
    siteName: 'Альтамед Голицыно',
    images: [
      {
        url: '/images/images allergoly/mamalogy.webp',
        width: 1200,
        height: 630,
        alt: 'Маммолог в Голицыно - Альтамед Голицыно',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Маммолог в Голицыно - Диагностика и лечение заболеваний молочных желез | Альтамед Голицыно',
    description: 'Маммолог в Голицыно - профессиональная диагностика и лечение заболеваний молочных желез. УЗИ молочных желез, маммография, лечение мастопатии. Запись на прием к маммологу в клинике Альтамед Голицыно.',
    images: ['/images/images allergoly/mamalogy.webp'],
  },
  alternates: {
    canonical: 'https://altamed-s.ru/services/mammology',
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
    google: 'your-google-verification-code',
  },
  other: {
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "Альтамед Голицыно - Маммология в Голицыно",
      "description": "Клиника маммологии в Голицыно. Профессиональная диагностика и лечение заболеваний молочных желез. УЗИ молочных желез, маммография, лечение мастопатии.",
      "url": "https://altamed-s.ru/services/mammology",
      "telephone": "+7 (495) 255-44-50",
      "email": "info@altamed-s.ru",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Голицыно",
        "addressRegion": "Московская область",
        "addressCountry": "RU",
        "postalCode": "143000"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "55.6789",
        "longitude": "37.2794"
      },
      "medicalSpecialty": "Маммология",
      "areaServed": [
        {
          "@type": "City",
          "name": "Голицыно"
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
        "name": "Услуги маммологии в Голицыно",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MedicalProcedure",
              "name": "Консультация маммолога в Голицыно",
              "description": "Первичная консультация и осмотр у врача-маммолога в Голицыно"
            },
            "price": "3500",
            "priceCurrency": "RUB",
            "availability": "InStock"
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "MedicalProcedure",
              "name": "УЗИ молочных желез в Голицыно",
              "description": "Ультразвуковое исследование молочных желез"
            },
            "price": "2000",
            "priceCurrency": "RUB",
            "availability": "InStock"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MedicalProcedure", 
              "name": "Маммография в Голицыно",
              "description": "Рентгенологическое исследование молочных желез"
            },
            "price": "2500",
            "priceCurrency": "RUB",
            "availability": "InStock"
          }
        ]
      },
      "provider": {
        "@type": "MedicalOrganization",
        "name": "Альтамед Голицыно",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Голицыно",
          "addressRegion": "Московская область",
          "addressCountry": "RU"
        }
      }
    })
  }
};

export default function MammologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
