"use client";
import React from "react";
import { Lightbulb, Rocket, Users, Handshake } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start space-x-4 p-4 rounded-xl transition-transform duration-300 hover:scale-105">
      <div className="p-3 rounded-full bg-white/10 text-[#53EAFD] flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-bold text-white">{title}</h3>
        {description && (
          <p className="mt-1 text-sm text-white/70">{description}</p>
        )}
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Lightbulb />,
      title: "Engineering brilliance. Growth-obsessed execution. Zero fluff.",
      description:
        "We don't just tick boxes or deliver “solutions” (shudder). We show up like a partner who's in it with you—from those first chaotic whiteboard scribbles to the hell yeah, we launched high-five.",
    },
    {
      icon: <Rocket />,
      title:
        "You're not buying a service. You're recruiting a ride-or-die team who treats your product like it's our own mutant baby, obsessively nurtured, battle-tested, and built to crush KPIs and expectations alike.",
    },
    {
      icon: <Users />,
      title:
        "We don't do half-measures. We don't phone it in. We build. We adapt. We overdeliver. And we care—loudly.",
    },
    {
      icon: <Handshake />,
      title: "We create your TEAM, you take CONTROL.",
    },
  ];

  const stats = [
    {
      value: "35+",
      label: "HAPPY CLIENTS",
    },
    {
      value: "378+",
      label: "COMPLETED PROJECTS",
    },
    {
      value: "4.9+",
      label: "RATINGS",
    },
  ];

  return (
    <section className="bg-[#0A0A0A] text-white py-20 px-4 sm:px-8 md:px-16 lg:px-20 font-inter">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:space-x-12">
        <div className="lg:w-1/2">
          <p className="uppercase text-sm font-medium text-white/80 mb-2">
            ○ WHY CHOOSE US
          </p>
          <div className="space-y-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
          <div className="mt-8 flex items-center text-sm font-medium text-white/80 transition-colors duration-300 group hover:text-[#53EAFD]">
            <span>MORE ABOUT US</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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

        <div className="lg:w-1/2 mt-12 lg:mt-0 flex flex-col items-center">
          <div className="bg-white/10 rounded-2xl p-6 lg:p-8 w-full max-w-sm">
            <h4 className="text-xl font-bold text-white mb-4">
              Our Track Record
            </h4>
            <div className="grid grid-cols-3 gap-4 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <p className="text-3xl font-bold text-[#53EAFD]">
                    {stat.value}
                  </p>
                  <p className="text-xs uppercase text-white/70 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-4 text-sm text-center text-white/70 max-w-sm">
            We’re not just a team, we’re a force. And we’re ready to help you
            win.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
