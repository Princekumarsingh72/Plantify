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
        mt-16 sm:mt-20
        w-full
        max-w-[340px]
        sm:max-w-[380px]
        md:max-w-[410px]
        h-[430px]
        sm:h-[470px]
        md:h-[500px]
        mx-auto
      "
    >
         <svg
        viewBox="0 0 410 500"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="
            M37 66

            Q50 5 120 30
            Q204 52 284 30
            Q362 2 372 60

            L372 408

            Q372 468 312 468

            L96 468

            Q36 468 36 408

            L36 96

            Q36 68 37 66
          "
          fill="#1A2418"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="2"
        />
      </svg>

          <div
        className="
          absolute
          -top-12 sm:-top-14 md:-top-16
          left-1/2
          -translate-x-1/2
          w-[75%]
          sm:w-[80%]
          md:w-[85%]
          z-10
        "
      >
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-contain"
        />
      </div>

      <div
        className="
        mx-3 my-3
          absolute
          bottom-6 sm:bottom-8 md:bottom-10
          left-5 right-5
          sm:left-7 sm:right-7
          md:left-10 md:right-10
          z-10
        "
      >
     
        <h3
          className="
            text-white
            text-[26px]
            sm:text-[32px]
            md:text-[28px]
            font-medium
            leading-6
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-3 sm:mt-4
            text-white/60
            text-sm sm:text-base
            leading-5
            line-clamp-3
          "
        >
          {description}
        </p>

        <div className="mt-6 sm:mt-4 flex items-center justify-between">
          <p
            className="
            
              text-white
              text-[20px]
              sm:text-[34px]
              md:text-[32px]
              
            "
          >
            {price}
          </p>

          <button
            className="
              w-10 h-10
              sm:w-10 sm:h-10
              rounded-xl
              border border-white/40
              flex items-center justify-center
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