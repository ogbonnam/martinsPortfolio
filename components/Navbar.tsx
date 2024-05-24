import React from 'react'
import NavLinks from './NavLinks'
import { inter, roboto } from '@/app/ui/font'

export default function Navbar() {
  return (
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
     <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
       {/* <img src={locofy} /> */}
       <h2>TESTED</h2>
     </a>
     <div className={`${roboto.className} md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center`}>
        <NavLinks />
     </div>
     <button className="inline-flex items-center bg-yellow-500 border-0 py-1 px-3 mt-4 md:mt-0">Click Me</button>
  </div>
  )
}
