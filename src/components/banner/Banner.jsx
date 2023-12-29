import React, { useState } from 'react'
import  sale1  from '../../assets/img/bg3.jpg'
import  sale2  from '../../assets/img/bg2.jpg'
import  sale3  from '../../assets/img/bg4.jpg'
import  sale4  from '../../assets/img/bg5.jpg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WestIcon from '@mui/icons-material/West';


const Banner = () => {

  const [currentslide ,setCurrentslide] = useState(0);

  const data = [
    `${sale1}`,
    `${sale2}`,
    `${sale3}`,
    `${sale4}`];

const prevSlider = () =>{
  setCurrentslide( currentslide === 0 ? 3 :(prev) => prev-1 )
}

const nextSlider = () =>{
  setCurrentslide( currentslide === 3 ? 0 :(prev) => prev+1 )
}
// console.log(currentslide);

  return (
    <div className='w-full h-auto overflow-x-hidden'>
      <div className='w-screen h-[90] relative'>
        <div style={{transform:`translateX(-${currentslide * 100}vw)`}} 
        className='w-[400vw] h-full flex transition-transform duration-1000'>
          <img className='w-screen h-[88vh] object-cover' 
          src={data[0]} 
          alt="Imageone" 
          loading='priorty' />
          <img className='w-screen h-[88vh] object-cover'
          src={data[1]} 
          alt="Imagetwo" />
          <img className='w-screen h-[88vh] object-cover'
          src={data[2]}
           alt="Imagethree" />
          <img className='w-screen h-[88vh] object-cover'
          src={data[3]}
           alt="Imagefour" />
        </div>
        <div className='absolute font-mono px-6 w-fit left-0 right-0 mx-auto bottom-72 capitalize gap-8 text-white text-5xl font-medium sm:font-semibold'>
        The only true wisdom is in knowing <br />you know nothing.....
        </div>
        <div className='absolute w-fit left-0 right-0 mx-auto bottom-44 flex gap-8 '>
          <div onClick={prevSlider} className='w-14 h-12 border-[1px] font-bold border-gray-600 flex justify-center items-center hover:bg-gray-600 hover:cursor-pointer hover:text-white active:bg-gray-900 duration-300'> 
            <WestIcon/>
          </div>
          <div onClick={nextSlider} className='w-14 h-12 border-[1px] font-bold border-gray-600 flex justify-center items-center hover:bg-gray-600 hover:cursor-pointer hover:text-white active:bg-gray-900 duration-300'>
            <ArrowForwardIcon/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner