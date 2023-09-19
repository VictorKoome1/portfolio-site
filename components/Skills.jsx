import React from 'react'
import Image from 'next/image'
import Html from '../public/assets/skills/html.png'
import Css from '../public/assets/skills/css.png'
import Javascript from '../public/assets/skills/javascript.png'
import Reactjs from '../public/assets/skills/react.png'
import Next from '../public/assets/skills/nextjs.png'
import Mongo from '../public/assets/skills/mongo.png'
import Node from '../public/assets/skills/node.png'
import Tailwind from '../public/assets/skills/tailwind.png'
import Vue from '../public/assets/skills/logo.png'
import Firebase from '../public/assets/skills/firebase.png'


function Skills() {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
           <p className='uppercase text-xl tracking-widest text-[#78c545]'>skills</p>
           <h2 className='py-4'>What I Can Do</h2>
           <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
           <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Html} width={64} height={64} alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
              </div>
            </div>
          </div>
           <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Css} width={64} height={64} alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>
           <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Tailwind} width={64} height={64} alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>TailWind</h3>
              </div>
            </div>
          </div>
           <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Javascript} width={64} height={64} alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
           <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Reactjs} width={64} height={64} alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>ReactJs</h3>
              </div>
            </div>
          </div>
           <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Next} width={64} height={64} alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>NextJs</h3>
              </div>
            </div>
          </div>
           <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Node} width={64} height={64} alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>NodeJS</h3>
              </div>
            </div>
          </div>
           <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Mongo} width={64} height={64} alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Mongo DB</h3>
              </div>
            </div>
          </div>
           <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Vue} width={64} height={64} alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Vue js</h3>
              </div>
            </div>
          </div>
           <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Firebase} width={64} height={64} alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
           </div>
        </div>
    </div>
  )
}

export default Skills