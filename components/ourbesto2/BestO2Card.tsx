"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BestO2Plants() {
  return (
    <section className="w-full bg-[#0B1409] py-14 sm:py-16 overflow-hidden">

      {/* Heading */}
      <div className="flex justify-center mb-10 px-4">

        <h4
          className="
            relative
            inline-block
            text-white
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-semibold
            px-6
            sm:px-8
            py-3
          "
        >

          {/* Left Bottom Corner */}
          <span
            className="
              absolute
              left-0
              bottom-0
              w-8
              h-8
              sm:w-10
              sm:h-10
              border-l-[4px]
              border-b-[4px]
              border-[#B6A400]
              rounded-bl-2xl
            "
          />

          {/* Right Top Corner */}
          <span
            className="
              absolute
              right-0
              top-0
              w-8
              h-8
              sm:w-10
              sm:h-10
              border-r-[4px]
              border-t-[4px]
              border-[#B6A400]
              rounded-tr-2xl
            "
          />

          Our Best O2
        </h4>
      </div>

      <div className="max-w-7xl mx-auto px-4">

        <div
          className="
            relative
           overflow-visible

            rounded-[35px]
            lg:rounded-[50px]

            border
            border-white/10

            bg-white/5
            backdrop-blur-md

            px-6
            sm:px-8
            lg:px-14

            py-10
            lg:py-14
          "
        >


          {/* Main Content */}
          <div
            className="
              relative
              flex
              flex-col
              lg:flex-row

              items-center
              gap-10
            "
          >

            {/* Image */}
            {/* Image */}
<div
  className="
    relative

    flex-1
    flex
    justify-center
    items-center

    w-full
    lg:min-h-[500px]
  "
>
  <Image
    src="/image/plants/aglaonema.png"
    alt="Plant"
    width={350}
    height={550}
    priority
    className="
      object-contain

      w-full
      max-w-[240px]

      sm:max-w-[340px]

      md:max-w-[450px]

      lg:max-w-[520px]

      h-auto

      drop-shadow-2xl

      lg:absolute
      
      xl:-left-20
      

      lg:top-1/3
      lg:-translate-y-1/2

      scale-110
      lg:scale-[1.25]
    "
  />
</div>

            {/* Content */}
            <div
              className="
                flex-1
                text-white
                w-full
                max-w-xl
              "
            >

              <h3
                className="
                  text-3xl
                  sm:text-4xl
                  lg:text-3xl

                  font-semibold
                  leading-tight

                  mb-6

                  text-center
                  lg:text-left
                "
              >
                We Have Small And Best O2 Plants Collection’s
              </h3>

              <p
                className="
                  text-white/70

                  text-sm
                  sm:text-base
                  lg:text-lg

                  leading-7
                  lg:leading-8

                  mb-5

                  text-center
                  lg:text-left
                "
              >
                Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.
              </p>

              <p
                className="
                  text-white/70

                  text-sm
                  sm:text-base
                  lg:text-lg

                  leading-7
                  lg:leading-8

                  mb-8

                  text-center
                  lg:text-left
                "
              >
                Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.
              </p>

              {/* Bottom Area */}
              <div
                className="
                  flex
                  flex-col
                  sm:flex-row

                  items-center
                  justify-between

                  gap-6
                "
              >

                {/* Button */}
                <button
                  className="
                    border
                    border-white/30

                    px-8
                    py-3

                    rounded-xl

                    text-sm
                    sm:text-base

                    hover:bg-white
                    hover:text-black

                    transition-all
                    duration-300
                  "
                >
                  Explore
                </button>

                {/* Slider Controls */}
                <div className="flex items-center gap-5">

                  <ChevronLeft
                    className="
                      w-5
                      h-5
                      text-white/40
                      cursor-pointer
                      hover:text-white
                      transition
                    "
                  />

                  <span className="text-sm text-white/80">
                    01/04
                  </span>

                  <ChevronRight
                    className="
                      w-5
                      h-5
                      text-white/80
                      cursor-pointer
                      hover:text-white
                      transition
                    "
                  />

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8 sm:mt-10">

          <div className="w-3 h-3 rounded-full bg-white"></div>

          <div className="w-2 h-2 rounded-full bg-white/40 mt-[2px]"></div>

          <div className="w-2 h-2 rounded-full bg-white/40 mt-[2px]"></div>

        </div>
      </div>
    </section>
  );
}