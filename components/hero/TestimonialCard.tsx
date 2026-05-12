"use client";

export default function TestimonialCard() {
  return (
    <div
      className="
        w-full
        max-w-[320px]

        bg-white/5
        backdrop-blur-lg

        border
        border-white/20

        rounded-[40px]

        shadow-2xl

        text-white

        p-5
      "
    >

      {/* Top Section */}
      <div
        className="
          flex
          items-center
          gap-3
        "
      >

        <img
          className="
            rounded-full
            w-[55px]
            h-[55px]
            object-cover
            flex-shrink-0
          "
          src="/image/profile.jpg"
          alt="Profile"
        />

        <div className="min-w-0">

          <p
            className="
              text-xl
              sm:text-2xl
              font-semibold
              truncate
            "
          >
            Prince Singh
          </p>

          <div className="mt-1 text-[#FACC15] text-sm">
            ★ ★ ★ ★ ★
          </div>

        </div>
      </div>

      {/* Review */}
      <p
        className="
          mt-6

          text-base
          sm:text-lg

          leading-8

          text-white/90
        "
      >
        I can't express how thrilled I am with my new
        natural plants! They bring such a fresh and
        vibrant energy to my home.
      </p>

    </div>
  );
}