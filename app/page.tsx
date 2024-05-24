import Image from "next/image";
import Link from "next/link";
import {inter, roboto} from "@/app/ui/font"
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import HomepostCard from "@/components/blog/HomepostCard";


export default function Home() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
          {/* <Image 
            src="/head.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          /> */}
      <div className="w-11/12 relative z-[-1] flex flex-col place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
      <h1 className={`${inter.className} text-black text-6xl text-center font-extrabold`}>Let me Help You Build Your Next Modern Website. <strong className="text-color-red-300">Easy Pissy!!! </strong></h1>
      <p className={`${roboto.className} text-black w-4/5 pt-5 text-xl font-bold text-center`}>I can bring your next big idea to life using code. I love playing with code, designing your frontend using modern technology, building the backend and its database and automating and deploying your product using DevOps pipeline.</p>
      
      </div>
      <div className="pt-8 flex items-center">
        <button className={`{$roboto.classname} m-5 bg-black hover:bg-transparent hover:text-black rounded-sm text-white p-3 text-sm text-extrabold`}>
          Contact Me
        </button>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Button
        </button>
      </div>
      
      <div className="flex flex-col my-52">
        <h2 className={`${roboto.className} text-center font-extrabold text-5xl`}>Some Favorite Posts</h2>
        <div className="flex  flex-wrap  w-full my-16">
          {posts.map((post, idx) => (
            <HomepostCard key={idx} {...post} />
          ))}
        </div>
        <div className="flex flex-col items-center">
          <button className="w-48 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            View All Posts
          </button>
        </div>
      </div>

        
      

 
    </main>
    </>
    
  );
}
