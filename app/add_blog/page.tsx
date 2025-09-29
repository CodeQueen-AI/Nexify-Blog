"use client";

import { useState } from "react";
import { db } from "@/app/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { Inter_Tight } from "next/font/google";
import { useRouter } from "next/navigation";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function AddBlog() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [popup, setPopup] = useState<{ message: string; success: boolean } | null>(null);

  const router = useRouter();
  const editor = useEditor({
    extensions: [StarterKit],
    content: "",
    immediatelyRender: false, 
  });

  const addBlog = async () => {
    const details = editor?.getHTML() || "";

    if (!title || !author || !details || !email || !category) {
      setPopup({ message: "Please fill all fields!", success: false });
      return;
    }

    try {
      await addDoc(collection(db, "blogs"), {
        title,
        author,
        email,
        category,
        details,
        createdAt: new Date(),
      });

      setTitle("");
      setAuthor("");
      setEmail("");
      setCategory("");
      editor?.commands.setContent(""); // clear editor content

      setPopup({ message: "Blog Added Successfully!", success: true });

      setTimeout(() => {
        router.push("/New_blog");
      }, 2000);
    } catch (error) {
      console.error("Error adding blog:", error);
      setPopup({ message: "Failed to add blog!", success: false });
    }
  };

  return (
    <div className={interTight.className}>
      {/* Banner Section */}
      <section className="w-full bg-gradient-to-r from-[#dbeafe] via-[#ccfbf1] to-[#f3e8ff] py-20 text-center">
        <h2 className="text-5xl font-semibold text-blue-950 mb-4">Add Blog</h2>
        <p className="max-w-2xl mx-auto text-gray-700 leading-relaxed text-sm">
          Fill out the form below to publish your blog. After adding, you’ll be redirected to the Blogs page.
        </p>
      </section>

      {/* Form Section */}
      <div className="flex justify-center mt-10 px-4 relative">
        <div className="w-full max-w-2xl">
          {/* Title & Author in one row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Title</label>
              <input
                type="text"
                placeholder="Enter blog title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border border-gray-500 p-3 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Author</label>
              <input
                type="text"
                placeholder="Enter author name"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="border border-gray-500 p-3 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Email & Category in one row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-500 p-3 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Category</label>
              <input
                type="text"
                placeholder="Enter category (e.g. Tech, AI, Lifestyle)"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border border-gray-500 p-3 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Details with Tiptap */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Details</label>
            <div className="border border-gray-600 p-3 rounded min-h-[200px]">
              {editor && <EditorContent editor={editor} />}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button
              onClick={addBlog}
              className="bg-blue-950 text-white px-13 py-4 rounded-full font-medium cursor-pointer transform transition duration-300 hover:bg-sky-500 hover:scale-105"
            >
              Add Blog
            </button>
          </div>

          {/* Popup */}
          {popup && (
            <div className="absolute inset-0 flex items-center justify-center z-50">
              <div
                className={`px-6 py-3 rounded-lg border-2 ${
                  popup.success
                    ? "border-green-700 text-green-700"
                    : "border-red-700 text-red-700"
                } bg-white/30 backdrop-blur-md font-semibold shadow-lg transition-all`}
              >
                {popup.message}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
