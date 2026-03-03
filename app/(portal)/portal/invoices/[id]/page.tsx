import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import { formatCurrency, formatDate } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Invoice Detail" };

export default async function InvoiceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const session = await auth();
  if (!session) redirect("/login");

  const userId = (session.user as { id: string }).id;

  const invoice = await db.invoice.findUnique({
    where: { id },
    include: { user: { select: { name: true, company: true, id: true } } },
  });

  // If not found or doesn't belong to this user (and not admin)
  const isAdmin = (session.user as { role: string }).role === "ADMIN";
  if (!invoice) notFound();
  if (!isAdmin && invoice.userId !== userId) notFound();

  const statusColors: Record<string, { bg: string; text: string; label: string }> = {
    PENDING: { bg: "bg-yellow-100", text: "text-yellow-800", label: "Pending" },
    PAID: { bg: "bg-green-100", text: "text-green-800", label: "Paid" },
    OVERDUE: { bg: "bg-red-100", text: "text-red-800", label: "Overdue" },
    CANCELLED: { bg: "bg-slate-100", text: "text-slate-600", label: "Cancelled" },
  };
  const status = statusColors[invoice.status] ?? statusColors.PENDING;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-[#1B4F8A] text-white px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
            <span className="font-semibold text-sm">Laredo Lifeline EMS</span>
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <Link
          href="/portal"
          className="inline-flex items-center gap-1.5 text-sm text-[#1B4F8A] hover:underline mb-6"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to Dashboard
        </Link>

        {/* Invoice card */}
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
          {/* Invoice header */}
          <div className="bg-slate-50 border-b border-slate-200 px-8 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-1">Invoice</p>
              <h1 className="text-xl font-bold text-slate-800">{invoice.title}</h1>
              <p className="text-sm text-slate-500 mt-1">
                {invoice.user.company ?? invoice.user.name}
              </p>
            </div>
            <span className={`inline-flex px-3 py-1.5 rounded-full text-sm font-medium ${status.bg} ${status.text}`}>
              {status.label}
            </span>
          </div>

          {/* Details grid */}
          <div className="px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 border-b border-slate-100">
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Amount</p>
              <p className="text-xl font-bold text-slate-800">
                {invoice.amount ? formatCurrency(invoice.amount) : "—"}
              </p>
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Issue Date</p>
              <p className="font-medium text-slate-700">{formatDate(invoice.createdAt)}</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Due Date</p>
              <p className="font-medium text-slate-700">
                {invoice.dueDate ? formatDate(invoice.dueDate) : "—"}
              </p>
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Invoice ID</p>
              <p className="font-mono text-xs text-slate-500 mt-1 break-all">{invoice.id}</p>
            </div>
          </div>

          {/* Notes */}
          {invoice.notes && (
            <div className="px-8 py-5 border-b border-slate-100">
              <p className="text-xs text-slate-500 uppercase tracking-wide mb-2">Notes</p>
              <p className="text-slate-700 text-sm">{invoice.notes}</p>
            </div>
          )}

          {/* PDF section */}
          <div className="px-8 py-6">
            <p className="text-xs text-slate-500 uppercase tracking-wide mb-4">PDF Document</p>
            {invoice.pdfPath && invoice.pdfPath.startsWith("/uploads/") ? (
              <div className="space-y-4">
                <div className="border border-slate-200 rounded-xl bg-slate-50 h-64 flex flex-col items-center justify-center gap-3 text-slate-400">
                  <svg className="w-12 h-12 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                  <p className="text-sm">PDF preview available after upload</p>
                </div>
                <a
                  href={invoice.pdfPath}
                  download
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1B4F8A] text-white font-medium rounded-lg hover:bg-[#153d6e] transition-colors text-sm"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  Download PDF
                </a>
              </div>
            ) : (
              <div className="border border-dashed border-slate-300 rounded-xl p-8 text-center text-slate-400">
                <p className="text-sm">No PDF attached to this invoice yet.</p>
                <p className="text-xs mt-1">Please contact us if you need a copy.</p>
              </div>
            )}
          </div>
        </div>

        <p className="text-slate-400 text-xs mt-6 text-center">
          Questions? Contact us at{" "}
          <a href="mailto:billing@laredolifeline.com" className="text-[#1B4F8A] hover:underline">
            billing@laredolifeline.com
          </a>
        </p>
      </div>
    </div>
  );
}
