import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSchool} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const navList = ['Home', 'About', 'Courses','Resources' ]
  return (
    <div className='nav bg-otherblue fixed  sticky z-50 left-0 top-0'>
        <div className='flex items-center'>
            <FontAwesomeIcon icon={faSchool} />
            <h1 className='text-lg font-extrabold'>EduTech</h1>
        </div>
        <div className='links flex justify-around gap-6 text-white font-bold py-2'>
            {
              navList.map((nav) => (
                <div>
                  {nav}
                </div>
              ))
            }
        </div>
        <div className='flex justify-between gap-4'>
            <button> Login </button>
            <button> Sign up </button>
        </div>
        </div>
  )
}

export default Navbar