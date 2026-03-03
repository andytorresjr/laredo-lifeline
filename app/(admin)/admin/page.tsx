import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import Link from "next/link";
import { redirect } from "next/navigation";
import { formatCurrency, formatDateShort } from "@/lib/utils";

export const metadata = { title: "Admin Dashboard" };

export default async function AdminDashboardPage() {
  const session = await auth();
  if (!session || (session.user as { role: string }).role !== "ADMIN") {
    redirect("/login");
  }

  const [totalClients, totalInvoices, recentInvoices, pendingCount] =
    await Promise.all([
      db.user.count({ where: { role: "CLIENT" } }),
      db.invoice.count(),
      db.invoice.findMany({
        take: 5,
        orderBy: { createdAt: "desc" },
        include: { user: { select: { name: true, company: true } } },
      }),
      db.invoice.count({ where: { status: "PENDING" } }),
    ]);

  const totalRevenue = await db.invoice.aggregate({
    _sum: { amount: true },
    where: { status: "PAID" },
  });

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Admin header */}
      <div className="bg-[#1B4F8A] text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">Laredo Lifeline — Admin</h1>
            <p className="text-blue-200 text-sm">Logged in as {session.user?.name}</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/" className="text-blue-200 hover:text-white text-sm">
              View Site
            </Link>
            <Link
              href="/api/auth/signout"
              className="px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-md text-sm"
            >
              Sign Out
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Nav tabs */}
        <div className="flex gap-1 mb-8 border-b border-slate-200">
          {[
            { href: "/admin", label: "Dashboard" },
            { href: "/admin/clients", label: "Clients" },
            { href: "/admin/invoices", label: "Invoices" },
          ].map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              className="px-4 py-2 text-sm font-medium text-[#1B4F8A] border-b-2 border-[#1B4F8A] -mb-px"
            >
              {tab.label}
            </Link>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Hospital Clients", value: totalClients, color: "text-[#1B4F8A]" },
            { label: "Total Invoices", value: totalInvoices, color: "text-slate-700" },
            { label: "Pending Invoices", value: pendingCount, color: "text-yellow-600" },
            {
              label: "Total Revenue (Paid)",
              value: formatCurrency(totalRevenue._sum.amount ?? 0),
              color: "text-green-600",
            },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl border border-slate-200 p-5">
              <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">{stat.label}</p>
              <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <Link
            href="/admin/clients"
            className="flex items-center gap-4 bg-white border border-slate-200 rounded-xl p-5 hover:border-[#1B4F8A] hover:shadow-sm transition-all group"
          >
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
              <svg className="w-6 h-6 text-[#1B4F8A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-slate-800">Manage Clients</p>
              <p className="text-sm text-slate-500">Add, edit, or remove hospital accounts</p>
            </div>
          </Link>
          <Link
            href="/admin/invoices"
            className="flex items-center gap-4 bg-white border border-slate-200 rounded-xl p-5 hover:border-[#1B4F8A] hover:shadow-sm transition-all group"
          >
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
              <svg className="w-6 h-6 text-[#1B4F8A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-slate-800">Manage Invoices</p>
              <p className="text-sm text-slate-500">Upload and assign invoices to clients</p>
            </div>
          </Link>
        </div>

        {/* Recent invoices */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <h2 className="font-semibold text-slate-800">Recent Invoices</h2>
            <Link href="/admin/invoices" className="text-sm text-[#1B4F8A] hover:underline">
              View all
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50">
                  <th className="text-left px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide">Invoice</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide">Client</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide">Amount</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide">Status</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {recentInvoices.map((invoice) => (
                  <tr key={invoice.id} className="hover:bg-slate-50">
                    <td className="px-6 py-3 font-medium text-slate-800 max-w-xs truncate">{invoice.title}</td>
                    <td className="px-6 py-3 text-slate-600">{invoice.user.company ?? invoice.user.name}</td>
                    <td className="px-6 py-3 text-slate-700">{invoice.amount ? formatCurrency(invoice.amount) : "—"}</td>
                    <td className="px-6 py-3">
                      <StatusBadge status={invoice.status} />
                    </td>
                    <td className="px-6 py-3 text-slate-500">{formatDateShort(invoice.createdAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    PENDING: "bg-yellow-100 text-yellow-800",
    PAID: "bg-green-100 text-green-800",
    OVERDUE: "bg-red-100 text-red-800",
    CANCELLED: "bg-slate-100 text-slate-600",
  };
  return (
    <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${map[status] ?? "bg-slate-100 text-slate-600"}`}>
      {status}
    </span>
  );
}
