import { motion } from 'motion/react';
import { CheckCircle2, MapPin } from 'lucide-react';
import { Button } from './ui/Button';
import { WHATSAPP_URL } from '../lib/utils';

export function WhyChooseAndLocation() {
  const reasons = [
    "Atendimento emergencial 24 horas",
    "Foco absoluto em segurança elétrica",
    "Especialista em residências e prédios",
    "Elétrica e refrigeração integradas",
    "Orçamento rápido e direto pelo WhatsApp",
    "Agilidade para solucionar problemas urgentes"
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Why Choose */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#121212] mb-8">
              Por que escolher a FG?
            </h2>
            <div className="space-y-4 mb-10">
              {reasons.map((reason, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-[#F2F2F2]/50 p-4 rounded-xl">
                  <CheckCircle2 className="w-6 h-6 text-[#E53935] flex-shrink-0" />
                  <span className="font-medium text-[#1F1F1F]">{reason}</span>
                </div>
              ))}
            </div>
            <Button asChild variant="primary" size="lg" className="w-full sm:w-auto">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Quero um atendimento seguro
              </a>
            </Button>
          </motion.div>

          {/* Location / Local SEO */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#121212] mb-4">
              Eletricista em Petrolina com atendimento no José e Maria e região
            </h2>
            <p className="text-[#1F1F1F]/80 mb-6">
              Precisando de eletricista em Petrolina? Oferecemos serviços elétricos em Petrolina com cobertura 24 horas. 
              Realizamos manutenção elétrica predial em Petrolina, serviços de eletricista residencial em Petrolina e 
              refrigeração em Petrolina. Atendimento direto da nossa base no José e Maria, Petrolina - PE.
            </p>
            
            <div className="flex items-start gap-4 p-5 bg-[#FAFAFA] border border-gray-100 rounded-2xl mb-8">
              <MapPin className="w-6 h-6 text-[#E53935] flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-[#121212]">FG Soluções Elétricas e Refrigeração</p>
                <p className="text-gray-600 mt-1">R. Rio Pajeu - José e Maria<br/>Petrolina - PE, 56320-540</p>
              </div>
            </div>

            <div className="w-full h-80 rounded-2xl overflow-hidden shadow-lg border border-gray-100 relative">
               <iframe 
                 title="Mapa de Localização"
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.216390977283!2d-40.4852924!3d-9.3900989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x77371cb1a1be2cf%3A0xc6cb1e85a6a68e6f!2sR.%20Rio%20Paje%C3%BA%20-%20Jos%C3%A9%20e%20Maria%2C%20Petrolina%20-%20PE%2C%2056320-540!5e0!3m2!1spt-BR!2sbr!4v1716942183204!5m2!1spt-BR!2sbr" 
                 className="absolute inset-0 w-full h-full border-0" 
                 allowFullScreen={false} 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
               ></iframe>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
