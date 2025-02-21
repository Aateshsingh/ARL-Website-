import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

function page() {
  return (
    <div>
      <Navbar />
      <div className='p-10'>
      <p className="font-semibold text-6xl darkblue ">Domains</p>

      <div className=' flex  justify-evenly mt-10'>
        <div className='flex items-center justify-center'>
            <img className='h-24' src="/aiml.png" alt="" />
            <p className='font-semibold text-2xl darkblue'>AI ML</p>
        </div>

        <div className='flex items-center justify-center'>
            <img className='h-24' src="/iot.png" alt="" />
            <p className='font-semibold text-2xl darkblue'>Electronics and IoT</p>
        </div>

        <div className='flex items-center justify-center'>
            <img className='h-24'  src="/healthcare.png" alt="" />
            <p className='font-semibold text-2xl darkblue'>Healthcare</p>
        </div>
      </div>

      <div className=' flex  justify-evenly mt-10'>
        <div className='flex items-center justify-center'>
            <img className='h-24' src="/creatives.png" alt="" />
            <p className='font-semibold text-2xl darkblue'>Creatives</p>
        </div>

        <div className='flex items-center justify-center'>
            <img className='h-24' src="/tech.png" alt="" />
            <p className='font-semibold text-2xl darkblue'>Technical</p>
        </div>

        <div className='flex items-center justify-center'>
            <img className='h-24'  src="/pr.png" alt="" />
            <p className='font-semibold text-2xl darkblue'>Corporate & PR</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default page
