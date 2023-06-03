import Image from "next/image";

function AsiaPacific() {
  return (
    <>
      <Card />
    </>
  );
}
export default AsiaPacific;

const Card = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="relative h-48">
            <Image
              src="/../public/asia-pacific/fuji.jpg"
              fill={true}
              style={{ objectFit: "cover" }}
              alt="Mount Fuji"
            />
          </div>
          <div className="py-4 px-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Card Title 1
            </h2>
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              lacinia mauris nec elit lobortis, ac maximus est rutrum.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="relative h-48">
            <Image
              src="/../public/asia-pacific/fuji.jpg"
              fill={true}
              style={{ objectFit: "cover" }}
              alt="Mount Fuji"
            />
          </div>
          <div className="py-4 px-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Card Title 2
            </h2>
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              lacinia mauris nec elit lobortis, ac maximus est rutrum.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="relative h-48">
            <Image
              src="/../public/asia-pacific/fuji.jpg"
              fill={true}
              style={{ objectFit: "cover" }}
              alt="Mount Fuji"
            />
          </div>
          <div className="py-4 px-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Card Title 2
            </h2>
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              lacinia mauris nec elit lobortis, ac maximus est rutrum.
            </p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="relative h-48">
            <Image
              src="/../public/asia-pacific/fuji.jpg"
              fill={true}
              style={{ objectFit: "cover" }}
              alt="Mount Fuji"
            />
          </div>
          <div className="py-4 px-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Card Title 2
            </h2>
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              lacinia mauris nec elit lobortis, ac maximus est rutrum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
