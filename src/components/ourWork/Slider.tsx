import React, { useState, useEffect, } from 'react';
import { ClassType } from '../shared/types';
import Works from './Works';
import "./slider.css"
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const Slider: React.FC = () => {
    const [items, setItems] = useState<HTMLElement[]>([]);
    const [thumbnails, setThumbnails] = useState<HTMLElement[]>([]);
    const [countItem, setCountItem] = useState<number>(0);
    const [itemActive, setItemActive] = useState<number>(0);
    const [refreshInterval, setRefreshInterval] = useState<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const items = Array.from(document.querySelectorAll<HTMLElement>('.slider .list .item'));
        const thumbnails = Array.from(document.querySelectorAll<HTMLElement>('.thumbnail .item'));
        setItems(items);
        setThumbnails(thumbnails);
        setCountItem(items.length);

        const interval = setInterval(() => {
            setItemActive(prev => (prev + 1) % countItem);
        }, 5000);

        setRefreshInterval(interval);

        return () => clearInterval(interval);
    }, [countItem]);

    const handleNextClick = () => {
        setItemActive(prev => (prev + 1) % countItem);
    };

    const handlePrevClick = () => {
        setItemActive(prev => (prev - 1 + countItem) % countItem);
    };


    const showSlider = () => {
        const itemActiveOld = document.querySelector<HTMLElement>('.slider .list .item.active');
        const thumbnailActiveOld = document.querySelector<HTMLElement>('.thumbnail .item.active');
        if (itemActiveOld && thumbnailActiveOld) {
            itemActiveOld.classList.remove('active');
            thumbnailActiveOld.classList.remove('active');
        }

        items[itemActive].classList.add('active');
        thumbnails[itemActive].classList.add('active');

        if (refreshInterval) {
            clearInterval(refreshInterval);
        }

        const interval = setInterval(() => {
            handleNextClick();
        }, 1000);
        setRefreshInterval(interval);
    };

    const handleThumbnailClick = (index: number) => {
        setItemActive(index);
    };

    return (
        <div>
            <div className="slider">
                {/* <!-- list Items --> */}
                <div className="list">


                    {Works.map((item: ClassType, index) => (

                        <div key={index} className={`item ${index === itemActive ? 'active' : ''}`}>
                            <button title='Prev Button'  className="prevarrows" onClick={handlePrevClick}><GrPrevious /></button>
                            <>
                                <div className='bg-black absolute w-full h-full z-[79] bg-opacity-50' />
                                <img src={item.image} alt={item.alt} width={1200} height={650}></img>
                            </>
                            <button title='Next Button'  className="nextarrows" onClick={handleNextClick}> <GrNext /></button>
                            <div className="content">
                                <p> {item.type}</p>
                                <h2>{item.name}</h2>
                                <p>{item.description} </p>
                            </div>
                        </div>

                    )
                    )}
                </div>
            </div>
           
            <div className="thumbnail">
                {Works.map((item: ClassType, index) => (


                    <div key={index} className={`item ${index === itemActive ? 'active' : ''}`} onClick={() => handleThumbnailClick(index)}>

                        <img src={item.image} alt={item.alt}></img>
                        <div className="content">
                            <h6> {item.type}</h6>
                            <p>{item.name}</p>
                        </div>
                    </div>

                )
                )}
            </div>
        </div>
    )






};

export default Slider;
function setCurrentImage(arg0: (prev: any) => number) {
    throw new Error('Function not implemented.');
}

