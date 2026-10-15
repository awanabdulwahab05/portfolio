import BirdAnimation from "./BirdAnimation";

const HeroSection = () => {
    return (
        <section className="relative w-full h-[70vh] sm:h-screen overflow-hidden">

            {/* Background Image */}
            {/* For Mobile */}
            <img src="/Mobile-bg.png"
                alt="img"
                className="lg:hidden inset-0 w-full h-full object-cover object-center"
            />
            <img
                src="/Hero-bg.jpg"
                alt="Hero background"
                className="lg:absolute inset-0 w-full h-full object-cover object-center"
            />

            {/* Bird Animation */}
            <BirdAnimation />

        </section>
    );
};

export default HeroSection;