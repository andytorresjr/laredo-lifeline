import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Request a medical transport quote, schedule a non-emergency transport, or ask about hospital partnership opportunities. Available 24/7 at (956) 723-5421.",
  keywords: [
    "contact Laredo EMS",
    "schedule medical transport Laredo",
    "NEMT quote Laredo",
    "ambulance contact Laredo TX",
  ],
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B4F8A] to-[#0f2c52] py-16 px-6 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-200 mb-3">Get in Touch</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold">Contact Us</h1>
          <p className="mt-4 text-blue-100 max-w-xl mx-auto">
            Request a transport quote, ask a question, or reach out for a partnership inquiry.
          </p>
        </div>
      </section>

      <ContactContent />
    </main>
  );
}
