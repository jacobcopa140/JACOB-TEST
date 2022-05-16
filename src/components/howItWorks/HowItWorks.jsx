import React from 'react'
import './../howItWorks/howItWorks.css'
import IMG1 from '../../assets/art1.png'
import IMG2 from '../../assets/art2.png'
import IMG3 from '../../assets/art3.png'
import DARBS from '../../assets/RTD img4.png'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'ARTIST SELL',
    paragraph: 'Influencera use royal to sell royalty ownership in their songs and give collectors access to special perks.'
  },
  {
    id: 2,
    image: IMG2,
    title: 'COLLECTOR SELL',
    paragraph: 'Collectors can buy royalty ownership in Vlogs directly from their favorite artists in the form of tokens.'
  },
  {
    id: 3,
    image: IMG3,
    title: 'BOTH RISE',
    paragraph: 'Collectors can claim royalties for the vlog they own after they’ve accrued. When artists grow, everyone wins.'
  }
]

const howItWorks = () => {
  return (
    <section className='howItWorks mt-20 bg-white'>
      <div className='howItWorks-container'>
        <div className='grid grid-rows-2 pt-8 lg:pt-32 mb-10'>
          <h2 className='flex justify-center text-4xl font-bold'>How it works</h2>
          <h4 className='flex justify-center text-xl font-semibold'>Artist and fans co-own vlog together</h4>
        </div>
        <div className='grid sm:grid-cols-3 gap-4 mx-4 2xl:mx-40'>
          {
            data.map(({ image, title, paragraph }) => {
              return (
                <article className='blog_item'>
                  <div className="blog_item-image mb-20">
                    <img className='w-full' src={image} alt={title} />
                    <div className=''>
                      <h3 className='mt-4 font-bold'>{title}</h3>
                      <p className=''>{paragraph}</p>
                    </div>
                  </div>
                </article>
              )
            })
          }
        </div>
      </div>

      {/* WHY REALTALK DARBS  */}

      <div className='whyRTD bg-black text-white h-40 flex justify-center'>
        <div className='pt-14 mx-4'>
          <h4 className='absolute text-xs'>_Why <span className='text-red-800'>Real Talk</span> Darbs</h4>
          <h3 className='lg:text-3xl mt-4'>We're building tools to connect artists and fans all around the world like never before.</h3>
        </div>
      </div>

      {/* IMAGE  */}

      <div className='w-full'>
        <img className='cover' src={DARBS} alt="" />
      </div>

      {/* INFLUENCER  */}

      <div className='influencer-container'>
        <div className='flex justify-center mx-8'>
          <div className='grid grid-rows-2'>
            <div className='pt-14 mx-4'>
              <h4 className='absolute text-md'>_Influencer</h4>
              <h3 className='text-6xl mt-4'>Are you an Influencer?</h3>
            </div>
            <div className='grid lg:grid-cols-3 gap-4 border-t-4 border-b-4 p-8 border-black my-10'>
              <div className='col-span-2'>
                <p className='text-xl'>Want to partner with us on this project? We'd love to hear from you.
                <br />
                Please get in touch with us to get started.</p>
              </div>
              <div className='flex lg:justify-end'>
                <button className='influencer-btn p-2 px-4 text-white font-bold'>APPLY FOR A DROP</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default howItWorks