"use client";
import React, { useState } from 'react'
import ArchiveCard from './ArchiveCard'
import {motion} from 'framer-motion'

function Archive() {

    const [showMore, setShowMore] = useState(false)

  return (
    <div className='w-full max-w-[1240px] mx-auto px-4 py-24'>
       <div className='w-full flex flex-col items-center'>
        <h2>Other Notable Projects</h2>
        <p>view the archive</p>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard
        title="Password Generator"
        des=" Created a visually stunning and responsive password generator website using HTML, CSS, and JavaScript. Empowers users to generate strong, secure passwords effortlessly."
        listItem={["Html", "CSS", "JavaScript"]}
        link="https://victorkoome1.github.io/random-password-generator/"
         />
        <ArchiveCard
        title="Text To Speech Convertor"
        des=" Seamlessly transforms text into lifelike audio using Google API and JavaScript. A visually appealing and responsive tool for enhanced accessibility and user engagement."
        listItem={["gTTS API", "Html", "CSS"]}
        link="https://victorkoome1.github.io/text-to-speech-converter/"
         />
        <ArchiveCard
        title="Mark-Down Previewer"
        des=" Created a visually stunning Markdown previewer using ReactJS, seamlessly integrated with GitHub API for real-time content rendering."
        listItem={["Reactjs", "Github Api", "Firebase"]}
        link="https://markdown-previewer-4bf7d.web.app/"
         />
        <ArchiveCard
        title="Reviews"
        des=" Experience elegance with Markdown review carousel.It Effortlessly scrolls through captivating reviews, or randomness upon click of a button."
        listItem={["Html", "CSS", "JavaScript"]}
        link="https://victorkoome1.github.io/reviews/"
         />
        <ArchiveCard
        title="Eduford University"
        des=" Designed and developed a visually stunning and responsive landing page for a prestigious university, enhancing their online presence and user engagement"
        listItem={["JavaScript", "Tailwind CSS", "Html"]}
        link="https://victorkoome1.github.io/uni/"
         />
        <ArchiveCard
        title="Hairdresser Shop"
        des=" Crafted a visually stunning, responsive website for a trendy hairdresser shop, blending style and functionality seamlessly."
        listItem={["Html", "Tailwind CSS", "JavaScript"]}
        link="https://victorkoome1.github.io/saloonX/"
         />
         {
            showMore && (
                <>
                <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArchiveCard
                title="Documentaion Page"
                des=" Elegant and visually captivating documentation page that combines aesthetics with functionality.Streamlined user access to comprehensive guidance."
                listItem={["Html", "CSS", "JavaScript"]}
                link="https://victorkoome1.github.io/Documentaion-page/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ArchiveCard
                title="Drum Machine"
                des=" Created a visually appealing drum machine using HTML, JavaScript, and DOM manipulation. It's an interactive musical tool that allows users to create rhythms with ease."
                listItem={["Html", "CSS", "JavaScript"]}
                link="https://victorkoome1.github.io/drumkit/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <ArchiveCard
                title="To-Do List"
                des=" Developed an elegant To-Do list web application using Node.js, HTML, and CSS, delivering a visually appealing and user-friendly task management experience."
                listItem={["NodeJs", "MongoDB", "JavaScript"]}
                link="https://github.com/VictorKoome1/todolist-v1"
              />
            </motion.div>
            
            
                </>
            )
         }
       </div>
       <div className='mt-12 flex items-center justify-center'>
        {
            showMore ? (
                <button onClick={() => setShowMore(false)} className='w-36 h-12 rounded-md text-[13px] border-green duration-300'>Show less
        </button>
            ) : (
                <button onClick={() => setShowMore(true)} className='w-36 h-12 rounded-md text-[13px] border-green duration-300'>Show More
        </button>
            )
        }
       </div>
    </div>
  )
}

export default Archive