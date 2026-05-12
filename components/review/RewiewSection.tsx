import ReviewCard from "./ReviewCard";

const reviews = [
  {
    image: "/image/review/shelly.png",
    name: "Shelly Russel",
    review:
      "Just got my hands on some absolutely awesome plants, and I couldn’t be happier!",
  },

  {
    image: "/image/review/lula.jpg",
    name: "Lula Rolfson",
    review:
      "Each one has its own unique charm and personality, and they’ve already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home. charm and personality, and they’ve already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.",
  },

  {
    image: "/image/review/carlo.png",
    name: "Carol Huels",
    review:
      "It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!",
  },
];

const ReviewsSection = () => {
  return (
    <section className="bg-[#0B1409] py-20">
      
        <div className="flex justify-center items-center">
     <h4
  className="
    relative
    inline-block
    text-white
    text-5xl
    font-semibold
    px-8
    py-3
    mb-16
  "
>
  
  <span
    className="
      absolute
      left-0
      bottom-0
      w-10
      h-10
      border-l-[4px]
      border-b-[4px]
      border-[#B6A400]
      rounded-bl-2xl
    "
  ></span>


  <span
    className="
      absolute
      right-0
      top-0
      w-10
      h-10
      border-r-[4px]
      border-t-[4px]
      border-[#B6A400]
      rounded-tr-2xl
    "
  ></span>

  Customer Review
</h4>
</div>

      <div className="flex justify-center gap-8 flex-wrap">
        
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            image={review.image}
            name={review.name}
            review={review.review}
          />
        ))}

      </div>
    </section>
  );
};

export default ReviewsSection;