import BirdAnimation from "./BirdAnimation";

const HeroSection = () => {
    return (
        <section className="relative w-full h-[70vh] sm:h-screen overflow-hidden">

            {/* Background Image */}
            {/* For Mobile */}
            <img src="/Mobile-bg.jpg"
                alt="img"
                fetchPriority="high"
                loading="eager"
                className="lg:hidden inset-0 w-full h-full object-cover object-center"
            />
            <img
                src="/Hero-bg.jpg"
                alt="Portfolio hero"
                fetchPriority="high"
                loading="eager"
                className="lg:absolute inset-0 w-full h-full object-cover object-center"
            />

            {/* Bird Animation */}
            <BirdAnimation />

        </section>
    );
};

export default HeroSection;