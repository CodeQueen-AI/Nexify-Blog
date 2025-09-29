"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Inter_Tight } from "next/font/google";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const blogsData = [
  {
    slug: "saas-providers-updates",
    title: "SaaS providers handle all software updates and maintenance",
    date: "August 24, 2024",
    author: "John Doe",
    image: "/Blog4.jpg",
    content: "Lorem ipsum odor amet, consectetuer adipiscing elit. Purus maximus tristique habitasse tristique turpis fames efficitur proin. Ullamcorper hendrerit ac primis quam metus justo varius. Tellus viverra curabitur ipsum consequat fermentum nostra. Erat blandit lacinia aptent hendrerit integer vel. Augue nostra ornare tempor; placerat eleifend et quam class egestas. Pellentesque amet diam libero laoreet phasellus commodo rhoncus turpis",
  },
  {
    slug: "saas-cost-structure",
    title: "One of the most significant advantages of SaaS is its cost structure",
    date: "August 23, 2024",
    author: "John Doe",
    image: "/Blog5.jpg",
    content: "Lorem ipsum odor amet, consectetuer adipiscing elit. Purus maximus tristique habitasse tristique turpis fames efficitur proin. Ullamcorper hendrerit ac primis quam metus justo varius. Tellus viverra curabitur ipsum consequat fermentum nostra. Erat blandit lacinia aptent hendrerit integer vel. Augue nostra ornare tempor; placerat eleifend et quam class egestas. Pellentesque amet diam libero laoreet phasellus commodo rhoncus turpis",
  },
  {
    slug: "customer-feedback-saas",
    title: "The Role Of Customer Feedback In SaaS Product Development",
    date: "August 23, 2024",
    author: "John Doe",
    image: "/Blog1.jpg",
    content: "Lorem ipsum odor amet, consectetuer adipiscing elit. Purus maximus tristique habitasse tristique turpis fames efficitur proin. Ullamcorper hendrerit ac primis quam metus justo varius. Tellus viverra curabitur ipsum consequat fermentum nostra. Erat blandit lacinia aptent hendrerit integer vel. Augue nostra ornare tempor; placerat eleifend et quam class egestas. Pellentesque amet diam libero laoreet phasellus commodo rhoncus turpis",
  },
  {
    slug: "saas-unique-value-prop",
    title: "How To Define Your SaaS Startups Unique Value Proposition",
    date: "August 23, 2024",
    author: "John Doe",
    image: "/Blog2.jpg",
    content: "Lorem ipsum odor amet, consectetuer adipiscing elit. Purus maximus tristique habitasse tristique turpis fames efficitur proin. Ullamcorper hendrerit ac primis quam metus justo varius. Tellus viverra curabitur ipsum consequat fermentum nostra. Erat blandit lacinia aptent hendrerit integer vel. Augue nostra ornare tempor; placerat eleifend et quam class egestas. Pellentesque amet diam libero laoreet phasellus commodo rhoncus turpis",
  },
  {
    slug: "saas-transform-business",
    title: "SaaS Has Transformed The Way Businesses Access And Utilize Software",
    date: "August 22, 2024",
    author: "John Doe",
    image: "/Blog3.jpg",
    content: "Lorem ipsum odor amet, consectetuer adipiscing elit. Purus maximus tristique habitasse tristique turpis fames efficitur proin. Ullamcorper hendrerit ac primis quam metus justo varius. Tellus viverra curabitur ipsum consequat fermentum nostra. Erat blandit lacinia aptent hendrerit integer vel. Augue nostra ornare tempor; placerat eleifend et quam class egestas. Pellentesque amet diam libero laoreet phasellus commodo rhoncus turpis",
  },
];

export default function BlogDetailPage() {
  const params = useParams();
  const blog = blogsData.find((b) => b.slug === params.slug);

  if (!blog) return <p className="text-center mt-10">Blog not found!</p>;

  return (
    <div className={`${interTight.className} max-w-6xl mx-auto py-16 px-6`}>
      <div className="flex items-center justify-center text-gray-500 mb-4 gap-2 text-lg">
        <span>{blog.date}</span>
        <span className="w-2 h-2 bg-blue-950 rounded-full inline-block"></span>
        <span>{blog.author}</span>
      </div>
      <h1 className="text-5xl font-medium text-blue-950 text-center mb-8">{blog.title}</h1>
      <Image
        src={blog.image}
        alt={blog.title}
        width={1500}
        height={800}
        className="w-full h-auto rounded-2xl mb-6"/>
      <p className="text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto text-left">{blog.content}</p>

      <p className="text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto text-left mt-6">
        Magna commodo nec nibh volutpat donec sociosqu vivamus lacinia. Interdum porta habitant orci etiam himenaeos faucibus justo. Aptent aliquet venenatis sodales orci faucibus accumsan. Fermentum morbi nostra placerat penatibus ipsum. Diam elit a ac porta mauris dapibus. Etiam congue ligula luctus nostra vivamus congue habitant venenatis. Ullamcorper libero a varius congue egestas dis taciti.
      </p>

      <h1 className="text-blue-950 text-2xl font-medium text-left mt-6 max-w-3xl mx-auto">Choosing the Right SaaS: A Proper Buyers Guide</h1>
      <p className="text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto text-left mt-6">
        Sem et quam vestibulum eu interdum hendrerit gravida auctor? Ultrices quis nulla eu dignissim hac congue. Nulla bibendum proin felis integer adipiscing porta vivamus! Volutpat mauris cras interdum ornare porta. Rutrum phasellus in primis tincidunt magna venenatis nibh? Nullam habitant nulla metus mus ultrices pulvinar viverra vestibulum.
      </p>

      <ul className="text-gray-700 text-lg space-y-2 max-w-3xl mx-auto text-left mt-1">
        <li className="flex items-center gap-2">
          <span className="w-2 h-2 bg-blue-500 rounded-full inline-block"></span>
          Sed platea pharetra phasellus platea parturient hendrerit primis
        </li>
        <li className="flex items-center gap-2">
          <span className="w-2 h-2 bg-blue-500 rounded-full inline-block"></span>
          Consectetur habitant ad dapibus consequat ex
        </li>
        <li className="flex items-center gap-2">
          <span className="w-2 h-2 bg-blue-500 rounded-full inline-block"></span>
          Parturient iaculis ornare nam eleifend ante conubia dignissim.
        </li>
        <li className="flex items-center gap-2">
          <span className="w-2 h-2 bg-blue-500 rounded-full inline-block"></span>
          Quis maximus vulputate sem risus efficitur tellus iaculis.
        </li>
      </ul>
      <div className="w-full mt-10 flex justify-center">
        <Image
          src="/Slug.jpg"
          alt="Additional Blog Image"
          width={1200}
          height={800}
          className="w-full h-auto rounded-2xl"/>
      </div>

      <p className="text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto text-left mt-6">
        Magna commodo nec nibh volutpat donec sociosqu vivamus lacinia. Interdum porta habitant orci etiam himenaeos faucibus justo. Aptent aliquet venenatis sodales orci faucibus accumsan. Fermentum morbi nostra placerat penatibus ipsum. Diam elit a ac porta mauris dapibus. Etiam congue ligula luctus nostra vivamus congue habitant venenatis. Ullamcorper libero a varius congue egestas dis taciti
      </p>

      <h1 className="text-blue-950 text-3xl text-left mt-6 max-w-3xl mx-auto">
        &quot;SaaS Companies Are Built On The Belief That Software Should Be Easy To Use Scalable And Available From Anywhere&quot;
      </h1>
      <h1 className="text-blue-950 text-2xl text-left mt-6 max-w-3xl mx-auto">
        Stan Powers <span className="text-lg text-gray-500">- CEO Nexify</span>
      </h1>

      <p className="text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto text-left mt-6">
        Vestibulum luctus lacinia lectus vivamus commodo. Eros quis amet etiam iaculis per velit volutpat. Cursus porttitor tortor quisque dis fames nostra litora. Vitae efficitur etiam litora pulvinar pharetra gravida dictum. Nunc metus per scelerisque elementum nec. Sed nec potenti donec erat tempus sociosqu. Tempor quis enim iaculis, per sapien
      </p>

      <p className="text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto text-left mt-6">
        Phasellus tempus morbi luctus aptent scelerisque. Eros lorem felis tellus vel porttitor. Dapibus fermentum primis laoreet egestas maecenas est erat. Ad proin imperdiet nascetur aliquet risus venenatis. Avel malesuada luctus malesuada eget nibh facilisi sollicitudin. Fames parturient fames lacus bibendum magna per vestibulum. Faucibus gravida lobortis nostra hac imperdiet auctor? Dis ipsum aliquet bibendum cursus dignissim viverra.
      </p>

      <div className="max-w-3xl mx-auto text-center mt-8">
        <div className="flex items-center justify-center gap-4 mb-2">
          <h1 className="text-blue-950 leading-relaxed text-xl font-medium">Share This :</h1>
          
          <a href="#" className="w-10 h-10 bg-blue-950 text-white flex items-center justify-center rounded-full hover:bg-sky-400 transition-colors">
            <FaFacebookF />
          </a>
          <a href="#" className="w-10 h-10 bg-blue-950 text-white flex items-center justify-center rounded-full hover:bg-sky-400 transition-colors">
            <FaTwitter />
          </a>
          <a href="#" className="w-10 h-10 bg-blue-950 text-white flex items-center justify-center rounded-full hover:bg-sky-400 transition-colors">
            <FaInstagram />
          </a>
          <a href="#" className="w-10 h-10 bg-blue-950 text-white flex items-center justify-center rounded-full hover:bg-sky-400 transition-colors">
            <FaYoutube />
          </a>
        </div>

        <div className="h-[1px] bg-gray-300 w-full mx-auto mt-5"></div>
      </div>
            {/* Comment Section */}
      <div className="max-w-3xl mx-auto mt-10">
        <h2 className="text-blue-950 text-2xl font-medium mb-4">Leave a Reply</h2>
        <p className="text-gray-600 mb-6">
          Your email address will not be published. Required fields are marked *
        </p>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Comment *
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-950 focus:outline-none"
            rows={5}
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Name *
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-950 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Email *
          </label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-950 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Website
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-950 focus:outline-none"
          />
        </div>
        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            id="saveInfo"
            className="w-4 h-4 text-blue-950 border-gray-300 rounded focus:ring-blue-950"
          />
          <label htmlFor="saveInfo" className="ml-2 text-gray-700">
            Save my name, email, and website in this browser for the next time I comment.
          </label>
        </div>
        <button
          type="submit"
          className="bg-blue-950 text-white px-6 py-3 rounded-full hover:bg-sky-400 transition-colors font-medium">
          Post Comment
        </button>
      </div>
    </div>
  );
}
