import { motion } from 'motion/react';
import { Power, Home, ZapOff, ShieldAlert, Cpu, Wrench, Snowflake, Clock } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: <Home />,
      title: "Instalações elétricas residenciais",
      desc: "Instalações feitas com cuidado para garantir funcionamento correto e mais segurança no dia a dia.",
      trust: "Padrão técnico rigoroso"
    },
    {
      icon: <Power />,
      title: "Manutenção elétrica predial",
      desc: "Soluções robustas para condomínios e prédios comerciais, garantindo estabilidade na rede.",
      trust: "Evite paradas estruturais"
    },
    {
      icon: <Wrench />,
      title: "Reparos elétricos gerais",
      desc: "Consertos precisos para problemas do dia a dia, sem gambiarras.",
      trust: "Eficiência e limpeza"
    },
    {
      icon: <Cpu />,
      title: "Troca de disjuntores e tomadas",
      desc: "Substituição de componentes antigos ou defeituosos por peças seguras.",
      trust: "Adequação de carga"
    },
    {
      icon: <ZapOff />,
      title: "Identificação de curtos e falhas",
      desc: "Rastreamento técnico para descobrir a raiz de quedas constantes de energia.",
      trust: "Diagnóstico avançado"
    },
    {
      icon: <ShieldAlert />,
      title: "Revisão e manutenção preventiva",
      desc: "Análise completa do seu quadro elétrico para prevenir acidentes futuros.",
      trust: "Tranquilidade garantida"
    },
    {
      icon: <Snowflake />,
      title: "Refrigeração e climatização",
      desc: "Instalação e manutenção de sistemas de ar condicionado e refrigeração.",
      trust: "Clima perfeito e seguro"
    },
    {
      icon: <Clock />,
      title: "Atendimento emergencial 24h",
      desc: "Prontidão para reestabelecer sua energia de forma rápida e segura.",
      trust: "Petrolina e região"
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-[#F2F2F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-[#121212] mb-6 tracking-tight"
          >
            Serviços elétricos e refrigeração em Petrolina
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#1F1F1F]/80"
          >
            Da troca de um chuveiro até o projeto de um quadro completo, executamos cada serviço com responsabilidade técnica.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="premium-card p-6 flex flex-col h-full relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-[#E53935] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              
              <div className="text-[#E53935] mb-5 w-12 h-12 flex justify-center items-center rounded-xl bg-[#E53935]/10 group-hover:bg-[#E53935] group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-[#121212] mb-3">{service.title}</h3>
              <p className="text-[#1F1F1F]/70 text-sm mb-6 flex-grow">{service.desc}</p>
              
              <div className="mt-auto pt-4 border-t border-gray-100">
                <p className="text-xs font-semibold text-[#1F1F1F] uppercase tracking-wide">
                  ✓ {service.trust}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
