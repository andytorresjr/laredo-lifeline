import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coverage Area",
  description: "Laredo Lifeline EMS serves Laredo, Webb County, and surrounding communities with 24/7 emergency and medical transport coverage.",
};

export default function CoveragePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B4F8A] to-[#0f2c52] py-20 px-6 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-200 mb-3">Where We Operate</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold">Our Coverage Area</h1>
          <p className="mt-5 max-w-2xl mx-auto text-lg text-blue-100">
            Strategically positioned to serve Laredo and Webb County — and beyond when you need us.
          </p>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-200 rounded-2xl aspect-video flex flex-col items-center justify-center gap-4 text-slate-400 border-2 border-dashed border-slate-300">
            <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
            </svg>
            <div className="text-center">
              <p className="text-lg font-semibold text-slate-500">Coverage Map — Laredo &amp; Surrounding Areas</p>
              <p className="text-sm text-slate-400 mt-1">Interactive map will be embedded here</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service zones */}
      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0f2c52] text-center mb-10">Service Zones</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                zone: "Primary Zone",
                title: "City of Laredo",
                response: "< 8 min avg",
                color: "border-[#E63946] bg-red-50",
                badgeColor: "bg-[#E63946] text-white",
                areas: ["Downtown / Central Laredo", "North Laredo", "South Laredo", "East Laredo", "West Laredo"],
              },
              {
                zone: "Secondary Zone",
                title: "Webb County",
                response: "8-15 min avg",
                color: "border-[#1B4F8A] bg-blue-50",
                badgeColor: "bg-[#1B4F8A] text-white",
                areas: ["Mines", "El Cenizo", "Rio Bravo", "Bruni", "Webb"],
              },
              {
                zone: "Extended Zone",
                title: "Surrounding Areas",
                response: "By arrangement",
                color: "border-slate-300 bg-white",
                badgeColor: "bg-slate-700 text-white",
                areas: ["Zapata County", "Jim Hogg County", "Duval County", "Cotulla (La Salle Co.)", "Border region"],
              },
            ].map((zone) => (
              <div key={zone.zone} className={`border-2 rounded-2xl p-6 ${zone.color}`}>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${zone.badgeColor}`}>{zone.zone}</span>
                  <span className="text-xs text-slate-500">{zone.response}</span>
                </div>
                <h3 className="font-bold text-[#0f2c52] text-xl mb-4">{zone.title}</h3>
                <ul className="space-y-2">
                  {zone.areas.map((area) => (
                    <li key={area} className="flex items-center gap-2 text-sm text-slate-600">
                      <svg className="w-4 h-4 text-[#1B4F8A] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Covered areas list */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0f2c52] text-center mb-10">Communities We Serve</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
            {[
              "Laredo", "Webb County", "El Cenizo", "Rio Bravo", "Mines",
              "Bruni", "Aguilares", "Oilton", "Encinal", "Laredo Heights",
              "Tanquecitos South Acres", "North Laredo", "South Laredo", "East Laredo", "West Laredo",
              "US-Mexico Border Corridor",
            ].map((city) => (
              <div key={city} className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700">
                <svg className="w-3.5 h-3.5 text-[#E63946] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.013 3.5-4.619 3.5-7.327A8.25 8.25 0 0012 3.75a8.25 8.25 0 00-8.25 8.25c0 2.708 1.556 5.314 3.5 7.327a19.58 19.58 0 002.683 2.282 16.975 16.975 0 001.143.742zM12 13.5a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
                </svg>
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dispatch CTA */}
      <section className="bg-[#1B4F8A] py-14 px-6 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Dispatch Available 24/7</h2>
          <p className="text-blue-200 mb-8">
            Not sure if we cover your area? Give us a call — we&apos;ll tell you immediately and help coordinate
            transport options if we don&apos;t have direct coverage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+19567235421" className="px-7 py-3 bg-[#E63946] text-white font-bold rounded-lg hover:bg-[#cc2d39] transition-colors">
              Call (956) 723-5421
            </a>
            <Link href="/contact" className="px-7 py-3 bg-white/10 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors">
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
