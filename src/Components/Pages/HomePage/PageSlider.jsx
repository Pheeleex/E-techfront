import React, { useEffect, useState } from 'react'

const PageSlider = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
    }, 5000)
    return () => clearInterval(interval);
  }, [items.length])

  return (
      <div className="image-slides">
        <img
          src={items[currentIndex]}
          alt={'ski'}
          className="bg-opacity-90 opacity-70"
        />
      </div>
  )
}

export default PageSlider;
