import TopSellingCard  from "./TopSellingCard";

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
  },

  {
    image: "/image/plants/cactus.png",
    title: "Cactus",
    description:
      "It is known for their ability to thrive in arid environments",
    price: "Rs. 259/-",
  },

  {
    image: "/image/plants/swiss.png",
    title: "Swiss cheese Plant",
    description:
      "It is a popular tropical houseplant known for its distinctive, perforated leaves",
    price: "Rs. 400/-",
  },

  {
    image: "/image/plants/sansevieria.png",
    title: "Sansevieria plant",
    description:
      "It is a popular indoor plant admired for its striking appearance and low-maintenance nature.",
    price: "Rs. 450/-",
  },

  {
    image: "/image/plants/agave.png",
    title: "Agave plant",
    description:
      "The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms",
    price: "Rs. 359/-",
  },
];

const TopSellingSection = () => {
  return (
    <section className="bg-[#0B1409] py-20">
      
      <h2 className="text-center text-white text-5xl font-semibold mb-16">
        Our Top Selling Plants
      </h2>

      <div className="flex flex-wrap m-10 gap-10 place-items-center">
        
        {plants.map((plant, index) => (
          <TopSellingCard 
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

export default TopSellingSection;