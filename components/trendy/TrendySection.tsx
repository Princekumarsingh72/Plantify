import { reverse } from "dns";
import TrendyCard from "./TrendyCard";

const plants = [
  {
    image: "/image/plants/aglaonema.png",
    title: "Aglaonema plant",
    description:
      "The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care",
    price: "Rs. 300/-",
  },

  {
    image: "/image/plants/plantain.png",
    title: "Plantain Lilies",
    description:
      "Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes",
    price: "Rs. 380/-",
    reverse
  },

 
];

const TrendySection = () => {
  return (
    <section className="mt-100 py-20">
      
      <h2 className="text-center text-white text-5xl font-semibold mb-16">
        Our Top Selling Plants
      </h2>

      <div className="flex flex-col flex-wrap m-10 gap-10 place-items-center">
        
        {plants.map((plant, index) => (
          <TrendyCard
            key={index}
            image={plant.image}
            title={plant.title}
            description={plant.description}
            price={plant.price}
          />
        ))}

      </div>
    </section>
  );
};

export default TrendySection;