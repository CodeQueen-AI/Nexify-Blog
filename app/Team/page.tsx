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
      <div className="w-full bg-gradient-to-r from-[#dbeafe] via-[#ccfbf1] to-[#f3e8ff] py-20 text-center">
        <h2 className="text-5xl font-medium text-blue-950 mb-4">Team</h2>
        <p className="max-w-2xl mx-auto text-sm text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec <br /> ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>
      <section
        className={`${interTight.className} w-full py-20 bg-white text-center`}>
        <div className="max-w-2xl mx-auto mb-14">
          <h2 className="text-5xl font-medium text-blue-950">
            The People Behind{" "}
            <span
              className={`${instrumentSerif.className} text-indigo-600 italic`}>
              Nexify
            </span>
          </h2>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {[
            {
              name: "Stan Powers",
              role: "CEO Nexify",
              img: "/Pic1.jpg",
            },
            {
              name: "Eugenia Trivett",
              role: "Senior Developer",
              img: "/Pic2.jpg",
            },
            {
              name: "Joey Fleming",
              role: "UI/UX Designer",
              img: "/Pic3.jpg",
            },
            {
              name: "Zelda Obrien",
              role: "Data Analyst",
              img: "/Pic4.jpg",
            },
            {
              name: "Frank Anderson",
              role: "UX Researcher",
              img: "/Pic5.jpg",
            },
            {
              name: "Jocelyn Norman",
              role: "Marketing Specialist",
              img: "/Pic6.jpg",
            },
          ].map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-full h-96 relative rounded-2xl overflow-hidden shadow-md group">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"/>
                <div className="absolute inset-0 bg-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-1/2 -translate-y-1/2 right-4 flex flex-col gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  {[FaFacebookF, FaTwitter, FaPinterestP].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-blue-600 shadow-md hover:bg-blue-600 hover:text-white transition">
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
              <h3 className="mt-6 text-2xl text-blue-950">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
