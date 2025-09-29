"use client";
import Image from "next/image";
import Link from "next/link";
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
  const featured = [
    {
      id: 1,
      title: "SaaS providers handle all software updates and maintenance",
      date: "August 24, 2024",
      image: "/Blog4.jpg",
      slug: "saas-providers-updates",
    },
    {
      id: 2,
      title: "One of the most significant advantages of SaaS is its cost structure",
      date: "August 23, 2024",
      image: "/Blog5.jpg",
      slug: "saas-cost-structure",
    },
  ];

  const blogs = [
    {
      id: 1,
      title: "The Role Of Customer Feedback In SaaS Product Development",
      date: "August 23, 2024",
      image: "/Blog1.jpg",
      slug: "customer-feedback-saas",
    },
    {
      id: 2,
      title: "How To Define Your SaaS Startup’s Unique Value Proposition",
      date: "August 23, 2024",
      image: "/Blog2.jpg",
      slug: "saas-unique-value-prop",
    },
    {
      id: 3,
      title: "SaaS Has Transformed The Way Businesses Access And Utilize Software",
      date: "August 22, 2024",
      image: "/Blog3.jpg",
      slug: "saas-transform-business",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className={interTight.className}>
        <section className="w-full bg-gradient-to-r from-[#dbeafe] via-[#ccfbf1] to-[#f3e8ff] py-26 text-center">
          <h2 className="text-5xl text-[#13164B] mb-4 font-medium">Blog</h2>
          <p className="max-w-2xl mx-auto text-sm text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec <br />
            ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </section>
      </div>

      {/* Blog Section */}
      <section className={`${interTight.className} py-16 px-6 md:px-20 bg-white`}>
        <div className="max-w-2xl mb-12">
          <h1 className="text-5xl font-medium text-blue-950">
            Latest Articles &{" "}
            <span className={`${instrumentSerif.className} text-blue-500 italic font-normal`}>
              Resources
            </span>
          </h1>
          <p className="text-gray-500 mt-4">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Duis eu neque
            dui viverra mus. Feugiat in fusce vehicula condimentum conubia id
            laoreet.
          </p>
        </div>

        {/* Featured Boxes */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-7xl mx-auto">
          {featured.map((item) => (
            <Link key={item.id} href={`/Blog/${item.slug}`}>
              <div className="space-y-3 cursor-pointer">
                <div className="rounded-3xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={800}
                    height={400}
                    className="w-full h-96 object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-medium text-blue-950 hover:text-blue-500 leading-snug">
                    {item.title}
                  </h2>
                  <p className="flex items-center gap-2 text-gray-500 mt-1 text-sm">
                    <FaRegClock /> {item.date}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogs.map((blog) => (
            <Link key={blog.id} href={`/Blog/${blog.slug}`}>
              <div className="space-y-3 cursor-pointer">
                <div className="rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-blue-950 hover:text-blue-500 leading-snug">
                    {blog.title}
                  </h2>
                  <p className="flex items-center gap-2 text-gray-500 mt-2 text-sm">
                    <FaRegClock /> {blog.date}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}























































