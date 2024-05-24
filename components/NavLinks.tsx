import React from 'react'
import Link from 'next/link'



export default function NavLinks() {
    const navLinks = [
        {
            "id": 1,
            "title": "Home",
            "path": "/"
        },
        {
            "id": 2,
            "title": "About",
            "path": "/about"
        },
        {
            "id": 3,
            "title": "Posts",
            "path": "/posts"
        },
        {
            "id": 4,
            "title": "Contact",
            "path": "/contact"
        }
    ]
  return (
    <div>
        {navLinks.map((navLink =>(
            <Link href={navLink.path} key={navLink.id} className='m-2 p-5'>{navLink.title}</Link>
        )))}
    </div>
  )
}
