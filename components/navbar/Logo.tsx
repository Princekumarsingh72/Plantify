import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 relative">
        <Image
          src="/image/logo.png"
          alt="logo"
          fill
          className="object-contain"
        />
      </div>

      <h1 className="text-white text-lg font-semibold">
        FloraVision.
      </h1>
    </div>
  );
}