import { Phone, Clock, MapPin } from 'lucide-react';
import { Button } from './ui/Button';
import { WHATSAPP_URL } from '../lib/utils';

export function FinalCTAAndFooter() {
  return (
    <>
      <section className="bg-[#121212] pt-16 sm:pt-24 pb-12 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-[#E53935]/15 blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="bg-[#1A1A1A] border border-white/10 rounded-[2rem] p-8 md:p-16 text-center max-w-4xl mx-auto mb-20 shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Precisa resolver um problema elétrico com segurança?
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Fale agora com a FG Soluções Elétricas e Refrigeração e solicite atendimento residencial ou predial em Petrolina.
            </p>
            <Button asChild variant="primary" size="lg" className="px-10 py-6 text-lg relative overflow-hidden group w-full sm:w-auto">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Phone className="w-6 h-6 fill-current" />
                  Chamar no WhatsApp
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>
            </Button>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
               <span className="flex items-center gap-2 relative before:content-[''] before:absolute before:left-[-12px] before:w-1.5 before:h-1.5 before:bg-[#E53935] before:rounded-full ml-3">Eletricista 24h</span>
               <span className="flex items-center gap-2 relative before:content-[''] before:absolute before:left-[-12px] before:w-1.5 before:h-1.5 before:bg-[#E53935] before:rounded-full ml-3">Petrolina - PE</span>
               <span className="flex items-center gap-2 relative before:content-[''] before:absolute before:left-[-12px] before:w-1.5 before:h-1.5 before:bg-[#E53935] before:rounded-full ml-3">Orçamento rápido</span>
            </div>
          </div>

          <footer className="border-t border-white/10 pt-12 text-gray-400 text-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              
              <div className="col-span-1 md:col-span-2 lg:col-span-1">
                <img 
                  src="https://i.imgur.com/ZkeCxGw.png" 
                  alt="FG Soluções Elétricas" 
                  className="h-14 w-auto mb-6 opacity-90"
                />
                <p className="mb-6 leading-relaxed">
                  Soluções elétricas e de refrigeração com foco em segurança, rapidez e qualidade técnica para toda Petrolina.
                </p>
              </div>

              <div>
                <h4 className="text-white font-bold mb-4">Contato Rápido</h4>
                <ul className="space-y-4">
                  <li>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-white transition-colors">
                      <Phone className="w-5 h-5 text-[#E53935] shrink-0" />
                      <span>+55 87 98812-8318<br/><span className="text-xs">Chame no WhatsApp</span></span>
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#E53935] shrink-0" />
                    <span>Aberto 24 horas<br/><span className="text-xs">Atendimento emergencial</span></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#E53935] shrink-0" />
                    <span>R. Rio Pajeu - José e Maria<br/>Petrolina - PE, 56320-540</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold mb-4">Links Úteis</h4>
                <ul className="space-y-2">
                  <li><a href="#inicio" className="hover:text-[#E53935] transition-colors">Início</a></li>
                  <li><a href="#sobre" className="hover:text-[#E53935] transition-colors">Sobre o Profissional</a></li>
                  <li><a href="#servicos" className="hover:text-[#E53935] transition-colors">Serviços</a></li>
                  <li><a href="#galeria" className="hover:text-[#E53935] transition-colors">Galeria de Trabalhos</a></li>
                  <li><a href="#faq" className="hover:text-[#E53935] transition-colors">Perguntas Frequentes</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold mb-4">Área de Atendimento</h4>
                <p className="mb-4">Atendemos em Petrolina, PE, com prioridade para emergências e foco em excelência residencial e predial.</p>
                <Button asChild variant="primary" size="sm" className="w-full">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Solicitar Orçamento</a>
                </Button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5">
              <p>© {new Date().getFullYear()} FG Soluções Elétricas e Refrigeração. Todos os direitos reservados.</p>
              <p className="mt-2 md:mt-0 opacity-50">Desenvolvido com foco em conversão e segurança.</p>
            </div>
          </footer>

        </div>
      </section>
    </>
  );
}
