'use client'
import React from 'react'
import Image from 'next/image'
import Asserts from '@/app/asserts/about.jpeg'
import Typewriter from 'typewriter-effect'

const AboutMe = () => {
  return (
    <div className=' bg-slate-600 container px-5 py-20 mx-auto'id="About">
        <div  className='font-semibold text-[22px] md:text-[28px] text-yellow-500 text-center'>
          <h1 className='font-semibold text-[25px] sm:text-[30px] md:text-[35px] text-slate-900 hover:uppercase'>About Me</h1>
        </div>
        <div className='w-[80%] mt-[5rem] md:mt-[3rem] mx-auto grid grid-cols-1 xl:grid-cols-2 items-center gap-[4rem]'>
            {/* here is my personal information */}
        <div>
        <h1 className='mb-[1.4rem] text-[27px] font-semibold text-yellow-400 hover:uppercase'>
        <Typewriter
                options={{
                  strings: ['Personal Information'],
                  autoStart: true,
                  loop: true,
                }}
              />
              </h1>
        <p className='text-purple-300'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit aspernatur esse quis maxime, vitae a temporibus libero id atque quia quod doloribus illum labore officiis dicta beatae tenetur, pariatur dolore!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, esse voluptatum aut rerum deleniti, dolore magnam eius illum dolores fugiat natus error sit et, quasi inventore eos unde recusandae mollitia.
        </p>
      </div>
      {/* image of personal info section */}
      <Image data-aos="zoom-in" data-aos-anchor-placement="top-center" src={Asserts} 
      alt="About img" 
      width={400}
      height={300}
      className='mx-auto rounded-xl' />
    </div>
    </div>
  )
}

export default AboutMe;
