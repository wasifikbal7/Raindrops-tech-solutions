import React from 'react';
import pdfppt from '@/assets/Raindrops Tech Solutions.pdf'

const PdfDownloadButton: React.FC = () => {
  const handleDownloadClick = () => {
    const link = document.createElement('a');
    link.href = pdfppt;
    link.download = 'Raindrops Tech Solutions.pdf'; // Set a default file name for the download
    link.click();
    link.target = '_blank';
  };

  return (
    <div className="font-semibold transition-transform drop-shadow-lg right-20 top-3 active:scale-90">
      <a href={pdfppt} target='_blank'>
        <button
          onClick={handleDownloadClick}
          className="py-2 px-4 text-lg font-semibold hover:underline duration-300 ease-in-out hover:text-teal-500 border-2 bg-gradient-to-b from-white from-45% to-zinc-400 rounded-3xl text-slate-800 hover:text-accent-foreground hover:scale-105 transition-all border-white shadow-md shadow-slate-600"
        >
          Download Brochure&rarr;
        </button>
      </a>
    </div>
  );
};

export default PdfDownloadButton;
