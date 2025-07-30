import React from 'react'
import './assets/FrontImg2.jpg'
const Front = () => {



    // function BtnHoverChanger(e){
    //     'bg-linear-to-bl from-fuchsia-500 to-violet-500'
    // }
    // onMouseDown={BtnHoverChanger}


    return (
        <>
            <div className='h-screen w-screen flex justify-center bg-[#EEEEEE]'>
                <div className='w-[96%] flex flex-col bg-[#FAF7F3] border-4 border-violet-600 mt-[3%] border-b-0 '>
                    
                    <div className='w-[100%] h-[10%] bg-[#FAF7F3]  flex flex-row '>
                        <div className='w-[20%] flex justify-center items-center font-bold text-2xl'>Etech.</div>
                        <div className='w-[50%] flex justify-center items-center text-[1.3rem] text-center'>
                            <div className='w-[25%] hover:underline transition '>Courses <span className='hover:cursor-pointer'>⌵</span></div>
                            <div className='w-[25%]'>Teachers <span className='hover:cursor-pointer'>⌵</span></div>
                            <div className='w-[25%]'>Offers <span className='hover:cursor-pointer'>⌵</span></div>
                            <div className='w-[25%]'>Contacts<span className='hover:cursor-pointer'>⌵</span></div>
                        </div>
                        <div className='w-[30%] flex gap-[5%]'>
                            <div className='w-[50%] h-[100%] flex justify-end items-center'><button className='w-[45%] h-[45%] rounded-[0.5rem] border-2 border-pink-500 font-[500] flex justify-center items-center hover:cursor-pointer '>Sign In</button></div>
                            <div className='w-[50%] h-[100%] flex justify-start items-center'><button className='bg-linear-to-bl from-violet-500 to-fuchsia-500 w-[45%] h-[45%] text-white rounded-[0.5rem] font-[500] flex justify-center items-center hover:cursor-pointer' >Free Trial</button></div>
                        </div>
                    </div>

                    <div className='w-[100%] h-[75%] bg-[#FAF7F3] flex' >

                        <div className='w-[50%] h-[100%] flex justify-end items-end'>
                            <div className='flex flex-col items-end justify-end h-[90%] w-[70%]' >
                                <div className='h-[33%] w-[70%] text-5xl font-bold text-violet-800 flex justify-center items-end '>Develop your skills in a new and unique way</div>
                                <div className='h-[33%] w-[70%] flex justify-start items-center font-[400]'>Lorem ipsum dolor sit amet consectetur adipisicing elit Quasi saepe deleniti harum accusamus obcaecati quas ad non natus</div>

                                <div className='h-[30%] w-[70%] flex flex-row justify-start items-start gap-[10%]'>
                                    <div className='flex justify-start items-start w-[35%] h-[25%] '><button className='hover:cursor-pointer bg-linear-to-bl from-violet-500 to-fuchsia-500 w-[100%] h-[100%] border-1 text-white rounded-[0.4rem] font-[500] flex justify-center items-center'>Enroll Now</button></div>
                                    <div className='w-[40%] h-[25%] flex justify-start'><button className='hover:cursor-pointer h-[90%] w-[20%] bg-linear-to-bl from-violet-500 to-fuchsia-500 rounded-2xl'>▷</button ><span className='ml-[5%] underline font-[500]'>What's Etech?</span></div>
                                </div>
                            </div>
                        </div>

                        <div className='w-[50%]'>
                            <div className='w-[100%] h-[100%] border-b-cyan-700'><img src="src/assets/FrontImg2.jpg" alt="" className='h-[100%] w-[90%] ' /></div>
                        </div>

                    </div>

                    <div className='w-[100%] h-[15%] bg-linear-65 from-purple-500 to-pink-500 flex text-center items-center font-[500] text-2xl'>
                        <div className='w-[20%] h-[50%]'>duolingo</div>
                        <div className='w-[20%] h-[50%]'>magic leap</div>
                        <div className='w-[20%] h-[50%]'>Microsoft</div>
                        <div className='w-[20%] h-[50%]'>Codecov</div>
                        <div className='w-[20%] h-[50%]'>Testing</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Front
