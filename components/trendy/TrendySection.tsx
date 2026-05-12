
import TrendyCard from "./TrendyCard";

const plants = [
  {
    image: "/image/plants/plantain.png",
    title: "For Your Desks Decorations",
    description:
      "I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!",
    price: "Rs. 599/-",
  },

  {
    image: "/image/plants/Alovera.png",
    title: "For Your Desks Decorations",
    description:
      "The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming",
    price: "Rs. 399/-",
   reverse: true,
  },

 
];

const TrendySection = () => {
  return (
    <section className="mt-100 py-20">
      
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

  Our Trendy Plants
</h4>
</div>

      <div className="flex flex-col flex-wrap m-10 gap-10 place-items-center">
        
        {plants.map((plant, index) => (
         <TrendyCard
  key={index}
  image={plant.image}
  title={plant.title}
  description={plant.description}
  price={plant.price}
  reverse={plant.reverse}
/>
        ))}

      </div>
    </section>
  );
};

export default TrendySection;