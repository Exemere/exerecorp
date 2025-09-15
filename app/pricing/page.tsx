import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { plans } from "@/lib/pricing";

export default function PricingPage() {
  return (
    <section className="bg-[#0f172a] text-white py-20 px-6 sm:px-12 lg:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold">Our Packages</h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Affordable, scalable, and reliable solutions tailored to your business needs.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className="bg-gray-900 border border-gray-800 rounded-xl shadow-lg p-8 flex flex-col hover:scale-105 transition"
          >
            {/* Plan Name & Price */}
            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
            <p className="text-2xl font-extrabold text-blue-500 mb-6">
              {plan.price}
            </p>

            {/* Features */}
            <ul className="space-y-3 text-gray-300 flex-1">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-blue-500 mr-2">✔</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
          <Link href={`/contact?plan=${plan.name}`}>
            <button className="mt-6 w-full flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-white font-medium hover:bg-slate-800 transition border border-white/20">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
