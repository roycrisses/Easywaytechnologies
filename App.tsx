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
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [selectedService, setSelectedService] = React.useState<string | null>(null);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (selectedService) {
    return (
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300">
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
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300">
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
    </ThemeProvider>
  );
}

export default App;