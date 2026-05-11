interface ReviewCardProps {
  image: string;
  name: string;
  review: string;
}

const ReviewCard = ({
  image,
  name,
  review,
}: ReviewCardProps) => {
  return (
    <div className="relative w-[320px] h-[320px]">
     
      <svg
        viewBox="0 0 340 320"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        
        <path
          d="
            M25 45

            Q30 1 100 20
            Q180 35 245 18
            Q310 2 315 45

            L315 250

            Q315 290 280 290

            L60 290

            Q25 290 25 250

            L25 70

            Q25 25 25 60
          "
          fill="#1A2418"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="2"
        />
      </svg>

      <div className="relative z-10 px-10 pt-14">
     
        <div className="flex items-center gap-4">
          
             <img
            src={image}
            alt={name}
            className="w-[55px] h-[55px] rounded-full object-cover"
          />

          <div>
            <h3 className="text-white text-[20px] font-semibold">
              {name}
            </h3>

            <div className="mt-1 text-[#FACC15] text-sm">
              ★ ★ ★ ★ ★
            </div>
          </div>

        </div>

        <p className="mt-10 text-white/70 text-sm leading-6 line-clamp-5 max-w-[240px]">
          {review}
        </p>

      </div>
    </div>
  );
};

export default ReviewCard;