import { motion } from 'motion/react';
import { Button } from './ui/Button';
import { PhoneCall } from 'lucide-react';
import { WHATSAPP_URL } from '../lib/utils';

export function EmergencyCTA() {
  return (
    <section className="bg-[#121212] py-14 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#E53935 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
          <div className="max-w-2xl text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Problema elétrico não espera.
            </h3>
            <p className="text-gray-300 text-lg">
              Fale agora com quem atende 24 horas em Petrolina e resolva com segurança e agilidade.
            </p>
          </div>
          <div className="self-center md:self-auto shrink-0">
            <Button asChild variant="primary" size="lg" className="w-full sm:w-auto relative group overflow-hidden">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                <PhoneCall className="w-5 h-5 mr-2 animate-pulse" />
                <span>Chamar atendimento 24h</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
