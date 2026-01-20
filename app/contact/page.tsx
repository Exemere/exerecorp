"use client";

import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import { Linkedin, Instagram, Facebook, Twitter } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch {
      setStatus("❌ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
    <main className="relative min-h-screen flex items-center justify-center bg-slate-900 text-white px-6 py-16">
      <div className="max-w-6xl w-full grid md:grid-cols-5 gap-10">

        {/* Left Column - Info */}
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="text-gray-300">
            Ready to Get Started? At Exere Corp, we’re always here to help.  
            Fill out the form and we’ll respond promptly.
          </p>

          <div className="space-y-4 bg-white/10 rounded-2xl backdrop-blur-md shadow-lg p-6">
            {/* Address */}
            <div className="flex items-start space-x-3">
              <MapPin className="text-blue-400 w-6 h-6" />
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-gray-300 text-sm">
                   Eastern Bypass ,
                   Benedicta Utawala
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-3">
              <Phone className="text-blue-400 w-6 h-6" />
              <div>
                <p className="font-semibold">Call Us</p>
                <p className="text-gray-300 text-sm">+254706086950</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-3">
              <Mail className="text-blue-400 w-6 h-6" />
              <div>
                <p className="font-semibold">Email Us</p>
                <p className="text-gray-300 text-sm">exerecorp@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-8">
              <Link href="https://X.com" target="_blank">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-black transition py-4">
                <Twitter className="w-5 h-5 text-white" />
              </div>
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-blue-600 transition">
                <Linkedin className="w-5 h-5 text-white" />
              </div>
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-pink-500 transition">
                <Instagram className="w-5 h-5 text-white" />
              </div>
            </Link>
            <Link href="https://facebook.com" target="_blank">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-blue-500 transition">
                <Facebook className="w-5 h-5 text-white" />
              </div>
            </Link>
          </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="md:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="bg-white/10 rounded-2xl backdrop-blur-md shadow-lg p-8 space-y-6"
          >
            {/* Name + Email */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-lg p-3 bg-white/20 text-white placeholder-gray-400 outline-none"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg p-3 bg-white/20 text-white placeholder-gray-400 outline-none"
                required
              />
            </div>

            {/* Phone + Subject */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-lg p-3 bg-white/20 text-white placeholder-gray-400 outline-none"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full rounded-lg p-3 bg-white/20 text-white placeholder-gray-400 outline-none"
              />
            </div>

            {/* Message */}
            <textarea
              name="message"
              placeholder="Type your message"
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-lg p-3 bg-white/20 text-white placeholder-gray-400 outline-none h-32"
              required
            />

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && <p className="text-center mt-2">{status}</p>}
          </form>
        </div>
        
      </div>
      
    </main>
      <footer className="bg-slate-900 text-white">
        <div className="container mx-auto px-6 py-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} ExereCorp. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
