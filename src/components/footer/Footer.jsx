import React from 'react'
import './../footer/footer.css'
import { AiFillFacebook } from 'react-icons/ai'
import { BsTwitter, BsInstagram, BsDiscord } from 'react-icons/bs'

const data = [
  {
    title: 'Twitter',
    socials: 'https://twitter.com/RealTalkDarbs'
  },
  {
    title: 'Facebook',
    socials: 'https://www.facebook.com/RealTalkDarbs'
  },
  {
    title: 'Reddit',
    socials: ''
  },
  {
    title: 'Instagram',
    socials: 'https://www.instagram.com/realtalkdarbs/'
  },
  {
    title: 'Discord',
    socials: 'https://discord.com/channels/@me'
  },
]

const Footer = () => {
  return (
    <footer className='footer bg-black'>
      <div className='mx-4'>
        <div className='grid md:grid-cols-5 gap-2 pt-10'>
          <div className='flex justify-center grid grid-rows-2 gap-4 h-32'>
            <h1 className='font-bold bg-white p-2 px-8 text-3xl'><span className='footer-RT'>RT</span>D</h1>
            <div className='flex text-white justify-center gap-4'>
              <AiFillFacebook className='' />
              <BsTwitter className='' />
              <BsDiscord className='' />
              <BsInstagram className='' />
            </div>
          </div>
          <div className='flex justify-center text-white'>
            <p className='text-center'>A creative digital agency that provides enterprise-level marketing strategies and one-of-a-kind design and development solutions to our valued clients.</p>
          </div>
          <div className='flex justify-center text-white'>
            <div className='text-center'>
              <h3>Help Center</h3>
              <h3 className='my-2'>Support</h3>
            </div>
          </div>
          <div className='flex justify-center'>
            <div className='text-white flex gap-2 md:block'>
              <h3 className='text-2xl font-bold'>Blog</h3>
              {
                data.map(({ title, socials }) => {
                  return (
                    <article className='footer-socials '>
                      <div className=''>
                        <a href={socials} target="_blank">
                          <h3 className='my-2'>{title}</h3>
                        </a>
                      </div>
                    </article>
                  )
                })
              }
            </div>
          </div>
          <div className='flex justify-center text-white'>
            <div className='text-center'>
              <h3>Jobs</h3>
              <h3 className='my-2'>Privacy</h3>
              <h3 className='my-2'>Terms of Services</h3>
              <h3 className='my-2'>Associated Risks</h3>
            </div>
          </div>
        </div>
        <div className='copyright text-white mt-14'>
          <div className='flex justify-center'>
              <h4 className='font-serif mb-4'>&copy; Copyright Real Talk Darbs. All Rights Reserved</h4>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer