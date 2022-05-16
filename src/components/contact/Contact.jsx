import React from 'react'
import './../contact/contact.css'
import DARBS from './../../assets/contact IMG.png'
import { AiOutlinePlusCircle } from 'react-icons/ai'

const Contact = () => {
  return (
    <section className='contact-container bg-white'>
      <div className='contact-bg'>
        <img className='cover' src={DARBS} alt="" />
      </div>

      {/* HAVE QUESTIONS  */}

      <div className=''>
        <div className='mx-4 lg:mx-60'>
          <div className='my-16'>
            <h3 className='text-5xl font-bold mt-4'>Have questions? We got you.</h3>
          </div>
          <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 font-semibold text-sm xl:text-2xl ">
            <div class="col-span-2 p-4 border-b-2 border-black">
              <h3 className='mt-2'>Who is Darbs ?</h3>
            </div>
            <div className='flex justify-end p-4 border-b-2 border-black'>
              <AiOutlinePlusCircle className='h-10 w-10 ' />
            </div>
            <div class="col-span-2 p-4 border-b-2 border-black">
              <h3 className='mt-2'>How do we work ?</h3>
            </div>
            <div className='flex justify-end p-4 border-b-2 border-black'>
              <AiOutlinePlusCircle className='h-10 w-10 ' />
            </div>
            <div class="col-span-2 p-4 border-b-2 border-black">
              <h3 className='mt-2'>When I purchase a token, what do I get ?</h3>
            </div>
            <div className='flex justify-end p-4 border-b-2 border-black'>
              <AiOutlinePlusCircle className='h-10 w-10 ' />
            </div>
            <div class="col-span-2 p-4 border-b-2 border-black">
              <h3 className='mt-2'>How do I play with Darbs ?</h3>
            </div>
            <div className='flex justify-end p-4 border-b-2 border-black'>
              <AiOutlinePlusCircle className='h-10 w-10 ' />
            </div>
            <div class="col-span-2 p-4 border-b-2 border-black">
              <h3 className='mt-2'>What wallets can I use ?</h3>
            </div>
            <div className='flex justify-end p-4 border-b-2 border-black'>
              <AiOutlinePlusCircle className='h-10 w-10 ' />
            </div>
          </div>
          <div className='py-10'>
            <button className='contact-btn px-4 p-2 font-bold text-white'>VISIT OUR HELP CENTER</button>
          </div>
        </div>
      </div>



    </section>
  )
}

export default Contact