import Link from "next/link";

//DO NOT USE, THIS IS UTTER SHIT RIGHT NOW.
const DONOTUSESidebar = () => {
  return (
    <div className="flex h-screen">
      <div className="bg-gray-800 w-64 flex-shrink-0">
        <div className="p-4">
          <h1 className="text-white text-2xl font-bold">Sidebar Menu</h1>
        </div>
        <nav className="mt-6">
          <ul className="space-y-1">
            <li>
              <Link href="/">
                <span className="text-gray-300 hover:bg-gray-700 hover:text-white block px-4 py-2 rounded">
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span className="text-gray-300 hover:bg-gray-700 hover:text-white block px-4 py-2 rounded">
                  About
                </span>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <span className="text-gray-300 hover:bg-gray-700 hover:text-white block px-4 py-2 rounded">
                  Services
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DONOTUSESidebar;
