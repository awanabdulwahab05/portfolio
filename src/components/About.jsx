import {
    IoCodeSlashOutline,
    IoBulbSharp,
    IoRocketOutline,
    IoLogoReact,
    IoLogoJavascript,
    IoLogoNodejs
} from "react-icons/io5"
import { GrJs } from "react-icons/gr";
import { BiLogoTailwindCss, BiLogoMongodb } from "react-icons/bi";
import { motion } from "motion/react";

const About = () => {
    const skills = [
        { name: "React", icon: IoLogoReact },
        { name: "JavaScript", icon: IoLogoJavascript },
        { name: "Tailwind CSS", icon: BiLogoTailwindCss },
        { name: "Node.js", icon: IoLogoNodejs },
        { name: "Express.js", icon: GrJs },
        { name: "MongoDB", icon: BiLogoMongodb },
    ];

    return (
        <section
            id="about"
            className="bg-[#5ab4bf] px-6 py-20 text-[#F3FAF8] md:px-12 lg:px-24"
        >
            <div className="mx-auto max-w-6xl">
                {/* Section Heading */}
                <div className="mb-12">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#267089]">
                        Get to know me
                    </p>

                    <h2 className="text-4xl font-bold md:text-5xl">
                        About <span className="text-[#166b72]">Me.</span>
                    </h2>

                    <div className="mt-5 h-1 w-20 rounded-full bg-[#267089]" />
                </div>

                {/* About Content */}
                <div className="grid items-center gap-12 md:grid-cols-2">
                    {/* Left Side - Visual */}
                    <motion.div
                        initial={{ opacity: 0, y: -40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.5 }}
                        transition={{ duration: 1.5 }}
                        className="relative">
                        <div className="absolute -left-3 -top-3 h-full w-full rounded-2xl border-2 border-[#26B8C4]" />

                        <div className="relative flex min-h-80 flex-col justify-between overflow-hidden rounded-2xl bg-linear-to-br from-[#21899F] via-[#126B7A] to-[#064B4A] p-8 md:min-h-95">
                            {/* Decorative Circles */}
                            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#8DE5DE]/10" />

                            <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-[#166b72]/10" />

                            <span className="relative text-sm font-medium uppercase tracking-widest text-[#8DE5DE]">
                                My Journey
                            </span>

                            <div className="relative">
                                <div className="mb-6 flex gap-3">
                                    <IoCodeSlashOutline
                                        size={28}
                                        className="text-[#8DE5DE]"
                                    />
                                    <IoBulbSharp
                                        size={28}
                                        className="text-[#8DE5DE]"
                                    />
                                    <IoRocketOutline
                                        size={28}
                                        className="text-[#8DE5DE]"
                                    />
                                </div>

                                <span className="mb-4 block text-5xl font-black text-white md:text-6xl">
                                    Code.
                                    <br />
                                    Create.
                                    <br />
                                    Innovate.
                                </span>

                                <p className="max-w-xs text-sm leading-6 text-[#D5F5F0]">
                                    Turning ideas into meaningful digital experiences.
                                </p>
                            </div>

                            {/* Decorative Indicators */}
                            <div className="relative mt-8 flex gap-2">
                                <span className="h-2 w-10 rounded-full bg-[#8DE5DE]" />
                                <span className="h-2 w-5 rounded-full bg-[#1d565a]" />
                                <span className="h-2 w-2 rounded-full bg-white" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side - Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ amount: 0.25 }}
                        transition={{ duration: 1.5 }}
                    >
                        <h3 className="mb-5 text-2xl font-bold leading-snug md:text-3xl">
                            Hi, I'm a{" "}
                            <span className="text-[#166b72]">
                                Full-Stack Developer
                            </span>{" "}
                            passionate about building for the web.
                        </h3>

                        <p className="mb-8 leading-8 text-desc">
                            I'm continuously learning, exploring new technologies, and
                            improving my skills through hands-on projects. My goal is to
                            create clean, maintainable, and useful solutions to real-world
                            problems.
                        </p>

                        {/* Technologies */}
                        <div className="mb-8">
                            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#267089]">
                                Technologies I work with
                            </h4>

                            <div className="flex flex-wrap gap-3">
                                {skills.map(({ name, icon: Icon }) => (
                                    <span
                                        key={name}
                                        className="inline-flex items-center gap-2 rounded-lg border border-[#21899F]/60 bg-[#064B4A] px-4 py-2 text-sm text-[#D5F5F0] transition duration-300 hover:border-violet-400 hover:bg-[#126B7A]"
                                    >
                                        <Icon
                                            size={16}
                                            className="text-[#8DE5DE]"
                                        />
                                        {name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;