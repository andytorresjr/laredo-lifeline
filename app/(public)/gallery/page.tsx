import type { Metadata } from "next";
import GalleryContent from "./GalleryContent";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description:
    "See Laredo Lifeline EMS in action — browse photos of our fleet, paramedic crew training, event standby coverage, and community outreach across Webb County.",
  keywords: [
    "Laredo EMS photos",
    "ambulance fleet Laredo",
    "EMS crew Laredo TX",
    "medical standby events Laredo",
  ],
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B4F8A] to-[#0f2c52] py-16 px-6 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-200 mb-3">
            Photo Gallery
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold">See Us in Action</h1>
          <p className="mt-4 text-blue-100 max-w-xl mx-auto">
            Browse photos of our fleet, crew training, event coverage, and community
            outreach across Laredo and Webb County.
          </p>
        </div>
      </section>

      {/* Notice banner */}
      <div className="bg-amber-50 border-b border-amber-200 px-6 py-3">
        <p className="max-w-5xl mx-auto text-sm text-amber-800 text-center">
          <strong>Coming Soon:</strong> Real fleet and event photos will replace these placeholders once brand assets are provided.
        </p>
      </div>

      <GalleryContent />
    </main>
  );
}
