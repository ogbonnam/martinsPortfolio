import React from 'react'
import NavLinks from './NavLinks'
import Image from 'next/image'
import { inter, roboto } from '@/app/ui/font'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="container bg-red-300 mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center w-full">
     <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
       {/* <img src={locofy} /> */}
      <Link href="/"><Image src="/ogbonnaLogo.png" height={50} width={50} alt='Logo for ogbonna martins' /></Link>
     </a>
     <div className={`${roboto.className} md:ml-auto md:mr-auto flex flex-wrap items-center text-base text-black justify-center text-extrabold`}>
        <NavLinks />
     </div>
     <button className="inline-flex items-center bg-red-500 border-0 py-1 px-3 mt-4 md:mt-0">LOGIN</button>
  </div>
  )
}
