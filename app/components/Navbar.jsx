import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='max-w-3xl bg-slate-400 mx-auto px-4 sm:px-6 lg:px-8'>
       <div className="flex bg-black justify-between h-16">
        <div className="flex bg-pink-500 justify-between items-center w-full">
            <Link href={'/'}>
                <h1 className='text-3xl font-medium'>
                    Ahmads <span className='text-teal-500'>Blog</span>
                </h1>
            </Link>
        </div>
        
       </div>
      
    </div>
  )
}

export default Navbar
