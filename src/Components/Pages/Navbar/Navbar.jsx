import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSchool} from '@fortawesome/free-solid-svg-icons'
import {faBars} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const navList = ['Home', 'About', 'Courses','Resources' ]
  const [toggleMenu, setToggleMenu] = useState(false)

  const handleToggleMenu = () => {
    setToggleMenu(prev => !prev)
  }
  return (
    <div className='nav bg-otherblue fixed  sticky z-50 left-0 top-0'>
        <div className='flex items-center'>
            <FontAwesomeIcon icon={faSchool} />
            <h1 className='text-lg font-extrabold'>EduTech</h1>
        </div>
        <div className={`links ${toggleMenu ? 'md:flex lg:flex-row' : 'hidden'} flex-col gap-6 bg-white text-teal w-full p-8
        text-white font-bold py-2 absolute top-16 right-0 justify-center items-center`}>
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
        <div className="block lg:hidden bars cursor-pointer" onClick={handleToggleMenu}>
        <FontAwesomeIcon icon={faBars} />
        </div>
        </div>
  )
}

export default Navbar