import React, { useRef } from 'react';
import Success from '@/assets/undraw_opened_re_i38e.svg'
import HText from '../shared/HText';
import { AiOutlineClose } from "react-icons/ai";

interface ToastProps {
    isOpen: boolean;
    onClose: () => void;
}

function Toast({isOpen, onClose}: ToastProps) {
    const overlayRef = useRef(null);

    const handleOverlayClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (e.target === overlayRef.current){
            onClose();
        }
    }
  return (
    isOpen ?
    (
    <div className='fixed z-[100] top-0 left-0 flex items-center justify-center w-full h-full '>
      {/* Toast Overlay */}
      <div onClick={handleOverlayClick} ref={overlayRef} className='absolute top-0 left-0 w-full h-full bg-black cursor-pointer bg-opacity-70 blur-sm' />

      {/* Toast Box */}
      <div className="box-border relative w-3/5 px-16 py-12 shadow-lg bg-gray-50 rounded-xl shadow-zinc-600">
        {/* Close Button */}
        <AiOutlineClose onClick={onClose} className='absolute p-1 text-3xl transition-all duration-300 top-6 right-8 hover:scale-110 hover:text-white hover:bg-slate-700 hover:rounded-full' />
        <div className="flex flex-col items-center justify-center gap-x-12">
            <img src={Success} alt="Success Image" className='w-12 md:w-1/3' />
            <div className='mx-5 md:w-3/5'>
                <h2 className='basis-3/5 my-3 font-montserrat text-lg font-[700] md:font-[900] md:text-4xl'>Successfully Submitted</h2>
                </div>
                <div>
                  <p className='py-5 my-3 text-xs md:text-lg'>Thank you for reaching out to us! Our team will connect with you in 24 hours.</p>
            </div>
        </div>
      </div>
    </div>
    ) : null
  )
}

export default Toast;
