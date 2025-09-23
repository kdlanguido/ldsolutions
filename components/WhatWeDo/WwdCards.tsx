import React from "react";
import ElectricBorder from "../ElectricBorder";
import {
  Globe,
  Smartphone,
  Search,
  Workflow,
  Wrench,
  Palette,
} from "lucide-react";

type Service = {
  title: string;
  desc: string;
  button: string;
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    title: "Web Development",
    desc: "We build fast, modern, and responsive websites tailored to your business needs.",
    button: "Learn More",
    icon: <Globe className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400" />,
  },
  {
    title: "Mobile App Development",
    desc: "Our design team crafts beautiful and user-friendly interfaces that delight users.",
    button: "Explore",
    icon: <Smartphone className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400" />,
  },
  {
    title: "SEO Optimization",
    desc: "Boost your website's visibility on search engines and attract more customers.",
    button: "Get Started",
    icon: <Search className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400" />,
  },
  {
    title: "System Integration",
    desc: "We connect systems and workflows to help your business run smoothly.",
    button: "Learn More",
    icon: <Workflow className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400" />,
  },
  {
    title: "Web Maintenance",
    desc: "We keep your website up-to-date and secure so you can focus on your business.",
    button: "Explore",
    icon: <Wrench className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400" />,
  },
  {
    title: "UI/UX Design",
    desc: "Beautiful, user-centered designs that improve engagement and usability.",
    button: "Get Started",
    icon: <Palette className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400" />,
  },
];

// ✅ Small memoized card component
const ServiceCard = React.memo(function ServiceCard({
  title,
  desc,
  button,
  icon,
}: Service) {
  return (
    <ElectricBorder
      color="#7df9ff"
      speed={1}
      chaos={0.5}
      thickness={2}
      style={{
        borderRadius: 16,
        padding: 20,
        minHeight: 320,
      }}
    >
      <div className="flex flex-col items-center text-center gap-4">
        {icon}
        <h3 className="text-lg sm:text-xl font-bold">{title}</h3>
        <p className="opacity-80 text-sm sm:text-base">{desc}</p>
        <button className="mt-4 px-4 py-2 bg-cyan-400 text-black rounded-lg font-semibold hover:bg-cyan-300 transition">
          {button}
        </button>
      </div>
    </ElectricBorder>
  );
});

function WwdCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  );
}

export default WwdCards;
