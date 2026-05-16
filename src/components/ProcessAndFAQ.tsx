import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, MessageCircle, Eye, Wrench, ShieldCheck, Check } from 'lucide-react';

export function ProcessAndFAQ() {
  const steps = [
    { icon: <MessageCircle />, title: "Você chama no WhatsApp", desc: "Contato direto com retorno imediato." },
    { icon: <Eye />, title: "Francisco entende o problema", desc: "Análise prévia para entender a urgência." },
    { icon: <Wrench />, title: "O serviço é avaliado", desc: "Ida até o local para avaliação com cuidado." },
    { icon: <ShieldCheck />, title: "A solução é executada", desc: "Serviço realizado com foco total na segurança." },
    { icon: <Check />, title: "Você recebe orientação", desc: "Explicação clara do serviço e dicas preventivas." }
  ];

  const faqs = [
    {
      q: "A FG atende emergência elétrica 24 horas?",
      a: "Sim, sabemos que quedas de energia ou curtos-circuitos não têm hora para acontecer. Estamos disponíveis 24h para emergências em Petrolina."
    },
    {
      q: "Vocês fazem serviços residenciais e prediais?",
      a: "Exatamente. Atendemos desde pequenos reparos em casas até manutenção elétrica robusta em condomínios e prédios comerciais."
    },
    {
      q: "Atendem no bairro José e Maria e outras regiões de Petrolina?",
      a: "Sim! Nossa base fica no José e Maria (R. Rio Pajeu), mas atendemos toda a região de Petrolina com rapidez."
    },
    {
      q: "Também fazem serviços de refrigeração?",
      a: "Sim, além de toda a parte elétrica, trabalhamos com instalação, manutenção e consertos de refrigeração e ar condicionado."
    },
    {
      q: "Fazem manutenção preventiva?",
      a: "Com certeza. A manutenção preventiva é essencial para evitar curtos, sobrecargas e prejuízos com queima de aparelhos no futuro."
    },
    {
      q: "Como peço orçamento pelo WhatsApp?",
      a: "Basta clicar em qualquer botão do site para falar direto com o Francisco. Explique o problema e, se possível, mande fotos. Assim agilizamos o seu processo."
    },
    {
      q: "O atendimento é direto com o profissional?",
      a: "Sim. Ao entrar em contato, você fala diretamente com o Francisco, garantindo que suas dúvidas técnicas sejam tiradas por um especialista, sem intermediários."
    }
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Process */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#121212] mb-6">Como funciona</h2>
            <p className="text-lg text-[#1F1F1F]/80">Um processo simples, transparente e focado em resolver seu problema rapidamente.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent z-0"></div>
            
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-2xl bg-white shadow-xl border border-gray-100 flex items-center justify-center text-[#E53935] mb-6 relative">
                  {step.icon}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#121212] flex items-center justify-center text-white font-bold text-sm border-2 border-[#FAFAFA]">
                    {idx + 1}
                  </div>
                </div>
                <h3 className="font-bold text-[#121212] mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#121212] mb-10 text-center">
            Perguntas Frequentes
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === idx ? 'border-[#E53935]/30 shadow-md' : 'border-gray-100 hover:border-gray-200'}`}
              >
                <button
                  onClick={() => setOpenFaq(idx === openFaq ? null : idx)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center bg-white"
                >
                  <span className={`font-semibold pr-8 transition-colors duration-300 ${openFaq === idx ? 'text-[#E53935]' : 'text-[#121212]'}`}>
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-[#E53935]' : 'text-gray-400'}`} />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 pt-0 border-t border-gray-50 text-[#1F1F1F]/80">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
