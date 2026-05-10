import { IoBagHandleOutline } from "react-icons/io5";

interface TopSellingCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
}

const TopSellingCard = ({
  image,
  title,
  description,
  price,
}: TopSellingCardProps) => {
  return (
    <div
      className="
        relative
        mt-20
        w-full
        max-w-[410px]
        h-[500px]
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
            M36 66

            Q66 18 144 30
            Q204 42 264 30
            Q342 18 372 66

            L372 408

            Q372 468 312 468

            L96 468

            Q36 468 36 408

            L36 96

            Q36 78 36 66
          "
          fill="#1A2418"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="2"
        />
      </svg>

      {/* Plant Image */}
      <div
        className="
          absolute
          -top-16
          left-1/2
          -translate-x-1/2
          w-[85%]
          max-w-[360px]
          z-10
        "
      >
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Content */}
      <div
        className="
          absolute
          bottom-12
          left-6
          right-6
          md:left-12
          md:right-12
          z-10
        "
      >
        {/* Title */}
        <h3
          className="
            text-white
            text-2xl
            md:text-[28px]
            font-medium
            leading-tight
          "
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="
            mt-4
            text-white/60
            text-sm
            leading-6
            line-clamp-3
          "
        >
          {description}
        </p>

        {/* Price + Button */}
        <div className="mt-8 flex items-center justify-between">
          <p
            className="
              text-white
              text-2xl
              md:text-[26px]
              font-medium
            "
          >
            {price}
          </p>

          <button
            className="
              w-12
              h-12
              rounded-xl
              border
              border-white/40
              flex
              items-center
              justify-center
              text-white
              text-2xl
              hover:bg-white/10
              transition
            "
          >
            <IoBagHandleOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopSellingCard;