import React from 'react'
import { TbBrandGithub } from "react-icons/tb"
import { RxOpenInNewWindow } from "react-icons/rx"

const ArchiveCard = ({ title, des, listItem, link }) => {
    return (
        <a href={link} target='_blank'>
            <div className="w-full h-80 rounded-lg bg-[#112240] p-7 flex flex-col gap-6 hover:-translate-y-2 transition-transform duration-300 group">
                <div className='flex justify-between items-center'>
                    <RxOpenInNewWindow className='text-4xl text-white' />
                    <TbBrandGithub className='text-4xl text-white' />
                </div>
                <div>
                    <h2 className="text-xl font-semibold tracking-wide text-white">
                        {title}
                    </h2>
                    <p className="text-sm mt-3 text-white">{des}</p>
                </div>
                <ul className='text-xs mdl:text-sm text-white flex items-center gap-2 justify-between flex-wrap'>
                    {
                        listItem.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))
                    }
                </ul>
            </div>
        </a>
    )
}

export default ArchiveCard