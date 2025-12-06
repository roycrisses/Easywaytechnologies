import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { TechStack } from './components/TechStack';
import { About } from './components/About';
import { AiConsultant } from './components/AiConsultant';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Pricing } from './components/Pricing';

function App() {
  const [selectedService, setSelectedService] = React.useState<string | null>(null);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (selectedService) {
    return (
      <div className="min-h-screen bg-zinc-950 font-sans selection:bg-white selection:text-black">
        <Pricing
          serviceId={selectedService}
          onBack={() => setSelectedService(null)}
          onContact={() => {
            setSelectedService(null);
            // Allow time for state update and render before scrolling
            setTimeout(() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 font-sans selection:bg-white selection:text-black">
      <Header />
      <main>
        <Hero />
        <Services onServiceClick={setSelectedService} />
        <TechStack />
        <About />
        <AiConsultant />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;