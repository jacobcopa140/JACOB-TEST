import React from 'react'
import './../blog/blog.css'
import IMG1 from '../../assets/blog img1.png'
import IMG2 from '../../assets/blog img2.png'
import IMG3 from '../../assets/blog img3.png'
import IMG4 from '../../assets/blog img4.png'
import IMG5 from '../../assets/blog img5.png'
import IMG6 from '../../assets/blog img6.png'
import { BsPlayCircle } from 'react-icons/bs'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Tips and Tricks',
    facebook: 'https://www.facebook.com/RealTalkDarbs/videos/66013766facebook',
    demo: 'https://www.youtube.com/watch?v=KIdePgO45Cs'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Healing Session',
    facebook: 'https://www.youtube.com/watch?v=N5E-_IlPPLE',
    demo: 'https://dribbble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Effective Vlogging',
    facebook: 'https://www.youtube.com/watch?v=caQkmaNQVd8',
    demo: 'https://dribbble.com/shots/18013196-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Bare Minimum',
    facebook: 'https://www.youtube.com/watch?v=M9L6yA8slK4',
    demo: 'https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress'
  },
  {
    id: 5,
    image: IMG5,
    title: 'The Pain of Letting Go',
    facebook: 'https://www.youtube.com/watch?v=--nBC8F8Y0s',
    demo: 'https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 6,
    image: IMG6,
    title: 'The Reasons Why',
    facebook: 'https://www.facebook.com/100044426406657/videos/679497616378589',
    demo: 'https://dribbble.com/shots/15887665-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  }
]

const Blog = () => {
  return (
    <section className='blog-container mt-20'>
      <h2 className='flex justify-center mb-10 text-6xl'>Feature Vlogs</h2>
      <div className='flex justify-center'>
        <div className="container blog_container mx-4 grid flex justify-center sm:grid-cols-3 gap-6">
          {
            data.map(({ id, image, title, facebook, demo }) => {
              return (
                <article className='blog_item'>
                  <div className="blog_item-image">
                    <img className='w-full' src={image} alt={title} />
                    <div className=''>
                      <h3 className='p-4 font-bold blog-platinum'>Platinum</h3>
                      <div className='flex justify-between blog-btn rounded-b-xl p-4 text-white'>
                        <a href={facebook} target="_blank" className='btn'>
                          <BsPlayCircle className='h-10 w-10 text-white' />
                        </a>
                        <h3 className='mx-2 mt-1'>{title}</h3>
                        <h3 className='mt-1'>Vlog</h3>
                      </div>
                    </div>
                  </div>
                </article>
              )
            })
          }
        </div>
      </div>

          {/* button  */}
      <div className='flex justify-center mb-10'>
        <button className='uppercase p-1 px-4 bg-black text-white mt-6 rounded-lg'>Read More</button>
      </div>


    </section>
  )
}

export default Blog