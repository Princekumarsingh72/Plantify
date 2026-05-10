import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import ReviewsSection from "@/components/review/RewiewSection";
import TopSellingSection from "@/components/topselling/TopSellingSection";
import TrendySection from "@/components/trendy/TrendySection";
import HeroSection from "@/components/hero/HeroSection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-black-500 font-sans dark:bg-black min-h-screen">

      <div
        className="w-[100%] h-[2592px] bg-cover bg-center bg-no-repeat rounded-3x"
        style={{
          backgroundImage: "url('/image/bg_plant.jpg')",
        }}
      >
        <Navbar />
        <div className="w-[100%] text-white my-50">
          <HeroSection />
        </div>
        {/* <div className=" flex justify-center items-center w-[25%]">
          <TestimonialCard />
        </div> */}
        <div>
          <TrendySection/>
        </div>
        
        <div>
          <TopSellingSection/>
          <ReviewsSection />
        </div>
      </div>

    </div>
  );
}
