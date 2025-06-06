import React from 'react'
import Tilt from 'react-parallax-tilt'

const Card = ({image, heading, subheading}) => {
  return (
    <Tilt perspective={400}>
        <div className='h-96 w-60 bg-black relative rounded-lg overflow-hidden flex flex-col shadow-[3px_3px_10px_rgba(0,0,0,0.5)] border-[1px] border-white/20'>
        <img src={image} alt={heading} className='h-full w-full object-cover absolute inset-0 z-0'/>
        <div className="absolute inset-0 z-0" style={{background: "linear-gradient(to top, #000, transparent)"}}></div>
        <h2 className='text-sm z-10 relative mt-auto mx-auto text-white/80'>{heading}</h2>
        <p className='text-xs z-10 relative mx-auto mb-5 text-white/60 font-light mt-1'> {subheading} </p>
    </div>
    </Tilt>
  )
}

export default Card