import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import ReviewsSection from "@/components/review/RewiewSection";
import TopSellingSection from "@/components/topselling/TopSellingSection";
import TrendySection from "@/components/trendy/TrendySection";
import HeroSection from "@/components/hero/HeroSection";
import BestO2Plants from "@/components/ourbesto2/BestO2Card";
import Footer from "@/components/footer/Footer";

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
        <HeroSection />
        <TrendySection />
        <TopSellingSection />
        <ReviewsSection />
        <BestO2Plants />
        <Footer />
      </div>

    </div>
  );
}
