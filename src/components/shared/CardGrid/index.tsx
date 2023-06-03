import React from "react";
import Image from "next/image";

const CardGrid = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-lg">
          <div className="relative h-48">
            <Image
              src="/image1.jpg"
              alt="Card Image"
              className="rounded-t-lg"
              width={300}
              height={300}
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Card 1</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg">
          <div className="relative h-48">
            <Image
              src="/image2.jpg"
              alt="Card Image"
              className="rounded-t-lg"
              width={300}
              height={300}
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Card 2</h2>
            <p className="text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg">
          <div className="relative h-48">
            <Image
              src="/image3.jpg"
              alt="Card Image"
              className="rounded-t-lg"
              width={300}
              height={300}
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Card 3</h2>
            <p className="text-gray-700">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardGrid;
