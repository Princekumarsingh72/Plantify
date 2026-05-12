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

  Our Top Selling Plants
</h4>
</div>

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