import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export function Reviews() {
  const reviews = [
    {
      name: "Isabel Nelinda",
      text: "Ótimo serviço! Rápido e bem feito."
    },
    {
      name: "Michelle",
      text: "Ótimo serviço!! Responde rápido e resolve rápido!"
    },
    {
      name: "Marcos Dantas",
      text: "Atendimento rápido e de qualidade e preço acessível."
    },
    {
      name: "Eduardo Nunes",
      text: "Ótimo eletricista e com boa disponibilidade."
    },
    {
      name: "Luxgguck",
      text: "Ótimo profissional."
    }
  ];

  return (
    <section id="avaliacoes" className="py-16 sm:py-24 bg-[#F2F2F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Rating Summary */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left shrink-0"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#121212] mb-4">
              O que dizem<br className="hidden lg:block"/> nossos clientes
            </h2>
            <div className="flex items-center gap-4 mb-2">
              <span className="text-5xl font-bold text-[#121212]">4.8</span>
              <div className="flex flex-col items-start">
                <div className="flex text-[#E53935]">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-500 mt-1">Baseado em 22 avaliações no Google</span>
              </div>
            </div>
          </motion.div>

          {/* Testimonial Cards - Horizontal Scroll on mobile, Grid on desktop */}
          <div className="w-full flex overflow-x-auto lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-6 pb-8 lg:pb-0 hide-scrollbar snap-x snap-mandatory">
            {reviews.map((review, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="shrink-0 w-[280px] sm:w-[320px] lg:w-auto snap-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full"
              >
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-[#1F1F1F]/80 italic mb-6 leading-relaxed flex-grow">
                  "{review.text}"
                </p>
                <div className="flex items-center justify-between border-t border-gray-50 pt-4 mt-auto">
                  <span className="font-bold text-[#121212]">{review.name}</span>
                  <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
