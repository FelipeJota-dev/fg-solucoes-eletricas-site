import { motion } from 'motion/react';
import { AlertTriangle, ShieldCheck, Wrench, Search, MessageSquare } from 'lucide-react';

export function Safety() {
  const cards = [
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Prevenção de curtos e sobrecargas",
      desc: "Evite danos aos seus aparelhos com uma rede bem dimensionada."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Instalações com responsabilidade",
      desc: "Uso de materiais corretos e respeito às normas técnicas."
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Manutenção preventiva",
      desc: "Correção de pequenos erros antes que virem grandes prejuízos."
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Diagnóstico cuidadoso",
      desc: "Identificamos a origem do problema antes de propor a solução."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Orientação clara",
      desc: "O cliente entende exatamente o que será feito e por quê."
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#121212] text-white relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-64 bg-[#E53935]/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Segurança elétrica em primeiro lugar
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            Uma instalação mal feita pode gerar quedas de energia, curtos, prejuízos e riscos para sua família ou empresa. Segurança não combina com improviso.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="premium-dark-card p-8 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#2A2A2A] text-white group-hover:bg-[#E53935] group-hover:shadow-[0_0_20px_rgba(229,57,53,0.3)] transition-all duration-300 flex items-center justify-center mb-6">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{card.title}</h3>
              <p className="text-gray-400 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
