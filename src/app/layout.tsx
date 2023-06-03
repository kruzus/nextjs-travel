import "./globals.css";
import Image from "next/image";
import Navigation from "@/components/shared/Navigation";
import React from "react";

export const metadata = {
  title: "Travel Recommendations",
  description: "Recommending places to visit. ",
  authors: { name: "Arkanan Porus" },
  keywords: [
    "travel",
    "travel guide",
    "travel recommendations",
    "good recommnendations",
  ],
  publisher: "KruzusLabs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navigation />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}

interface HeaderHeroProps {
  region: string;
  tagline: string;
  backgroundImage: string;
  quality: number;
}

const HeaderHero: React.FC<HeaderHeroProps> = (
  { region, tagline, backgroundImage, quality },
) => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt={region}
          fill={true}
          quality={quality}
          sizes="(max-width: 768px) 100vw"
          style={{ objectFit: "cover" }}
        />
        <div
          className="absolute inset-0 bg-black opacity-40"
          style={{ mixBlendMode: "multiply" }}
        >
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">{region}</h1>
          <h2 className="text-2xl">{tagline}</h2>
        </div>
      </div>
    </div>
  );
};
