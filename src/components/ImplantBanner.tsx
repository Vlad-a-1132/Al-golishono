import PromoBanner from './PromoBanner';

// Легаси компонент для обратной совместимости
export default function ImplantBanner() {
  return (
    <PromoBanner
      title="Имплантация зубов"
      subtitle="Консультация стоматолога перед процедурой - бесплатна"
      image="/images/dentisrty/action-implNT.webp"
      buttonText="Подробнее"
      buttonLink="/services/dentistry/implantation"
      buttonColor="#13AB7B"
    />
  );
}

