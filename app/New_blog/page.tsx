"use client";
import { useEffect, useState } from "react";
import { db } from "@/app/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { Inter_Tight } from "next/font/google";
import Link from "next/link";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

type Blog = {
  id: string;
  title: string;
  author: string;
  details: string;
  image?: string;
  createdAt?: {
    seconds: number;
    nanoseconds: number;
  };
};

export default function NewBlog() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const fetchBlogs = async () => {
    const querySnapshot = await getDocs(collection(db, "blogs"));
    const data: Blog[] = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<Blog, "id">),
    }));
    setBlogs(data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className={`w-full ${interTight.className} bg-gradient-to-r from-[#dbeafe] via-[#ccfbf1] to-[#f3e8ff]`}>
      <section className="w-full py-26 text-center">
        <h2 className="text-5xl text-[#13164B] mb-4 font-medium">
          Features
        </h2>
        <p className="max-w-2xl mx-auto text-sm text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Ut elit tellus, luctus nec <br /> ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </section>

      {blogs.length === 0 ? (
        <p className="text-center text-gray-500">No blogs found.</p>
      ) : (
        <div className="space-y-8 mt-12 ">
          {blogs.map((blog: Blog) => (
            <div key={blog.id} className="text-center">
              {/* Blog Title */}
              <Link
                href={`/New_blog/${blog.id}`}
                className="text-7xl font-extrabold text-blue-950 hover:text-sky-500 transition duration-300 block"
              >
                {blog.title}
              </Link>

              {/* Divider Line */}
              <div className="mt-4 border-b border-gray-400 w-full"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
