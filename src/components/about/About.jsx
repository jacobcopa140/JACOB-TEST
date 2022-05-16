import React from 'react'
import './../about/about.css'
import DARBS from '../../assets/RTD img2.png'

const About = () => {
  return (
    <section className='about-container p-5 bg-white'>
      <div className='grid mx-2 lg:grid-cols-2 mt-5 lg:mt-28 2xl:my-96'>
        <div className='flex justify-center'>
          <img className='contain about_img' src={DARBS} alt="" />
        </div>
        <div className='p-5'>
          <h4 className='about-socialMedia absolute mt-3'>Social Media Influencer</h4>
          <h2 className='text-3xl sm:text-5xl mt-9'>Who is Real Talk Darbs</h2>
          <p>A versatile and prolific social media influencer and a love guro, he has released over 200 vlogs in a massive range of genres. He is perhaps best known for the Heart Healing Sessions which have earned him over 2.5 million subscribers and 250 million views on his YouTube channel.</p>
          <p className='mt-10'>In addition, his content runs the gamut from love advice to motivational videos to interactive projects with his fans. Watch Real Talk Darbs on YouTube or stream his discography on Spotify, Apple Music, Facebook, or anywhere else in a social media platform. </p>
          <button className='about-btn text-white p-2 px-4 mt-5 md:mt-20 lg:px-8'>Read More</button>
        </div>
      </div>
      <div className='about-style'></div>
    </section>
  )
}

export default About