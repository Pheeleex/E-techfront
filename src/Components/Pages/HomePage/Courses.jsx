import React from 'react'
import couseImg from '../../../assets/Images/alxcourse.jpg'

import { courseList } from '../../../assets'

const Courses = () => {
   
  return (
    <section className='section-prop course-section flex flex-col items-center bg-aliceblue'>
        <h1 className='text-4xl text-matteblack font-bold'>Secure your future, begin your career in tech today</h1>
        <p className='text-xl text-otherblue'>Begin your tech career and 
        professional journey, with our world class competitive courses</p>
        <div className='flex flex-col lg:flex-row justify-between items-center py-10 gap-8'>
        <div className='flexText flex flex-col flex-1 items-start justify-center'>
            <span className='span-text text-lg font-extrabold)'>6weeks 20hours per week</span>
            <h1 className='headerText text-matteblack'>AI Career Essentials</h1>
            <p className='p-text text-matteblack'>This comprehensive 6-week program, fully funded,
             merges an introduction to diverse AI tools with Edu Tech's 
                foundational module. 
                Acquire soft and practical skills to harness advanced AI tools, enhancing your CV and personal portfolio. 
                Gain interview mastery, excel with AI tools, and lead effectively in the workplace, 
                preparing for a successful career journey.</p>
        </div>
            <div className="flexImage flex-1">
                <img src={couseImg} />
            </div>
    </div>
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-20'>
  {courseList.map((course, index) => (
    <div key={index} className='flex flex-col bg-white p-4 lg:p-8 border rounded-lg gap-8 lg:gap-4 border-1 border-notsowhite'>
      <div className="image">
        <img src={course.ImgSrc} alt={course.courseName} className='border rounded-lg' />
      </div>
      <div className='desc'>
        <h1 className='font-bold text-matteblack text-lg'>{course.courseName}</h1>
        <p className='text-matteblack mt-3'>{course.Description}</p>
      </div>
      <button className='p-2 bg-transparent text-otherblue w-40 hover:bg-otherblue'>See more</button>
    </div>
  ))}
</div>

    </section>
  )
}

export default Courses