"use client";

import { useEffect, useState, useCallback } from "react";
import { useParams } from "next/navigation";
import { db } from "@/app/firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { Inter_Tight } from "next/font/google";
import {
  FaYoutube,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEdit,
} from "react-icons/fa";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface Blog {
  id: string;
  title: string;
  author: string;
  details: string;
  email?: string;
  category?: string;
  createdAt?: {
    seconds: number;
    nanoseconds: number;
  };
}

export default function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const [editTitle, setEditTitle] = useState("");
  const [editDetails, setEditDetails] = useState("");
  const [editCategory, setEditCategory] = useState("");

  const fetchBlog = useCallback(async () => {
    if (!id) return;
    const docRef = doc(db, "blogs", id as string);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = { id: docSnap.id, ...(docSnap.data() as Omit<Blog, "id">) };
      setBlog(data);
      setEditTitle(data.title);
      setEditDetails(data.details);
      setEditCategory(data.category || "");
    }
  }, [id]);

  useEffect(() => {
    fetchBlog();
  }, [fetchBlog]);

  const handleSave = async () => {
    if (!blog) return;
    const docRef = doc(db, "blogs", blog.id);

    await updateDoc(docRef, {
      title: editTitle,
      details: editDetails,
      category: editCategory,
    });

    setBlog({
      ...blog,
      title: editTitle,
      details: editDetails,
      category: editCategory,
    });
    setIsEditing(false);
  };

  if (!blog)
    return <p className="text-center mt-20 text-gray-500 text-xl">Loading...</p>;

  return (
    <div className="max-w-full bg-gradient-to-r from-[#dbeafe] via-[#ccfbf1] to-[#f3e8ff]">
      <div
        className={`max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-4 gap-10 ${interTight.className}`}
      >
        {/* Sidebar */}
        <aside className="md:col-span-1 md:sticky md:top-24 h-fit space-y-6">
          {/* Author Info */}
          <div className="pb-4 border-b border-gray-300">
            <h2 className="font-bold text-lg mb-2">Author Info</h2>
            <p className="text-gray-700">
              <span className="block">
                <strong>Author:</strong> {blog.author}
              </span>
              <span className="block">
                <strong>Date:</strong>{" "}
                {blog.createdAt
                  ? new Date(blog.createdAt.seconds * 1000).toLocaleDateString()
                  : "No Date"}
              </span>
              {blog.email && (
                <span className="block">
                  <strong>Email:</strong> {blog.email}
                </span>
              )}
            </p>
          </div>

          {/* Newsletter */}
          <div className="pb-4 border-b border-gray-300">
            <h2 className="font-bold text-lg mb-2">Newsletter</h2>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg p-3 mb-3 focus:ring-2 focus:ring-blue-700 focus:outline-none"
            />
            <button className="w-full bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-semibold">
              Subscribe
            </button>
          </div>

          {/* Categories */}
          <div className="pb-4 border-b border-gray-300">
            <h2 className="font-bold text-lg mb-2">Categories</h2>
            {isEditing ? (
              <input
                type="text"
                value={editCategory}
                onChange={(e) => setEditCategory(e.target.value)}
                placeholder="Enter category"
                className="w-full border border-gray-300 rounded-lg p-2 text-gray-700 mb-2"
              />
            ) : (
              <p className="text-gray-700 font-medium">
                {blog.category ? blog.category : "No Category"}
              </p>
            )}
          </div>

          {/* Socials */}
          <div className="pb-4 border-b border-gray-300">
            <h2 className="font-bold text-lg mb-2">Socials</h2>
            <div className="flex gap-3">
              <a className="w-10 h-10 flex items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-600 hover:text-white transition">
                <FaYoutube />
              </a>
              <a className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition">
                <FaLinkedin />
              </a>
              <a className="w-10 h-10 flex items-center justify-center rounded-full bg-sky-100 text-sky-500 hover:bg-sky-500 hover:text-white transition">
                <FaTwitter />
              </a>
              <a className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-100 text-pink-500 hover:bg-pink-500 hover:text-white transition">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Comments */}
          <div className="pb-4 border-b border-gray-300">
            <h2 className="font-bold text-lg mb-2">Leave a Reply</h2>
            <textarea
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-700 focus:outline-none mb-4"
              rows={4}
              placeholder="Write your comment..."
            />
            <button className="w-full bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-semibold">
              Post Comment
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <div className="md:col-span-3">
          {isEditing ? (
            <input
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 text-4xl font-bold text-blue-900 mb-6"
            />
          ) : (
            <h1 className="text-5xl font-extrabold text-blue-900 text-center mb-10">
              {blog.title}
            </h1>
          )}

          {isEditing ? (
            <textarea
              value={editDetails}
              onChange={(e) => setEditDetails(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-4 text-gray-800 mb-12"
              rows={10}
            />
          ) : (
            <div
              className="prose max-w-3xl mx-auto text-gray-800 mb-12"
              dangerouslySetInnerHTML={{ __html: blog.details }}
            />
          )}

          {/* Edit / Save */}
          <div className="flex justify-end">
            {isEditing ? (
              <button
                onClick={handleSave}
                className="bg-blue-900 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition font-semibold"
              >
                Save Changes
              </button>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center gap-2 text-blue-900 hover:text-blue-600 font-semibold text-lg transition"
              >
                <FaEdit className="text-xl" /> Edit Blog
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
