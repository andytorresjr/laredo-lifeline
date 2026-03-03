import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import Link from "next/link";
import { formatCurrency, formatDateShort } from "@/lib/utils";
import AddInvoiceForm from "./AddInvoiceForm";

export const metadata = { title: "Admin — Manage Invoices" };

export default async function AdminInvoicesPage() {
  const session = await auth();
  if (!session || (session.user as { role: string }).role !== "ADMIN") {
    redirect("/login");
  }

  const [invoices, clients] = await Promise.all([
    db.invoice.findMany({
      orderBy: { createdAt: "desc" },
      include: { user: { select: { name: true, company: true } } },
    }),
    db.user.findMany({
      where: { role: "CLIENT" },
      select: { id: true, name: true, company: true },
      orderBy: { name: "asc" },
    }),
  ]);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-[#1B4F8A] text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold">Laredo Lifeline — Admin</h1>
          <Link href="/api/auth/signout" className="text-blue-200 hover:text-white text-sm">
            Sign Out
          </Link>
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
              className={`px-4 py-2 text-sm font-medium -mb-px border-b-2 ${
                tab.href === "/admin/invoices"
                  ? "text-[#1B4F8A] border-[#1B4F8A]"
                  : "text-slate-500 border-transparent hover:text-slate-700"
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Add invoice form */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h2 className="font-semibold text-slate-800 mb-5">Add New Invoice</h2>
              <AddInvoiceForm clients={clients} />
            </div>
          </div>

          {/* Invoices table */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100">
                <h2 className="font-semibold text-slate-800">
                  All Invoices ({invoices.length})
                </h2>
              </div>

              {invoices.length === 0 ? (
                <div className="px-6 py-12 text-center text-slate-400">
                  <p>No invoices yet. Create your first invoice.</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="text-left px-4 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide">Invoice</th>
                        <th className="text-left px-4 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide">Client</th>
                        <th className="text-left px-4 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide">Amount</th>
                        <th className="text-left px-4 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide">Status</th>
                        <th className="text-left px-4 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide">Date</th>
                        <th className="px-4 py-3"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {invoices.map((invoice) => (
                        <tr key={invoice.id} className="hover:bg-slate-50">
                          <td className="px-4 py-3">
                            <p className="font-medium text-slate-800 max-w-[200px] truncate text-xs">{invoice.title}</p>
                          </td>
                          <td className="px-4 py-3 text-slate-600 text-xs">{invoice.user.company ?? invoice.user.name}</td>
                          <td className="px-4 py-3 text-slate-700 text-xs">{invoice.amount ? formatCurrency(invoice.amount) : "—"}</td>
                          <td className="px-4 py-3">
                            <StatusBadge status={invoice.status} />
                          </td>
                          <td className="px-4 py-3 text-slate-400 text-xs">{formatDateShort(invoice.createdAt)}</td>
                          <td className="px-4 py-3">
                            <DeleteInvoiceButton invoiceId={invoice.id} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
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

function DeleteInvoiceButton({ invoiceId }: { invoiceId: string }) {
  return (
    <form
      action={async () => {
        "use server";
        const { db } = await import("@/lib/db");
        await db.invoice.delete({ where: { id: invoiceId } });
        const { revalidatePath } = await import("next/cache");
        revalidatePath("/admin/invoices");
      }}
    >
      <button type="submit" className="text-xs text-red-500 hover:text-red-700 hover:underline">
        Delete
      </button>
    </form>
  );
}
