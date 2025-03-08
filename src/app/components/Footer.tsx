import Link from "next/link";
import { SiFacebook, SiInstagram, SiGitter, SiLinkedin } from "react-icons/si";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#d9d9d9] text-gray-800 py-10 mx-6 my-10 rounded-lg shadow-md">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Section - 3 Columns */}
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Column 1 - Contact Info */}
            <div>
              <h3 className="font-semibold text-lg mb-3">Let's Talk</h3>
              <p className="text-sm">info@plotxpert.com</p>
              <p className="text-sm">1234 Real Estate Ave, Lagos</p>
              <p className="text-sm">+234 801 234 5678</p>
            </div>

            {/* Column 2 - Links */}
            <div>
              <h3 className="font-semibold text-lg mb-3">Explore</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/communities" className="hover:text-[#62984e]">
                    Communities
                  </Link>
                </li>
                <li>
                  <Link href="/search" className="hover:text-[#62984e]">
                    Search
                  </Link>
                </li>
                <li>
                  <Link href="/house" className="hover:text-[#62984e]">
                    House
                  </Link>
                </li>
                <li>
                  <Link href="/apartment" className="hover:text-[#62984e]">
                    Apartment
                  </Link>
                </li>
                <li>
                  <Link href="/land" className="hover:text-[#62984e]">
                    Land
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 - More Links */}
            <div>
              <h3 className="font-semibold text-lg mb-3">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="hover:text-[#62984e]">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/career" className="hover:text-[#62984e]">
                    Career
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-[#62984e]">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#62984e]">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section - Social Media Icons */}
          <div className="flex justify-center md:justify-end items-start space-x-4">
            <a
              href="#"
              className="p-3 bg-white rounded-full shadow-md hover:bg-[#62984e] transition"
            >
              <SiFacebook className="text-gray-700 hover:text-white text-xl" />
            </a>
            <a
              href="#"
              className="p-3 bg-white rounded-full shadow-md hover:bg-[#62984e] transition"
            >
              <SiInstagram className="text-gray-700 hover:text-white text-xl" />
            </a>
            <a
              href="#"
              className="p-3 bg-white rounded-full shadow-md hover:bg-[#62984e] transition"
            >
              <SiGitter className="text-gray-700 hover:text-white text-xl" />
            </a>
            <a
              href="#"
              className="p-3 bg-white rounded-full shadow-md hover:bg-[#62984e] transition"
            >
              <SiLinkedin className="text-gray-700 hover:text-white text-xl" />
            </a>
          </div>
        </div>

        {/* Bottom Section - Logo & Copyright */}
        <div className="mt-10 border-t border-gray-300 pt-6 text-center flex items-center justify-between ">
          <Link href="/" className="text-[#62984e] font-bold text-2xl">
            <div className="w-[120px] h-auto">
              <Image
                src="/logox.png"
                alt="logo"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          </Link>
          <p className="text-sm text-gray-600 mt-2">
            © {new Date().getFullYear()} PlotXpert. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
