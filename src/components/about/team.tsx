import { motion, useScroll, useTransform } from 'framer-motion';
import HText from "../shared/HText";
import React, { Key, useRef } from 'react'
import { SelectedPage, teammembers } from '../shared/types';
import TeamMembers from './Team-members';
import team1 from '@/assets/1693433128337.jpg';
import { IoIosArrowForward } from "react-icons/io";
import ActionButton from '../shared/ActionButton';

const Team: React.FC = () => {
    // const ref = useRef<HTMLDivElement>(null);
    // const { scrollYProgress } = useScroll({
    //     target: ref,
    //     offset: ['0 1', '1.2 1']
    // });
    // const scaleProgress = useTransform(scrollYProgress, [0.3, 1], [0.7, 1]);
    // const opacityProgress = useTransform(scrollYProgress, [0.3, 1], [0.7, 1]);

    // function setSelectedPage(value: SelectedPage): void {
    //     throw new Error("Function not implemented.");
    // }
    function setSelectedPage(value: SelectedPage): void {
        throw new Error("Function not implemented.");
    }

    return (
        <div className='w-full h-full my-5 py-4'>
            <h1 className='text-3xl font-bold text-slate-800 my-5 py-2'>Our Team</h1>
            <div className="flex items-center justify-around">
                <div className="max-w-4xl mx-auto w-full grid grid-cols-9 gap-x-20">
                    {/* First Member */}
                    {TeamMembers.map((item: teammembers, index) => (<>
                        <div className="w-full h-full col-span-4">
                            <div className='w-full relative bg-white rounded-3xl m-12 flex flex-col items-center text-center shadow-xl hover:shadow-2xl p-2'>
                                <HText>{item.role}</HText>
                                <img src={item.img} alt={item.alt} className='border-box my-2 rounded-2xl w-[45%] object-contain' />
                                <p className='text-2xl font-semibold text-center leading-relaxed'>{item.name}</p>
                                <p className='text-base text-slate-600 p-2'>Experience: {item.experience}</p>
                                <ActionButton variant='outline' size='lg' setSelectedPage={setSelectedPage} className='text-base my-2 border-slate-400 hover:border-slate-600 transition-all duration-300 text-slate-500'>Read More <IoIosArrowForward /></ActionButton>
                            </div>
                        </div>
                        <div className="border-box col-span-4 bg-white w-full h-full rounded-xl text-slate-800 text-left shadow-xl hidden p-4 text-lg">{item.bio}</div>

                        {/* <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                                <div className="h-full w-1 bg-white"></div>
                                <div className="absolute w-6 h-6 rounded-full bg-white z-10 text-slate-600 text-center">{index+1}</div>
                        </div>
                        <div className="col-span-4 w-full h-full" /> */}
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Team;