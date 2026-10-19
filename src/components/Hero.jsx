
import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const navLinks = ["About", "Skills", "Projects", "Services", "Contact"];

const fadeIn = (delay = 0, y = 20) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.8,
    delay,
    ease: [0.22, 1, 0.36, 1],
  },
});

function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
}) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 150,
    damping: 18,
    mass: 0.2,
  });

  const springY = useSpring(y, {
    stiffness: 150,
    damping: 18,
    mass: 0.2,
  });

  const handleMouseMove = (event) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = event.clientX - centerX;
    const distanceY = event.clientY - centerY;

    if (
      Math.abs(distanceX) < rect.width / 2 + padding &&
      Math.abs(distanceY) < rect.height / 2 + padding
    ) {
      setActive(true);
      x.set(distanceX / strength);
      y.set(distanceY / strength);
    } else {
      setActive(false);
      x.set(0);
      y.set(0);
    }
  };

  const handleMouseLeave = () => {
    setActive(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative"
      style={{
        padding: 0,
        touchAction: "pan-y",
      }}
    >
      <motion.div
        style={{
          x: springX,
          y: springY,
          transition: active
            ? activeTransition
            : inactiveTransition,
          willChange: "transform",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

function ContactButton() {
  return (
    <motion.a
      href="mailto:hello@example.com"
      {...fadeIn(0.5, 20)}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className="group relative z-20 flex shrink-0 items-center gap-3
        rounded-full border border-white/25 bg-white px-5 py-3
        text-sm font-medium uppercase tracking-wide text-black
        transition-colors duration-300 hover:bg-textcolor
        sm:px-7 sm:py-4 sm:text-base"
    >
      Let's Talk
      <span className="flex h-8 w-8 items-center justify-center
        rounded-full bg-black text-white transition-transform
        duration-300 group-hover:rotate-45">
        <FiArrowUpRight size={19} />
      </span>
    </motion.a>
  );
}

export default function Hero() {
  return (
    <main
      id="home"
      className="hero-section relative flex h-screen min-h-[650px]
        flex-col overflow-x-clip overflow-y-hidden bg-mbg
        text-textcolor selection:bg-textcolor
        selection:text-mbg"
    >
      {/* Navbar */}
      <motion.nav
        {...fadeIn(0, -20)}
        aria-label="Main navigation"
        className="relative z-30 flex w-full items-center
          justify-between px-6 pt-6 md:px-10 md:pt-8"
      >
        <a
          href="#home"
          className="hidden md:inline-block font-black uppercase tracking-tight text-white
            text-xl sm:text-2xl md:text-3xl"
        >
          Hi<span className="text-2bg">,</span>
        </a>

        <div className="flex items-center gap-5 sm:gap-8 md:gap-12">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[10px] font-medium uppercase
                tracking-wider transition-opacity duration-200
                hover:opacity-70 sm:text-sm md:text-lg
                lg:text-[1.4rem]"
            >
              {link}
            </a>
          ))}
        </div>
      </motion.nav>

      {/* Hero heading */}
      <div className="relative z-0 mt-6 w-full overflow-hidden
        sm:mt-4 md:-mt-5">
        <motion.h1
          {...fadeIn(0.15, 40)}
          className="hero-heading w-full whitespace-nowrap
            text-center font-black uppercase leading-none
            tracking-tight text-[14vw] sm:text-[15vw]
            md:text-[16vw] lg:text-[14vw]"
        >
          I&apos;m Wahab
        </motion.h1>
      </div>

      {/* Portrait */}
      <motion.div
        {...fadeIn(0.6, 30)}
        className="absolute left-1/2 top-1/2 z-10
          w-[280px] -translate-x-1/2 -translate-y-1/2
          sm:top-auto sm:bottom-0 sm:w-[360px]
          sm:translate-y-0 md:w-[440px] lg:w-[520px]"
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          <img
            src="/Face.png"
            alt="Wahab, 3D creator"
            draggable="false"
            className="pointer-events-none block h-auto w-full
              select-none object-contain"
          />
        </Magnet>
      </motion.div>

      {/* Bottom content */}
      <div className="relative z-20 mt-auto flex w-full
        items-end justify-between gap-4 px-6 pb-7
        sm:px-10 sm:pb-8 md:pb-10">

        <motion.p
          {...fadeIn(0.35, 20)}
          className="max-w-[160px] text-[clamp(0.75rem,1.4vw,1.5rem)]
            font-light uppercase leading-snug tracking-wide
            sm:max-w-[220px] md:max-w-[260px]"
        >
          A 3D creator driven by crafting striking and
          unforgettable projects.
        </motion.p>

        <ContactButton />
      </div>
    </main>
  );
}
