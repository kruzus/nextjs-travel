import React from "react";
import Image from "next/image";
export default function Home() {
  return (
    <>
      Asia-Pacific Region:

      Tokyo, Japan Sydney, Australia Bangkok, Thailand Europe:

      Paris, France Marrakech, Morocco Rome, Italy Africa:

      Cape Town, South Africa North America:

      New York City, USA Vancouver, Canada South America:

      Buenos Aires, Argentina
    </>
  );
}

interface HeaderHeroProps {
  region: string;
  tagline: string;
  backgroundImage: string;
}

const HeaderHero: React.FC<HeaderHeroProps> = (
  { region, tagline, backgroundImage },
) => {
  return (
    <div className="relative h-screen">
      <Image
        src={backgroundImage}
        alt={region}
        fill={false}
        quality={75}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">{region}</h1>
          <h2 className="text-2xl">{tagline}</h2>
        </div>
      </div>
    </div>
  );
};
