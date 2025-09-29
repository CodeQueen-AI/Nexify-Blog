"use client";
import Image from "next/image";
import { FaChartLine, FaTools, FaUsers } from "react-icons/fa";
import { Inter_Tight, Instrument_Serif } from "next/font/google";

const interTight = Inter_Tight({ subsets: ["latin"], weight: ["400", "700"] });
const instrumentSerif = Instrument_Serif({ subsets: ["latin"], weight: ["400"], style: ["italic", "normal"] });

export default function AnalyticsSection2() {
  return (
    <section className={`py-20 px-6 ${interTight.className}`}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
        <div className="flex justify-center">
          <div className="bg-sky-100 p-6 rounded-2xl shadow-md">
            <Image
              src="/Page1.png"
              alt="Dashboard Preview"
              width={500}
              height={350}
              className="rounded-lg object-contain"/>
          </div>
        </div>
        <div>
          <h2 className="text-4xl md:text-5xl text-blue-950 font-medium leading-tight">
            Elevate Your Analytics & <br />
            Grow With Our{" "}
            <span className={`${instrumentSerif.className} text-blue-500 italic`}>
              SaaS
            </span>
          </h2>
          <p className="mt-6 text-sm text-gray-600">
            Lorem ipsum odor amet, consectetur adipiscing elit. Duis eu neque dui
            viverra mus. Feugiat in fusce vehicula condimentum conubia id laoreet.
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex items-start space-x-4">
              <span className="bg-blue-500 text-white p-4 rounded-full text-2xl">
                <FaChartLine />
              </span>
              <div>
                <h4 className="text-2xl font-medium text-blue-950">Real Time Analysis</h4>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="bg-purple-500 text-white p-4 rounded-full text-2xl">
                <FaTools />
              </span>
              <div>
                <h4 className="text-2xl font-medium text-blue-950">Easy To Set Up</h4>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="bg-green-500 text-white p-4 rounded-full text-2xl">
                <FaUsers />
              </span>
              <div>
                <h4 className="text-2xl font-medium text-blue-950">Collaboration Tools</h4>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
