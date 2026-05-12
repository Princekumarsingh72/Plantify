import HeroBanner from "./HeroBanner";
import HeroPlantCard from "./HeroPlantCard";
import TestimonialCard from "./TestimonialCard";

const HeroSection = () => {
  return (
    <section
      className="
        relative
        min-h-screen
        my-50

        overflow-hidden
      "
    >
      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-6
          lg:px-12
          min-h-screen
          grid
          grid-cols-1
          lg:grid-cols-[1.3fr_0.7fr]
          items-center
          gap-12
        "
      >
       
        <div className="relative">
          <HeroBanner />

          
          <div
            className="
              mt-20
              w-[50%]
              lg:bottom-0
              lg:left-0
            "
          >
            <TestimonialCard />
          </div>
        </div>

                <div
          className="
            flex
            justify-center
            lg:justify-end
          "
        >
          <HeroPlantCard />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;