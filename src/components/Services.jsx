import { FileSpreadsheet, ArrowLeftRight, ClipboardCheck, PieChart } from 'lucide-react';

export default function Services() {
  const items = [
    {
      icon: FileSpreadsheet,
      title: 'Analisi e due diligence',
      desc: 'Verifica documentale, controlli di congruità e valutazione del credito.'
    },
    {
      icon: ArrowLeftRight,
      title: 'Cessione del credito',
      desc: 'Strutturazione, contrattualistica e matching con controparti qualificate.'
    },
    {
      icon: ClipboardCheck,
      title: 'Compliance e monitoraggio',
      desc: 'Tracciamento end-to-end e aggiornamenti in tempo reale sullo stato.'
    },
    {
      icon: PieChart,
      title: 'Ottimizzazione fiscale',
      desc: 'Pianificazione di utilizzo e compensazione in ottica di cassa.'
    },
  ];

  return (
    <section id="servizi" className="relative border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">I nostri servizi</h2>
          <p className="mt-3 text-slate-600">
            Copriamo l’intero ciclo di vita del credito fiscale, dalla valutazione alla monetizzazione.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm transition hover:shadow">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-slate-900 text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>

        <div id="processo" className="mt-16 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h3 className="text-xl font-semibold">Come lavoriamo</h3>
          <ol className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              'Raccolta documentazione',
              'Analisi e rating del credito',
              'Strutturazione operazione',
              'Esecuzione e reportistica',
            ].map((step, i) => (
              <li key={step} className="relative rounded-lg bg-white p-4 shadow-sm">
                <span className="absolute -top-3 left-4 inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">{i + 1}</span>
                <p className="ml-6 text-sm text-slate-700">{step}</p>
              </li>
            ))}
          </ol>
        </div>

        <div id="vantaggi" className="mt-16 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-semibold">Per le aziende</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
              <li>Miglioramento della liquidità</li>
              <li>Riduzione del rischio operativo</li>
              <li>Supporto continuo su compliance</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-semibold">Per i professionisti</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
              <li>Processi chiari e ripetibili</li>
              <li>Strumenti digitali per il controllo</li>
              <li>Assistenza normativa aggiornata</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-semibold">Per gli investitori</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
              <li>Accesso a flussi qualificati</li>
              <li>Due diligence indipendente</li>
              <li>Report puntuali e dettagliati</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
