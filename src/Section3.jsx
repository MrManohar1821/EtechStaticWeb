import React from 'react'
import './assets/Card1.jpg'
import { FaUser } from "react-icons/fa6";
import { IoBook } from "react-icons/io5";

const Section3 = () => {
    
    
    let data = [
        {
            'image':  'src/assets/Card1.jpg',
            'Course': 'Web Design & Development',
            'classes': '25 Classes',
            'students':'149 Students',
            'amount':'$487',
            'name': 'Pradeep',
            
        
        },
        {
            'image':  'src/assets/Card1.jpg',
            'Course': 'Python For Data Science',
            'classes': '25 Classes',
            'students':'779 Students',
            'amount':'$160',
            'name': 'Manohar',
        },
        {
            'image':  'src/assets/Card1.jpg',
            'Course': 'Fire Framing & Prototyping',
            'classes': '548 Classes',
            'students':'976 Students',
            'amount':'$549',
            'name': 'Girish',
        }
    ] 
    
    
    
    return (
        <>
            <div className='h-screen w-screen flex justify-center bg-[#EEEEEE]'>
                <div className=' w-[96%] flex flex-col bg-[#FAF7F3] border-4 bg-linear-65 from-violet-600 border-violet-600 to-pink-400  border-y-0'>
                    
                    <div className='h-[30vh]  flex justify-center items-end ]'>
                        <div className='flex flex-col justify-end text-center w-[50%] h-[80%] text-white gap-[4%]' >
                            <div className='w-[100%] text-center text-[2rem] font-[500] text-shadow-2xs'>Our popular Courses</div>
                            <div className='font-[400]'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita tenetur laboriosam   voluptate voluptates maxime pariatur error modi aspernatur inventore labore fuga molestiae minima quos Repellat dolor architecto inventore perspiciatis incidunt!
                            </div>
                        </div>
                    </div>

                    <div className='h-[70vh] w-[100%] flex justify-center items-center' >
                        {   

                            data.map((ele,index) =>{ 

                                return <div className='hover:shadow-md/10 hover:cursor-pointer bg-white w-[25vw] h-[60vh]  rounded-2xl  mt-[20px] ml-[30px] flex flex-col justify-around items-center hover:scale-101'>
                                    <div className='bg-green-600 h-[25vh] w-[95%] rounded-2xl object-cover'> <img className='object-cover w-[100%] h-[100%]' src={ele.image} alt="" /> </div>
                                    <div className='font-[500] text-[1.5rem] h-[10vh] w-[95%]'>
                                        <div className='h-[100%] w-[75%] bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent' >{ele.Course}</div>
                                    </div>
                                    <div className='flex justify-start gap-[10%] w-[95%]'>
                                        <div className=' w-[50%] flex justify-start items-center gap-[4%] '><span className='text-violet-500'>{<IoBook />}</span>{ele.classes}</div>
                                        <div className=' w-[50%] flex justify-start items-center gap-[4%]'><span className='text-violet-500'>{<FaUser />}</span>{ele.students}</div>
                                    </div>
                                    <div className='flex justify-start gap-[10%] border-t-1 border-t-stone-400 w-[95%]'>
                                        <div className='font-[600] text-[1.3rem] w-[50%]'>{ele.amount}</div>
                                        <div className=' w-[50%] font-[400]'>{ele.name}</div>
                                    </div>
                                    
                                </div>
                            }) 
                        }                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section3
