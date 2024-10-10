"use client";

import React from 'react';
import Image from 'next/image'
import Asserts from '@/app/asserts/hero.jpg'
import Typewriter from 'typewriter-effect'

const Hero = () => {
  return (
    <div id="Hero">
        <section className="text-gray-600 body-font bg-slate-700">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <Image
      className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-right rounded"
      alt="hero"
      src={Asserts}
    />
    <div className="text-center lg:w-2/3 w-full">
    <h1 className="title-font text-5xl mb-5 text-slate-900 font-serif font-bold ml-5 hover:uppercase hover:text-slate-400">
            <div>
              <h1 className="flex justify-center items-center">Hello, <br />I am</h1>
              <Typewriter
                options={{
                  strings: ['Maryam Shakeel', 'Web Developer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </h1>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-slate-900 border-0 py-2 px-6 focus:outline-none hover:bg-slate-400 rounded text-lg">
          <a href="https://github.com/maryamshakeel22">GITHUB</a>
        </button>
        <button className="ml-4 inline-flex text-white bg-slate-900 border-0 py-2 px-6 focus:outline-none hover:bg-slate-400  rounded text-lg">
          <a href="https://www.linkedin.com/in/maryam-shakeel-5720a12b5/">LINKEDIN</a>
        </button>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero