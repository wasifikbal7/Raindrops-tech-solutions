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
		<div className="fixed bottom-6 left-4 z-50">
			<motion.button
				className='pl-[12px] bg-transparent rounded-[50%] shadow-lg w-16 h-16 transition-all duration-100 hover:shadow-slate-600'
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				onClick={handleClick}
			>
				<IoShareSocial className={`${isOpen ? 'rotate-180 duration-500' : '-rotate-0 duration-500'} w-10 h-10`} />
			</motion.button>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3 }}
					className="bg-transparent fixed bottom-24 left-8 z-50"
				>
					{MediaData.map((link, index) => (
						<a
							key={index}
							href={link.href}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center p-2 bg-transparent hover:scale-150 transition-shadow duration-500 ease-in-out"
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