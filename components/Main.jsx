"use client";
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { motion } from 'framer-motion'

function main() {
  return (
    <div id="home" className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <motion.p initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className='uppercase text-sm tracking-widest text-gray-600'>Join me in Forces for Web Brilliance.
          </motion.p>


          <motion.h1 initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }} className='py-4 text-gray-700'>
            Hi, I&#39;m <span className='text-[#78c545]'> Victor</span>
          </motion.h1>


          <motion.h1
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }} className='py-2 text-gray-700'>A Front-End Web Developer
          </motion.h1>


          <motion.p initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }} className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            I am a driven individual, constantly seeking to expand my knowledge and skills, with a strong dedication to harnessing my expertise for positive impact.Let&#39;s connect and embark on a collective journey to shape the future with purpose-driven frontend development.
          </motion.p>


          <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a href='https://www.linkedin.com/in/victor-koome-31787a242/' target='_blank'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn className='text-2xl' />
              </div>
            </a>
            <a href='https://github.com/VictorKoome1' target='_blank'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub className='text-2xl' />
              </div>
            </a>
            <a href="/#contact">
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail className='text-2xl' />
              </div>
            </a>
            <a href="/#contact">
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill className='text-2xl' />
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default main