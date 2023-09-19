//To use client components in Next.js, you need to add the use client directive as the first line of your file (before any imports). This will tell Next.js that this is a client component and it can use hooks. Otherwise, Next.js will treat your component as a server component, which cannot use hooks.
"use client";
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import victor from '../public/assets/skills/victor.png'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { motion } from 'framer-motion';


const Navbar = () => {

    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow);
    }, []);


    return (
        <div className={shadow ? 'fixed w-full h-20 bg-[#ecf0f3] shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
            <div className='flex justify-between bg-[#ecf0f3] items-center w-full h-full px-2 2xl:px-16'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}>
                    <Image
                        src={victor}
                        alt="/"
                        width={100}
                        height={50}
                        className='w-[80px] md:w-[90px]'
                    />
                </motion.div>

                <div>
                    <ul className='hidden md:flex'>
                        <Link href="/">
                            <motion.li initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.1 }} className='ml-10 text-sm uppercase hover:border-b'>Home</motion.li>
                        </Link>
                        <Link href="/#about">
                            <motion.li initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.1, delay: 0.1 }} className='ml-10 text-sm uppercase hover:border-b'>About</motion.li>
                        </Link>
                        <Link href="/#skills">
                            <motion.li initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.1, delay: 0.2 }} className='ml-10 text-sm uppercase hover:border-b'>Skills</motion.li>
                        </Link>
                        <Link href="/#projects">
                            <motion.li initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.1, delay: 0.3 }} className='ml-10 text-sm uppercase hover:border-b'>Projects</motion.li>
                        </Link>
                        <Link href="/#contact">
                            <motion.li initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.1, delay: 0.4 }} className='ml-10 text-sm uppercase hover:border-b'>Contact</motion.li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className='md:hidden cursor-pointer'>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={nav ? 'md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-out duration-500' : 'fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'}>
                    <div>
                        <div className='flex w-full justify-between items-center'>
                            <Link href="/">
                                <Image src={victor}
                                    alt='/'
                                    width={80}
                                    height={50} />
                            </Link>

                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose size={25} />
                            </div>
                        </div>
                        <div className='border-b border-gray-400 my-4'>
                            <p className='w-[85%] md:w-[90%] py-4'>Lets build something together change</p>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <Link href="/">
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Home</li>
                            </Link>
                            <Link href="/#about">
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>About</li>
                            </Link>
                            <Link href="/#skills">
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Skills</li>
                            </Link>
                            <Link href="/#projects">
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Projects</li>
                            </Link>
                            <Link href="/#contact">
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Contact</li>
                            </Link>
                        </ul>
                        <div className='pt-12'>
                            <p className='uppercase tracking-widest text-[#5651e5]'>Lets connect</p>
                            <div className='flex items center justify-between my-6 w-full sm:w-[80%]'>
                                <a href="https://www.linkedin.com/in/victor-koome-31787a242/" target="_blank">
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaLinkedinIn />
                                </div>
                                </a>
                                <a href="https://github.com/VictorKoome1" target="_blank"> 
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaGithub />
                                </div>
                                </a>
                                <a href="/#contact" onClick={() => setNav(false)}>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <AiOutlineMail />
                                </div>
                                </a>
                                <a href="/#contact" onClick={() => setNav(false)}>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <BsFillPersonLinesFill />
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

export default Navbar