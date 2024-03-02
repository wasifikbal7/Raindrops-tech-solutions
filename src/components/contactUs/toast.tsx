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
    <div className='fixed z-[98] top-0 left-0 flex items-center justify-center w-full h-full'>
      {/* Toast Overlay */}
      <div onClick={handleOverlayClick} ref={overlayRef} className='bg-black bg-opacity-70 blur-sm absolute top-0 left-0 w-full h-full cursor-pointer' />

      {/* Toast Box */}
      <div className="relative w-3/5 px-16 py-12 box-border bg-gray-50 rounded-xl shadow-lg shadow-zinc-600">
        {/* Close Button */}
        <AiOutlineClose onClick={onClose} className='absolute top-6 right-8 text-3xl hover:scale-110 p-1 hover:text-white hover:bg-slate-700 hover:rounded-full transition-all duration-300' />
        <div className="flex items-center justify-center gap-x-12">
            <img src={Success} alt="Success Image" className='w-1/3' />
            <div className='w-3/5 mx-5'>
                <HText>Successfully Submitted</HText>
                <p className='my-3 py-5 text-lg'>Thank you for reaching out to us! Our team will connect with you in 24 hours.</p>
            </div>
        </div>
      </div>
    </div>
    ) : null
  )
}

export default Toast;
