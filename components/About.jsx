import Image from 'next/image'
import React from 'react'
import victorimg from '../public/assets/skills/victor.jpeg'
function About() {
  return (
    <div id='about' className='w-full p-2 md:h-screen flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#78c545]'>about</p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'> Not your normal developer</p>
          <p className='py-2 text-gray-600'>
            I am a passionate frontend developer with a flair for creativity and innovation. My mission is to craft user-centric digital experiences that leave a lasting impression. With a keen eye for stunning visuals and an obsession for responsive design, I thrive on transforming ideas into intuitive and captivating Web applications. My journey in web development is a fusion of modern aesthetics and interactive wizardry, all aimed at making the web a more engaging place. Join me on this adventure, and let
            &#39;s turn your digital dreams into reality.</p>
          <p className='py-2 text-gray-600'></p>
          <a href="/#projects">
          <p className='py-2 text-gray-600 underline cursor-pointer'> Check out some of my latest projects.</p>
          </a>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image className='rounded-xl' src={victorimg} alt="/" width={400} height={400} />
        </div>
      </div>
    </div>
  )
}

export default About