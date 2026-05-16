import { motion } from 'motion/react';
import { Button } from './ui/Button';
import { Phone, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_URL } from '../lib/utils';

export function About() {
  return (
    <section id="sobre" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative px-4 sm:px-0"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden max-w-[280px] sm:max-w-sm ml-auto mr-4 sm:mr-8 lg:mx-auto shadow-2xl">
              <img 
                src="https://i.imgur.com/R7kUaPZ.jpeg" 
                alt="Francisco realizando serviço elétrico" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute bottom-6 sm:bottom-10 -left-2 sm:-left-6 lg:-left-12 w-32 sm:w-48 aspect-square rounded-2xl overflow-hidden border-[6px] sm:border-8 border-white shadow-2xl z-10"
            >
              <img 
                src="https://i.imgur.com/095p2nA.jpeg" 
                alt="Detalhe do serviço" 
                className="w-full h-full object-cover object-center"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -top-4 sm:-top-6 -right-2 sm:-right-6 lg:-right-2 bg-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 sm:gap-4 z-10"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600 shrink-0">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <p className="font-bold text-[#121212] text-base sm:text-lg leading-none">100%</p>
                <p className="text-[10px] sm:text-sm text-gray-500 font-medium">Avaliações Positivas</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#121212] mb-6 tracking-tight">
              Por trás da FG, um atendimento direto com Francisco
            </h2>
            
            <div className="space-y-4 text-lg text-[#1F1F1F]/80 mb-8">
              <p>
                Serviço elétrico não admite falhas. É por isso que, na FG Soluções Elétricas e Refrigeração, 
                todo o atendimento é realizado com máxima responsabilidade, atenção e foco absoluto na segurança da sua família ou negócio.
              </p>
              <p className="font-medium text-[#121212] border-l-4 border-[#E53935] pl-4 py-1 bg-[#F2F2F2]/50">
                "Cada atendimento é feito com atenção ao problema real do cliente, buscando resolver com segurança, clareza e agilidade."
              </p>
              <p>
                Diferente de amadores, não fazemos improvisos. Entregamos um diagnóstico cuidadoso e uma execução limpa, 
                garantindo que sua instalação obedeça aos padrões técnicos e opere sem riscos.
              </p>
            </div>

            <Button asChild variant="primary" className="self-start gap-2">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5 fill-current" />
                <span>Falar com Francisco</span>
              </a>
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
