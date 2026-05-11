"use client";

import Button from "../common/Button";

export default function HeroBanner() {
  return (
    <div
      className="
        flex
        flex-col
        text-white
        max-w-[700px]
      "
    >
     
      <h1
        className="
          text-xl
          sm:text-7xl
          md:text-8xl
          lg:text-[100px]
          font-bold
          leading-none
        "
      >
        Earth’s Exhale
      </h1>

            <p
        className="
          mt-6
          text-sm
          sm:text-base
          md:text-lg
          lg:text-2xl
          text-white/80
          max-w-[600px]
          leading-relaxed
        "
      >
        "Earth Exhale" symbolizes the purity and vitality
        of the Earth's natural environment and its
        essential role in sustaining life.
      </p>

      <div
        className="
          mt-8
          flex
          flex-wrap
          items-center
          gap-4
        "
      >
        <Button />

        <button
          className="
            w-12
            h-12
            rounded-full
            border
            border-white
            flex
            items-center
            justify-center
            hover:bg-white
            hover:text-black
            transition
          "
        >
          ▶
        </button>

        <p className="text-sm sm:text-base">
          Play Demo
        </p>
      </div>
    </div>
  );
}