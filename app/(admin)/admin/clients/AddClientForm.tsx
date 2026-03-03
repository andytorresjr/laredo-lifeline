"use client";

import { useState } from "react";

export default function AddClientForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch("/api/clients", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.get("name"),
        email: data.get("email"),
        password: data.get("password"),
        company: data.get("company"),
        phone: data.get("phone"),
      }),
    });

    setLoading(false);
    if (res.ok) {
      setSuccess(true);
      form.reset();
      // Refresh the page to show the new client
      window.location.reload();
    } else {
      const err = await res.json();
      setError(err.error ?? "Failed to create client.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {success && (
        <div className="px-3 py-2 bg-green-50 border border-green-200 text-green-700 text-sm rounded-lg">
          Client created successfully!
        </div>
      )}
      {error && (
        <div className="px-3 py-2 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg">
          {error}
        </div>
      )}

      {[
        { name: "name", label: "Contact Name", type: "text", required: true, placeholder: "Maria Rodriguez" },
        { name: "company", label: "Hospital / Facility Name", type: "text", required: false, placeholder: "Laredo Medical Center" },
        { name: "email", label: "Email (Login)", type: "email", required: true, placeholder: "billing@hospital.com" },
        { name: "phone", label: "Phone", type: "tel", required: false, placeholder: "(956) 555-0000" },
        { name: "password", label: "Temporary Password", type: "password", required: true, placeholder: "Min. 8 characters" },
      ].map((field) => (
        <div key={field.name}>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            {field.label}
            {field.required && <span className="text-red-500 ml-0.5">*</span>}
          </label>
          <input
            type={field.type}
            name={field.name}
            required={field.required}
            placeholder={field.placeholder}
            minLength={field.name === "password" ? 8 : undefined}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1B4F8A]"
          />
        </div>
      ))}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-2.5 bg-[#1B4F8A] text-white text-sm font-semibold rounded-lg hover:bg-[#153d6e] disabled:opacity-50 transition-colors"
      >
        {loading ? "Creating..." : "Create Client Account"}
      </button>
    </form>
  );
}
