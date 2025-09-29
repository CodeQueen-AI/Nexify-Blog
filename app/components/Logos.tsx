"use client";
import Image from "next/image";
import { Inter_Tight } from "next/font/google";

const interTight = Inter_Tight({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function Partners() {
  return (
    <section className={`w-full bg-[#0C154D] py-12 sm:py-20 overflow-hidden ${interTight.className}`}>
      <div className="max-w-7xl mx-auto text-center px-4">
        <h2 className="text-white text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12">
          Partnered With Over 100+ Major Companies
        </h2>
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-6 sm:gap-12 md:gap-16 animate-marquee">
            {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map((num, i) => (
              <div key={i} className="flex-shrink-0 w-24 sm:w-32 md:w-44 lg:w-52">
                <Image
                  src={`/logo${num}.png`}
                  alt={`Company ${num}`}
                  width={200}
                  height={70}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </section>
  );
}
