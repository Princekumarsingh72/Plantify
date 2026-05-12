import { IoBagHandleOutline } from "react-icons/io5";

interface TrendyCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  reverse?: boolean;
}

const TrendyCard = ({
  image,
  title,
  description,
  price,
  reverse = false,
}: TrendyCardProps) => {
  return (
    <div
      className={`
        relative
        mt-32
        w-[90%]
        lg:w-[85%]

        min-h-[700px]
        lg:min-h-[320px]

        mx-auto

        rounded-[40px]
        lg:rounded-[60px]

        border
        border-white/10

        bg-[#1A2418]/70
        backdrop-blur-md

        overflow-visible

        flex
        flex-col
        lg:items-center

        px-6
        py-10

        lg:px-16
        lg:py-0

        ${
          reverse
            ? "lg:flex-row-reverse"
            : "lg:flex-row"
        }
      `}
    >

      {/* Plant Image */}
      <div
        className={`
          relative
          lg:absolute
          lg:top-[-90px]

          z-20

          flex
          justify-center

          w-full
          lg:w-auto

          mb-8
          lg:mb-0

          ${
            reverse
              ? "lg:right-[40px]"
              : "lg:left-[40px]"
          }
        `}
      >
        <img
          src={image}
          alt={title}
          className="
            w-[220px]
            h-[220px]

            sm:w-[260px]
            sm:h-[260px]

            lg:w-[320px]
            lg:h-[320px]

            object-contain
          "
        />
      </div>

      {/* Content */}
      <div
        className={`
          w-full
          lg:w-[55%]

          z-10

          text-center
          lg:text-left

          ${
            reverse
              ? "lg:mr-auto"
              : "lg:ml-auto"
          }
        `}
      >

        <h3
          className="
            text-white

            text-3xl
            sm:text-4xl
            lg:text-[38px]

            font-semibold
            leading-tight
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-5

            text-white/70

            text-base
            sm:text-lg

            leading-7
            lg:leading-8
          "
        >
          {description}
        </p>

        <p
          className="
            mt-5

            text-white

            text-3xl
            sm:text-4xl
            lg:text-[34px]

            font-medium
          "
        >
          {price}
        </p>

        {/* Buttons */}
        <div
          className="
            mt-8

            flex
            items-center

            justify-center
            lg:justify-start

            gap-5
          "
        >
          <button
            className="
              px-6
              sm:px-8

              py-3

              rounded-xl

              border
              border-white/40

              text-white

              text-base
              sm:text-lg

              hover:bg-white/10
              transition
            "
          >
            Explore
          </button>

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

export default TrendyCard;