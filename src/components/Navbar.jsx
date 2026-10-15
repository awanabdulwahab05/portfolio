import { delay } from "motion";
import Hamburger from "./Hamburger";
import { motion } from "motion/react";

const Navbar = () => {
    const links = [
        { name: "About", href: "#about" },
        { name: "Skill", href: "#skill" },
        { name: "Works", href: "#works" },
        { name: "Services", href: "#services" },
        { name: "Contact", href: "#contact" },
    ];

    // Motion variants for the navigation links
    const navLinksVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const navLinkVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.6,
                duration: 1,
                ease: "easeOut",
            },
        },
    };

    return (
        <motion.nav
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: 0.5,
                ease: "easeOut",
            }}
            className="fixed top-4 md:top-1 left-1/2 -translate-x-1/2 z-50
      w-[92%] max-w-6xl rounded-2xl
      border border-white/20
      bg-white/10 backdrop-blur-xl
      shadow-lg shadow-black/5"
        >
            <div

                className="flex items-center justify-between px-5 py-4"
            >
                {/* Logo */}
                <motion.a
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    href="#home"
                    className="text-xl sm:text-2xl font-bold tracking-tight
          text-white whitespace-nowrap"
                >
                    <span className="text-white">&lt;/&gt;</span>{" "}
                    Abd al Wahab
                </motion.a>

                {/* Navigation Links */}
                <motion.div
                    variants={navLinksVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="hidden md:flex items-center gap-6 lg:gap-8"
                >
                    {links.map((link) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            variants={navLinkVariants}
                            className="text-sm font-medium text-white
              hover:nav-underline transition-colors duration-300"
                        >
                            {link.name}
                        </motion.a>
                    ))}
                </motion.div>

                {/* Mobile Menu */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    className="md:hidden">
                    <Hamburger />
                </motion.div>
            </div>
        </motion.nav>
    );
};

export default Navbar;