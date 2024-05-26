import React from 'react'
import Image from 'next/image'
import {inter, roboto} from "@/app/ui/font"

export default function page() {
  return (
    <div className="flex gap-8 columns-2 mx-40 my-28">
       <Image className="w-1/3" src="/code.jpg"  width={700} height={500} alt='some image' />
       <div className='w-2/3'>
         <h1 className={`${roboto.className} text-left text-5xl text-red-900 text-extrabold mb-12`}><strong>OGBONNA MARTINS</strong></h1>
         <h3 className={`${roboto.className} text-left text-3xl text-gray-800`}>
          Hello there! My name is <strong>Ogbonna Martins.</strong>&nbsp;
          I am a web developer and an operations specialist now commonly
          referred to as a <strong><i>DevOps Engineer</i></strong>, and I'm very passionate and
          dedicated to my work.
        </h3>
        <h3 className={`${roboto.className} text-left text-3xl text-gray-800 mt-8`}>
          With 15 years of experience as a professional operations
          specialist and web developer, I have acquired the
          skills and knowledge necessary to make your project a success.
        </h3>
        <h3 className={`${roboto.className} text-left text-3xl text-gray-800 mt-8`}>
          I enjoy every step of the development lifecycle,
          from discussion and collaboration, to turning your ideas into reality using code and then creating
          automated pipelines to easily test, secure and push your code to production.
        </h3>
        <h5 className={`${roboto.className} text-left text-gray-500 text-3xl mt-4`}>
          Email me at : contactme@ogbonnamartins.com
        </h5>
       </div>       
    </div>
  )
}
