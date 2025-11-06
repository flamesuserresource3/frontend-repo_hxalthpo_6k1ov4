import { useState } from 'react';
import { Building2, Phone, Menu, X } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-slate-900 text-white">
              <Building2 className="h-6 w-6" />
            </div>
            <div>
              <p className="font-semibold tracking-tight">CreditoPlus</p>
              <p className="text-xs text-slate-500">Soluzioni su crediti fiscali</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm sm:flex">
            <a href="#servizi" className="text-slate-600 hover:text-slate-900">Servizi</a>
            <a href="#processo" className="text-slate-600 hover:text-slate-900">Processo</a>
            <a href="#vantaggi" className="text-slate-600 hover:text-slate-900">Vantaggi</a>
            <a href="#contatti" className="text-slate-600 hover:text-slate-900">Contatti</a>
          </nav>

          <div className="hidden sm:block">
            <a href="#contatti" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-white shadow hover:bg-slate-800">
              <Phone className="h-4 w-4" /> Richiedi consulenza
            </a>
          </div>

          <button className="sm:hidden" onClick={() => setOpen(!open)} aria-label="Apri menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="mt-3 grid gap-2 sm:hidden">
            <a href="#servizi" className="rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100">Servizi</a>
            <a href="#processo" className="rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100">Processo</a>
            <a href="#vantaggi" className="rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100">Vantaggi</a>
            <a href="#contatti" className="rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100">Contatti</a>
          </div>
        )}
      </div>
    </header>
  );
}
