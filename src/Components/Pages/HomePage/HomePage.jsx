import React from 'react'
import robots from '../../../assets/Images/robots.jpg'
import girls from '../../../assets/Images/gitls.jpg'
import bous from '../../../assets/Images/Bous.jpg'
import cyber from '../../../assets/Images/cybersecurity.jpg'
import asa from '../../../assets/Images/asa.jpg'
import PageSlider from './PageSlider'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Courses from './Courses'
import Stats from './Stats'
import Reviews from './Reviews'

const HomePage = () => {
  const images = [girls, bous, cyber, robots, asa]

  useGSAP(() => {
    gsap.to('.theText', { opacity: 1, delay: 0.5 })
    gsap.from('.text', {x: '200%', delay: 2})
    gsap.from('.hero-buttons', {y: '400%', delay: 2.5})
  }, [])
  
  return (
    <>
    <div className='flex justify-center'>
      <div className='hero w-full h-50 relative'>
        <div className='textbox absolute inset-0 flex items-center justify-center z-10 p-5'>
          <div className='theText text-white text-center opacity-0'>
            <div className='text flex flex-col gap-3'>
                <h1 className="headerText">Embark on a Learning Journey<br/> for Continuous Growth. </h1>
                <p className="text-lg">
                Discover a platform empowering young minds with diverse tech skills, fostering creativity, <br/>
                and igniting a passion for innovation from an early age.
                </p>
            </div>
            <div className='hero-buttons mt-5 flex gap-2 justify-center'>
            <button className='px-8 py-2 bg-otherblue text-white rounded border cursor-pointer'>
              Apply
            </button>
            <button className=' px-8 py-2 bg-transparent text-white rounded border-white border-2 cursor-pointer'>
             View our courses
            </button>
            </div>
          </div>
        </div>
        <PageSlider items={images} />
      </div>
    </div>
      <Courses />
      <Stats />
      <Reviews />
    </>
  );
}

export default HomePage;