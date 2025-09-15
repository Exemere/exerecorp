"use client";
import React, { JSX, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const tabContent: Record<string, JSX.Element> = {
    profile: (
      <>
        <p className="text-gray-300 leading-relaxed mb-4">
              At <span className="font-semibold text-blue-400">Exere Corp</span>, 
              our profile reflects a commitment to innovation, precision, and excellence.  
              We are a technology-driven company specializing in crafting robust software 
              solutions tailored to meet the evolving needs of businesses.  
              With a team of skilled developers, designers, and strategists, we transform 
              ideas into impactful digital products that empower organizations to thrive 
              in a rapidly changing world.  
              Our portfolio spans across industries, showcasing solutions that are scalable, 
              secure, and designed for long-term success.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Every project is a journey of excellence, crafted with a dedication to
          quality and impact.
        </p>
      </>
    ),
    vision: (
      <>
        <p className="text-gray-300 leading-relaxed">
          At <span className="font-semibold text-blue-400">Exere Corp</span>, our vision 
          is to redefine how technology empowers people and businesses.  
          We aspire to be a global leader in delivering intelligent, scalable, and sustainable 
          digital solutions that don’t just solve today’s challenges but anticipate the needs 
          of tomorrow.  
          <br /><br />
          We envision a future where innovation bridges the gap between people and possibilities, 
          creating seamless experiences that transform industries, accelerate growth, and make 
          technology accessible to everyone. By constantly pushing boundaries, we aim to set 
          new standards of excellence in the digital landscape.
        </p>

        <p className="text-gray-300 leading-relaxed">
          We aim to empower businesses and individuals through technology.
        </p>
      </>
    ),
    history: (
      <>
          <p className="text-gray-300 leading-relaxed">
          <span className="font-semibold text-blue-400">Exere Corp</span> was founded in 2020 
          with a clear mission — to build innovative and reliable software solutions that 
          empower businesses to thrive in the digital era.  
          <br /><br />
          What started as a small team of passionate developers and visionaries has since 
          grown into a dynamic technology company recognized for its creativity, precision, 
          and customer-first approach.  
          <br /><br />
          Over the years, we have successfully delivered impactful projects across multiple 
          industries, earning trust and long-term partnerships. While our journey began only 
          a few years ago, our rapid growth and continuous pursuit of excellence highlight 
          our commitment to shaping the future of technology.
        </p>
      </>
    ),
  };

  return (
    <section className="bg-[#0f172a] text-white pt-24 pb-12 px-6">
     <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-6 px-0 items-start">
        {/* Image Section */}
        <div className=" md:col-span-2 relative w-full max-w-md h-[500px] rounded-lg overflow-hidden  ">
          <Image
            src="/about.jpg"
            alt="About Us"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>

        {/* Text Section */}
        <div className="md:col-span-3">
          <h6 className="mb-2 block text-lg font-semibold text-blue-500">
            About Us
          </h6>
        <Link href="/" className="flex items-center pt-2 pb-4">
          <Image
            src="/logo2.png"
            alt="ExereCorp"
            width={200}
            height={100}
            className="object-contain"
          />
        </Link>
          {/* Tab Buttons */}
          <div className="flex space-x-4 mb-6">
            {["profile", "vision", "history"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-lg transition ${
                  activeTab === tab
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-white hover:bg-gray-800"
                }`}
              >
                {tab === "profile"
                  ? "Our Profile"
                  : tab === "vision"
                  ? "Our Vision"
                  : "Our History"}
              </button>
            ))}
          </div>

          {/* Tab Content with animation */}
          <div className="min-h-[120px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                {tabContent[activeTab]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
