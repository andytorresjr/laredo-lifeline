import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "Laredo Lifeline EMS | Emergency & Medical Transport Services",
  },
  description:
    "Laredo's trusted emergency and non-emergency medical transport provider. Available 24/7 for emergency 911 response, NEMT, event standby EMS, and inter-facility transport across Webb County.",
  keywords: [
    "ambulance Laredo TX",
    "emergency medical transport Laredo",
    "NEMT Webb County",
    "EMS services Laredo",
    "paramedic Laredo",
  ],
};

export default function HomePage() {
  return (
    <main className="flex flex-col w-full">
      {/* HERO */}
      <section
        className="relative flex items-center justify-center min-h-[92vh] px-6 py-24"
        style={{ background: "linear-gradient(135deg, #1B4F8A 0%, #0f2c52 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm font-medium tracking-wide mb-8">
            <span className="inline-block w-2 h-2 rounded-full bg-[#E63946] animate-pulse" />
            Laredo&apos;s Premier Emergency Medical Services
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
            When Every Second Counts,{" "}
            <span className="text-[#E63946]">We Answer the Call.</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed">
            Laredo Lifeline EMS provides professional, compassionate 24/7 emergency
            and non-emergency medical transportation across Laredo and Webb County.
            Trusted by thousands of families and healthcare providers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white/10 border-2 border-white/40 text-white font-semibold text-lg hover:bg-white hover:text-[#1B4F8A] transition-all duration-200 shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Request Transport
            </Link>
            <a
              href="tel:+19565550911"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#E63946] text-white font-semibold text-lg hover:bg-[#c0303c] transition-all duration-200 shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now (956) 555-0911
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 60 C360 0 1080 0 1440 60 L1440 60 L0 60 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-[#0f2c52] text-white">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { value: "24/7", label: "Service — Always Available" },
            { value: "< 8 Min", label: "Average Response Time" },
            { value: "Licensed", label: "& CAAS Accredited" },
            { value: "10+", label: "Years Serving Laredo" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#E63946]">{stat.value}</span>
              <span className="text-sm sm:text-base text-white/70 font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#E63946] text-sm font-semibold uppercase tracking-widest">What We Do</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2c52] mt-2">Our Services</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto">
              Comprehensive emergency and non-emergency medical transport solutions built around your needs and safety.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                slug: "emergency-response",
                title: "Emergency 911 Response",
                description: "Rapid, life-saving response with ALS-equipped units and certified paramedics dispatched 24 hours a day.",
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
              },
              {
                slug: "non-emergency-transport",
                title: "Non-Emergency Transport",
                description: "Scheduled, comfortable medical transport for appointments, discharge, or routine medical visits.",
                icon: "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h1m0-2h8m2 2h1l2-2V8l-3-3h-2v11z",
              },
              {
                slug: "event-ems",
                title: "Event / Standby EMS",
                description: "On-site EMS standby for sporting events, concerts, festivals, and large public gatherings.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
              },
              {
                slug: "interfacility-transport",
                title: "Inter-Facility Transport",
                description: "Safe, medically-monitored transfers between hospitals, clinics, nursing homes, and specialty centers.",
                icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
              },
            ].map((service) => (
              <div
                key={service.slug}
                className="group flex flex-col bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="p-6 flex flex-col flex-1">
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#1B4F8A]/10 text-[#1B4F8A] mb-5 group-hover:bg-[#1B4F8A] group-hover:text-white transition-colors duration-300">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d={service.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#0f2c52] mb-2">{service.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1">{service.description}</p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1 mt-5 text-sm font-semibold text-[#1B4F8A] hover:text-[#E63946] transition-colors"
                  >
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                <div className="h-1 w-0 bg-[#E63946] group-hover:w-full transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#E63946] text-sm font-semibold uppercase tracking-widest">Why Laredo Lifeline</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2c52] mt-2">Care You Can Count On</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Rapid Response",
                description: "Our strategically positioned units and intelligent dispatch system deliver an average response time of under 8 minutes across Webb County — because seconds save lives.",
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                title: "Experienced Crew",
                description: "Every Laredo Lifeline unit is staffed by state-licensed paramedics and EMTs with extensive field experience, ongoing training, and ACLS/PALS certifications.",
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
              },
              {
                title: "Compassionate Care",
                description: "We treat every patient with dignity, respect, and empathy. From the first call to patient handoff, our team is focused on comfort, communication, and quality care.",
                icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-start bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#1B4F8A] text-white mb-5">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0f2c52] mb-3">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACCREDITATIONS */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[#E63946] text-sm font-semibold uppercase tracking-widest">Verified & Trusted</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2c52] mt-2 mb-12">Licensed &amp; Accredited</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {[
              { label: "CAAS Accredited", detail: "Commission on Accreditation of Ambulance Services", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
              { label: "TX State Licensed", detail: "Texas Department of State Health Services", icon: "M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" },
              { label: "HIPAA Compliant", detail: "Full patient privacy & data security standards", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
            ].map((badge) => (
              <div key={badge.label} className="flex flex-col items-center gap-3 bg-[#1B4F8A]/5 border border-[#1B4F8A]/20 rounded-2xl px-8 py-6 w-full sm:w-56">
                <div className="w-12 h-12 rounded-full bg-[#1B4F8A] text-white flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={badge.icon} />
                  </svg>
                </div>
                <span className="font-bold text-[#0f2c52] text-base">{badge.label}</span>
                <span className="text-xs text-slate-500 text-center leading-snug">{badge.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 px-6" style={{ background: "linear-gradient(135deg, #E63946 0%, #9b1d23 100%)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Need Emergency Transport?</h2>
          <p className="text-white/80 text-lg mb-8">
            Our dispatch team is standing by around the clock. Call us directly or submit a transport request online.
          </p>
          <a href="tel:+19565550911" className="block text-5xl sm:text-6xl font-extrabold text-white hover:text-white/80 transition-colors mb-10 tracking-tight">
            (956) 555-0911
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white text-[#E63946] font-bold text-lg hover:bg-slate-100 transition-colors shadow-lg"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </main>
  );
}
