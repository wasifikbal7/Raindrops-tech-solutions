import React, { useState } from 'react';
import { IoShareSocial } from "react-icons/io5";
import MediaData from './MediaData';
import lg from '../../assets/lg.png'
import { motion } from 'framer-motion';

const SocialMediaButton: React.FC = () =>
{
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () =>
	{
		setIsOpen(!isOpen);
	};

	return (
		<div className="fixed z-50 bottom-6 left-4">
			<motion.button
				className='md:pl-[12px] pl-[8px] bg-transparent rounded-[50%] shadow-lg md:w-16 md:h-16 w-12 h-12 transition-all duration-100 hover:shadow-slate-600'
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				onClick={handleClick}
				title='Share on social media'
			>
				<IoShareSocial className={`${isOpen ? 'rotate-180 duration-500' : '-rotate-0 duration-500'} md:w-10 md:h-10 w-8 h-8`} />
			</motion.button>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3 }}
					className="fixed z-50 bg-transparent bottom-24 left-8"
				>
					{MediaData.map((link, index) => (
						<a
							key={index}
							href={link.href}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center p-2 transition-shadow duration-500 ease-in-out bg-transparent hover:scale-150"
						>
							{link.img}
						</a>
					))}
				</motion.div>
			)}
		</div>
	);
};

export default SocialMediaButton;