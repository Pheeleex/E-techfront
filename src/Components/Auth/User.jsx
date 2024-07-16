import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
import { courseList } from '../../assets';


const User = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="flex flex-col items-center p-4 justify-center min-h-screen bg-aliceblue font-sans">
      {user ? (
        <div className='flex flex-col justify-center items-center pt-4'>
          <h1 className="text-2xl font-bold mb-4 pt-4">Hello {user.username}</h1>
          <p>What courses are you interested in?</p>
          <div className='course'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-20 p-12'>
            {courseList.map((course, index) => (
                <div key={index} className='flex flex-col 
                    bg-white p-4 lg:p-8 border rounded-lg gap-8 lg:gap-4 border-1 border-notsowhite'>
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
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default User;
