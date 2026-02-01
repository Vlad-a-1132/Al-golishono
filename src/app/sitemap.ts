import { MetadataRoute } from 'next';
import { doctors } from '@/data/static-data';
import { articles } from '@/data/static-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://altamed-s.ru';
  
  // Статические страницы
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contacts`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/appointments`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/doctors`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/diagnostics`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/rehabilitation`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/promo`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/schedule`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // Страницы услуг
  const servicePages: MetadataRoute.Sitemap = [
    '/services/cardiology',
    '/services/dermatolog-golitsino',
    '/services/gastroenterolog-golitsino',
    '/services/ginekolog-golitsino',
    '/services/nevrolog-golitsino',
    '/services/psihiatr-golitsino',
    '/services/onkolog-golitsino',
    '/services/otorinolaringolog-golitsino',
    '/services/oftalmolog-golitsino',
    '/services/pediatr-golitsino',
    '/services/proctology',
    '/services/surdology',
    '/services/endocrinology',
    '/services/endoscopy',
    '/services/xray',
    '/services/uzi-golitsino',
    '/services/osteopathy',
    '/services/mammology',
    '/services/dentistry',
    '/services/dentistry/caries',
    '/services/dentistry/periodontics',
    '/services/dentistry/implantation',
    '/services/dentistry/prosthodontics',
    '/services/dentistry/orthodontics',
    '/services/dentistry/pediatric-dentistry',
    '/services/dentistry/therapeutic',
    '/services/dentistry/surgery',
    '/services/dentistry/general-diagnostics',
    '/services/hardware-diagnostics',
    '/services/functional-diagnostics',
    '/services/general-manipulations',
    '/services/urolog-golitsino',
    '/services/terapevt-golitsino',
    '/services/surgery',
    '/services/traumatology',
    '/services/lab-tests',
    '/services/lab-tests/calculator',
    '/services/pregnancy-screening',
    '/services/shockwave-therapy',
    '/services/ct',
    '/services/carboxytherapy',
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Динамические страницы врачей
  const doctorPages: MetadataRoute.Sitemap = doctors.map((doctor) => ({
    url: `${baseUrl}/doctors/${doctor.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Динамические страницы блога
  const blogPages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/blog/${article.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Динамические страницы акций
  const promoPages: MetadataRoute.Sitemap = [
    { id: 1, slug: 'promo-1' },
    { id: 2, slug: 'promo-2' },
    { id: 3, slug: 'promo-3' },
    { id: 4, slug: 'promo-4' },
    { id: 5, slug: 'promo-5' },
  ].map((promo) => ({
    url: `${baseUrl}/promo/${promo.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...doctorPages,
    ...blogPages,
    ...promoPages,
  ];
}

