"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import Link from "next/link";
import Counter from "@/components/ui/Counter";
import { ArrowRight, Linkedin, Instagram, Facebook } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <Image
        src="/back.jpg"
        alt="Background"
        fill
        className="object-cover -z-10"
      />

      {/* Hero content */}
      <section className="w-full flex flex-col items-start px-12 pt-40 max-w-4xl">
        <h1 className="text-6xl font-bold text-white drop-shadow-lg mb-6">
          Embrace a world where innovation meets precision.
        </h1>
        <p className="text-lg text-white drop-shadow-lg leading-relaxed">
          At Exere Corp, we don't just build software, we orchestrate symphonies of code, 
          weaving intricate solutions that resonate with brilliance. Every line of code is an ode 
          to digital magnificence. Let's embark on a journey of innovation together.
        </p>

        {/* Buttons + Social Icons */}
        <div className="mt-8 flex items-center space-x-6">
          <Link href="/contact">
            <Button variant="outline" size="lg" className="flex items-center gap-2 bg-slate-950">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>

          <div className="flex items-center space-x-4">
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

        {/* Stats Counters */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8  text-center">
          <Counter value={21} label="Projects Completed" />
          <Counter value={5} label="Years of Experience" />
          <Counter value={10} label="Technologies Mastered" />
          <Counter value={824} label="Support Hours" />
        </div>

      </section>
    </main>
  );
}
