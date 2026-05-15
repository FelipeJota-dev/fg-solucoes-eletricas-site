import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Safety } from './components/Safety';
import { Services } from './components/Services';
import { EmergencyCTA } from './components/EmergencyCTA';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { WhyChooseAndLocation } from './components/WhyChooseAndLocation';
import { ProcessAndFAQ } from './components/ProcessAndFAQ';
import { FinalCTAAndFooter } from './components/FinalCTAAndFooter';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { SocialProofPopup } from './components/SocialProofPopup';

function App() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    "name": "FG Soluções Elétricas e Refrigeração",
    "image": "https://i.imgur.com/64Flldq.jpeg",
    "telephone": "+5587988128318",
    "url": "https://www.fgsolucoes.com.br",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "R. Rio Pajeu",
      "addressLocality": "Petrolina",
      "addressRegion": "PE",
      "postalCode": "56320-540",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -9.3900989,
      "longitude": -40.4852924
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "22"
    },
    "areaServed": {
      "@type": "City",
      "name": "Petrolina"
    },
    "priceRange": "$$"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "A FG atende emergência elétrica 24 horas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim, sabemos que quedas de energia ou curtos-circuitos não têm hora para acontecer. Estamos disponíveis 24h para emergências em Petrolina."
        }
      },
      {
        "@type": "Question",
        "name": "Vocês fazem serviços residenciais e prediais?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Exatamente. Atendemos desde pequenos reparos em casas até manutenção elétrica robusta em condomínios e prédios comerciais."
        }
      }
    ]
  };

  return (
    <HelmetProvider>
      <Helmet>
        <html lang="pt-BR" />
        <title>FG Soluções Elétricas e Refrigeração | Eletricista 24h em Petrolina</title>
        <meta name="description" content="Eletricista em Petrolina com atendimento 24h para serviços residenciais, prediais, manutenção elétrica, reparos e refrigeração. Chame a FG Soluções Elétricas e Refrigeração no WhatsApp." />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-[#FAFAFA]">
        <Header />
        
        <main>
          <Hero />
          <About />
          <Safety />
          <Services />
          <EmergencyCTA />
          <Gallery />
          <Reviews />
          <WhyChooseAndLocation />
          <ProcessAndFAQ />
        </main>
        
        <FinalCTAAndFooter />
        <FloatingWhatsApp />
        <SocialProofPopup />
      </div>
    </HelmetProvider>
  );
}

export default App;
