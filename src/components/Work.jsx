
import { motion } from "motion/react";
import {
    IoLogoReact,
    IoLayers,
    IoLogoNodejs,
} from "react-icons/io5";
import {
    BiLogoTailwindCss,
    BiLogoMongodb,
} from "react-icons/bi";
import {
    FaServer,
    FaGithub,
    FaExternalLinkAlt,
} from "react-icons/fa";
import { GrJs } from "react-icons/gr";
import { RiGeminiFill } from "react-icons/ri";

const projects = [
    {
        title: "SkillMatch AI",
        description:
            "An AI-powered job analysis application that compares skills with job descriptions and identifies skill gaps and learning opportunities.",
        image: "/skillmatch.jpg",
        technologies: [
            { name: "React", icon: IoLogoReact },
            { name: "Tailwind CSS", icon: BiLogoTailwindCss },
            { name: "Node.js", icon: IoLogoNodejs },
            { name: "MongoDB", icon: BiLogoMongodb },
            { name: "Gemini", icon: RiGeminiFill },
        ],
        github: "https://github.com/awanabdulwahab05/skillmatch-ai-frontend",
        live: "https://skillmatch-ai-frontend-six.vercel.app/",
    },
    {
        title: "Field Flow",
        description:
            "A field technician management system where customers submit service requests, admins assign technicians, and technicians update service reports.",
        image: "/field-flow.jpg",
        technologies: [
            { name: "React", icon: IoLogoReact },
            { name: "Tailwind CSS", icon: BiLogoTailwindCss },
            { name: "Node.js", icon: IoLogoNodejs },
            { name: "Express", icon: GrJs },
            { name: "MongoDB", icon: BiLogoMongodb },
        ],
        github: "https://github.com/YOUR_USERNAME/YOUR_REPOSITORY",
        live: "https://field-flow-self.vercel.app/",
    },
];

const Work = () => {
    return (
        <section
            id="projects"
            className="bg-[#0C0C0C] px-6 py-20 text-[#D7E2EA] md:px-12 lg:px-24"
        >
            <div className="mx-auto max-w-6xl">
                {/* Section Heading */}
                <div className="mb-14">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#9BA9B5]">
                        Things I've Built
                    </p>

                    <h2 className="text-4xl font-bold md:text-5xl">
                        My <span className="text-white">Works.</span>
                    </h2>

                    <p className="mt-4 max-w-2xl leading-7 text-[#B8C3CC]">
                        Here are some projects I've built to practice my
                        skills and solve real-world problems.
                    </p>
                </div>

                {/* Projects Grid */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="grid gap-7 sm:grid-cols-2 lg:grid-cols-2"
                >
                    {projects.map((project) => (
                        <article
                            key={project.title}
                            className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#141414] shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:shadow-xl"
                        >
                            {/* Project Image */}
                            <div className="relative h-48 shrink-0 overflow-hidden bg-[#1C1C1C]">
                                <img
                                    src={project.image}
                                    alt={`${project.title} project preview`}
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/60 to-transparent" />
                            </div>

                            {/* Project Details */}
                            <div className="flex flex-1 flex-col p-6">
                                <h3 className="mb-3 text-xl font-bold text-white">
                                    {project.title}
                                </h3>

                                <p className="mb-5 text-sm leading-7 text-[#B8C3CC]">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="mb-6 flex flex-wrap gap-2">
                                    {project.technologies.map((technology) => {
                                        const TechnologyIcon = technology.icon;

                                        return (
                                            <span
                                                key={technology.name}
                                                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-[#1C1C1C] px-3 py-2 text-xs text-[#D7E2EA] transition duration-300 hover:border-white/30 hover:bg-[#292E33]"
                                            >
                                                <TechnologyIcon
                                                    size={16}
                                                    className="text-[#9BA9B5]"
                                                />
                                                <span>{technology.name}</span>
                                            </span>
                                        );
                                    })}
                                </div>

                                {/* Project Links */}
                                <div className="mt-auto flex flex-wrap items-center gap-4 border-t border-white/10 pt-5">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`View ${project.title} source code on GitHub`}
                                        className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-[#1C1C1C] px-4 py-2 font-semibold text-[#D7E2EA] transition hover:border-white/30 hover:bg-[#292E33]"
                                    >
                                        <FaGithub size={20} />
                                        <span>GitHub</span>
                                    </a>

                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`View ${project.title} live demo`}
                                            className="inline-flex items-center gap-2 rounded-lg bg-[#D7E2EA] px-4 py-2 font-semibold text-[#0C0C0C] transition hover:bg-white"
                                        >
                                            <FaExternalLinkAlt size={14} />
                                            <span>Live Demo</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Work;
