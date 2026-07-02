"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the form data to your backend or email service
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-md p-8 border border-pink-100 flex flex-col gap-6"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-pink-500 mb-1"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-pink-200 rounded focus:outline-none focus:ring-2 focus:ring-pink-200"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-pink-500 mb-1"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-pink-200 rounded focus:outline-none focus:ring-2 focus:ring-pink-200"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-pink-500 mb-1"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 border border-pink-200 rounded focus:outline-none focus:ring-2 focus:ring-pink-200"
        />
      </div>
      <button
        type="submit"
        className="bg-pink-200 hover:bg-pink-300 text-black font-semibold px-6 py-3 rounded-lg transition-colors"
      >
        Send Message
      </button>
      {submitted && (
        <div className="text-green-600 font-medium mt-2">
          Thank you! Your message has been sent.
        </div>
      )}
    </form>
  );
}
