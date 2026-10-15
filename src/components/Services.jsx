import { LuMonitor } from "react-icons/lu"
import { FaDatabase } from "react-icons/fa"
import { IoCodeSlashOutline } from "react-icons/io5"
import { FaArrowRight, FaCheck } from "react-icons/fa6"
import { motion } from "motion/react"


const Services = () => {

    const services = [
        {
            number: "01",
            title: "Frontend Development",
            icon: LuMonitor,
            description:
                "I build modern, responsive, and interactive user interfaces that provide a smooth experience across devices.",
            features: [
                "React.js Development",
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
                "React Frontend",
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
                "MongoDB Integration",
                "Authentication Systems",
            ],
        },
        // {
        //     number: "04",
        //     title: "Responsive Web Design",
        //     icon: Smartphone,
        //     description:
        //         "I make websites adapt to different screen sizes while maintaining usability, consistency, and visual appeal.",
        //     features: [
        //         "Mobile-Friendly Layouts",
        //         "Cross-Device Compatibility",
        //         "Clean UI Components",
        //     ],
        // },
        // {
        //     number: "05",
        //     title: "Website Optimization",
        //     icon: Rocket,
        //     description:
        //         "I focus on improving website performance, maintainability, and the overall experience for users.",
        //     features: [
        //         "Reusable Components",
        //         "Code Organization",
        //         "Performance Improvements",
        //     ],
        // },
        // {
        //     number: "06",
        //     title: "Website Maintenance",
        //     icon: Code2,
        //     description:
        //         "I help improve existing websites by fixing issues, updating components, and adding useful functionality.",
        //     features: [
        //         "Bug Fixes",
        //         "Feature Updates",
        //         "UI Improvements",
        //     ],
        // },
    ];

    return (
        <section
            id="services"
            className="bg-[#5ab4bf] px-6 py-20 text-[#F3FAF8] md:px-12 lg:px-24"
        >
            <div className="mx-auto max-w-6xl">
                {/* Section Heading */}
                <div className="mb-14">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#267089]">
                        What I Can Do
                    </p>

                    <h2 className="text-4xl font-bold md:text-5xl">
                        My <span className="text-[#166b72]">Services.</span>
                    </h2>

                    <div className="mt-5 h-1 w-20 rounded-full bg-[#267089]" />

                    <p className="mt-6 max-w-2xl leading-8 text-desc">
                        I build practical web solutions that help turn ideas into
                        functional, responsive, and user-friendly digital experiences.
                    </p>
                </div>

                {/* Services Grid */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.4 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <div
                                key={service.number}
                                className="group relative overflow-hidden rounded-2xl
                border border-white/20 bg-white/10 p-7
                shadow-lg shadow-black/5 backdrop-blur-xl
                transition duration-300 hover:-translate-y-2
                hover:border-violet-400/70 hover:shadow-xl"
                            >
                                {/* Decorative Number */}
                                <span className="absolute right-5 top-4 text-5xl
                font-extrabold text-white/10 transition duration-300
                group-hover:text-violet-300/30">
                                    {service.number}
                                </span>

                                {/* Service Icon */}
                                <div
                                    className="mb-6 flex h-14 w-14 items-center
                  justify-center rounded-xl bg-[#064B4A]
                  text-[#8DE5DE] transition duration-300
                  group-hover:bg-violet-400 group-hover:text-white"
                                >
                                    <Icon size={27} />
                                </div>

                                {/* Title */}
                                <h3 className="mb-3 text-xl font-bold text-white">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="mb-6 text-sm leading-7 text-desc">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <ul className="mb-7 space-y-3">
                                    {service.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex items-center gap-3 text-sm
                      text-[#D5F5F0]"
                                        >
                                            <FaCheck
                                                size={17}
                                                className="shrink-0 text-[#8DE5DE]"
                                            />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* Contact Link */}
                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-2
                  font-semibold text-[#064B4A]
                  transition duration-300
                  group-hover:text-violet-100"
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
        </section >
    );
};

export default Services