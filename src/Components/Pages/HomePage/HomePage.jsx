import React from 'react'
import accra from '../../../assets/Images/techhub.jpg'
import accra2 from '../../../assets/Images/alt2.jpg'
import accra3 from '../../../assets/Images/alt.jpg'
import PageSlider from './PageSlider'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HomePage = () => {
  const images = [accra, accra2, accra3]

  useGSAP(() => {
    gsap.to('.theText', { opacity: 1, delay: 2 })
    gsap.from('.text', {x: '100%', delay: 2})
    gsap.from('.hero-buttons', {y: '400%', delay: 2.5})
  }, [])
  
  return (
    <div>
      <div className='hero w-full h-50 relative'>
        <div className='textbox absolute inset-0 flex items-center justify-center z-10'>
          <div className='theText text-white text-center opacity-0'>
            <div className='text'>
                <h1 className="headerText">Embark on a Learning Journey<br/> for Continuous Growth. </h1>
                <p className="text-lg">
                Discover a platform empowering young minds with diverse tech skills, fostering creativity, <br/>
                and igniting a passion for innovation from an early age.
                </p>
            </div>
            <div className='hero-buttons mt-4 flex gap-2 justify-center'>
            <button className='px-8 py-2 bg-otherblue text-white rounded border border-0 cursor-pointer'>
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
  );
}

export default HomePage;