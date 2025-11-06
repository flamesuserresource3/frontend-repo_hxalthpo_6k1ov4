import { useEffect } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900">
      <Header />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
      <footer className="border-t border-slate-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-slate-500">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} CreditoPlus. Tutti i diritti riservati.</p>
            <div className="flex items-center gap-6">
              <a href="#servizi" className="hover:text-slate-700">Servizi</a>
              <a href="#contatti" className="hover:text-slate-700">Contatti</a>
              <a href="#" className="hover:text-slate-700">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
