"use client";

import { useState } from "react";

type Client = { id: string; name: string; company: string | null };

export default function AddInvoiceForm({ clients }: { clients: Client[] }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [uploadedPath, setUploadedPath] = useState("");
  const [uploading, setUploading] = useState(false);

  async function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch("/api/upload", { method: "POST", body: formData });
    setUploading(false);
    if (res.ok) {
      const { path } = await res.json();
      setUploadedPath(path);
    } else {
      setError("File upload failed.");
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch("/api/invoices", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: data.get("title"),
        amount: data.get("amount") ? parseFloat(data.get("amount") as string) : null,
        status: data.get("status"),
        dueDate: data.get("dueDate") || null,
        pdfPath: uploadedPath || "/uploads/placeholder.pdf",
        notes: data.get("notes"),
        userId: data.get("userId"),
      }),
    });

    setLoading(false);
    if (res.ok) {
      setSuccess(true);
      setUploadedPath("");
      form.reset();
      window.location.reload();
    } else {
      const err = await res.json();
      setError(err.error ?? "Failed to create invoice.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {success && (
        <div className="px-3 py-2 bg-green-50 border border-green-200 text-green-700 text-sm rounded-lg">
          Invoice created successfully!
        </div>
      )}
      {error && (
        <div className="px-3 py-2 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg">
          {error}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Client <span className="text-red-500">*</span>
        </label>
        <select
          name="userId"
          required
          className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1B4F8A]"
        >
          <option value="">Select a client...</option>
          {clients.map((c) => (
            <option key={c.id} value={c.id}>
              {c.company ?? c.name} ({c.name})
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Invoice Title <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="title"
          required
          placeholder="Emergency Transport — January 2025"
          className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4F8A]"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Amount ($)</label>
          <input
            type="number"
            name="amount"
            step="0.01"
            min="0"
            placeholder="0.00"
            className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4F8A]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Status</label>
          <select
            name="status"
            className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4F8A]"
          >
            <option value="PENDING">Pending</option>
            <option value="PAID">Paid</option>
            <option value="OVERDUE">Overdue</option>
            <option value="CANCELLED">Cancelled</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Due Date</label>
        <input
          type="date"
          name="dueDate"
          className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4F8A]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Notes</label>
        <textarea
          name="notes"
          rows={2}
          placeholder="Optional notes..."
          className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#1B4F8A]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">PDF File</label>
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileUpload}
          className="w-full text-sm text-slate-500 file:mr-3 file:py-1.5 file:px-3 file:border file:border-slate-300 file:rounded file:text-xs file:bg-slate-50 hover:file:bg-slate-100"
        />
        {uploading && <p className="text-xs text-slate-400 mt-1">Uploading...</p>}
        {uploadedPath && (
          <p className="text-xs text-green-600 mt-1">✓ Uploaded: {uploadedPath}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-2.5 bg-[#1B4F8A] text-white text-sm font-semibold rounded-lg hover:bg-[#153d6e] disabled:opacity-50 transition-colors"
      >
        {loading ? "Creating..." : "Create Invoice"}
      </button>
    </form>
  );
}
