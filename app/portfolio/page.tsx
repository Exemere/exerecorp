// app/portfolio/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

type WorkItem = {
  title: string;
  category: string;
  imgSrc: string;
  link: string;
};

const works: WorkItem[] = [
  {
    title: "An eCommerce Platform",
    category: "Ecommerce ",
    imgSrc: "public/delux.png",
    link: "https://delux.rf.gd",
  },
  {
    title: "Loan platform",
    category: "Fintech",
    imgSrc: "public/loan.png",
    link: "https://exerecorp.rf.gd/",
  },
  {
    title: "Travel Booking platform",
    category: "Booking",
    imgSrc: "public/travel.png",
    link: "https://luxair.rf.gd/",
  },
  {
    title: "IT Support",
    category: "Support",
    imgSrc: "/works/digital-marketing.jpg",
    link: "https://example.com/marketing",
  },
  {
    title: "Cloud Engineering",
    category: "Cloud",
    imgSrc: "/works/seo-services.jpg",
    link: "https://example.com/seo",
  },
  {
    title: "Product Design",
    category: "Design",
    imgSrc: "/works/product-design.jpg",
    link: "https://example.com/product",
  },
];

export default function PortfolioPage() {
  return (
    <section className="bg-[#0f172a] text-white py-20 px-6 sm:px-12 lg:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-500">Portfolio</h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          We’ve worked on a variety of projects across different domains. Here are some of our
          recent works showcasing our capabilities and creativity.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {works.map((work, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden rounded-lg shadow-lg"
          >
            {/* Image */}
            <div className="w-full h-[150px] sm:h-[1900px] lg:h-[230px] relative">
              <Image
                src={work.imgSrc}
                alt={work.title}
                fill
                className="object-cover rounded-lg transform group-hover:scale-105 transition duration-500"
              />

              {/* Overlay with Button */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <Link
                  href={work.link}
                  target="_blank"
                  className="px-5 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition"
                >
                  Live Preview
                </Link>
              </div>
            </div>

            {/* Text */}
            <div className="p-6">
              <span className="text-sm text-blue-500">{work.category}</span>
              <h3 className="text-xl font-semibold text-white mt-2">
                {work.title}
              </h3>
              <p className="text-gray-400 mt-2 text-sm">
               </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
