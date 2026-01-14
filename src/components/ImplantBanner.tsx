import PromoBanner from './PromoBanner';

// Легаси компонент для обратной совместимости
export default function ImplantBanner() {
  return (
    <PromoBanner
      title="Имплантация зубов"
      subtitle="Консультация стоматолога перед процедурой - бесплатна"
      image="/images/dentisrty/action-implNT.webp"
      doctorImage="/images/promo/Abramov Yuno Eriilevich 1.webp"
    />
  );
}

