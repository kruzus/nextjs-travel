import React, { ReactNode } from "react";
import Image from "next/image";

export const metadata = {
  title: "Discover the Asia-Pacific Region",
  description:
    "Experience the diverse cultures, stunning landscapes, and captivating history of the Asia-Pacific region. Embark on an inspiring journey of exploration.",
  authors: { name: "KruzusLabs" },
  keywords: [
    "Asia-Pacific",
    "cultures",
    "landscapes",
    "history",
    "travel",
    "exploration",
  ],
  publisher: "KruzusLabs",
};

export default function AsiaPacific({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <main>
        <Hero
          backgroundImage={"/../public/asiapacific.jpg"}
          region={"LOL"}
          description={"Diverse cultures, stunning landscapes, and captivating history—explore the vibrant Asia-Pacific region and be inspired."}
          title={"Asia Pacific"}
        />
        <main className="container mx-auto w-3/4 p-7">{children}</main>
      </main>
    </>
  );
}




interface HeaderHeroProps {
  region: string;
  title: string;
  backgroundImage: string;
  description: string;
}

const Hero: React.FC<HeaderHeroProps> = (
  { region, backgroundImage, description, title },
) => {
  return (
    <div className="relative">
      <div className="h-96 sm:h-72 md:h-96 lg:h-112 xl:h-128">
        <Image
          src={backgroundImage}
        fill={true}
          style={{ objectFit: "cover" }}
          quality={35}
          alt="Hero Background"
        />
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-bold mb-4">
          { title.toUpperCase() }
        </h1>
        <p className="text-lg sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl text-white">
          { description }
        </p>
      </div>
    </div>
  );
};
