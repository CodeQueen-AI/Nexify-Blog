"use client";
import Image from "next/image";
import { Inter_Tight, Instrument_Serif } from "next/font/google";
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export default function TeamSection() {
  return (
    <div>
      <section className="w-full py-20 bg-white text-center">
        {/*Heading */}
        <div className="max-w-2xl mx-auto mb-14">
          <h2 className={`${interTight.className} text-5xl font-medium text-blue-950`}>
            The People Behind{" "}
            <span className={`${instrumentSerif.className} text-blue-500 italic`}>
              Nexify
            </span>
          </h2>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        {/* Team */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {/* Member 1 */}
          <div className="flex flex-col items-center">
            <div className="w-full h-96 relative rounded-2xl overflow-hidden group">
              <Image
                src="/Pic1.jpg"
                alt="Stan Powers"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-1/2 -translate-y-1/2 right-4 flex flex-col gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <a href="#" className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-blue-600 shadow-md hover:bg-blue-600 hover:text-white transition"><FaFacebookF /></a>
                <a href="#" className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-blue-600 shadow-md hover:bg-blue-600 hover:text-white transition"><FaTwitter /></a>
                <a href="#" className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-blue-600 shadow-md hover:bg-blue-600 hover:text-white transition"><FaPinterestP /></a>
              </div>
            </div>
            <h3 className="mt-6 text-2xl text-blue-950">Stan Powers</h3>
            <p className="text-gray-600">CEO Nexify</p>
          </div>

          {/* Member 2 */}
          <div className="flex flex-col items-center">
            <div className="w-full h-96 relative rounded-2xl overflow-hidden group">
              <Image
                src="/Pic2.jpg"
                alt="Eugenia Trivett"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-1/2 -translate-y-1/2 right-4 flex flex-col gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <a href="#" className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition"><FaFacebookF /></a>
                <a href="#" className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition"><FaTwitter /></a>
                <a href="#" className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition"><FaPinterestP /></a>
              </div>
            </div>
            <h3 className="mt-6 text-2xl text-blue-950">Eugenia Trivett</h3>
            <p className="text-gray-600">Senior Developer</p>
          </div>

          {/* Member 3 */}
          <div className="flex flex-col items-center">
            <div className="w-full h-96 relative rounded-2xl overflow-hidden group">
              <Image
                src="/Pic3.jpg"
                alt="Joey Fleming"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-1/2 -translate-y-1/2 right-4 flex flex-col gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <a href="#" className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition"><FaFacebookF /></a>
                <a href="#" className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition"><FaTwitter /></a>
                <a href="#" className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition"><FaPinterestP /></a>
              </div>
            </div>
            <h3 className="mt-6 text-2xl text-blue-950">Joey Fleming</h3>
            <p className="text-gray-600">UI/UX Designer</p>
          </div>
        </div>
      </section>
    </div>
  );
}
