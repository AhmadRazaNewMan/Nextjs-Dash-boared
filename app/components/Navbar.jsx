import Link from 'next/link'
import React from 'react'
import Thembutton from './Thembutton'
// import './globals.css'

const Navbar = () => {
  return (
    <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>
       <div className="flex shadow-md justify-between h-16">
        <div className="flex justify-between items-center w-full">
            <Link href={'/'}>
                <h1 className='text-3xl my-10 font-medium'>
                    Ahmads <span className='text-teal-500'>Blog</span>
                </h1>
            </Link>
            <Thembutton/>
        </div>
        
       </div>
      
    </div>
  )
}

export default Navbar
