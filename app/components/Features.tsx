"use client";
import { FaChartPie, FaEdit, FaBell, FaProjectDiagram } from "react-icons/fa";
import { MdDashboard, MdReport } from "react-icons/md";
import { Inter_Tight, Instrument_Serif } from "next/font/google";

const interTight = Inter_Tight({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const instrumentSerif = Instrument_Serif({ subsets: ["latin"], weight: ["400"], style: ["normal", "italic"] });

export default function FeaturesSection() {
  return (
    <section className="bg-[#0f1a4f] py-20 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        <div className={`mb-12 text-center ${interTight.className}`}>
          <h2 className="text-4xl md:text-5xl mb-4 font-medium">
            Features That Make A{" "}
            <span className={`${instrumentSerif.className} text-blue-400 italic`}>
              Difference.
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="rounded-2xl p-9 border border-gray-600 hover:bg-[#1a2560] transition">
            <div className="w-12 h-12 flex items-start justify-center rounded-full bg-blue-600 mb-4 text-white">
              <MdDashboard className="text-2xl mt-3" />
            </div>
            <div className={interTight.className}>
              <h3 className="text-2xl font-medium mb-2">Unified Dashboard</h3>
              <p className="text-sm text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl p-9 border border-gray-600 hover:bg-[#1a2560] transition">
            <div className="w-12 h-12 flex items-start justify-center rounded-full bg-purple-600 mb-4 text-white">
              <FaChartPie className="text-2xl mt-3" />
            </div>
            <div className={interTight.className}>
              <h3 className="text-2xl font-medium mb-2">Advanced Analytics</h3>
              <p className="text-sm text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl p-9 border border-gray-600 hover:bg-[#1a2560] transition">
            <div className="w-12 h-12 flex items-start justify-center rounded-full bg-green-500 mb-4 text-white">
              <FaEdit className="text-2xl mt-3" />
            </div>
            <div className={interTight.className}>
              <h3 className="text-2xl font-medium mb-2">
                Custom Edit Tool Application
              </h3>
              <p className="text-sm text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="rounded-2xl p-9 border border-gray-600 hover:bg-[#1a2560] transition">
            <div className="w-12 h-12 flex items-start justify-center rounded-full bg-green-600 mb-4 text-white">
              <MdReport className="text-2xl mt-3" />
            </div>
            <div className={interTight.className}>
              <h3 className="text-2xl font-medium mb-2">Automated Reporting</h3>
              <p className="text-sm text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="rounded-2xl p-9 border border-gray-600 hover:bg-[#1a2560] transition">
            <div className="w-12 h-12 flex items-start justify-center rounded-full bg-blue-500 mb-4 text-white">
              <FaProjectDiagram className="text-2xl mt-3" />
            </div>
            <div className={interTight.className}>
              <h3 className="text-2xl font-medium mb-2">CRM Integration</h3>
              <p className="text-sm text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="rounded-2xl p-9 border border-gray-600 hover:bg-[#1a2560] transition">
            <div className="w-12 h-12 flex items-start justify-center rounded-full bg-purple-500 mb-4 text-white">
              <FaBell className="text-2xl mt-3" />
            </div>
            <div className={interTight.className}>
              <h3 className="text-2xl font-medium mb-2">
                Real-Time Notifications
              </h3>
              <p className="text-sm text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
