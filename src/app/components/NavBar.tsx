"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons for the mobile menu
import Image from "next/image";

// Navbar Component
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="font-sans bg-white fixed top-0 left-0 w-full z-50 ">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="w-[120px] h-auto">
            <Image
              src="/logox.png"
              alt="logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
          {/* <h1>PlotXpert</h1> */}
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li>
            <Link href="/search" className="hover:text-[#62984e]">
              Search
            </Link>
          </li>
          <li>
            <Link href="/communities" className="hover:text-[#62984e]">
              Communities
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
            <Link href="/about" className="hover:text-[#62984e]">
              About
            </Link>
          </li>
        </ul>

        {/* Login & Sign Up */}
        <div className="hidden md:flex gap-4 items-center">
          <Link href="/login" className="text-gray-700 hover:text-[#62984e]">
            Login
          </Link>
          <Link
            href="/signup"
            className="bg-[#62984e] text-white px-4 py-2 rounded-full hover:bg-[#4d7c3a] transition"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-white flex flex-col items-center justify-center space-y-6 text-gray-700 transform ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } transition-all duration-300`}
      >
        <button
          className="absolute top-6 right-6"
          onClick={() => setIsOpen(false)}
        >
          <X size={32} className="text-gray-700" />
        </button>
        <Link
          href="/search"
          className="text-lg hover:text-[#62984e]"
          onClick={() => setIsOpen(false)}
        >
          Search
        </Link>
        <Link
          href="/communities"
          className="text-lg hover:text-[#62984e]"
          onClick={() => setIsOpen(false)}
        >
          Communities
        </Link>
        <Link
          href="/house"
          className="text-lg hover:text-[#62984e]"
          onClick={() => setIsOpen(false)}
        >
          House
        </Link>
        <Link
          href="/apartment"
          className="text-lg hover:text-[#62984e]"
          onClick={() => setIsOpen(false)}
        >
          Apartment
        </Link>
        <Link
          href="/about"
          className="text-lg hover:text-[#62984e]"
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
        <Link
          href="/login"
          className="text-lg hover:text-[#62984e]"
          onClick={() => setIsOpen(false)}
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="bg-[#62984e] text-white px-6 py-3 rounded-full hover:bg-[#4d7c3a] transition"
          onClick={() => setIsOpen(false)}
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
