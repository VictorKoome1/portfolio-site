import React from 'react'
import DigitalF from '../public/assets/projects/project1a.png'
import ReelFlix from '../public/assets/projects/project2.png'
import Quoter from '../public/assets/projects/project3.png'

import Image from 'next/image'

import { TbBrandGithub } from "react-icons/tb"
import { RxOpenInNewWindow } from "react-icons/rx"

function Projects() {
  return (
    // <div id='projects' className='w-full'>
    //     <div className='max-w-[1240px] mx-auto px-2 py-16'>
    //       <p className='uppercase text-xl tracking-widest text-[#78c545]'>projects</p>
    //       <h2 className='py-4'>What I&apos;ve Built</h2>
    //       <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-8'>
    //           <ProjectItem
    //            title="Digital Firm" 
    //            backgroundImg={DigitalF} 
    //            projectUrl='/digital'
    //             />
    //           <ProjectItem
    //            title="Reel Flix" 
    //            backgroundImg={ReelFlix} 
    //            projectUrl='/page/project2'
    //             />
    //           <ProjectItem
    //            title="Random Quote Generator" 
    //            backgroundImg={Quoter} 
    //            projectUrl='/firm'
    //             />
    //           <ProjectItem
    //            title="Reviews" 
    //            backgroundImg={Reviews} 
    //            projectUrl='/firm'
    //             />
    //           <ProjectItem
    //            title="Text To Speech Convertor" 
    //            backgroundImg={TtS} 
    //            projectUrl='/firm'
    //             />
    //           <ProjectItem
    //            title="Drum Machine" 
    //            backgroundImg={Drums} 
    //            projectUrl='/firm'
    //             />
    //       </div>
    //     </div>
    // </div>

    <div id='projects' className='max-w-[1240px] mx-auto lg:px-20 py-24'>
      <p className='uppercase text-xl tracking-widest text-[#78c545]'>projects</p>
      <h2 className='py-4'>What I&apos;ve Built</h2>
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        {/* project one */}
        <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
          <div className='flex flex-col xl:flex-row gap-6'>
            <a className='w-full xl:w-1/2 h-auto relative group'
              href="https://victorkoome1.github.io/Digital-firm/"
              target='_blank'>
              <div className='shadow-xl shadow-gray-400 rounded-xl p-4 hover:scale-105 ease-in duration-300'>
                <Image
                  className='w-full h-full object-contain'
                  src={DigitalF}
                  alt="/"
                />
              </div>
            </a>
            <div className='w-full xl:w-1/2 flex flex-col gap-6 gl:justify-between items-end text-right xl:-ml-16 z-10'>
              <p className='tracking-wide text-blue-900'>Featured Project</p>
              <h3 className='text-2xl font-bold'>Digital Firm</h3>
              <p className="bg-[#112240] text-white text-sm md:text-base p-2 md:p-6 rounded-md text-left">
                A visually striking and fully responsive website was meticulously crafted for a digital firm. HTML, CSS, and JavaScript expertly employed to deliver a dynamic and engaging online platform.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Html</li>
                <li>CSS</li>
                <li>JavaScript</li>
                
              </ul>
              <div className="text-2xl flex gap-8">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/VictorKoome1/Digital-firm"
                  target="_blank"
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <TbBrandGithub />
                  </div>

                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://victorkoome1.github.io/Digital-firm/"
                  target="_blank"
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <RxOpenInNewWindow />
                  </div>

                </a>
              </div>
            </div>
          </div>

        </div>
        {/* project2 */}
        <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
          <div className='flex flex-col xl:flex-row-reverse gap-6'>
            <a className='w-full xl:w-1/2 h-auto relative group'
              href="https://react-movie-app-77290.web.app/"
              target='_blank'>
              <div className='shadow-xl shadow-gray-400 rounded-xl p-4 hover:scale-105 ease-in duration-300'>
                <Image
                  className='w-full h-full object-contain'
                  src={ReelFlix}
                  alt="/"
                />
              </div>
            </a>
            <div className='w-full xl:w-1/2 flex flex-col gap-6 gl:justify-between items-end text-right z-10'>
              <p className='tracking-wide text-blue-900'>Featured Project</p>
              <h3 className='text-2xl font-bold'>Reel Flix</h3>
              <p className="bg-[#112240] text-white text-sm md:text-base p-2 md:p-6 xl:-mr-16 rounded-md text-left">
              A dynamic web application using React that harnesses the power of the Movies Database (DB Movies) API. The primary goal was to create an engaging platform for movie enthusiasts to explore trending films and easily search for their favorite titles.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Reactjs</li>
                <li>Javascript</li>
                <li>DB Movies api</li>
                <li>Firebase Deployment</li>
              </ul>
              <div className="text-2xl flex gap-8">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/VictorKoome1/react-movie-app"
                  target="_blank"
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <TbBrandGithub />
                  </div>

                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://react-movie-app-77290.web.app/"
                  target="_blank"
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <RxOpenInNewWindow />
                  </div>

                </a>
              </div>
            </div>
          </div>

        </div>
        {/* project3 */}
        <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
          <div className='flex flex-col xl:flex-row gap-6'>
            <a className='w-full xl:w-1/2 h-auto relative group'
              href="https://victorkoome1.github.io/random-quote-machine/"
              target='_blank'>
              <div className='shadow-xl shadow-gray-400 rounded-xl p-4 hover:scale-105 ease-in duration-300'>
                <Image
                  className='w-full h-full object-contain'
                  src={Quoter}
                  alt="/"
                />
              </div>
            </a>
            <div className='w-full xl:w-1/2 flex flex-col gap-6 gl:justify-between items-end text-right xl:-ml-16 z-10'>
              <p className='tracking-wide text-blue-900'>Featured Project</p>
              <h3 className='text-2xl font-bold'>Inspire Me</h3>
              <p className="bg-[#112240] text-white text-sm md:text-base p-2 md:p-6 rounded-md text-left">
               A web application that brings daily inspiration to users through a dynamic collection of quotes.Leveraging the power of external APIs, this app seamlessly integrates with a Quotes API to provide users with fresh, thought-provoking quotes every day.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Quotes Api</li>
                <li>Tweeter Api</li>
                <li>JavaScript</li>
                <li>Html</li>
                <li>CSS</li>
              </ul>
              <div className="text-2xl flex gap-8">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/VictorKoome1/random-quote-machine"
                  target="_blank"
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <TbBrandGithub />
                  </div>

                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://victorkoome1.github.io/random-quote-machine/"
                  target="_blank"
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <RxOpenInNewWindow />
                  </div>

                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Projects