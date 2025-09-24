import React from "react";
import Image from "next/image";
import { MdOutlineTerminal } from "react-icons/md";
import { FaRegCopy } from "react-icons/fa6";
import { RiNextjsLine } from "react-icons/ri";

type ServiceCardProps = {
    headerType?: "terminal" | "mac" | "dropdown" | "logo-header";
    headerTitle: string;
    title?: string | false;
    description: string | { heading: string; text: string }[];
    imageUrl: string;
    hasButton?: boolean;
    imagePosition?: "left" | "right" | "top" | false;
    imageSize?: string;
};

type Service = ServiceCardProps;

const ServiceCard: React.FC<ServiceCardProps> = ({
    headerType = "terminal",
    headerTitle,
    title,
    description,
    imageUrl,
    hasButton = false,
    imagePosition = "left",
    imageSize = "md:w-1/3",
}) => {
    const imageDiv = (
        <div className={`${imageSize} relative h-50`}>
            <Image
                src={imageUrl}
                alt="Service image"
                fill
                className="object-cover"
                loading="lazy"
            />
        </div>
    );

    const isTop = imagePosition === "top";
    const isQuote = headerTitle === "Quotes";

    const containerClasses = isTop
        ? "flex flex-col"
        : "flex flex-col md:flex-row";

    const renderHeader = () => {
        switch (headerType) {
            case "mac":
                return (
                    <div className="bg-[#1C1C1D] px-3 py-2 flex items-center gap-2">
                        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    </div>
                );
            case "dropdown":
                return (
                    <div className="bg-[#1C1C1D] px-4 py-2 flex justify-between items-center">
                        <span className="text-white font-medium">{headerTitle}</span>
                        <button className="flex items-center gap-2 border px-3 py-1 rounded-md shadow-sm">
                            <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
                            <span className="text-sm text-white">Acme App</span>
                            <span className="text-white">▼</span>
                        </button>
                    </div>
                );
            case "logo-header":
                return (
                    <div className="bg-[#1C1C1D] px-4 py-2.5 flex justify-between items-center">
                        <span className="text-white font-medium">{headerTitle}</span>
                        <button className="flex items-center gap-2 border px-3 py-1 rounded-md shadow-sm">
                            <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
                            <span className="text-sm text-white">Deploy</span>
                            <span className="text-white"><RiNextjsLine /></span>
                        </button>
                    </div>
                );
            default:
                return (
                    <div className="bg-[#1C1C1D] px-4 py-2 border-b flex items-center justify-between">
                        <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                            <MdOutlineTerminal className="text-lg" />
                            {headerTitle}
                        </h4>
                        <FaRegCopy className="text-gray-300 cursor-pointer hover:text-white transition" />
                    </div>
                );
        }
    };

    return (
        <div className="bg-[#111111] border rounded-lg overflow-hidden">
            {renderHeader()}
            <div className={containerClasses}>
                {imagePosition === "left" && imageDiv}
                {imagePosition === "top" && imageDiv}

                <div className="p-5 flex flex-col justify-center">
                    {title && <h3 className="font-semibold text-lg">{title}</h3>}

                    {Array.isArray(description) ? (
                        <ol className="relative border-l border-gray-700 mt-4 space-y-6">
                            {description.map((item, idx) => (
                                <li key={idx} className="ml-4 relative">
                                    <div className="absolute -left-5.5 mt-2 w-3 h-3 bg-[#1400AA] rounded-full border border-gray-900"></div>
                                    <h4 className="text-white font-semibold">{item.heading}</h4>
                                    <p className="text-sm text-gray-400 mt-1">{item.text}</p>
                                </li>
                            ))}
                        </ol>
                    ) : isQuote ? (
                        <div>
                            <blockquote className="border-l-4 border-[#1400AA] pl-4 italic text-gray-300">
                                “{description.split("Mark Heath")[0].trim()}”
                            </blockquote>
                            <p className="mt-5 text-sm text-gray-400 font-medium">
                                — King Dranreb Languido, CEO / Sr. Software Engineer, Lazy Developers
                            </p>
                        </div>
                    ) : (
                        <p className="mt-2 text-sm text-gray-400">{description}</p>
                    )}

                    {hasButton && (
                        <button className="mt-4 px-4 py-2 text-sm font-medium text-white bg-[#1400AA] rounded hover:bg-indigo-700 transition">
                            Learn more
                        </button>
                    )}
                </div>

                {imagePosition === "right" && imageDiv}
            </div>
        </div>
    );
};

const ServicesSection: React.FC = () => {
    const services: Service[] = [
        {
            headerType: "dropdown",
            headerTitle: "Discovery",
            title: false,
            description:
                "We solve your challenges by listening and adapting to your organisation, working with you to draw a picture of your business needs.",
            imageUrl: "/assets/services/img-4.webp",
            hasButton: true,
            imagePosition: "right",
            imageSize: "md:w-2/3",
        },
        {
            headerType: "terminal",
            headerTitle: "Problem Solving",
            title: "Uncovering, owning and solving business problems",
            description:
                "We are passionate about solving business problems through carefully considered strategy and design. It’s all about adding value for your clients by making sure everything works now and in the future. ",
            imageUrl: "/assets/services/img-2.webp",
            imageSize: "md:w-3/4",
            imagePosition: "left",
        },
        {
            headerType: "terminal",
            headerTitle: "Process Design",
            title: "Designing optimised business processes",
            description:
                "We accelerate your proposition with a mixture of brand, product design, strategy and market thinking to turn ideas into reality.",
            imageUrl: "/assets/services/img-3.webp",
            hasButton: false,
            imagePosition: "left",
            imageSize: "md:w-2/4",
        },
        {
            headerType: "mac",
            headerTitle: "Join our newsletter",
            title: "Join our discord server",
            description:
                "Stay connected with us in real time and be the first to explore our latest digital products, exclusive resources, and upcoming webinars. Our Discord server also provides a space for meaningful discussions, networking with industry professionals, and gaining valuable insights to help you stay ahead in the digital landscape.",
            imageUrl: "/assets/services/img-5.webp",
            hasButton: true,
            imagePosition: "right",
            imageSize: "md:w-3/2",
        },
        {
            headerType: "logo-header",
            headerTitle: "Our principles",
            title: false,
            description: [
                {
                    heading: "Evidence based",
                    text: "We define solutions and align stakeholders based on evidence gained through our discovery process, research and extensive market experience."
                },
                {
                    heading: "User-Centric",
                    text: "To deliver real value, we design and develop solutions around the needs and experience of your users."
                },
                {
                    heading: "Fail fast, learn fast",
                    text: "Our rigorous target audience testing quickly uncovers issues with the strategy or design so we can iterate new and improved solutions."
                },
                {
                    heading: "Brand experience",
                    text: "Our strategy and design development keeps your brand experience at the forefront, enhancing the perception of your brand."
                },
                {
                    heading: "Market positioned",
                    text: "We take a strategic, research-led approach to managing change that accelerates your product launch and delivers market-leading outcomes."
                },
                {
                    heading: "Proven and tested",
                    text: "The ideas we pursue are grounded in evidence. We test these ideas and benchmark their success through thorough testing, regularly and iteratively."
                }
            ],
            imageUrl: "/assets/services/img-4.png",
            hasButton: false,
            imagePosition: false,
            imageSize: "h-20",
        },
        {
            headerType: "mac",
            headerTitle: "Quotes",
            title: false,
            description:
                "Having a true expert by your side at the planning stage is critical but a partner’s real worth is tested when it comes to execution. 6point6 has blasted through with flying colours. Mark Heath Founder, Open Borders Direct",
            imageUrl: "/assets/services/uiux.png",
            hasButton: false,
            imagePosition: false,
        },
    ];

    return (
        <section className="bg-[#111111] [background-image:radial-gradient(rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:20px_20px] text-[#E9EAEC] py-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="text-left">
                    <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight">Strategy & design</h1>
                    <p className="mt-3 text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim ve
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 text-[#E9EAEC]">
                    <div className="lg:col-span-2 flex flex-col gap-9">
                        {services.slice(0, 4).map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}
                    </div>
                    <div className="flex flex-col gap-10">
                        {services.slice(4, 6).map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
