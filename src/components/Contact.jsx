
import { useState, useRef } from "react";
import { motion } from "motion/react";
import {
    FaEnvelope,
    FaPaperPlane,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { IoIosMail } from "react-icons/io";
import {
    FaSquareGithub,
    FaWhatsapp,
    FaInstagram,
    FaLinkedin,
} from "react-icons/fa6";

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const form = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.current || isSending) return;

        setIsSending(true);
        setErrorMessage("");

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                }
            );

            setSubmitted(true);
            form.current.reset();
        } catch (error) {
            console.error("EmailJS error:", error);
            setErrorMessage(
                "Failed to send your message. Please try again."
            );
        } finally {
            setIsSending(false);
        }
    };

    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-[#0C0C0C] px-4 py-24 text-[#D7E2EA] sm:px-6 md:px-12 lg:px-20"
        >
            {/* Background decoration */}
            <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-white/[0.04] blur-3xl" />
            <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#9BA9B5]/[0.08] blur-3xl" />

            <div className="relative mx-auto max-w-7xl">
                {/* Section heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.2 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="mb-14 text-center"
                >
                    <span className="mb-4 inline-block rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 text-sm font-medium text-[#D7E2EA] backdrop-blur-md">
                        Let's Connect
                    </span>

                    <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                        Have a Project in Mind?
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#B8C3CC] md:text-lg">
                        Have an idea or need a website? Let's discuss your project
                        and turn your ideas into reality.
                    </p>
                </motion.div>

                <div className="grid gap-8 lg:grid-cols-2">
                    {/* Contact information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ amount: 0.2 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="min-w-0 rounded-3xl border border-white/10 bg-[#141414] p-5 shadow-xl backdrop-blur-xl sm:p-8 md:p-10"
                    >
                        <h3 className="text-2xl font-bold text-white">
                            Let's Talk
                        </h3>

                        <p className="mt-4 leading-7 text-[#B8C3CC]">
                            I'm always interested in discussing new projects,
                            creative ideas, and opportunities to build useful
                            web applications.
                        </p>

                        <div className="mt-8 space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="rounded-xl bg-[#292E33] p-3 text-[#D7E2EA]">
                                    <IoIosMail size={22} />
                                </div>

                                <div className="min-w-0">
                                    <p className="text-sm text-[#9BA9B5]">
                                        Email
                                    </p>
                                    <a
                                        href="mailto:awanabdulwahab05@gmail.com"
                                        className="break-all font-medium text-[#D7E2EA] transition hover:text-white"
                                    >
                                        awanabdulwahab05@gmail.com
                                    </a>
                                </div>
                            </div>

                            <a
                                href="https://github.com/awanabdulwahab05"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 rounded-xl transition hover:bg-white/[0.05]"
                            >
                                <div className="rounded-xl bg-[#292E33] p-3 text-[#D7E2EA]">
                                    <FaSquareGithub size={22} />
                                </div>

                                <div>
                                    {/* <p className="text-sm text-[#9BA9B5]">GitHub Repository</p> */}
                                    <p className="font-medium text-[#D7E2EA]">
                                        GitHub
                                    </p>
                                </div>
                            </a>

                            {/* <a
                                href="https://www.linkedin.com/in/your-name/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 rounded-xl transition hover:bg-white/[0.05]"
                            >
                                <div className="rounded-xl bg-[#292E33] p-3 text-[#D7E2EA]">
                                    <FaLinkedin size={22} />
                                </div>

                                <div>
                                    <p className="font-medium">Linkedin</p>
                                </div>
                            </a> */}
                        </div>

                        <div className="my-8 h-px bg-white/10" />

                        <p className="mb-4 font-semibold text-white">
                            Connect with me
                        </p>

                        <div className="flex gap-4">
                            <a
                                href="mailto:awanabdulwahab05@gmail.com"
                                aria-label="Send me an email"
                                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#1C1C1C] text-[#D7E2EA] transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-[#292E33] hover:text-white"
                            >
                                <FaEnvelope size={21} />
                            </a>

                            <a
                                href="https://wa.me/923328924421"
                                aria-label="Contact me"
                                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#1C1C1C] text-[#D7E2EA] transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-[#292E33] hover:text-white"
                            >
                                <FaWhatsapp size={21} />
                            </a>

                            <a
                                href="https://www.instagram.com/awan.abd.al.wahab/"
                                aria-label="Contact me"
                                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#1C1C1C] text-[#D7E2EA] transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-[#292E33] hover:text-white"
                            >
                                <FaInstagram size={21} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ amount: 0.2 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="min-w-0 rounded-3xl border border-white/10 bg-[#141414] p-5 shadow-xl backdrop-blur-xl sm:p-8 md:p-10"
                    >
                        <h3 className="text-2xl font-bold text-white">
                            Send a Message
                        </h3>

                        <p className="mt-3 text-[#B8C3CC]">
                            Fill out the form below and tell me about your project.
                        </p>

                        {submitted ? (
                            <div className="mt-8 rounded-2xl border border-white/10 bg-[#1C1C1C] p-6">
                                <h4 className="text-xl font-bold text-white">
                                    Thank you!
                                </h4>
                                <p className="mt-2 text-[#B8C3CC]">
                                    Your message has been sent successfully.
                                    I'll get back to you soon.
                                </p>

                                <button
                                    onClick={() => {
                                        setSubmitted(false);
                                        setErrorMessage("");
                                    }}
                                    className="mt-5 font-semibold text-[#D7E2EA] underline underline-offset-4 transition hover:text-white"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form
                                ref={form}
                                onSubmit={handleSubmit}
                                className="mt-8 space-y-5"
                            >
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="mb-2 block text-sm font-medium text-[#D7E2EA]"
                                    >
                                        Your Name
                                    </label>
                                    <input
                                        id="name"
                                        name="from_name"
                                        type="text"
                                        placeholder="Enter your name"
                                        required
                                        className="w-full rounded-xl border border-white/10 bg-[#1C1C1C] px-4 py-3 text-white outline-none placeholder:text-[#9BA9B5] transition focus:border-[#9BA9B5] focus:ring-2 focus:ring-white/10"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="mb-2 block text-sm font-medium text-[#D7E2EA]"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        id="email"
                                        name="from_email"
                                        type="email"
                                        placeholder="Enter your email"
                                        required
                                        className="w-full rounded-xl border border-white/10 bg-[#1C1C1C] px-4 py-3 text-white outline-none placeholder:text-[#9BA9B5] transition focus:border-[#9BA9B5] focus:ring-2 focus:ring-white/10"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="subject"
                                        className="mb-2 block text-sm font-medium text-[#D7E2EA]"
                                    >
                                        Subject
                                    </label>
                                    <input
                                        id="subject"
                                        name="subject"
                                        type="text"
                                        placeholder="What is your project about?"
                                        required
                                        className="w-full rounded-xl border border-white/10 bg-[#1C1C1C] px-4 py-3 text-white outline-none placeholder:text-[#9BA9B5] transition focus:border-[#9BA9B5] focus:ring-2 focus:ring-white/10"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="mb-2 block text-sm font-medium text-[#D7E2EA]"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        placeholder="Tell me about your project..."
                                        required
                                        className="w-full resize-none rounded-xl border border-white/10 bg-[#1C1C1C] px-4 py-3 text-white outline-none placeholder:text-[#9BA9B5] transition focus:border-[#9BA9B5] focus:ring-2 focus:ring-white/10"
                                    />
                                </div>

                                {errorMessage && (
                                    <p
                                        role="alert"
                                        className="text-sm font-medium text-red-300"
                                    >
                                        {errorMessage}
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSending}
                                    className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#D7E2EA] px-6 py-4 font-semibold text-[#0C0C0C] transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {isSending ? "Sending..." : "Send Message"}
                                    <FaPaperPlane
                                        size={18}
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
