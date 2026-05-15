import { motion } from 'motion/react';
import { Button } from './ui/Button';
import { Phone, ArrowRight, ShieldCheck, Zap, Clock } from 'lucide-react';
import { WHATSAPP_URL } from '../lib/utils';

export function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section id="inicio" className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col items-start max-w-2xl"
          >
            <motion.div variants={item} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E53935]/10 text-[#E53935] font-semibold text-sm mb-6">
              <Zap className="w-4 h-4" />
              <span>Eletricista 24h em Petrolina</span>
            </motion.div>
            
            <motion.h1 variants={item} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#121212] mb-6 leading-tight">
              Soluções elétricas e refrigeração com segurança em <span className="text-[#E53935]">Petrolina</span>
            </motion.h1>
            
            <motion.p variants={item} className="text-lg md:text-xl text-[#1F1F1F]/80 mb-8 max-w-xl">
              Serviços residenciais e prediais com atendimento rápido, cuidado técnico e foco total na segurança da sua instalação.
            </motion.p>
            
            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12">
              <Button asChild variant="primary" size="lg" className="gap-2 group">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5 fill-current" />
                  <span>Solicitar atendimento agora</span>
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2 group">
                <a href="#servicos">
                  <span>Ver serviços</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap items-center gap-6 text-sm font-medium text-[#1F1F1F]/70">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[1,2,3,4,5].map((i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span>4,8 estrelas no Google (22 avaliações)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span>Atendimento 24 horas</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-10"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] max-w-md mx-auto lg:ml-auto">
              <img 
                src="https://i.imgur.com/64Flldq.jpeg" 
                alt="Eletricista trabalhando" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute -left-6 bottom-16 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3"
            >
               <div className="w-10 h-10 rounded-full bg-[#E53935]/10 flex items-center justify-center text-[#E53935]">
                 <ShieldCheck className="w-5 h-5" />
               </div>
               <div>
                 <p className="text-xs text-gray-500 font-medium">Garantia</p>
                 <p className="font-bold text-[#121212] text-sm">Serviço com segurança</p>
               </div>
            </motion.div>

            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -right-6 top-16 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3"
            >
               <div className="w-10 h-10 rounded-full bg-[#121212]/5 flex items-center justify-center text-[#121212]">
                 <Clock className="w-5 h-5" />
               </div>
               <div>
                 <p className="text-xs text-gray-500 font-medium">Urgência</p>
                 <p className="font-bold text-[#121212] text-sm">Resposta rápida 24h</p>
               </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
