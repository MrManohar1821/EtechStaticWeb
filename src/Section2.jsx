import React from 'react'
import './assets/cropped_image_1.png'
import './assets/cropped_image_2.png'
import './assets/cropped_image_3.png'
import './assets/cropped_image_4.png'
import { BsFillMortarboardFill } from "react-icons/bs";
import { IoBook } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { FaPlayCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";



const Section2 = () => {
  return (
    <>
       <div className='h-screen w-screen flex justify-center bg-[#EEEEEE]'>
            <div className='w-[96%] flex flex-col bg-[#FAF7F3] border-4 border-x-violet-600 border-y-0'>

                <div className='w-[100%] h-[20%] flex flex-col justify-end items-center'>

                    <div className='h-[30%] w-[60%] flex justify-center items-center text-3xl font-bold text-violet-500'>Search Courses</div>

                    <div className='h-[50%] w-[60%]  flex justify-center items-center gap-[5%] shadow-md/10 hover:shadow-md/30'> <span className='h-[4vh] w-[2vw] text-2xl font-[500] text-violet-500'><IoSearch /></span>
                        <input type="text" placeholder='Search for over 50+ courses' className='w-[50%] pl-[2%] font-[500]  h-[60%]  bg-[#EEEEEE]'/>
                        <button className='hover:cursor-pointer bg-linear-to-bl from-violet-500 to-fuchsia-500 w-[15%] h-[60%] border-1 text-white rounded-[0.4rem] font-[500] flex justify-center items-center text-[1.3rem]'>Search</button>
                    </div>

                </div>

                <div className='w-[100%] h-[80%] flex '>
                    <div className='w-[50%] h-[100%] flex justify-end  items-center '>
                        <div className='h-[70%] w-[50%] flex flex-wrap mr-[11%]'>
                            <img src="src/assets/cropped_image_1.png" alt="" className=' w-[50%] h-[50%]'/>
                            <img src="src/assets/cropped_image_2.png" alt="" className=' w-[50%] h-[50%]'/>
                            <img src="src/assets/cropped_image_3.png" alt="" className=' w-[50%] h-[50%]'/>
                            <img src="src/assets/cropped_image_4.png" alt="" className=' w-[50%] h-[50%]'/>
                        </div>
                    </div>

                    <div className='w-[50%] h-[100%] flex items-center justify-start'>

                        <div className='h-[72%] w-[70%] flex  flex-col gap-[4%]'>
                            
                            <div className='h-[20%] w-[70%] font-[500] text-3xl'><span className='bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent'>Benifits</span> From Our Online Learning</div>
                            
                           
                            <div className='h-[80%] w-[100%] flex '>
                               
                                <div className='h-[100%] w-[20%] flex flex-col hover:cursor-pointer'>
                                    <div className='h-[25%] w-[100%] justify-center items-center flex text-4xl '><div className='bg-violet-700 w-[50%] h-[70%] flex items-center justify-center rounded-4xl'><span className='hover:text-6xl transition-opacity hover:rotate-12'><BsFillMortarboardFill /></span></div></div>
                                    <div className='h-[25%] w-[100%] justify-center items-center flex text-3xl '><div className='bg-pink-400 w-[50%] h-[70%] flex items-center justify-center rounded-4xl'><span className='hover:text-6xl transition-opacity hover:rotate-12'><IoBook /></span></div></div>
                                    <div className='h-[25%] w-[100%] justify-center items-center flex text-3xl '><div className='bg-violet-700 w-[50%] h-[70%] flex items-center justify-center rounded-4xl'><span className='hover:text-6xl transition-opacity hover:rotate-12'><FaUser /></span></div></div>
                                    <div className='h-[25%] w-[100%] justify-center items-center flex text-3xl '><div className='bg-pink-400 w-[50%] h-[70%] flex items-center justify-center rounded-4xl'><span className='hover:text-6xl transition-opacity hover:rotate-12'><FaPlayCircle /></span></div></div>
                                </div>

                                <div className='h-[100%] w-[80%]  gap-[3%] flex flex-col'>

                                    <div className='h-[25%] w-[100%]'><span className='font-bold'>Online Degrees</span>
                                        <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit Lorem ipsum dolor</p></div>
                                    <div className='h-[25%] w-[100%]'><span className='font-bold'>Short Courses</span> 
                                        <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit Lorem ipsum dolor</p>
                                    </div>
                                    <div className='h-[25%] w-[100%]'><span className='font-bold'>Training From Experts</span>
                                        <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit Lorem ipsum dolor</p>
                                    </div>
                                    <div className='h-[25%] w-[100%]'><span className='font-bold'>1.5K+ Vedio Courses</span>
                                        <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit Lorem ipsum dolor</p>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
       </div>
    </>
  )
}

export default Section2

           
