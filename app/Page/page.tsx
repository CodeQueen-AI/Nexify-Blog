"use client";
import { Inter_Tight } from "next/font/google";
import Link from "next/link";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function NotFound() {
  return (
    <section
      className={`${interTight.className} min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 via-teal-100 to-purple-100 text-center px-6`}>
      <h2 className="text-2xl md:text-3xl font-medium text-blue-950 mb-2">
        We Can&apos;t Found The Page <br />That You&apos;re Looking For
      </h2>
      <h1 className="text-[8rem] font-medium text-blue-950 mt-0 mb-">
        404
      </h1>
      <p className="text-gray-700 text-lg mb-8">
        Oops! The Page You’re Looking For Was Not Found.
      </p>

      <Link href="/"
        className="px-6 py-3 bg-[#13164B] text-white rounded-full text-lg font-medium shadow-lg 
             cursor-pointer transition-colors duration-300 hover:bg-sky-500">
              Back To Home
      </Link>
    </section>
  );
}
