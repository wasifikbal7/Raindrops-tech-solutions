import React, { useEffect, useState } from 'react';
import { FaCaretUp } from "react-icons/fa6";
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
            <div className='app'>
            {toTopBtn && (
                <button title='ToTopButton' 
                className='fixed z-50 p-3 text-5xl transition-colors duration-300 ease-in-out bg-gray-100 rounded-full text-slate-500 hover:text-slate-600 hover:bg-gray-300 bottom-6 right-4'
                 onClick={ScrollUp} id="topBtn">
                    <IoChevronUpCircleOutline />
                </button>
            )}
            </div>
        );
    
}

 