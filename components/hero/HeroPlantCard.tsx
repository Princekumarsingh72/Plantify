"use client";

export default function HeroPlantCard() {
  return (
    <div
      className="
        relative
        w-full
        max-w-[430px]
        h-[560px]
        mx-auto
      "
    >
      {/* SVG Shape */}
      <svg
        viewBox="0 0 410 500"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="
            M26 66

            Q36 18 144 30
            Q204 42 264 30
            Q362 15 372 56

            L382 408

            Q372 468 312 468

            L96 468

            Q36 468 26 418

            L26 106

            Q26 90 26 66
          "
          fill="rgba(0,0,0,0.25)"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="2"
        />
      </svg>

      <div
        className="
          absolute
          -top-12
          left-1/2
          -translate-x-1/2
          w-[90%]
          max-w-[360px]
          z-10
        "
      >
        <img
          src="/image/plants/aglaonema.png"
          alt="Aglaonema Plant"
          className="
            w-full
            h-auto
            object-contain
          "
        />
      </div>

           <div
        className="
          absolute
          bottom-10
          left-8
          right-8
          text-white
          z-10
        "
      >
      
        <p
          className="
            text-sm
            text-white/70
          "
        >
          Indoor Plant
        </p>

             <div
          className="
            mt-2
            flex
            items-center
            justify-between
            gap-4
          "
        >
          <h2
            className="
              text-3xl
              md:text-4xl
              font-medium
              leading-tight
            "
          >
            Aglaonema plant
          </h2>

          <span className="text-4xl text-white/80">
            ›
          </span>
        </div>

        <button
          className="
            mt-6
            px-8
            py-3
            border
            border-white
            rounded-xl
            text-lg
            hover:bg-white
            hover:text-black
            transition
          "
        >
          Buy Now
        </button>

               <div
          className="
            mt-8
            flex
            justify-center
            items-center
            gap-2
          "
        >
          <div className="w-6 h-1 rounded-full bg-white" />
          <div className="w-2 h-2 rounded-full bg-white/70" />
          <div className="w-2 h-2 rounded-full bg-white/70" />
        </div>
      </div>
    </div>
  );
}