import { motion, useScroll, useTransform } from 'framer-motion';
import HText from "../shared/HText";
import React, { Key, useRef } from 'react'
import { SelectedPage, teammembers } from '../shared/types';
import TeamMembers from './Team-members';
import team1 from '@/assets/1693433128337.jpg';
import { IoIosArrowForward } from "react-icons/io";
import ActionButton from '../shared/ActionButton';

const Team: React.FC = () => {

    function setSelectedPage(value: SelectedPage): void {
        throw new Error("Function not implemented.");
    }
    return (
        <div className='w-full h-full py-4 my-5'>
            <h1 className='py-2 my-5 text-3xl font-bold text-slate-800'>Our Team</h1>
            <div className="flex items-center justify-around">
                <div className="grid w-full max-w-4xl grid-cols-9 mx-auto gap-x-20">
                    {/* First Member */}
                    {TeamMembers.map((item: teammembers, index) => (<>
                        <div className="w-full h-full col-span-4">
                            <div className='relative flex flex-col items-center w-full p-2 m-12 text-center bg-white shadow-xl rounded-3xl hover:shadow-2xl'>
                                <HText>{item.role}</HText>
                                <img src={item.img} alt={item.alt} className='border-box my-2 rounded-2xl w-[45%] object-contain' />
                                <p className='text-2xl font-semibold leading-relaxed text-center'>{item.name}</p>
                                <p className='p-2 text-base text-slate-600'>Experience: {item.experience}</p>
                                <ActionButton variant='outline' size='lg' setSelectedPage={setSelectedPage} className='my-2 text-base transition-all duration-300 border-slate-400 hover:border-slate-600 text-slate-500'>Read More <IoIosArrowForward /></ActionButton>
                            </div>
                        </div>
                        <div className="hidden w-full h-full col-span-4 p-4 text-lg text-left bg-white shadow-xl border-box rounded-xl text-slate-800">{item.bio}</div>

                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Team;