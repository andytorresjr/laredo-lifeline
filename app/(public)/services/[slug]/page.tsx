import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const servicesData: Record<
  string,
  {
    title: string;
    tagline: string;
    description: string[];
    whatToExpect: string[];
    whoItsFor: string[];
    icon: string;
    relatedSlugs: string[];
  }
> = {
  "emergency-response": {
    title: "Emergency 911 Response",
    tagline: "Rapid ALS & BLS response when every second counts.",
    description: [
      "Laredo Lifeline EMS provides state-certified Advanced Life Support (ALS) and Basic Life Support (BLS) emergency ambulance response throughout the Laredo area. Our crews are dispatched within seconds of receiving a 911 call, with an average response time under 8 minutes.",
      "Our paramedics and EMTs are equipped with the latest medical technology — cardiac monitors, airway management tools, IV therapy, and life-saving medications. We train continuously to stay at the leading edge of pre-hospital emergency medicine.",
      "Every emergency call is handled with the highest level of compassion and urgency. We coordinate with hospital emergency departments before arrival to ensure a seamless transition of care.",
    ],
    whatToExpect: [
      "Immediate dispatch upon 911 activation",
      "ALS or BLS crew based on call nature and severity",
      "On-scene assessment, stabilization, and treatment",
      "Safe transport to the nearest appropriate facility",
    ],
    whoItsFor: [
      "Any individual experiencing a medical emergency",
      "Cardiac events, strokes, trauma, respiratory distress",
      "Pediatric and geriatric emergencies",
      "Multi-casualty incidents",
    ],
    icon: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z",
    relatedSlugs: ["non-emergency-transport", "interfacility-transport"],
  },
  "non-emergency-transport": {
    title: "Non-Emergency Medical Transport (NEMT)",
    tagline: "Reliable, scheduled transport for your recurring medical needs.",
    description: [
      "Not every medical trip requires lights and sirens. Laredo Lifeline EMS offers Non-Emergency Medical Transport (NEMT) services for patients who need to reach medical appointments but cannot safely travel by conventional means.",
      "We specialize in recurring transport for dialysis patients, chemotherapy appointments, follow-up visits, and other scheduled medical needs. Our trained staff ensures comfort and safety throughout every trip.",
      "Flexible scheduling, door-to-door service, and communication with facility staff make us the preferred choice for case managers, social workers, and discharge planners in the region.",
    ],
    whatToExpect: [
      "Advance scheduling by phone or through your case manager",
      "Trained medical transport technicians",
      "Wheelchair and stretcher-capable vehicles",
      "Coordination with receiving medical facilities",
    ],
    whoItsFor: [
      "Dialysis patients requiring routine transport",
      "Patients with limited mobility needing doctor appointments",
      "Post-surgical patients cleared for transport but not personal vehicles",
      "Facilities needing reliable discharge transport",
    ],
    icon: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12",
    relatedSlugs: ["interfacility-transport", "event-ems"],
  },
  "event-ems": {
    title: "Event / Standby EMS",
    tagline: "Professional EMS coverage so your events run safely.",
    description: [
      "Laredo Lifeline EMS provides dedicated on-site emergency medical coverage for events of all sizes — from local 5K races and school sports events to large-scale concerts, festivals, and corporate gatherings. Our standby EMS teams are ready to respond instantly within your event perimeter.",
      "Our event EMS packages are customized to your venue size, expected attendance, and risk profile. We work directly with event coordinators and venue management to develop a comprehensive medical operations plan before your event begins.",
      "Having professional EMS on-site not only protects attendees — it protects your organization's liability and gives everyone peace of mind to enjoy the event.",
    ],
    whatToExpect: [
      "Pre-event site assessment and medical operations planning",
      "Dedicated ALS or BLS crew stationed at your event",
      "Fully stocked ambulance and medical equipment on-site",
      "Coordination with local 911 dispatch for overflow incidents",
    ],
    whoItsFor: [
      "Sports leagues and athletic competitions",
      "Concerts, festivals, and large outdoor events",
      "Corporate events and conferences",
      "Schools, universities, and youth organizations",
    ],
    icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
    relatedSlugs: ["emergency-response", "non-emergency-transport"],
  },
  "interfacility-transport": {
    title: "Inter-Facility Transport",
    tagline: "Safe, monitored transfers between healthcare facilities.",
    description: [
      "When a patient requires transfer between hospitals, nursing homes, dialysis centers, or other healthcare facilities, Laredo Lifeline EMS provides professional inter-facility transport with continuous medical monitoring throughout the journey.",
      "We offer both ALS (Advanced Life Support) and BLS (Basic Life Support) inter-facility transport, with crews capable of managing ventilators, IV drips, cardiac monitoring, and other complex medical needs during transport.",
      "Our dispatch team coordinates directly with sending and receiving facilities to ensure complete continuity of care, accurate documentation transfer, and a smooth, efficient handoff.",
    ],
    whatToExpect: [
      "Pre-transport coordination with both sending and receiving facilities",
      "Full medical documentation and records transfer",
      "Continuous vital monitoring during transport",
      "Formal patient handoff with receiving clinical team",
    ],
    whoItsFor: [
      "Hospitals requiring ICU or step-down patient transfers",
      "Nursing facilities needing acute care hospital transport",
      "Dialysis centers and specialty clinics",
      "Patients being transferred for specialized treatment",
    ],
    icon: "M2.25 21l21-21m0 0H8.25m13.5 0v13.5M10.5 21H3.75a.75.75 0 01-.75-.75V8.25",
    relatedSlugs: ["emergency-response", "event-ems"],
  },
};

const allServices = [
  { slug: "emergency-response", title: "Emergency 911 Response" },
  { slug: "non-emergency-transport", title: "Non-Emergency Transport" },
  { slug: "event-ems", title: "Event / Standby EMS" },
  { slug: "interfacility-transport", title: "Inter-Facility Transport" },
];

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) return {};
  return { title: service.title, description: service.tagline };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) notFound();

  const related = service.relatedSlugs
    .map((s) => allServices.find((a) => a.slug === s))
    .filter(Boolean);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B4F8A] to-[#0f2c52] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">{service.tagline}</p>
        </div>
      </section>

      {/* Description */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-none">
          {service.description.map((para, i) => (
            <p key={i} className="text-slate-700 text-lg leading-relaxed mb-4">
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* What to Expect & Who It's For */}
      <section className="bg-slate-50 py-16 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-[#1B4F8A] mb-6">What to Expect</h2>
            <ol className="space-y-4">
              {service.whatToExpect.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-7 h-7 bg-[#1B4F8A] text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                    {i + 1}
                  </span>
                  <p className="text-slate-700 pt-0.5">{step}</p>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#1B4F8A] mb-6">Who This Is For</h2>
            <ul className="space-y-3">
              {service.whoItsFor.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#E63946] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-slate-700">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#E63946] py-14 px-4 text-white text-center">
        <h2 className="text-3xl font-bold mb-3">Ready to Request This Service?</h2>
        <p className="text-red-100 mb-8 text-lg">Contact us to schedule transport or get a quote for your needs.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="px-8 py-3 bg-white text-[#E63946] font-bold rounded-lg hover:bg-red-50 transition-colors"
          >
            Request This Service
          </Link>
          <a
            href="tel:+19565550911"
            className="px-8 py-3 bg-white/10 border border-white/30 text-white font-bold rounded-lg hover:bg-white/20 transition-colors"
          >
            Call (956) 555-0911
          </a>
        </div>
      </section>

      {/* Related services */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-8">Other Services</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {related.map((s) => s && (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="p-5 border border-slate-200 rounded-xl hover:border-[#1B4F8A] hover:shadow-sm transition-all group"
            >
              <p className="font-semibold text-slate-800 group-hover:text-[#1B4F8A]">{s.title}</p>
              <p className="text-sm text-[#1B4F8A] mt-1 flex items-center gap-1">
                Learn more
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
