"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Turnstile } from "@marsidev/react-turnstile";
import SectionWrapper from "./SectionWrapper";

const socialLinks = [
  {
    title: "GitHub",
    value: "github.com/Radok527",
    href: "https://github.com/Radok527",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/dennis-heyer-4a92a6332",
    href: "https://www.linkedin.com/in/dennis-heyer-4a92a6332",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0, 0, 0.58, 1] },
  },
};

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!turnstileToken) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, turnstileToken }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTurnstileToken(null);
    } catch {
      setStatus("error");
    }
  }

  return (
    <SectionWrapper
      id="contact"
      title="Kontakt"
      subtitle="So erreichst du mich"
      className="bg-black"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group flex flex-col items-center p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-green-500/50 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300"
            >
              <div className="text-gray-400 group-hover:text-green-400 transition-colors duration-200 mb-4">
                {link.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-green-400 transition-colors duration-200">
                {link.title}
              </h3>
              <p className="text-gray-500 text-sm group-hover:text-gray-300 transition-colors duration-200">
                {link.value}
              </p>
            </motion.a>
          ))}
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8"
        >
          <h3 className="text-xl font-semibold text-white mb-2">Schreib mir</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-name" className="sr-only">Name</label>
              <input
                id="contact-name"
                type="text"
                placeholder="Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="sr-only">E-Mail</label>
              <input
                id="contact-email"
                type="email"
                placeholder="E-Mail"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
              />
            </div>
          </div>
          <label htmlFor="contact-message" className="sr-only">Nachricht</label>
          <textarea
            id="contact-message"
            placeholder="Nachricht"
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors resize-none"
          />
          <Turnstile
            siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
            onSuccess={(token) => setTurnstileToken(token)}
            onError={() => setTurnstileToken(null)}
            onExpire={() => setTurnstileToken(null)}
          />
          <button
            type="submit"
            disabled={status === "sending" || !turnstileToken}
            className="bg-green-500 hover:bg-green-400 disabled:opacity-50 text-black font-semibold py-3 px-8 rounded-xl transition-colors duration-200"
          >
            {status === "sending" ? "Wird gesendet..." : "Nachricht senden"}
          </button>
          {status === "success" && (
            <p role="alert" className="text-green-400 text-sm text-center">Nachricht gesendet! Ich melde mich bald. 👍</p>
          )}
          {status === "error" && (
            <p role="alert" className="text-red-400 text-sm text-center">Etwas ist schiefgelaufen. Versuch es nochmal.</p>
          )}
        </motion.form>
      </div>
    </SectionWrapper>
  );
}