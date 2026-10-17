import {
    IoLogoHtml5,
    IoLogoCss3,
    IoCodeSlashOutline,
    IoLogoReact,
    IoLogoJavascript,
    IoLogoNodejs,
    IoGlobeOutline,
    IoLayers
} from "react-icons/io5"
import { BiLogoTailwindCss, BiLogoMongodb } from "react-icons/bi"
import { CiMobile3 } from "react-icons/ci"
import { LuMonitor } from "react-icons/lu"
import { FaDatabase, FaCheckCircle, FaWrench, FaNpm, FaGitAlt, FaGithub } from "react-icons/fa"
import { FaServer } from "react-icons/fa6"
import { GrJs } from "react-icons/gr";
import { VscVscode } from "react-icons/vsc"
import { motion } from "motion/react"



const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend Development",
            icon: LuMonitor,
            description: "Building responsive and interactive user interfaces.",
            skills: [
                { name: "HTML5", icon: IoLogoHtml5 },
                { name: "CSS3", icon: IoLogoCss3 },
                { name: "JavaScript", icon: IoLogoJavascript },
                { name: "React", icon: IoLogoReact },
                { name: "Tailwind CSS", icon: BiLogoTailwindCss },
                { name: "Responsive Design", icon: CiMobile3 },
            ],
        },
        {
            title: "Backend Development",
            icon: FaServer,
            description: "Creating APIs and server-side applications.",
            skills: [
                { name: "Node.js", icon: IoLogoNodejs },
                { name: "Express.js", icon: GrJs },
                { name: "REST APIs", icon: IoGlobeOutline },
                { name: "MongoDB", icon: BiLogoMongodb },
                { name: "Authentication", icon: FaCheckCircle },
                { name: "GitHub", icon: FaGithub },
            ],
        },
        // {
        //     title: "Database",
        //     icon: FaDatabase,
        //     description: "Managing application data and database operations.",
        //     skills: [
        //         
        //         { name: "Mongoose", icon: IoLayers },
        //     ],
        // },
        // {
        //     title: "Tools & Workflow",
        //     icon: FaWrench,
        //     description: "Tools I use to build and manage projects.",
        //     skills: [
        //         { name: "Git", icon: FaGitAlt },
        //         
        //         { name: "VS Code", icon: VscVscode },
        //         { name: "npm", icon: FaNpm },
        //     ],
        // },
    ];

    return (
        <section
            id="skill"
            className="bg-[#5ab4bf] px-6 py-20 text-[#F3FAF8] md:px-12 lg:px-24"
        >
            <div className="mx-auto max-w-6xl">
                {/* Section Heading */}
                <div className="mb-14">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#267089]">
                        What I Work With
                    </p>

                    <h2 className="text-4xl font-bold md:text-5xl">
                        My <span className="text-[#166b72]">Skills.</span>
                    </h2>
                </div>

                {/* Skills Grid */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.3 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="grid gap-7 sm:grid-cols-2">
                    {skillCategories.map((category) => {
                        const CategoryIcon = category.icon;

                        return (
                            <div
                                key={category.title}
                                className="group rounded-2xl border border-white/20
                bg-white/10 p-7 shadow-lg shadow-black/5
                backdrop-blur-xl transition duration-300
                hover:-translate-y-1 hover:border-violet-400/70
                hover:shadow-xl"
                            >
                                {/* Category Header */}
                                <div className="mb-5 flex items-start gap-4">
                                    <div
                                        className="flex h-12 w-12 shrink-0 items-center
                    justify-center rounded-xl bg-[#064B4A]
                    text-[#8DE5DE] transition duration-300
                    group-hover:bg-violet-400 group-hover:text-white"
                                    >
                                        <CategoryIcon size={24} />
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-white">
                                            {category.title}
                                        </h3>

                                        <p className="mt-2 text-sm leading-6 text-desc">
                                            {category.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Individual Skills */}
                                <div className="flex flex-wrap gap-3">
                                    {category.skills.map((skill) => {
                                        const SkillIcon = skill.icon;

                                        return (
                                            <span
                                                key={skill.name}
                                                className="inline-flex items-center gap-2
                        rounded-lg border border-[#21899F]/60
                        bg-[#064B4A]/80 px-3 py-2 text-sm
                        text-[#D5F5F0] transition duration-300
                        hover:border-violet-400 hover:bg-[#126B7A]"
                                            >
                                                <SkillIcon
                                                    size={15}
                                                    className="text-[#8DE5DE]"
                                                />
                                                {skill.name}
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </motion.div>


            </div>
        </section>
    );
};

export default Skills