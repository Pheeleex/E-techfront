import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navList = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/Courses' },
    { name: 'Stats', path: '/Stats' },
    { name: 'Reviews', path: '/Reviews' }
  ];
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(prev => !prev);
    console.log(toggleMenu);
  };

  return (
    <div className='nav bg-white sticky z-50 left-0 top-0 shadow-lg'>
      <div className='flex items-center'>
        <FontAwesomeIcon icon={faSchool} />
        <h1 className='text-lg font-extrabold'>EduTech</h1>
      </div>
      <div className={`links ${toggleMenu ? 'active' : ''}`}>
        {navList.map(nav => (
          <Link to={nav.path} key={nav.name} className='link text-xl font-normal'>
            {nav.name}
          </Link>
        ))}
      </div>
      <div className='flex justify-between gap-4'>
        <Link to="/SignIn">
        <button> Login </button>
        </Link>
        <Link to="/signup">
          <button> Sign Up </button>
        </Link>
      </div>
      <div className="block lg:hidden bars cursor-pointer" onClick={handleToggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </div>
  );
};

export default Navbar;
