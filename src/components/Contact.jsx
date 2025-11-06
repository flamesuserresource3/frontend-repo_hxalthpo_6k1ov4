import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  function handleSubmit(e) {
    e.preventDefault();
    // Simple fake submit for static demo
    setStatus('loading');
    setTimeout(() => setStatus('done'), 800);
  }

  return (
    <section id="contatti" className="relative border-t border-slate-200 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Parliamo del tuo progetto</h2>
            <p className="mt-3 text-slate-600">
              Compila il form e un consulente ti ricontatterà entro 24 ore.
            </p>

            <div className="mt-8 space-y-4 text-sm text-slate-700">
              <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@creditoplus.it</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> +39 02 1234 567</p>
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Milano, Italia</p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Nome e cognome</label>
                <input required type="text" className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-slate-400 focus:ring-2" placeholder="Mario Rossi" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
                  <input required type="email" className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-slate-400 focus:ring-2" placeholder="mario@azienda.it" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Telefono</label>
                  <input type="tel" className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-slate-400 focus:ring-2" placeholder="+39" />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Messaggio</label>
                <textarea rows={4} className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-slate-400 focus:ring-2" placeholder="Raccontaci brevemente la tua esigenza" />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs text-slate-500">Invio protetto. Non condividiamo i tuoi dati con terze parti.</p>
                <button disabled={status==='loading'} className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-2.5 text-white shadow hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60">
                  {status === 'loading' ? 'Invio…' : status === 'done' ? 'Inviato ✔' : 'Invia richiesta'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
