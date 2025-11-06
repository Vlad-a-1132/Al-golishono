import Image from 'next/image';
import Link from 'next/link';

interface PromoBannerProps {
  title: string;
  subtitle?: string;
  image: string;
  buttonText?: string;
  buttonLink?: string;
  buttonColor?: string;
}

export default function PromoBanner({ 
  title, 
  subtitle, 
  image, 
  buttonText = 'Подробнее', 
  buttonLink = '/services',
  buttonColor = '#13AB7B'
}: PromoBannerProps) {
  return (
    <div className="w-full rounded-[20px] overflow-hidden shadow-lg mb-8 relative">
      <Image
        src={image}
        alt={subtitle ? `${title} - ${subtitle}` : title}
        width={1200}
        height={400}
        className="w-full h-auto object-cover"
        priority
      />
      
      {/* Кнопка "Подробнее" */}
      {buttonText && (
        <div className="absolute bottom-4 right-4">
          <Link 
            href={buttonLink}
            className="px-6 py-3 rounded-full font-medium transition-colors duration-300 shadow-lg hover:shadow-xl text-white"
            style={{ backgroundColor: buttonColor }}
          >
            {buttonText}
          </Link>
        </div>
      )}
    </div>
  );
}
