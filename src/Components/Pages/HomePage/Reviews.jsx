import React, { useState } from 'react';

const Reviews = () => {
    const cardInfo = [
        {
            review: `This platform is a game-changer! My kids are hooked on learning tech, 
            and it's amazing to see them so excited about coding. Highly engaging and educational!`,
            name: 'Mr. Sean Cahill',
            Relationship: 'parent',
            Location: 'Abuja, Nigeria'
        },
        {
            review: `My children absolutely love this platform. It's fun and interactive,
            making tech learning a breeze. They've gained so much confidence in their coding skills.`,
            name: 'Mrs. Jennifer Olu',
            Relationship: 'parent',
            Location: 'Accra, Ghana'
        },
        {
            review: `I love this platform! Learning to code is like playing a fun game. I made my own app, 
            and it's so cool!`,
            name: 'Derek',
            Relationship: 'Student',
            Location: 'Gaborone, Botswana'
        },
        {
            review: `My kids are always excited to use this platform. It's fun, educational, and has
            greatly improved their tech skills. They love learning coding and other tech concepts.`,
            name: 'Mrs. Emmanuella Ochai',
            Relationship: 'Parent',
            Location: 'Plateau, Nigeria'
        },
        {
            review: `This is the best! I learned how to make robots move and create my own games. 
            It's super fun and easy to understand.`,
            name: 'Samuel',
            Relationship: 'Student',
            Location: 'Lagos, Nigeria'
        },
        {
            review: `Coding here is awesome! I can build stuff and show my friends what I made. 
            The lessons are fun, and I always learn something new!`,
            name: 'Ryan',
            Relationship: 'Student',
            Location: 'Casablanca, Morocco'
        },
        {
            review: `Highly recommend this platform! It's perfect for kids to learn tech in a fun,
            interactive way. My son looks forward to every lesson.`,
            name: 'Mr and Mrs. Smith',
            Relationship: 'Parent',
            Location: 'Nairobi, Kenya'
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const lastIndex = cardInfo.length - 3;
        setCurrentIndex(currentIndex === 0 ? lastIndex : currentIndex - 1);
    };

    const nextSlide = () => {
        const lastIndex = cardInfo.length - 3;
        setCurrentIndex(currentIndex === lastIndex ? 0 : currentIndex + 1);
    };

    return (
        <section className='section-prop bg-blue'>
            <div className='mb-16'>
                <h1 className='font-bold text-2xl'>Don't Just Take Our Word for It, <br />
                    Listen to Our Satisfied Students
                </h1>
                <p>Our students don't just learn new skills, they also enjoy it</p>
            </div>
            <div className='relative px-16'>
                <div className='flex justify-between items-center gap-8'>
                    {cardInfo.slice(currentIndex, currentIndex + 3).map((item, index) => (
                        <div className='card bg-otherblue p-6 rounded-lg text-white flex flex-col gap-8' 
                        key={index}>
                            <div>
                                <p>{item.review}</p>
                            </div>
                            <div>
                                <h1 className='font-bold'>{item.name}</h1>
                                <p>{item.Relationship}, <span>{item.Location}</span></p>
                            </div>
                        </div>
                    ))}
                </div>
                <button onClick={prevSlide} className='absolute left-0 top-1/2 transform 
                -translate-y-1/2 bg-gray-300 px-2 py-1 mr-4'>Prev</button>
                <button onClick={nextSlide} className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 px-2 py-1'>Next</button>
            </div>
        </section>
    );
};

export default Reviews;
