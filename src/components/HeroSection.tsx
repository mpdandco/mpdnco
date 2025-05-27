interface HeroSectionProps {
  title: string;
  subtitle: React.ReactNode;
  ctaText?: string;
  ctaLink?: string;
  image?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  image,
}) => {
  return (
    <div className="relative mt-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${image || "https://images.pexels.com/photos/7681094/pexels-photo-7681094.jpeg?auto=compress&cs=tinysrgb&w=1920"})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 py-32 md:py-48 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">{subtitle}</p>

          {ctaText && ctaLink && (
            <a
              href={ctaLink}
              className="inline-block bg-[#278493] text-white font-medium px-8 py-3 rounded-md hover:bg-[#1e6978] transition-colors shadow-md"
            >
              {ctaText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
