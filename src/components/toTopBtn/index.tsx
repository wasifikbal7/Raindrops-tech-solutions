import React, { useEffect, useState } from 'react';
import { IoChevronUpCircleOutline } from "react-icons/io5";

export const ToTopBtn = () => {
    const [toTopBtn,setToTopBtn]=useState<boolean>(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setToTopBtn(true);
            } else {
                setToTopBtn(false);
            }
        })
    }, []);

    const ScrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
        return (
            <div className=''>
            {toTopBtn && (
                <button title='ToTopButton' 
                className='fixed z-50 p-1 text-5xl text-slate-500 transition-colors duration-300 ease-in-out bg-white/80 rounded-full shadow-lg md:text-5xl hover:text-slate-600 hover:bg-gray-300 bottom-6 right-4 hover:shadow-slate-600 md:p-2'
                 onClick={ScrollUp} id="topBtn">
                    <IoChevronUpCircleOutline />
                </button>
            )}
            </div>
        );
    
}

 