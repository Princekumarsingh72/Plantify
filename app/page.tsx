import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import HeroBanner from "@/components/hero/HeroBanner";
import TestimonialCard from "@/components/common/TestimonialCard";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-black-500 font-sans dark:bg-black min-h-screen">
  
  <div
    className="w-[100%] h-[2592px] bg-cover bg-center bg-no-repeat rounded-3x"
    style={{
      backgroundImage: "url('/image/bg_plant.jpg')",
    }}
  >
     <Navbar/>
    <div className="w-[60%] text-white my-50">
  <HeroBanner />

</div>
<div className=" flex justify-center items-center w-[25%]">
 <TestimonialCard/>
</div>
    
  </div>

</div>
  );
}
