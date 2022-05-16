import React from 'react'
import './../vlogging/Vlogging'
import DARBS from '../../assets/RTD img3.png'

const Vlogging = () => {
  return (
    <section className='bg-black h-60 vlogging-container'>
      <div className='grid grid-cols-3 mx-4 text-white xl:mx-60'>
        <div className='mt-8 flex justify-center'>
          <img className='contain' src={DARBS} alt="" />
        </div>
        <div className='mt-16 col-span-2 mx-2'>
          <h2 className='text-lg'>VLOGGING MASTERCLASS</h2>
          <p className='text-xs mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra quisque diam est, pulvinar. Consequat, nunc, at felis dictumst dui at. Facilisis mauris aliquam vulputate pellentesque magna ullamcorper integer velit. Diam diam imperdiet mauris vel vehicula. Orci nec eleifend dictum odio magnis.</p>
        </div>
      </div>
    </section>
  )
}

export default Vlogging