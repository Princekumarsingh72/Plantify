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
        mt-30
        w-[85%]
        h-[320px]
        mx-auto
        rounded-[60px]
        border
        border-white/10
        bg-[#1A2418]/70
        backdrop-blur-md
        overflow-visible
        flex
        items-center
        px-16
        ${
          reverse
            ? "flex-row-reverse"
            : "flex-row"
        }
      `}
    >
      
           <div
        className={`
          absolute
          top-[-90px]
          z-20
          ${
            reverse
              ? "right-[40px]"
              : "left-[40px]"
          }
        `}
      >
        <img
          src={image}
          alt={title}
          className="
            w-[320px]
            h-[320px]
            object-contain
          "
        />
      </div>

            <div
        className={`
          w-[45%]
          z-10
          ${
            reverse
              ? "mr-auto text-left"
              : "ml-auto text-left"
          }
        `}
      >
        
                <h3 className="text-white text-[38px] font-semibold leading-tight">
          {title}
        </h3>

              <p className="mt-5 text-white/70 text-lg leading-8">
          {description}
        </p>
                          <p className="text-white text-[34px] font-medium">
            {price}
          </p>

       
          <div className="mt-8 flex items-center gap-5">
          <button
            className="
              px-8
              py-3
              rounded-xl
              border
              border-white/40
              text-white
              text-lg
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