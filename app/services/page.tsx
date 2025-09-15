import React from "react";
import { Code, Share2, Users, Headphones, Server, Search } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8 text-white" />,
      title: "Web Development",
      description:
        "We craft responsive, high-performance websites tailored to your business needs using the latest technologies.",
      color: "bg-blue-600",
    },
    {
      icon: <Share2 className="w-8 h-8 text-white" />,
      title: "API Development",
      description:
        "Our team builds secure and scalable APIs to seamlessly integrate your applications and services.",
      color: "bg-green-600",
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Consultation",
      description:
        "Get expert advice and strategies to optimize your IT infrastructure, workflow, and digital presence.",
      color: "bg-purple-600",
    },
    {
      icon: <Headphones className="w-8 h-8 text-white" />,
      title: "IT Support",
      description:
        "We provide reliable IT support to ensure smooth operation and minimal downtime for your business.",
      color: "bg-red-600",
    },
    {
      icon: <Server className="w-8 h-8 text-white" />,
      title: "ERP Systems",
      description:
        "Custom ERP solutions designed to streamline processes, improve efficiency, and enhance productivity.",
      color: "bg-yellow-500",
    },
    {
      icon: <Search className="w-8 h-8 text-white" />,
      title: "SEO",
      description:
        "Boost your online visibility with proven SEO strategies to rank higher and attract more customers.",
      color: "bg-pink-600",
    },
  ];

  return (
    <section className="bg-[#111827] px-6 sm:px-12 lg:px-20">
      <div className="text-center mb-12 pt-20 ">
        <h2 className="text-3xl font-bold text-blue-500">Services</h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          We provide a wide range of services to help your business grow,
          scale, and stay competitive in the digital landscape.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-[#1f2937] rounded-xl shadow hover:shadow-lg transition"
          >
            <div className={`${service.color} p-4 rounded-lg mb-4`}>
              {service.icon}
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {service.title}
            </h3>
            <p className="text-gray-400 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
