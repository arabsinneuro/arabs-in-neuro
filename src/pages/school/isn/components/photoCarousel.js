import React, { useState, useEffect, useRef } from "react";

const PhotoCarousel = () => {
  // Images from isnschool25 folder
  const photos = [
    "/assets/isnschool25/IMG_20251013_100536.jpg",
    "/assets/isnschool25/IMG_20251014_130651.jpg",
    "/assets/isnschool25/IMG_20251014_190150.jpg",
    "/assets/isnschool25/IMG_20251015_102934.jpg",
    "/assets/isnschool25/IMG_20251017_100622.jpg",
    "/assets/isnschool25/IMG-20251017-WA0015.jpg",
    "/assets/isnschool25/IMG20251015142250.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const imageRefs = useRef([]);
  const imagesPerView = 4; // Always show 4 images at a time

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + imagesPerView;
        return nextIndex >= photos.length ? 0 : nextIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [photos.length, imagesPerView]);

  // Scroll to current index
  useEffect(() => {
    if (scrollContainerRef.current && imageRefs.current[currentIndex]) {
      const imageElement = imageRefs.current[currentIndex];
      const container = scrollContainerRef.current;
      
      container.scrollTo({
        left: imageElement.offsetLeft - container.offsetLeft,
        behavior: "smooth",
      });
    }
  }, [currentIndex, imagesPerView]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - imagesPerView;
      return newIndex < 0 ? Math.max(0, photos.length - imagesPerView) : newIndex;
    });
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + imagesPerView;
      return nextIndex >= photos.length ? 0 : nextIndex;
    });
  };

  return (
    <div className="container mx-auto px-5 py-10">
      <div className="relative w-full max-w-6xl mx-auto">
        {/* Images Container */}
        <div className="relative overflow-hidden rounded-lg shadow-2xl bg-gray-100">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-hidden scroll-smooth"
            style={{ 
              scrollbarWidth: "none", 
              msOverflowStyle: "none"
            }}
          >
            {photos.map((photo, index) => (
              <div
                key={index}
                ref={(el) => (imageRefs.current[index] = el)}
                className="flex-shrink-0 w-1/4"
              >
                <img
                  src={photo}
                  alt={`Photo ${index + 1}`}
                  className="w-full h-[200px] object-cover rounded-lg"
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-cRed p-3 rounded-full shadow-lg transition-all duration-300 z-10"
            aria-label="Previous photos"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-cRed p-3 rounded-full shadow-lg transition-all duration-300 z-10"
            aria-label="Next photos"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Photo Counter */}
        <div className="text-center mt-4 text-cN600">
          <span className="text-sm font-semibold">
            Showing {Math.min(currentIndex + imagesPerView, photos.length)} of{" "}
            {photos.length} photos
          </span>
        </div>
      </div>
    </div>
  );
};

export default PhotoCarousel;

