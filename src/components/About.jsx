
import {
    IoCodeSlashOutline,
    IoBulbSharp,
    IoRocketOutline,
    IoLogoReact,
    IoLogoJavascript,
    IoLogoNodejs
} from "react-icons/io5";
import { GrJs } from "react-icons/gr";
import { RiNextjsLine } from "react-icons/ri";
import { BsTypescript } from "react-icons/bs";
import { BiLogoTailwindCss } from "react-icons/bi";
import { motion } from "motion/react";

const About = () => {
    const skills = [
        { name: "Next.JS", icon: RiNextjsLine },
        { name: "React", icon: IoLogoReact },
        { name: "JavaScript", icon: IoLogoJavascript },
        { name: "TypeScript", icon: BsTypescript },
        { name: "Tailwind CSS", icon: BiLogoTailwindCss },
        { name: "Node.js", icon: IoLogoNodejs },
        { name: "Express.js", icon: GrJs },
    ];

    return (
        <section
            id="about"
            className="bg-mbg px-6 py-20 text-textcolor md:px-12 lg:px-24"
        >
            <div className="mx-auto max-w-6xl">
                {/* Section Heading */}
                <div className="mb-12">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-2bg">
                        Get to know me
                    </p>

                    <h2 className="text-4xl font-bold md:text-5xl">
                        About <span className="text-white">Me.</span>
                    </h2>

                    <div className="mt-5 h-1 w-20 rounded-full bg-textcolor" />
                </div>

                {/* About Content */}
                <div className="grid items-center gap-12 md:grid-cols-2">
                    {/* Left Side - Visual */}
                    <motion.div
                        initial={{ opacity: 0, y: -40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.5 }}
                        transition={{ duration: 1.5 }}
                        className="relative"
                    >
                        <div className="absolute -left-3 -top-3 h-full w-full rounded-2xl border-2 border-[#687580]" />

                        <div className="relative flex min-h-80 flex-col justify-between overflow-hidden rounded-2xl bg-linear-to-br from-[#30363D] via-[#1C2228] to-[#101214] p-8 md:min-h-95">
                            {/* Decorative Circles */}
                            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/5" />

                            <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-2bg/10" />

                            <span className="relative text-sm font-medium uppercase tracking-widest text-2bg">
                                My Journey
                            </span>

                            <div className="relative">
                                <div className="mb-6 flex gap-3">
                                    <IoCodeSlashOutline
                                        size={28}
                                        className="text-textcolor"
                                    />
                                    <IoBulbSharp
                                        size={28}
                                        className="text-textcolor"
                                    />
                                    <IoRocketOutline
                                        size={28}
                                        className="text-textcolor"
                                    />
                                </div>

                                <span className="mb-4 block text-5xl font-black text-white md:text-6xl">
                                    Code.
                                    <br />
                                    Create.
                                    <br />
                                    Innovate.
                                </span>

                                <p className="max-w-xs text-sm leading-6 text-[#B8C3CC]">
                                    Turning ideas into meaningful digital experiences.
                                </p>
                            </div>

                            {/* Decorative Indicators */}
                            <div className="relative mt-8 flex gap-2">
                                <span className="h-2 w-10 rounded-full bg-textcolor" />
                                <span className="h-2 w-5 rounded-full bg-[#687580]" />
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
                            <span className="text-white">
                                Full-Stack Developer
                            </span>{" "}
                            passionate about building for the web.
                        </h3>

                        <p className="mb-8 leading-8 text-[#B8C3CC]">
                            I build responsive, user-friendly websites and web applications
                            with modern frontend interfaces and backend
                            functionality.
                        </p>

                        {/* Technologies */}
                        <div className="mb-8">
                            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-2bg">
                                Technologies I work with
                            </h4>

                            <div className="flex flex-wrap gap-3">
                                {skills.map(({ name, icon: Icon }) => (
                                    <span
                                        key={name}
                                        className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-[#17191C] px-4 py-2 text-sm text-textcolor transition duration-300 hover:border-textcolor/60 hover:bg-[#292E33]"
                                    >
                                        <Icon
                                            size={16}
                                            className="text-textcolor"
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
