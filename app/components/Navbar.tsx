"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { BiLogoDiscord } from "react-icons/bi";
import { usePathname } from "next/navigation";
import { HiMenu } from "react-icons/hi";

export default function Navbar() {
  const [openFeatures, setOpenFeatures] = useState(false);
  const [openPages, setOpenPages] = useState(false);
  const [openBlog, setOpenBlog] = useState(false); // 👈 Blog dropdown ke liye state
  const [menuOpen, setMenuOpen] = useState(false);
  const pathName = usePathname();

  const routes = [
    "/About",
    "/Features",
    "/Details",
    "/Pricing",
    "/Team",
    "/FAQ",
    "/Page",
    "/Timer",
    "/Blog",
    "/New_blog",
    "/add_blog",
    "/Contact",
  ];

  return (
    <div
      className={`w-full ${
        routes.includes(pathName)
          ? "bg-gradient-to-r from-[#dbeafe] via-[#ccfbf1] to-[#f3e8ff]"
          : "bg-gradient-to-r from-[#E9FBFF] to-[#DBFFF9]"
      }`}
    >
      <div className="flex justify-center pt-4 pb-3 px-4">
        <div className="bg-[#13164B] text-white text-sm flex flex-wrap justify-center items-center py-2 px-6 rounded-full shadow-md text-center w-full max-w-[98%]">
          Join Us On <span className="mx-1"><BiLogoDiscord /></span> Discord. We Have Lots of Information
        </div>
      </div>

      {/* Navbar */}
      <nav className="flex items-center justify-between px-4 md:px-8 py-3 relative">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/Logo.png"
            alt="Logo"
            width={130}
            height={130}
            className="z-50"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-800 font-medium">
          <li>
            <Link
              href="/"
              className="hover:text-blue-600 cursor-pointer transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/About"
              className="hover:text-blue-600 cursor-pointer transition"
            >
              About
            </Link>
          </li>

          {/* Features Dropdown */}
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setOpenFeatures(true)}
            onMouseLeave={() => setOpenFeatures(false)}
          >
            <div className="flex items-center">
              Features <ChevronDown size={16} className="ml-1" />
            </div>
            <div
              className={`absolute top-6 left-0 bg-white shadow-md rounded-lg p-3 w-48 space-y-2 transform transition-all duration-200 ${
                openFeatures
                  ? "scale-100 opacity-100"
                  : "scale-95 opacity-0 pointer-events-none"
              }`}
            >
              <Link
                href="/Features"
                className="block text-gray-600 hover:text-blue-600 transition"
              >
                Features
              </Link>
              <Link
                href="/Details"
                className="block text-gray-600 hover:text-blue-600 transition"
              >
                Feature Details
              </Link>
            </div>
          </li>

          {/* Pages Dropdown */}
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setOpenPages(true)}
            onMouseLeave={() => setOpenPages(false)}
          >
            <div className="flex items-center">
              Pages <ChevronDown size={16} className="ml-1" />
            </div>
            <div
              className={`absolute top-6 left-0 bg-white shadow-md rounded-lg p-3 w-48 space-y-2 transform transition-all duration-200 ${
                openPages
                  ? "scale-100 opacity-100"
                  : "scale-95 opacity-0 pointer-events-none"
              }`}
            >
              <Link
                href="/Pricing"
                className="block text-gray-600 hover:text-blue-600 transition"
              >
                Pricing
              </Link>
              <Link
                href="/Team"
                className="block text-gray-600 hover:text-blue-600 transition"
              >
                Team
              </Link>
              <Link
                href="/FAQ"
                className="block text-gray-600 hover:text-blue-600 transition"
              >
                FAQ
              </Link>
              <Link
                href="/Page"
                className="block text-gray-600 hover:text-blue-600 transition"
              >
                404 Page
              </Link>
              <Link
                href="/Timer"
                className="block text-gray-600 hover:text-blue-600 transition"
              >
                Coming Soon
              </Link>
            </div>
          </li>

          {/* Blog Dropdown */}
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setOpenBlog(true)}
            onMouseLeave={() => setOpenBlog(false)}
          >
            <div className="flex items-center">
              Blog <ChevronDown size={16} className="ml-1" />
            </div>
            <div
              className={`absolute top-6 left-0 bg-white shadow-md rounded-lg p-3 w-48 space-y-2 transform transition-all duration-200 ${
                openBlog
                  ? "scale-100 opacity-100"
                  : "scale-95 opacity-0 pointer-events-none"
              }`}
            >
              <Link
                href="/New_blog" 
                className="block text-gray-600 hover:text-blue-600 transition"
              >
                New Blog
              </Link>
              <Link
                href="/add_blog"
                className="block text-gray-600 hover:text-blue-600 transition"
              >
                Add Blogs
              </Link>
              <Link
                href="/Blog"
                className="block text-gray-600 hover:text-blue-600 transition"
              >
                Blogs
              </Link>
            </div>
          </li>

          <li>
            <Link
              href="/Contact"
              className="hover:text-blue-600 cursor-pointer transition"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Desktop Button */}
        <Link href="/trial" className="hidden md:block">
          <button className="bg-[#2A79FF] text-white px-7 py-3 rounded-full font-medium cursor-pointer transition transform hover:bg-blue-950 hover:scale-95 duration-300 ease-in-out">
            Start Free Trial
          </button>
        </Link>

        {/* Mobile Hamburger */}
        {!menuOpen && (
          <button
            className="md:hidden z-50 text-gray-800 hover:text-sky-500 transition cursor-pointer"
            onClick={() => setMenuOpen(true)}
          >
            <HiMenu size={28} />
          </button>
        )}

        {/* Side Drawer */}
        <div
          className={`fixed top-0 left-0 w-80 h-full bg-gray-50 shadow-lg z-40 transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center px-4 py-3">
            <Image src="/Logo.png" alt="Logo" width={100} height={100} />
            <button
              onClick={() => setMenuOpen(false)}
              className="text-gray-800 hover:text-sky-500 cursor-pointer transition"
            >
              <X size={28} />
            </button>
          </div>

          <ul className="flex flex-col p-4 space-y-2">
            <li>
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-600 cursor-pointer transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/About"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-600 cursor-pointer transition"
              >
                About
              </Link>
            </li>

            {/* Features Dropdown (Mobile) */}
            <li
              className="cursor-pointer"
              onClick={() => setOpenFeatures(!openFeatures)}
            >
              <div className="flex items-center justify-between">
                Features <ChevronDown size={16} />
              </div>
              {openFeatures && (
                <ul className="pl-4 mt-2 space-y-1">
                  <li>
                    <Link
                      href="/Features"
                      onClick={() => setMenuOpen(false)}
                      className="hover:text-blue-600 cursor-pointer transition"
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Details"
                      onClick={() => setMenuOpen(false)}
                      className="hover:text-blue-600 cursor-pointer transition"
                    >
                      Feature Details
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Pages Dropdown (Mobile) */}
            <li
              className="cursor-pointer"
              onClick={() => setOpenPages(!openPages)}
            >
              <div className="flex items-center justify-between">
                Pages <ChevronDown size={16} />
              </div>
              {openPages && (
                <ul className="pl-4 mt-2 space-y-1">
                  <li>
                    <Link
                      href="/Pricing"
                      onClick={() => setMenuOpen(false)}
                      className="hover:text-blue-600 cursor-pointer transition"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Team"
                      onClick={() => setMenuOpen(false)}
                      className="hover:text-blue-600 cursor-pointer transition"
                    >
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/FAQ"
                      onClick={() => setMenuOpen(false)}
                      className="hover:text-blue-600 cursor-pointer transition"
                    >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Page"
                      onClick={() => setMenuOpen(false)}
                      className="hover:text-blue-600 cursor-pointer transition"
                    >
                      404 Page
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Timer"
                      onClick={() => setMenuOpen(false)}
                      className="hover:text-blue-600 cursor-pointer transition"
                    >
                      Coming Soon
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Blog Dropdown (Mobile) 👇 */}
            <li
              className="cursor-pointer"
              onClick={() => setOpenBlog(!openBlog)}
            >
              <div className="flex items-center justify-between">
                Blog <ChevronDown size={16} />
              </div>
              {openBlog && (
                <ul className="pl-4 mt-2 space-y-1">
                  <li>
                    <Link
                      href="/New_blog"
                      onClick={() => setMenuOpen(false)}
                      className="hover:text-blue-600 cursor-pointer transition"
                    >
                      New Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/add_blog"
                      onClick={() => setMenuOpen(false)}
                      className="hover:text-blue-600 cursor-pointer transition"
                    >
                      Add Blogs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Blog"
                      onClick={() => setMenuOpen(false)}
                      className="hover:text-blue-600 cursor-pointer transition"
                    >
                      Blogs
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link
                href="/Contact"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-600 cursor-pointer transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
