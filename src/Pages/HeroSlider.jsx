import React, { useState, useEffect, useCallback } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const slides = [
  {
    image: '/Slider1.jpg',
    title: 'Nourish Your Family With Nature\'s Best',
    subtitle: 'Hand-selected Himalayan rice - packed with nutrients and tradition',
    cta: 'Discover Our Harvest',
    ctaLink: '/products/rice',
    highlight: 'Chemical-free & rich in minerals'
  },
  {
    image: '/Slider2.jpg',
    title: 'From Our Fields To Your Table',
    subtitle: 'Experience grains so pure, you can taste the care in every bite',
    cta: 'Shop Premium Grains',
    ctaLink: '/shop',
    highlight: '100% traceable source'
  },
  {
    image: '/Slider3.jpg',
    title: 'Eat Well, Do Good',
    subtitle: 'Every purchase supports sustainable farming communities',
    cta: 'Meet Our Farmers',
    ctaLink: '/our-story',
    highlight: 'Ethically sourced'
  },
];

export default function HeroSlider({
  height = 'h-[80vh]',
  maxHeight = 'max-h-[800px]',
  autoLoop = true,
  autoInterval = 7000,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const totalSlides = slides.length;

  // Memoized navigation functions
  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  // Auto-rotation effect
  useEffect(() => {
    if (!autoLoop || totalSlides <= 1 || isHovered) return;
    
    const timer = setTimeout(() => {
      nextSlide();
    }, autoInterval);

    return () => clearTimeout(timer);
  }, [autoLoop, autoInterval, totalSlides, isHovered, nextSlide]);

  // Preload images for better performance
  useEffect(() => {
    slides.forEach(slide => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  return (
    <section 
      className={`relative w-full mt-10 ${height} ${maxHeight} overflow-hidden`}
      aria-label="Image carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {slides.map((slide, index) => (
        <article
          key={index}
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-in-out
            ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          aria-hidden={index !== currentIndex}
        >
          {/* Image with performance optimizations */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
            />
            <div className="absolute inset-0 bg-black/40" aria-hidden="true"></div>
          </div>

          {/* Content with better semantic markup */}
          <div className="relative z-20 w-full max-w-5xl px-4 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 inline-block mx-4">
              <span className="inline-block px-4 py-2 mb-4 bg-white/20 text-white rounded-full text-sm font-medium">
                {slide.highlight}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                {slide.title}
              </h1>
              <p className="text-white/90 text-lg md:text-xl mb-6 max-w-2xl mx-auto">
                {slide.subtitle}
              </p>
              <a
                href={slide.ctaLink}
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                aria-label={`Learn more about ${slide.title}`}
              >
                {slide.cta}
                <FiChevronRight className="ml-2" aria-hidden="true" />
              </a>
            </div>
          </div>
        </article>
      ))}

      {/* Navigation with better accessibility */}
      {totalSlides > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 text-white p-2 rounded-full z-30 hover:bg-white/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Previous slide"
          >
            <FiChevronLeft size={24} aria-hidden="true" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 text-white p-2 rounded-full z-30 hover:bg-white/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Next slide"
          >
            <FiChevronRight size={24} aria-hidden="true" />
          </button>
        </>
      )}

      {/* Indicators with keyboard navigation */}
      {totalSlides > 1 && (
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white ${
                index === currentIndex ? 'bg-white w-6' : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}