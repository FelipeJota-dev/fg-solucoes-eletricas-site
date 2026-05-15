import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export function Gallery() {
  const images = [
    "https://i.imgur.com/tKSpJ44.jpeg",
    "https://i.imgur.com/bCSbKmm.png",
    "https://i.imgur.com/1omf4LY.jpeg",
    "https://i.imgur.com/XZhXvkg.jpeg",
    "https://i.imgur.com/idz2qxY.jpeg",
    "https://i.imgur.com/1iDwZ95.jpeg",
    "https://i.imgur.com/sNT3lJX.jpeg",
    "https://i.imgur.com/ce9dgDV.jpeg",
    "https://i.imgur.com/xIAUHka.jpeg",
    "https://i.imgur.com/xcHgrJR.jpeg",
    "https://i.imgur.com/IJnuDUB.jpeg",
    "https://i.imgur.com/YypkCal.jpeg",
    "https://i.imgur.com/fsM60XK.jpeg",
    "https://i.imgur.com/SE4z87l.jpeg",
    "https://i.imgur.com/H0gX1n0.jpeg",
    "https://i.imgur.com/AboFTU3.jpeg"
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = useCallback(() => {
    setPhotoIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setPhotoIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeLightbox();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, nextImage, prevImage]);

  return (
    <section id="galeria" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#121212] mb-6 tracking-tight"
          >
            Serviços realizados com cuidado e acabamento
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#1F1F1F]/80"
          >
            Transparência no que fazemos. Veja alguns dos projetos residenciais e prediais que executamos.
          </motion.p>
        </div>

        {/* Masonry or Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 8) * 0.05 }}
              onClick={() => openLightbox(index)}
              className={`relative overflow-hidden rounded-xl cursor-pointer group bg-gray-100 ${
                index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <img 
                src={src} 
                alt={`Serviço realizado FG ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium px-4 py-2 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <Maximize2 className="w-4 h-4" />
                  <span>Ver serviço</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center backdrop-blur-sm"
          >
            <button 
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 rounded-full p-2 transition-colors z-50"
            >
              <X className="w-6 h-6" />
            </button>
            
            <button 
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 rounded-full p-3 transition-colors z-50"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <button 
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 rounded-full p-3 transition-colors z-50"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <motion.div 
              key={photoIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-full h-full p-4 md:p-12 flex items-center justify-center"
              onClick={closeLightbox}
            >
              <img 
                src={images[photoIndex]} 
                alt={`Ampliado ${photoIndex + 1}`} 
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
            
            <div className="absolute bottom-6 left-0 right-0 text-center text-white/50 text-sm">
              {photoIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
