import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Laredo Lifeline EMS offers emergency 911 response, non-emergency medical transport, event standby EMS, and inter-facility transfers in Laredo, TX.",
};

const services = [
  {
    slug: "emergency-response",
    title: "Emergency 911 Response",
    shortTitle: "Emergency Response",
    color: "bg-red-50 border-red-200",
    iconColor: "bg-[#E63946] text-white",
    description: "When a life-threatening emergency strikes, Laredo Lifeline EMS responds immediately with Advanced Life Support (ALS) and Basic Life Support (BLS) crews. Our dispatch team activates the nearest available unit the moment your call is received — 24 hours a day, 365 days a year.",
    details: "Our paramedics arrive on scene equipped with cardiac monitors, defibrillators, advanced airway management devices, IV/IO access, and a full emergency pharmacological kit. We coordinate with receiving hospital ERs before arrival to ensure seamless, uninterrupted care.",
    whoFor: "Individuals experiencing cardiac events, respiratory emergencies, traumatic injuries, strokes, seizures, or any life-threatening medical crisis.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    slug: "non-emergency-transport",
    title: "Non-Emergency Medical Transport (NEMT)",
    shortTitle: "Non-Emergency Transport",
    color: "bg-blue-50 border-blue-200",
    iconColor: "bg-[#1B4F8A] text-white",
    description: "Not every medical trip requires lights and sirens — but every patient deserves professional, reliable transport. Our NEMT service provides scheduled, door-to-door medical transportation for patients who require more than a standard ride to reach their healthcare appointments.",
    details: "We specialize in recurring transport for dialysis patients, oncology appointments, specialist visits, post-surgical follow-ups, and facility discharges. Our wheelchair- and stretcher-capable vehicles are operated by trained transport technicians.",
    whoFor: "Dialysis patients, cancer patients, mobility-impaired individuals, post-operative patients, and anyone who needs medically appropriate transport to their healthcare appointment.",
    icon: "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h1m0-2h8m2 2h1l2-2V8l-3-3h-2v11z",
  },
  {
    slug: "event-ems",
    title: "Event / Standby EMS",
    shortTitle: "Event EMS",
    color: "bg-green-50 border-green-200",
    iconColor: "bg-green-700 text-white",
    description: "Large gatherings require dedicated medical coverage. Laredo Lifeline EMS provides professional on-site EMS standby teams for events of all sizes — from local races and youth sports to major concerts, festivals, and corporate events. Our presence keeps your event safe and your organization protected.",
    details: "We work with event organizers before the event to assess venue size, expected attendance, and medical risk factors. Our standby packages can include one or more ALS or BLS crews, a dedicated on-site ambulance, and a comprehensive medical operations plan.",
    whoFor: "Event promoters, venue operators, school athletics departments, race organizers, convention centers, corporate HR teams, and any organization hosting public or private gatherings.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    slug: "interfacility-transport",
    title: "Inter-Facility Transport",
    shortTitle: "Inter-Facility",
    color: "bg-purple-50 border-purple-200",
    iconColor: "bg-purple-700 text-white",
    description: "When a patient needs to move between healthcare facilities — a hospital transfer, nursing home admission, specialty clinic referral — Laredo Lifeline EMS provides safe, continuous medical monitoring throughout the entire transport. We bridge the gap between facilities without interrupting care.",
    details: "Both ALS and BLS inter-facility transport options are available. Our crews are capable of managing ventilators, IV drips, cardiac drips, and complex monitoring during transport. We handle documentation coordination and formal handoff at both ends.",
    whoFor: "Hospitals transferring ICU or step-down patients, nursing homes and SNFs, specialty clinics, dialysis centers, and any provider needing professional patient transport between healthcare locations.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B4F8A] to-[#0f2c52] py-20 px-6 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-200 mb-3">What We Offer</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold">Our EMS Services</h1>
          <p className="mt-5 max-w-2xl mx-auto text-lg text-blue-100">
            From life-threatening emergencies to scheduled medical transport — Laredo Lifeline EMS has you covered.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-8">
          {services.map((service, i) => (
            <div key={service.slug} className={`border rounded-2xl overflow-hidden ${service.color}`}>
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${service.iconColor}`}>
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Service {String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <h2 className="text-2xl font-extrabold text-[#0f2c52] mb-4">{service.title}</h2>
                    <p className="text-slate-600 leading-relaxed mb-4">{service.description}</p>
                    <p className="text-slate-600 leading-relaxed mb-4">{service.details}</p>
                    <div className="bg-white/60 border border-white/40 rounded-xl p-4 mb-6">
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Who This Is For</p>
                      <p className="text-slate-700 text-sm">{service.whoFor}</p>
                    </div>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1B4F8A] text-white font-semibold rounded-lg hover:bg-[#153d6e] transition-colors text-sm"
                    >
                      Learn More About {service.shortTitle}
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#0f2c52] mb-3">Not Sure Which Service You Need?</h2>
          <p className="text-slate-500 mb-8">
            Our team will help you find the right solution. Give us a call or fill out a contact form and
            we&apos;ll get back to you quickly.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="px-7 py-3 bg-[#1B4F8A] text-white font-semibold rounded-lg hover:bg-[#153d6e] transition-colors">
              Get a Quote
            </Link>
            <a href="tel:+19567235421" className="px-7 py-3 bg-[#E63946] text-white font-semibold rounded-lg hover:bg-[#cc2d39] transition-colors">
              Call (956) 723-5421
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
