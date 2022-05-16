import React from 'react'
import './../main/main.css'
import DARBS from '../../assets/RTD img1.png'
import { AiFillFacebook } from 'react-icons/ai'
import { BsTwitter, BsInstagram, BsDiscord } from 'react-icons/bs'

const Main = () => {
  return (
    <section className='main-container'>
      {/* underline  */}
      <div className='bg-white h-1'></div>
      <div className='grid sm:grid-cols-2 mt-8 lg:mt-28 mx-8'>
        <div className='mt-8 xl:mt-28'>
          <div className='xl:ml-32'>
            <h2 className='uppercase text-sm sm:text-lg md:text-4xl lg:text-5xl'>Invest in real talk darbs <br></br> & own your <br></br> heart healing sessions</h2>

            {/* PARAGRAPH  */}

            <div className='2xl:px-40'>
              <div className='flex'>
                <div className='w-28 mt-4 lg:mt-7 h-1 bg-white'></div>
                <p className='text-xs ml-2 sm:text-sm mt-2 md:text-md lg:text-xl lg:mt-4 text-gray-500'>Real Talk Darbs is a Philippine-based Influencer and video producer with a penchant for working within absurd, self-imposed limitations and romantic life.</p>
              </div>

              {/* button  */}

              <button className='main-btn lg:p-2 ml-8 md:ml-12 sm:ml-11 px-2 text-white lg:px-8 mt-4 sm:mt-6 lg:mt-8'>Read More</button>
            </div>

            {/* SOCIAL MEDIA ICONS  */}
            <div className='flex gap-2 sm:gap-8 lg:gap-12 mt-4 sm:mt-12 xl:mt-40 mb-4'>
              <div className='mt-2 lg:mt-4 h-1 w-20 bg-red-900'></div>
              <AiFillFacebook className='sm:h-6 sm:w-6 lg:h-8 lg:w-8' />
              <BsTwitter className='sm:h-6 sm:w-6 lg:h-8 lg:w-8' />
              <BsDiscord className='sm:h-6 sm:w-6 lg:h-8 lg:w-8' />
              <BsInstagram className='sm:h-6 sm:w-6 lg:h-8 lg:w-8' />
            </div>

          </div>
        </div>

        {/* IMAGE  */}

        <div className='main hidden sm:block'>
          <img src={DARBS} className='' alt="" />
          <div className='main-bg hidden 2xl:block'></div>
        </div>
      </div>

      <div className='main-styles'>
        <div className='main-styles1'></div>
        <div className='main-styles2'></div>
        <div className='main-styles3'></div>
        <div className='main-styles4'></div>
      </div>

    </section>
  )
}

export default Main