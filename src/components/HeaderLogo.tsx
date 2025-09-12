import Image from "next/image";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
const HeaderLogo = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      {/* Promotion bar */}

      {/* Main header */}
      <div className="flex items-center justify-between px-6 ">
        {/* Left side - empty for layout balance */}
        <div className="flex-1 px-6 py-2 text-sm ">
          <span className="font-semibold">$2.50</span> $1 a week for one year.
        </div>

        {/* Center - Logo */}
        <div className="flex-1 flex justify-center">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Bhitti"
              className="h-24 w-36 cursor-pointer"
              width={320}
              height={480}
            />
          </Link>
        </div>

        {/* Right side - Navigation */}
        <div className="flex-1 flex items-center justify-end space-x-6">
          <a
            href="#"
            className="text-gray-700 hover:text-black transition-colors text-sm font-medium"
          >
            Newsletter
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-black transition-colors text-sm font-medium"
          >
            Sign In
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-black transition-colors text-sm font-medium"
          >
            Subscribe
          </a>
          <button className="p-2 text-gray-700 hover:text-black transition-colors">
            <BiSearch size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderLogo;
