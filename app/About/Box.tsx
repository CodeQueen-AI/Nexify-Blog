"use client";
import Image from "next/image";
import { FaRegClock } from "react-icons/fa";
import { Inter_Tight, Instrument_Serif } from "next/font/google";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export default function BlogSection() {
  const blogs = [
    {
      id: 1,
      title: "The Role Of Customer Feedback In SaaS Product Development",
      date: "August 23, 2024",
      image: "/Blog1.jpg",
    },
    {
      id: 2,
      title: "How To Define Your SaaS Startup’s Unique Value Proposition",
      date: "August 23, 2024",
      image: "/Blog2.jpg",
    },
    {
      id: 3,
      title:
        "SaaS Has Transformed The Way Businesses Access And Utilize Software",
      date: "August 22, 2024",
      image: "/Blog3.jpg",
    },
  ];

  return (
    <section
      className={`${interTight.className} py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-20 bg-white`}>
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-6">
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-blue-950 leading-snug">
            Latest Articles &{" "}
            <span
              className={`${instrumentSerif.className} text-blue-500 italic font-normal`}>
              Resources
            </span>
          </h1>
          <p className="text-gray-500 mt-3 text-sm sm:text-base">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Duis eu neque
            dui viverra mus. Feugiat in fusce vehicula condimentum conubia id
            laoreet.
          </p>
        </div>
        <button className="px-6 py-3 bg-[#171F57] text-white font-medium rounded-full transition-all duration-300 transform hover:scale-95 active:scale-90 hover:bg-sky-500 self-center md:self-center cursor-pointer">
          View All Blog
        </button>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {blogs.map((blog) => (
          <div key={blog.id} className="space-y-3">
            <div className="rounded-2xl overflow-hidden shadow-md">
              <Image
                src={blog.image}
                alt={blog.title}
                width={500}
                height={300}
                className="w-full h-56 sm:h-64 object-cover"/>
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-semibold text-blue-950 hover:text-blue-500 cursor-pointer leading-snug">
                {blog.title}
              </h2>
              <p className="flex items-center justify-center sm:justify-start gap-2 text-gray-500 mt-2 text-sm">
                <FaRegClock /> {blog.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
