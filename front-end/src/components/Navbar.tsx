import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <div className='flex justify-between items-center pr-20 pt-2'>
      <div>
        <img src="/logo.png" alt="" className='h-14' />
      </div>
      <div>
        <ul className='flex justify-center gap-14 darkblue font-bold items-center'>
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"/"}>Domains</Link></li>
            <li><Link href={"/"}>Projects</Link></li>
            <li><Link href={"/"}>Events</Link></li>
            <li><Link href={"/blog"}>Blog</Link></li>
            <li><Link href={"/"}>Team</Link></li>
            <li className='bgdarkblue text-white px-7 py-1 rounded-lg'><Link href={"/"}>Join us</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
