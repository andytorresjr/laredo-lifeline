import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import Link from "next/link";
import { formatDateShort } from "@/lib/utils";
import AddClientForm from "./AddClientForm";

export const metadata = { title: "Admin — Manage Clients" };

export default async function AdminClientsPage() {
  const session = await auth();
  if (!session || (session.user as { role: string }).role !== "ADMIN") {
    redirect("/login");
  }

  const clients = await db.user.findMany({
    where: { role: "CLIENT" },
    include: { _count: { select: { invoices: true } } },
    orderBy: { createdAt: "desc" },
  });

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
                tab.href === "/admin/clients"
                  ? "text-[#1B4F8A] border-[#1B4F8A]"
                  : "text-slate-500 border-transparent hover:text-slate-700"
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Add client form */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h2 className="font-semibold text-slate-800 mb-5">Add New Client</h2>
              <AddClientForm />
            </div>
          </div>

          {/* Clients table */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100">
                <h2 className="font-semibold text-slate-800">
                  Hospital Clients ({clients.length})
                </h2>
              </div>

              {clients.length === 0 ? (
                <div className="px-6 py-12 text-center text-slate-400">
                  <p>No clients yet. Add your first hospital client.</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="text-left px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide">Name</th>
                        <th className="text-left px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide">Company</th>
                        <th className="text-left px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide">Email</th>
                        <th className="text-left px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide">Invoices</th>
                        <th className="text-left px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide">Added</th>
                        <th className="px-6 py-3"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {clients.map((client) => (
                        <tr key={client.id} className="hover:bg-slate-50">
                          <td className="px-6 py-3 font-medium text-slate-800">{client.name}</td>
                          <td className="px-6 py-3 text-slate-600">{client.company ?? "—"}</td>
                          <td className="px-6 py-3 text-slate-500 text-xs">{client.email}</td>
                          <td className="px-6 py-3">
                            <span className="font-medium text-[#1B4F8A]">{client._count.invoices}</span>
                          </td>
                          <td className="px-6 py-3 text-slate-400 text-xs">{formatDateShort(client.createdAt)}</td>
                          <td className="px-6 py-3">
                            <DeleteClientButton clientId={client.id} clientName={client.name} />
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

function DeleteClientButton({ clientId, clientName }: { clientId: string; clientName: string }) {
  return (
    <form
      action={async () => {
        "use server";
        const { db } = await import("@/lib/db");
        await db.user.delete({ where: { id: clientId } });
        const { revalidatePath } = await import("next/cache");
        revalidatePath("/admin/clients");
      }}
    >
      <button
        type="submit"
        className="text-xs text-red-500 hover:text-red-700 hover:underline"
        onClick={(e) => {
          if (!confirm(`Delete client "${clientName}"? This will also delete all their invoices.`)) {
            e.preventDefault();
          }
        }}
      >
        Delete
      </button>
    </form>
  );
}
