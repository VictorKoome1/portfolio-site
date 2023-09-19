"use client";
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import Link from 'next/link'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import footerImg from '../public/assets/projects/footer.jpg'
import Image from 'next/image';

function Contact() {
    
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_32exiop', 'template_bg2ihjb', form.current, 'WQ7dx-cNA7-X1yHDG')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };


  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
          <p className='uppercase text-xl tracking-widest text-[#78c545]'>Contact</p>
          <h2 className='py-4'>Get In Touch</h2>
          <div className='grid lg:grid-cols-5 gap-8'>
            {/* left */}
            <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
              <div className='lg:p-4 h-full'>
                <div>
                    <Image className='rounded-xl hover:105 ease-in duration-300' src={footerImg} alt="/" />
                </div>
                <div>
                    <h2 className='py-2'>Victor Koome</h2>
                    <p>Front-End Developer</p>
                    <p className='py-4'>I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.</p>
                </div>
                <div>
                <p className='uppercase pt-8'>Connect With Me</p>
                <div className='flex items-center justify-between py-4'>
                <a href="https://www.linkedin.com/in/victor-koome-31787a242/" target="_blank">
                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn className='text-2xl' />
              </div>
              </a>
              <a href="https://github.com/VictorKoome1" target="_blank">
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub className='text-2xl' />
              </div>
              </a>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail className='text-2xl' />
              </div>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill className='text-2xl' />
              </div>
                </div>
              </div>
              </div>
             
            </div>
            {/* right */}
            <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
               <div className='p-4'>
               <form 
                ref={form}
                onSubmit={sendEmail}
              >
               
                  <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='user_name'
                      placeholder='Enter your name'
                      required
                    />
                  </div>
                  {/* <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                      Phone Number
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='phone'
                    />
                  </div> */}
          
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Your Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    name='user_email'
                    placeholder='Enter your email'
                    required
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='subject'
                    placeholder='subject'
                    required
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='10'
                    name='message'
                    placeholder='Type your message...'
                  ></textarea>
                </div>
                <button type='submit' className='w-full p-4 text-gray-100 mt-4 bg-green-500'>
                  Send Message
                </button>
              </form>
               </div>
            </div>
          </div>

          <div className='flex justify-center py-12'>
          <Link href='/#home'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp
                  className='text-green-500'
                  size={30}
                />
              </div>
          </Link>

        
          </div>
        </div>
    </div>
  )
}

export default Contact