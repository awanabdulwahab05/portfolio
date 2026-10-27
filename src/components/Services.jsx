
import { LuMonitor } from "react-icons/lu";
import { FaDatabase } from "react-icons/fa";
import { IoCodeSlashOutline } from "react-icons/io5";
import { FaArrowRight, FaCheck } from "react-icons/fa6";
import { motion } from "motion/react";

const Services = () => {
    const services = [
        {
            number: "01",
            title: "Frontend Development",
            icon: LuMonitor,
            description:
                "I build modern, responsive, and interactive user interfaces that provide a smooth experience across devices.",
            features: [
                "Next Js Development",
                "Responsive UI Design",
                "Tailwind CSS Styling",
            ],
        },
        {
            number: "02",
            title: "Full-Stack Development",
            icon: IoCodeSlashOutline,
            description:
                "I develop complete web applications by connecting intuitive frontend interfaces with reliable backend systems.",
            features: [
                "Next Js",
                "Node.js & Express.js",
                "REST API Integration",
            ],
        },
        {
            number: "03",
            title: "Backend & API Development",
            icon: FaDatabase,
            description:
                "I create server-side functionality and APIs to handle application data, authentication, and business logic.",
            features: [
                "RESTful APIs",
                "Database Integration",
                "Authentication Systems",
            ],
        },
    ];

    return (
        <section
            id="services"
            className="bg-[#0C0C0C] px-6 py-20 text-[#D7E2EA] md:px-12 lg:px-24"
        >
            <div className="mx-auto max-w-6xl">
                {/* Section Heading */}
                <div className="mb-14">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#9BA9B5]">
                        What I Can Do
                    </p>

                    <h2 className="text-4xl font-bold md:text-5xl">
                        My <span className="text-white">Services.</span>
                    </h2>

                    <div className="mt-5 h-1 w-20 rounded-full bg-[#D7E2EA]" />

                    <p className="mt-6 max-w-2xl leading-8 text-[#B8C3CC]">
                        I build practical web solutions that help turn ideas into
                        functional, responsive, and user-friendly digital experiences.
                    </p>
                </div>

                {/* Services Grid */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <div
                                key={service.number}
                                className="group relative overflow-hidden rounded-2xl
                border border-white/10 bg-[#141414] p-7
                shadow-lg shadow-black/20
                transition duration-300 hover:-translate-y-2
                hover:border-white/30 hover:shadow-xl"
                            >
                                {/* Decorative Number */}
                                <span
                                    className="absolute right-5 top-4 text-5xl
                font-extrabold text-white/10 transition duration-300
                group-hover:text-white/20"
                                >
                                    {service.number}
                                </span>

                                {/* Service Icon */}
                                <div
                                    className="mb-6 flex h-14 w-14 items-center
                  justify-center rounded-xl bg-[#292E33]
                  text-[#D7E2EA] transition duration-300
                  group-hover:bg-[#D7E2EA] group-hover:text-[#0C0C0C]"
                                >
                                    <Icon size={27} />
                                </div>

                                {/* Title */}
                                <h3 className="mb-3 text-xl font-bold text-white">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="mb-6 text-sm leading-7 text-[#B8C3CC]">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <ul className="mb-7 space-y-3">
                                    {service.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex items-center gap-3 text-sm
                      text-[#D7E2EA]"
                                        >
                                            <FaCheck
                                                size={17}
                                                className="shrink-0 text-[#9BA9B5]"
                                            />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* Contact Link */}
                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-2
                  font-semibold text-[#D7E2EA]
                  transition duration-300
                  group-hover:text-white"
                                >
                                    Discuss a Project
                                    <FaArrowRight
                                        size={18}
                                        className="transition-transform duration-300
                    group-hover:translate-x-1"
                                    />
                                </a>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
