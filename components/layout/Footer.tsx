import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f2c52] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              </svg>
            </div>
            <div>
              <span className="font-bold text-base block">Laredo Lifeline</span>
              <span className="text-xs text-blue-300 block">Emergency Medical Services</span>
            </div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Providing compassionate, professional emergency and medical transport
            services to the Laredo community — 24 hours a day, 7 days a week.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-semibold text-sm uppercase tracking-wider text-blue-300 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/services", label: "Our Services" },
              { href: "/coverage", label: "Coverage Area" },
              { href: "/careers", label: "Careers" },
              { href: "/contact", label: "Contact Us" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-slate-400 text-sm hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-sm uppercase tracking-wider text-blue-300 mb-4">
            Services
          </h3>
          <ul className="space-y-2">
            {[
              { href: "/services/emergency-response", label: "Emergency 911 Response" },
              { href: "/services/non-emergency-transport", label: "Non-Emergency Transport" },
              { href: "/services/event-ems", label: "Event / Standby EMS" },
              { href: "/services/interfacility-transport", label: "Inter-Facility Transport" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-slate-400 text-sm hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-sm uppercase tracking-wider text-blue-300 mb-4">
            Contact
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <svg className="w-4 h-4 text-blue-300 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <div>
                <a href="tel:+19565550911" className="text-white font-bold text-sm hover:text-blue-300 transition-colors block">
                  (956) 555-0911
                </a>
                <span className="text-slate-400 text-xs">Emergency Line</span>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-4 h-4 text-blue-300 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <a href="mailto:info@laredolifeline.com" className="text-slate-400 text-sm hover:text-white transition-colors">
                info@laredolifeline.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-4 h-4 text-blue-300 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span className="text-slate-400 text-sm">Laredo, TX &amp; surrounding areas</span>
            </li>
          </ul>

          <div className="mt-4 p-3 bg-white/5 rounded-lg border border-white/10">
            <p className="text-xs text-blue-200 font-semibold">License / Cert #</p>
            <p className="text-xs text-slate-400 mt-1">TX EMS Lic. #000000 &bull; CAAS Accredited</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-slate-500 text-xs">
            &copy; {currentYear} Laredo Lifeline EMS. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-slate-500 text-xs hover:text-slate-300 transition-colors">
              Client Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
