import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the Laredo Lifeline EMS team. View open positions for paramedics, EMTs, and NEMT drivers in Laredo, TX.",
};

const benefits = [
  { title: "Competitive Pay", desc: "Market-leading wages with regular performance reviews and longevity increases.", icon: "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.171-.879-1.171-2.303 0-3.182.53-.398 1.068-.667 1.669-.704" },
  { title: "Flexible Schedules", desc: "12-hour and 24-hour shift options. Day, night, and rotating schedules available.", icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" },
  { title: "Ongoing Training", desc: "Paid CEU, ACLS, PALS, and specialty certifications. Annual sim lab days and field training.", icon: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" },
  { title: "Great Team Culture", desc: "We support each other on and off the ambulance. Our crew is family — bilingual, diverse, and tight-knit.", icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" },
];

const positions = [
  {
    title: "Paramedic (ALS)",
    type: "Full-Time",
    typeColor: "bg-[#1B4F8A] text-white",
    slug: "paramedic-als",
    description: "Provide advanced pre-hospital emergency care as part of a two-person ALS crew. Lead patient assessments, advanced interventions, and hospital communication.",
    requirements: [
      "Texas-licensed Paramedic (NREMT-P also accepted)",
      "Current ACLS and PALS certification",
      "Minimum 1 year ALS field experience preferred",
      "Valid Texas driver's license, clean MVR",
    ],
  },
  {
    title: "EMT-Basic",
    type: "Full-Time / Part-Time",
    typeColor: "bg-[#0f2c52] text-white",
    slug: "emt-basic",
    description: "Serve as the driver and BLS crew member on emergency and non-emergency calls. Provide basic life support, patient care, and scene documentation.",
    requirements: [
      "Texas-certified EMT-Basic (NREMT-B also accepted)",
      "Current CPR/BLS certification",
      "Valid Texas driver's license, clean MVR, ability to drive ambulance",
      "Strong communication skills and team-first attitude",
    ],
  },
  {
    title: "Non-Emergency Driver",
    type: "Part-Time",
    typeColor: "bg-[#E63946] text-white",
    slug: "non-emergency-driver",
    description: "Transport patients to and from medical appointments, dialysis centers, and facilities in our NEMT fleet.",
    requirements: [
      "Valid Texas driver's license, Class C minimum, clean MVR",
      "CPR/First Aid certification (or willingness to obtain within 30 days)",
      "Ability to assist patients with mobility needs",
      "Bilingual (English/Spanish) strongly preferred",
    ],
  },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B4F8A] to-[#0f2c52] py-20 px-6 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-200 mb-3">Careers</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold">Join Our Team</h1>
          <p className="mt-5 max-w-2xl mx-auto text-lg text-blue-100">
            Laredo Lifeline EMS is built on a crew of dedicated professionals who show up every day for their community.
            If that sounds like you, we want to talk.
          </p>
          <a href="#open-positions" className="inline-block mt-8 px-8 py-4 rounded-full bg-[#E63946] font-bold text-white hover:bg-[#c62e3b] transition-colors">
            View Open Positions
          </a>
        </div>
      </section>

      {/* Why work with us */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-[#0f2c52] mb-2">Why Work With Us</h2>
          <p className="text-center text-slate-500 mb-12">We invest in our people because better-supported crews deliver better patient care.</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div key={b.title} className="flex flex-col items-start rounded-2xl border border-slate-100 bg-slate-50 p-6">
                <div className="mb-4 w-12 h-12 bg-[#1B4F8A] text-white rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={b.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-slate-800 mb-2">{b.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section id="open-positions" className="bg-slate-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-[#0f2c52] mb-2">Open Positions</h2>
          <p className="text-center text-slate-500 mb-12">All positions are based in Laredo, TX.</p>
          <div className="grid gap-6 lg:grid-cols-3">
            {positions.map((pos) => (
              <div key={pos.slug} className="flex flex-col bg-white rounded-2xl border border-slate-200 p-7 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="text-xl font-bold text-slate-800">{pos.title}</h3>
                  <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${pos.typeColor}`}>
                    {pos.type}
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">{pos.description}</p>
                <div className="mb-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-3">Requirements</p>
                  <ul className="space-y-2">
                    {pos.requirements.map((req) => (
                      <li key={req} className="flex items-start gap-2 text-sm text-slate-700">
                        <svg className="w-4 h-4 text-[#1B4F8A] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto">
                  <Link
                    href={`/contact?position=${pos.slug}`}
                    className="block w-full text-center py-3 rounded-xl bg-[#1B4F8A] text-white font-semibold hover:bg-[#153d6e] transition-colors"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl bg-[#0f2c52] p-10 text-center text-white">
            <h2 className="text-2xl font-extrabold">Don&apos;t See a Perfect Fit?</h2>
            <p className="mt-3 text-blue-100">
              We&apos;re always growing. Send us your resume and a note about what you bring to the table —
              we keep applications on file and reach out when the right role opens.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact?position=general-inquiry" className="rounded-full bg-[#E63946] px-8 py-4 font-bold text-white hover:bg-[#c62e3b] transition-colors">
                Send a General Application
              </Link>
              <a href="mailto:careers@laredolifeline.com" className="rounded-full border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white hover:text-[#0f2c52] transition-colors">
                Email HR Directly
              </a>
            </div>
            <p className="mt-6 text-sm text-blue-200">careers@laredolifeline.com &nbsp;|&nbsp; (956) 555-0100 ext. 3</p>
          </div>
        </div>
      </section>
    </main>
  );
}
