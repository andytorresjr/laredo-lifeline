import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Laredo Lifeline EMS — our story, mission, values, fleet, and leadership team.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B4F8A] to-[#0f2c52] py-20 px-6 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-200 mb-3">Our Story</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold">About Laredo Lifeline EMS</h1>
          <p className="mt-5 max-w-2xl mx-auto text-lg text-blue-100">
            Built by first responders, for the community we call home.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[#E63946] text-sm font-semibold uppercase tracking-widest">Our Mission</span>
          <h2 className="text-3xl font-extrabold text-[#0f2c52] mt-2 mb-6">To Save Lives and Serve With Compassion</h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Laredo Lifeline EMS exists to provide the highest standard of pre-hospital emergency care and medical
            transportation to every person we serve — regardless of circumstance. We believe that access to fast,
            professional EMS is a right, not a privilege.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#E63946] text-sm font-semibold uppercase tracking-widest">Our Story</span>
            <h2 className="text-3xl font-extrabold text-[#0f2c52] mt-2 mb-5">Born From a Need, Built to Last</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Laredo Lifeline EMS was founded over a decade ago by a team of paramedics and EMTs who recognized
                a critical gap in emergency medical services along the US-Mexico border corridor. What began as
                a small fleet of two units has grown into one of the region&apos;s most trusted EMS providers.
              </p>
              <p>
                Our team has responded to tens of thousands of calls — from cardiac arrests and major traumas
                to scheduled dialysis runs and stadium-sized event standby coverage. Through each call, our core
                commitment has never changed: rapid response, skilled care, and compassionate service.
              </p>
              <p>
                Today, we serve the City of Laredo, Webb County, and surrounding communities with a modern fleet,
                a team of over 50 certified professionals, and a dispatch center staffed around the clock.
              </p>
            </div>
          </div>
          <div className="bg-slate-200 rounded-2xl aspect-square flex items-center justify-center">
            <div className="text-center text-slate-400">
              <svg className="w-16 h-16 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              <p className="text-sm">Company Photo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#E63946] text-sm font-semibold uppercase tracking-widest">What Drives Us</span>
            <h2 className="text-3xl font-extrabold text-[#0f2c52] mt-2">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Compassion", desc: "Every patient deserves to be treated with dignity, kindness, and respect — especially in their most vulnerable moments.", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
              { title: "Integrity", desc: "We hold ourselves to the highest ethical and professional standards — in every call, every interaction, every decision.", icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" },
              { title: "Excellence", desc: "We pursue continuous improvement through training, certification, and learning from every patient encounter.", icon: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" },
              { title: "Community", desc: "Laredo is our home. We are committed to giving back, preparing our neighbors, and making this community safer.", icon: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" },
            ].map((val) => (
              <div key={val.title} className="flex flex-col items-start bg-slate-50 border border-slate-100 rounded-2xl p-6">
                <div className="w-11 h-11 bg-[#1B4F8A] text-white rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={val.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-[#0f2c52] text-lg mb-2">{val.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section className="bg-[#0f2c52] py-20 px-6 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-300 text-sm font-semibold uppercase tracking-widest">Equipment</span>
            <h2 className="text-3xl font-extrabold mt-2">Our Fleet</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "ALS Ambulance", count: "4 Units", desc: "Advanced Life Support units equipped with cardiac monitors, 12-lead ECG, CPAP, IV/IO access, ventilators, and full pharmacological inventory. Staffed by paramedic/EMT teams." },
              { title: "BLS Ambulance", count: "6 Units", desc: "Basic Life Support units for lower-acuity emergency and non-emergency transport. Staffed by EMT-Basic crews with full BLS equipment and automated defibrillators." },
              { title: "NEMT Van", count: "5 Units", desc: "Wheelchair-accessible and stretcher-capable medical transport vans for non-emergency patient transport to appointments, dialysis centers, and facility transfers." },
            ].map((vehicle) => (
              <div key={vehicle.title} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">{vehicle.title}</h3>
                  <span className="text-xs font-semibold text-blue-300 bg-blue-900/50 px-2.5 py-1 rounded-full">{vehicle.count}</span>
                </div>
                <p className="text-blue-100/70 text-sm leading-relaxed">{vehicle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#E63946] text-sm font-semibold uppercase tracking-widest">The Team</span>
            <h2 className="text-3xl font-extrabold text-[#0f2c52] mt-2">Our Leadership</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Carlos Reyes", title: "Chief Executive Officer & Founder", bio: "20+ years in EMS, former Paramedic Supervisor. Founded Laredo Lifeline with a vision to transform emergency care in Webb County." },
              { name: "Dr. Maria Sandoval", title: "Medical Director", bio: "Board-certified emergency physician providing medical oversight, protocol development, and quality assurance for all clinical operations." },
              { name: "James Ortega", title: "Director of Operations", bio: "15 years managing EMS operations. Oversees fleet management, staffing, dispatch, and day-to-day agency logistics." },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#0f2c52] text-lg">{member.name}</h3>
                <p className="text-[#E63946] text-sm font-medium mb-3">{member.title}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-16 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0f2c52] mb-4">Ready to Work With Us?</h2>
          <p className="text-slate-500 mb-8">Whether you need transport services or want to join our team, we&apos;d love to connect.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="px-7 py-3 bg-[#1B4F8A] text-white font-semibold rounded-lg hover:bg-[#153d6e] transition-colors">
              Contact Us
            </Link>
            <Link href="/careers" className="px-7 py-3 border border-[#1B4F8A] text-[#1B4F8A] font-semibold rounded-lg hover:bg-[#1B4F8A] hover:text-white transition-colors">
              View Careers
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
