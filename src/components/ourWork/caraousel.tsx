'use client'

import Works from "./Works";
import { ClassType } from "@/components/shared/types";
import { ImageCard } from "../shared/Card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import React, { useRef } from "react";
import Autoplay from "embla-carousel-autoplay"
import { motion, useScroll, useTransform } from "framer-motion";


    
export function CarouselSize() {
    const ref= useRef<HTMLDivElement>(null);

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    });

    const scaleProgress = useTransform(scrollYProgress, [0,1], [0.7, 1]);
    
    const opacityProgress = useTransform(scrollYProgress, [0,1], [0.7, 1]);

    const plugin = React.useRef(    Autoplay({ delay: 2000, stopOnInteraction: false,stopOnMouseEnter:true })  )   
    return (
        <motion.div ref={ref} style={{scale: scaleProgress, opacity: opacityProgress}} className='w-full'>
            <Carousel opts={{
                loop:true, align:"start"
            }}    
            plugins={[plugin.current]}
            className="items-center max-w-lg min-h-full bg-transparent md:w-full md:min-h-60 md:px-4 sm:px-3 md:min-w-full w-[95vw]"
            >            
            <CarouselContent>
                {Works.map((item: ClassType, index) => (                                          
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="items-center p-1 ml-3 w-fit md:h-4/5 md:w-11/12 xs:mx-2">
                        <Card className="bg-transparent border-none border-transparent">
                            <CardContent className="flex items-center justify-center p-6 bg-transparent hover:cursor-pointer aspect-square">
                                    <div className="p-1">
                                        <ImageCard
                                            className="bg-transparent border-2 border-slate-900 rounded-[12rem] px-5 py-6"
                                            key={`${item.name}-${index}`}
                                            name={item.name}
                                            // description={item.description}
                                            image={item.image}
                                            alt={item.alt}
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>                      
                    </CarouselItem>                                                      
                ))}  
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
        </motion.div>
        
    )
}


