import React from 'react'
import couseImg from '../../../assets/Images/alxcourse.jpg'
import robotics from '../../../assets/Images/robotics.jpg'
import frontend from '../../../assets/Images/frontend.jpg'
import Data from '../../../assets/Images/data.jpg'
import roboticsImage from '../../../assets/Images/robotics.jpg'
import aiImage from '../../../assets/Images/robots.jpg'
import iotImage from '../../../assets/Images/IOT.jpg'

const Courses = () => {
    const courseList = [
        {
            courseName: 'Front-end Engineering',
            ImgSrc: frontend,
            Description: 'You will learn the basics of writing code in HTML, \
            CSS, and Javascript, while also focusing on how to design user-friendly \
            websites through UI/UX design and store your code with GitHub. Built to take you \
            from novice to a job-ready developer'
        },
        {
            courseName:' Data Science',
            ImgSrc: Data,
            Description: 'Explore the core concepts of data science, including \
            statistical analysis, machine learning, and data visualization. \
            Learn to extract insights from large datasets, build predictive models, \
            and communicate findings effectively. Gain the skills to tackle real-world \
            data challenges and embark on a rewarding career in data science.'
        },
        {
            courseName: 'Robotics Essentials',
            ImgSrc: roboticsImage,
            Description: 'Dive into the world of robotics with hands-on projects \
              in mechanical design, electronics, and programming. Learn to build \
              and control robots, explore automation, and understand robotics applications \
              in various industries.'
          },
          {
            courseName: 'Advanced Artificial Intelligence',
            ImgSrc: aiImage,
            Description: 'Master advanced AI techniques such as deep learning, \
              natural language processing, and computer vision. Develop AI-driven \
              solutions for complex problems, analyze data patterns, and create intelligent \
              systems for diverse applications.'
          },
          {
            courseName: 'IoT Development',
            ImgSrc: iotImage,
            Description: 'Unlock the potential of IoT by learning how to connect \
              and control devices, collect and analyze sensor data, and build smart \
              solutions. Gain insights into IoT protocols, security, and deployment \
              strategies.'
          }
          
    ]
  return (
    <section className='section-prop course-section flex flex-col items-center bg-aliceblue'>
        <h1>Secure your future, begin your career in tech today</h1>
        <p>Begin your tech career and professional journey, with our world class competitive courses</p>
        <div className='flex-col lg:flex flex justify-between items-center py-10 gap-8'>
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
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
  {courseList.map((course, index) => (
    <div key={index} className='flex flex-col bg-white p-4 lg:p-8 border rounded-lg gap-4 border-1 border-notsowhite'>
      <div className="image">
        <img src={course.ImgSrc} alt={course.courseName} className='border rounded-lg' />
      </div>
      <div className='desc'>
        <h1 className='font-bold text-matteblack text-lg'>{course.courseName}</h1>
        <p className='text-matteblack mt-3 text-matteblack'>{course.Description}</p>
      </div>
    </div>
  ))}
</div>

    </section>
  )
}

export default Courses