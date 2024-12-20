import React from "react";
import Image from "next/image";
import { IoChevronDown } from "react-icons/io5";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const NavLinks = () => (

    <ul className="flex flex-col mr-10 gap-4 md:flex-row md:gap-6 lg:gap-10 list-none">
      <li>
        <a href="#" className="text-white hover:text-sky-300 transition">
          Home
        </a>
      </li>
      <li>
        <a href="#" className="text-white hover:text-sky-300 transition">
          Apply
        </a>
      </li>
      <li>
        <a href="#" className="text-white hover:text-sky-300 transition">
          Jobs
        </a>
      </li>
      <li>
        <a href="#" className="text-white hover:text-sky-300 transition">
          Result
        </a>
      </li>
      <li>
        <a
          href="#"
          className="text-white flex items-center gap-1 hover:text-sky-300 transition"
        >
          Courses
          <IoChevronDown aria-hidden="true" />
        </a>
      </li>
    </ul>
);

export default function Header() {
  return (
    <header className="sticky top-0 w-full bg-sky-900 backdrop-blur-2xl z-50 print:hidden">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20">
        {/* Logo */}
        <Image
          src="/images/logo.9ff76f62.png"
          alt="Sindh Government Logo"
          className="mt-20 ml-8 w-[60px] sm:w-[70px] md:w-[90px]"
          width={90}
          height={113}
          loading="lazy"
          decoding="async"
        />

        {/* Title */}
        <h1 className="hidden md:block text-center font-bold text-[#bbdcf9] text-shadow text-sm lg:text-lg xl:text-xl">
          Tuition-Free Education Program on Latest Technologies
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <NavLinks />
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <button
              className="flex md:hidden items-center text-white"
              aria-label="Open navigation menu"
            >
              <Menu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent className="bg-sky-900">
            <SheetTitle>
              <nav>
                <NavLinks />
              </nav>
            </SheetTitle>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
