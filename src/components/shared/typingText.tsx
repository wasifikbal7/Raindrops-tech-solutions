import React, { useEffect, useState } from 'react'

interface TypingTextProps {
  text: string;
  delay: number;
  speed: number;
}

const TypingText: React.FC<TypingTextProps> = ({text, delay, speed}) => {

  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [repeat, setRepeat] =useState(0);

  useEffect(() => {
    if (repeat === 0) return;

    if (currentText === text) {
      setTimeout(() => {
        setIsDeleting(true);
      }, delay);
      return;
    }

    if (currentText === '') {
      setTimeout(() => {
        setIsDeleting(false);
      }, delay);
      return;
    }

    setTimeout(() => {
      if(isDeleting){
        setCurrentText((prev) => prev.slice(0, -1));
        setCurrentIndex((prev) => prev - 1);
      } else {
        setCurrentText((prev) =>  prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }
    }, speed);
  }, [currentText, currentIndex, isDeleting, text, delay, speed, repeat]);

  useEffect(() => {
    if (currentText === '' && repeat> 0){
      setRepeat((prev) => prev -1);
    }
  }, [currentText, repeat]);

  return <span>{currentText}</span>;
};

export default TypingText;
