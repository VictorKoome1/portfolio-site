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
        des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          laudantium velit qui sint non, voluptates quo a veritatis."
        listItem={["Html", "CSS", "JavaScript"]}
        link="https://victorkoome1.github.io/random-password-generator/"
         />
        <ArchiveCard
        title="Text To Speech Convertor"
        des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          laudantium velit qui sint non, voluptates quo a veritatis."
        listItem={["gTTS API", "Html", "CSS"]}
        link="https://victorkoome1.github.io/text-to-speech-converter/"
         />
        <ArchiveCard
        title="Mark-Down Previewer"
        des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          laudantium velit qui sint non, voluptates quo a veritatis."
        listItem={["Reactjs", "Github Api", "Firebase"]}
        link="https://markdown-previewer-4bf7d.web.app/"
         />
        <ArchiveCard
        title="Reviews"
        des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          laudantium velit qui sint non, voluptates quo a veritatis."
        listItem={["Html", "CSS", "JavaScript"]}
        link="https://victorkoome1.github.io/reviews/"
         />
        <ArchiveCard
        title="Eduford University"
        des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          laudantium velit qui sint non, voluptates quo a veritatis."
        listItem={["JavaScript", "Tailwind CSS", "Html"]}
        link="https://victorkoome1.github.io/uni/"
         />
        <ArchiveCard
        title="Hairdresser Shop"
        des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          laudantium velit qui sint non, voluptates quo a veritatis."
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
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
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
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
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
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
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