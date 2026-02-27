import { useState, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const base = import.meta.env.BASE_URL;

const images = [
  { src: `${base}assets/gallery-01.jpg`, alt: "Salon interior with flowers and candlelight", cols: "col-span-2" },
  { src: `${base}assets/gallery-02.jpg`, alt: "Sea view through arched windows", cols: "col-span-1" },
  { src: `${base}assets/gallery-03.jpg`, alt: "Stone arches with art and flowers", cols: "col-span-1" },
  { src: `${base}assets/gallery-04.jpg`, alt: "Dining hall set for an event", cols: "col-span-1" },
  { src: `${base}assets/gallery-05.jpg`, alt: "Candlelit table with floral centerpiece", cols: "col-span-1" },
  { src: `${base}assets/gallery-06.jpg`, alt: "Window with sea view and plants", cols: "col-span-2" },
  { src: `${base}assets/gallery-07.jpg`, alt: "Candlelit dining with candelabras", cols: "col-span-2" },
  { src: `${base}assets/gallery-08.jpg`, alt: "Evening event setup with flowers", cols: "col-span-1" },
  { src: `${base}assets/gallery-09.jpg`, alt: "Interior with arches and art studio", cols: "col-span-1" },
  { src: `${base}assets/gallery-10.jpg`, alt: "Bright salon with blue sofa and arches", cols: "col-span-1" },
  { src: `${base}assets/gallery-11.jpg`, alt: "Grand salon with artwork and rugs", cols: "col-span-1" },
];

function Lightbox({ index, onClose, onPrev, onNext }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/70 hover:text-white"
      >
        <X className="w-7 h-7" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 text-white/70 hover:text-white"
      >
        <ChevronLeft className="w-9 h-9" />
      </button>
      <img
        src={images[index].src}
        alt={images[index].alt}
        className="max-h-[90vh] max-w-[90vw] object-contain"
        onClick={(e) => e.stopPropagation()}
      />
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 text-white/70 hover:text-white"
      >
        <ChevronRight className="w-9 h-9" />
      </button>
      <p className="absolute bottom-4 text-white/50 text-sm" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
        {index + 1} / {images.length}
      </p>
    </div>
  );
}

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const carouselRef = useRef(null);

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((i) => (i - 1 + images.length) % images.length);
  const nextImage = () => setLightboxIndex((i) => (i + 1) % images.length);

  const scrollCarousel = (dir) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: dir * carouselRef.current.offsetWidth * 0.85, behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 md:py-20 px-0 md:px-10">
      <h2
        className="text-center text-stone-700 mb-10 tracking-widest uppercase px-4"
        style={{
          fontFamily: "'Cormorant Garamond', 'Times New Roman', serif",
          fontSize: "1.1rem",
          letterSpacing: "0.22em",
        }}
      >
        Gallery
      </h2>

      {/* Mobile: horizontal carousel */}
      <div className="md:hidden relative">
        <div
          ref={carouselRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-2 px-4"
          style={{ scrollbarWidth: "none" }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="flex-none w-[85vw] h-64 snap-center overflow-hidden cursor-pointer"
              onClick={() => openLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        {/* Arrow controls */}
        <button
          onClick={() => scrollCarousel(-1)}
          className="absolute left-1 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 shadow"
        >
          <ChevronLeft className="w-5 h-5 text-stone-700" />
        </button>
        <button
          onClick={() => scrollCarousel(1)}
          className="absolute right-1 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 shadow"
        >
          <ChevronRight className="w-5 h-5 text-stone-700" />
        </button>
      </div>

      {/* Desktop: grid */}
      <div className="hidden md:grid grid-cols-3 gap-2 max-w-5xl mx-auto">
        {images.map((img, i) => (
          <div
            key={i}
            className={`${img.cols} h-72 overflow-hidden cursor-pointer`}
            onClick={() => openLightbox(i)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </section>
  );
}