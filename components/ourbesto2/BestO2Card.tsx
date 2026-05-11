"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BestO2Plants() {
  return (
    <section className="w-full bg-[#071607] py-14 sm:py-16 overflow-hidden">

      <div className="flex justify-center mb-10 px-4">
        <div className="relative inline-block">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold">
            Our Best O2
          </h2>

          <div className="absolute -bottom-2 left-0 w-8 h-[2px] bg-lime-400 rounded-full"></div>

          <div className="absolute top-1 right-[-10px] w-[2px] h-8 sm:h-10 bg-lime-400"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div
          className="
            relative
            overflow-hidden
            rounded-[30px]
            sm:rounded-[40px]
            border
            border-white/10
            bg-white/5
            backdrop-blur-md
            px-5
            sm:px-8
            lg:px-12
            py-8
            sm:py-10
          "
        >

          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_left,rgba(101,255,79,0.18),transparent_45%)]
            "
          />

          <div
            className="
    relative
    flex-1
    flex
    justify-center
    items-center
  "
          >

            <div className="flex-1 flex justify-center items-center w-full">
              <Image
                src="/image/plants/aglaonema.png"
                alt="Plant"
                width={650}
                height={650}
                priority
                className="
      object-contain
      w-full
      max-w-[280px]
      sm:max-w-[380px]
      md:max-w-[500px]
      lg:max-w-[650px]
      h-auto
      drop-shadow-2xl
      lg:-ml-24
      xl:-ml-32
      scale-110
    "
              />
            </div>

            <div className="flex-1 text-white w-full max-w-xl">
              <h3
                className="
                  text-2xl
                  sm:text-3xl
                  lg:text-4xl
                  font-semibold
                  leading-snug
                  mb-5
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
                  leading-6
                  sm:leading-7
                  mb-4
                  text-center
                  lg:text-left
                "
              >
                Oxygen-producing plants, often referred to as
                "O2 plants," are those that release oxygen into
                the atmosphere through the process of
                photosynthesis.
              </p>

              <p
                className="
                  text-white/70
                  text-sm
                  sm:text-base
                  leading-6
                  sm:leading-7
                  mb-8
                  text-center
                  lg:text-left
                "
              >
                Many plants can help filter out pollutants and
                toxins from the air, such as formaldehyde,
                benzene, and trichloroethylene. This makes the
                air cleaner and healthier to breathe.
              </p>

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
                <button
                  className="
                    border
                    border-white/30
                    px-7
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

                <div className="flex items-center gap-5">
                  <ChevronLeft className="w-5 h-5 text-white/40 cursor-pointer hover:text-white transition" />

                  <span className="text-sm text-white/80">
                    01/04
                  </span>

                  <ChevronRight className="w-5 h-5 text-white/80 cursor-pointer hover:text-white transition" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8 sm:mt-10">
          <div className="w-3 h-3 rounded-full bg-white"></div>

          <div className="w-2 h-2 rounded-full bg-white/40 mt-[2px]"></div>

          <div className="w-2 h-2 rounded-full bg-white/40 mt-[2px]"></div>
        </div>
      </div>
    </section>
  );
}