import { ShieldCheck, Scale, BadgeCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-emerald-50" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Crediti fiscali, gestione chiara e sicura
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Supportiamo aziende e professionisti nella gestione, cessione e riconciliazione dei crediti fiscali.
              Processi trasparenti, conformità normativa e tempi rapidi.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contatti" className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-white shadow hover:bg-slate-800">
                Richiedi una call
              </a>
              <a href="#servizi" className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-3 text-slate-700 hover:bg-slate-50">
                Scopri i servizi
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4">
                <ShieldCheck className="mt-0.5 h-5 w-5 text-emerald-600" />
                <div>
                  <p className="text-sm font-semibold">Compliance</p>
                  <p className="text-sm text-slate-600">Allineati alle ultime normative</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4">
                <Scale className="mt-0.5 h-5 w-5 text-sky-600" />
                <div>
                  <p className="text-sm font-semibold">Trasparenza</p>
                  <p className="text-sm text-slate-600">Report chiari e verificabili</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4">
                <BadgeCheck className="mt-0.5 h-5 w-5 text-indigo-600" />
                <div>
                  <p className="text-sm font-semibold">Affidabilità</p>
                  <p className="text-sm text-slate-600">Processi certificati</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-emerald-50 via-white to-sky-50 opacity-70" aria-hidden="true" />
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1470&auto=format&fit=crop"
                  alt="Gestione crediti fiscali"
                  className="h-72 w-full rounded-lg object-cover"
                />
                <p className="mt-4 text-center text-sm text-slate-600">
                  Strumenti digitali per monitorare e valorizzare i tuoi crediti
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
