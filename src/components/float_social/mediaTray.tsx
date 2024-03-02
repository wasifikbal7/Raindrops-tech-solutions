import React, { useState } from 'react';

import MediaData from './MediaData';

interface MediaTrayProps
{
	mediaData: Array<any>;
	onClose: () => void;
}

const MediaTray: React.FC<MediaTrayProps> = ({ mediaData, onClose }) =>
{
	return (
		<div className="bg-white rounded-md shadow-md p-4 fixed bottom-12 left-4 z-50 w-64">
			<button
				title='Media Tray'
				type="button"
				className="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
				onClick={onClose}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					className="h-4 w-4"
				>
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>
			<ul>
				{mediaData.map((item: any, index: number) => (
					<li key={index} className="mb-2">
						<a
							href={item.href}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center p-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors duration-300"
						>
							<img src={item.img} alt={item.alt} className="w-6 h-6 mr-2" />
							{item.title}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default MediaTray;