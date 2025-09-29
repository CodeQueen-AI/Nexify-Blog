"use client";
import { useEffect, useState } from "react";
import { Inter_Tight } from "next/font/google";
import { FaRegStar, FaEye } from "react-icons/fa";
import { LuTrophy } from "react-icons/lu";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function OurStory() {
  const [clients, setClients] = useState(0);
  const [features, setFeatures] = useState(0);
  const [trusted, setTrusted] = useState(0);
  const [years, setYears] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [users, setUsers] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const intervalTime = 20;
    const steps = duration / intervalTime;

    const clientStep = 30000 / steps;
    const featuresStep = 30 / steps;
    const trustedStep = 99 / steps;
    const yearsStep = 8 / steps;
    const revenueStep = 20 / steps;
    const usersStep = 550 / steps;

    const interval = setInterval(() => {
      setClients((prev) => Math.min(prev + clientStep, 30000));
      setFeatures((prev) => Math.min(prev + featuresStep, 30));
      setTrusted((prev) => Math.min(prev + trustedStep, 99));
      setYears((prev) => Math.min(prev + yearsStep, 8));
      setRevenue((prev) => Math.min(prev + revenueStep, 20));
      setUsers((prev) => Math.min(prev + usersStep, 550));
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`bg-white py-20 px-6 ${interTight.className}`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Content */}
        <div>
          <h2 className="text-5xl font-medium text-blue-950 mb-6">Our Story</h2>
          <p className="text-gray-600 mb-6">
            Make all aspects of our business available online around the world,
            focusing on following core principles. This will allow us to use
            different media channels to deliver high-quality content and
            experiences to our customers. By proactively outsourcing some tasks,
            we can take advantage of the expertise of other companies while they
            specialize in their specific areas of technology.
          </p>
          <p className="text-gray-600 mb-10">
            Those initial days were filled with late nights, endless
            brainstorming sessions, and the exhilarating thrill of overcoming
            technical hurdles. Slowly, our vision began to take shape. We built
            prototypes, gathered feedback, and iterated relentlessly until we
            had a product that not only addressed the problem but exceeded
            expectations.
          </p>

          {/* Stats Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center mt-10 gap-y-8">
            <div className="flex flex-col items-center px-4">
              <h3 className="text-3xl md:text-5xl font-medium text-blue-950">
                {Math.floor(clients / 1000)}
                <sup className="text-blue-500 text-xl">K</sup>
              </h3>
              <p className="text-gray-500 mt-2 text-sm md:text-base">
                Worldwide Client
              </p>
            </div>
            <div className="flex flex-col items-center px-4">
              <h3 className="text-3xl md:text-5xl font-medium text-blue-950">
                {Math.floor(features)}
                <sup className="text-blue-500 text-xl">+</sup>
              </h3>
              <p className="text-gray-500 mt-2 text-sm md:text-base">
                Best Features
              </p>
            </div>
            <div className="flex flex-col items-center px-4">
              <h3 className="text-3xl md:text-5xl font-medium text-blue-950">
                {Math.floor(trusted)}
                <sup className="text-blue-500 text-xl">+</sup>
              </h3>
              <p className="text-gray-500 mt-2 text-sm md:text-base">
                Trusted Company
              </p>
            </div>
          </div>

          {/* Stats Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center mt-6 gap-y-8">
            <div className="flex flex-col items-center px-4">
              <h3 className="text-3xl md:text-5xl font-medium text-blue-950">
                {Math.floor(years)}
                <sup className="text-blue-500 text-xl">+</sup>
              </h3>
              <p className="text-gray-500 mt-2 text-sm md:text-base">
                Years in Business
              </p>
            </div>
            <div className="flex flex-col items-center px-4">
              <h3 className="text-3xl md:text-5xl font-medium text-blue-950">
                ${Math.floor(revenue)}
                <sup className="text-blue-500 text-xl">M</sup>
              </h3>
              <p className="text-gray-500 mt-2 text-sm md:text-base">
                Revenue per Year
              </p>
            </div>
            <div className="flex flex-col items-center px-4">
              <h3 className="text-3xl md:text-5xl font-medium text-blue-950">
                {Math.floor(users)}
                <sup className="text-blue-500 text-xl">+</sup>
              </h3>
              <p className="text-gray-500 mt-2 text-sm md:text-base">
                Active Users
              </p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col gap-6 md:pl-32 lg:pl-32">
          <div className="p-6 border border-gray-300 rounded-2xl bg-white cursor-pointer hover:bg-blue-50 transition-colors duration-300">
            <div className="flex flex-col items-start gap-4">
              <span className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-500 text-white text-3xl">
                <FaEye />
              </span>
              <h4 className="text-3xl font-medium text-blue-950">Our Vision</h4>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
          </div>

          <div className="p-6 border border-gray-300 rounded-2xl bg-white cursor-pointer hover:bg-purple-50 transition-colors duration-300">
            <div className="flex flex-col items-start gap-4">
              <span className="w-16 h-16 flex items-center justify-center rounded-full bg-[#6528F7] text-white text-3xl">
                <FaRegStar />
              </span>
              <h4 className="text-3xl font-medium text-blue-950">Our Mission</h4>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          <div className="p-6 border border-gray-300 rounded-2xl bg-white cursor-pointer hover:bg-green-50 transition-colors duration-300">
            <div className="flex flex-col items-start gap-4">
              <span className="w-16 h-16 flex items-center justify-center rounded-full bg-[#36D462] text-white text-3xl">
                <LuTrophy />
              </span>
              <h4 className="text-3xl font-medium text-blue-950">
                Our Achievement
              </h4>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
          </div>
        </div>
      </div>
        <section className="w-full h-64 sm:h-80 md:h-[500px] lg:h-[700px] bg-cover bg-center mt-16"
              style={{ backgroundImage: "url('/About.PNG')" }}></section>
        </section>
  );
}
