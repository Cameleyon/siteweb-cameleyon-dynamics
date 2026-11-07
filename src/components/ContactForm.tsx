"use client";

import { FormEvent, useState } from "react";
import type { ContactCopy } from "@/i18n/messages";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function ContactForm({ copy }: { copy: ContactCopy }) {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<string | null>(null);

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setStatus(copy.required);
      return;
    }

    setStatus(copy.received);
    setForm(initialState);
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid gap-5">
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          {copy.name}
          <input
            required
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="rounded-md border border-slate-300 px-3 py-2 text-slate-950 outline-none transition focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100"
            placeholder={copy.namePlaceholder}
            type="text"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          {copy.email}
          <input
            required
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="rounded-md border border-slate-300 px-3 py-2 text-slate-950 outline-none transition focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100"
            placeholder={copy.emailPlaceholder}
            type="email"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          {copy.subject}
          <input
            required
            value={form.subject}
            onChange={(event) => updateField("subject", event.target.value)}
            className="rounded-md border border-slate-300 px-3 py-2 text-slate-950 outline-none transition focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100"
            placeholder={copy.subjectPlaceholder}
            type="text"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          {copy.message}
          <textarea
            required
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            className="min-h-36 rounded-md border border-slate-300 px-3 py-2 text-slate-950 outline-none transition focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100"
            placeholder={copy.messagePlaceholder}
          />
        </label>
      </div>
      <button
        type="submit"
        className="mt-6 w-full rounded-md bg-indigo-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-800"
      >
        {copy.submit}
      </button>
      {status ? (
        <p className="mt-4 rounded-md bg-indigo-50 px-4 py-3 text-sm text-indigo-800" role="status">
          {status}
        </p>
      ) : null}
    </form>
  );
}
