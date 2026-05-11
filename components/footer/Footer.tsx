"use client";

import { Sprout } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#071607] text-white py-14">
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          grid
          grid-cols-1
          md:grid-cols-3
          gap-12
        "
      >
               <div className="space-y-6">
      
          <div className="flex items-center gap-3">
            <div
              className="
                w-10
                h-10
                rounded-full
                bg-lime-400/20
                flex
                items-center
                justify-center
              "
            >
              <Sprout className="text-lime-400 w-6 h-6" />
            </div>

            <h2 className="text-3xl font-semibold">
              FloraVision.
            </h2>
          </div>

          <p className="text-white/70 leading-7 max-w-sm">
            "From lush indoor greens to vibrant outdoor blooms,
            our plants are crafted to thrive and elevate your
            living environment."
          </p>

                    <div className="flex gap-8 pt-4">
            <button className="font-semibold hover:text-lime-400 transition">
              FB
            </button>

            <button className="font-semibold hover:text-lime-400 transition">
              TW
            </button>

            <button className="font-semibold hover:text-lime-400 transition">
              LI
            </button>
          </div>
        </div>

      
        <div className="space-y-5">
          <h3 className="text-xl font-semibold">
            Quick Link’s
          </h3>

          <div className="flex flex-col gap-3 text-white/70">
            <a
              href="#"
              className="hover:text-lime-400 transition"
            >
              Home
            </a>

            <a
              href="#"
              className="hover:text-lime-400 transition"
            >
              Type’s Of plant’s
            </a>

            <a
              href="#"
              className="hover:text-lime-400 transition"
            >
              Contact
            </a>

            <a
              href="#"
              className="hover:text-lime-400 transition"
            >
              Privacy
            </a>
          </div>
        </div>

              <div className="space-y-6">
          <h3 className="text-xl font-semibold">
            For Every Update.
          </h3>

         
          <div
            className="
              flex
              items-center
              border
              border-white/40
              rounded-md
              overflow-hidden
              max-w-md
            "
          >
            <input
              type="email"
              placeholder="Enter Email"
              className="
                flex-1
                bg-transparent
                px-4
                py-3
                outline-none
                text-sm
                placeholder:text-white/50
              "
            />

            <button
              className="
                bg-white
                text-black
                text-xs
                sm:text-sm
                font-semibold
                px-5
                py-3
                hover:bg-lime-400
                transition
              "
            >
              SUBSCRIBE
            </button>
          </div>

          <p className="text-white/60 text-sm pt-10">
            FloraVision © all right reserve
          </p>
        </div>
      </div>
    </footer>
  );
}