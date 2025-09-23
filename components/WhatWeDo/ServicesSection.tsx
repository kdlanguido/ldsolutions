"use client";
import React from "react";
import { LayoutGrid, Cloud, Search, Headphones, Compass } from "lucide-react";

// Define the type for a single service item
interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// ServiceCard component is now type-safe
const ServiceCard: React.FC<ServiceItem> = ({ icon, title, description }) => {
  return (
    <div className="relative p-6 rounded-2xl overflow-hidden group">
      {/* Background and Border Effect */}
      <div className="absolute inset-0 bg-black rounded-2xl z-0 border border-transparent transition-all duration-300 group-hover:border-[#53EAFD]"></div>
      <div
        className="absolute inset-0 z-10 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          backgroundImage:
            "linear-gradient(45deg, rgba(83, 234, 253, 0.2), transparent, transparent, transparent)",
          maskImage:
            "linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.2))",
          backgroundPosition: "center",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col h-full">
        <div className="flex-grow flex flex-col justify-start">
          <div className="p-3 bg-white/10 rounded-full w-fit">{icon}</div>
          <h3 className="mt-4 text-xl font-bold">{title}</h3>
          <p className="mt-2 text-sm text-white/80 leading-relaxed">
            {description}
          </p>
        </div>
        <div className="mt-4 flex items-center text-sm font-medium text-white/80 group-hover:text-[#53EAFD] transition-colors duration-300">
          <span>SERVICE DETAILS</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

// ServicesSection component
const ServicesSection: React.FC = () => {
  const services: ServiceItem[] = [
    {
      icon: <LayoutGrid className="w-5 h-5" />,
      title: "App Development",
      description:
        "Slick, scalable, app-store-worthy beauties that work so well they make users whisper, “wait… is this a native app?” (It is.)",
    },
    {
      icon: <Cloud className="w-5 h-5" />,
      title: "Web Application",
      description:
        "We build websites that look like luxury, load like lightning, and don’t make your users rage-quit halfway through checkout.",
    },
    {
      icon: <Search className="w-5 h-5" />,
      title: "Web Maintenance",
      description:
        "We don’t disappear after launch. We keep your site fresh, fast, and freakishly secure. No glitches, no ghosting, no excuses.",
    },
    {
      icon: <Headphones className="w-5 h-5" />,
      title: "Customer Service",
      description:
        "Calls, chats, tickets—handled with speed, empathy, and precision, turning everyday support into experiences that stick like a smile you didn’t see coming.",
    },
    {
      icon: <Compass className="w-5 h-5" />,
      title: "Digital Marketing",
      description:
        "Omni-channel, AI-assisted, and fully human-powered. We don’t “boost posts.” We orchestrate full-blown visibility symphonies.",
    },
    {
      icon: <LayoutGrid className="w-5 h-5" />,
      title: "Social Media Management",
      description:
        "We make your feed not boring. Scroll-stoppers, inside jokes, spicy callouts—and a strategy engine behind it all that actually cares about ROI.",
    },
  ];

  return (
    <section className="bg-[#0A0A0A] py-20 px-4 sm:px-8 md:px-16 text-white font-inter">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="text-sm font-medium flex items-center mx-auto text-white/80 hover:text-[#53EAFD] transition-colors duration-300">
            <span>MORE DETAILS</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
