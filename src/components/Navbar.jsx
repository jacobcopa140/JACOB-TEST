import React from 'react'

const Navbar = () => {
  return (

    <nav className='grid grid-cols-3'>
      {/* LOGO  */}
      <div className='grid'>
        <h2 className='text-red-800 text-6xl bg-white font-bold bg-white w-40'><span className='ml-6'>RT<span className='text-black'>D</span></span></h2>
      </div>
      <div className='mt-4'>
        <ul className='md:flex hidden md:block gap-4 justify-center text-md font-bold'>
          <li>
            <a href="" className='text-red-600'>DASHBOARD</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Events</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
      <div className='gap-4 sm:flex justify-end text-md hidden sm:block mt-4 font-bold mr-6'>
        <a href="" className=''>Login</a>
        <div className='h-6 bg-white w-1'></div>
        <a href="">Sign Up</a>
      </div>
    </nav>
  )
}

export default Navbar