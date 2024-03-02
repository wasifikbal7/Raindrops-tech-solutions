"use client"

import Services from "./Services";
import { ClassType } from "@/components/shared/types";
import { ImageCard } from "../shared/Card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import React, { useRef } from "react";
import Autoplay from "embla-carousel-autoplay"
import { motion, useScroll, useTransform } from "framer-motion";


    
export function CarouselSize() {
    const ref = useRef<HTMLDivElement>(null);

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    });

    const scaleProgress = useTransform(scrollYProgress, [0,1], [0.7,1]);
    const opacityProgress = useTransform(scrollYProgress, [0,1], [0.7,1]);

    const plugin = React.useRef(    Autoplay({ delay: 2000, stopOnInteraction: false,stopOnMouseEnter:true })  )   
    return (
        <motion.div ref={ref} style={{scale: scaleProgress, opacity: opacityProgress}} className='w-full'>
            <Carousel opts={{
                loop:true, align:"start"
            }}    
            plugins={[plugin.current]}
            className="md:w-full items-center max-w-lg min-h-full md:min-h-60  md:px-4 sm:px-3 bg-transparent md:min-w-full"
            >            
            <CarouselContent>
                {Services.map((item: ClassType, index) => (                                          
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1 w-fit md:h-4/5 md:w-11/12 ml-3 xs:mx-2 items-center">
                            <Card className="bg-transparent">
                                <CardContent className="flex items-center bg-transparent justify-center p-6 hover:cursor-pointer aspect-square">
                                    <div className="p-1">
                                        <ImageCard
                                            key={`${item.name}-${index}`}
                                            name={item.name}
                                            description={item.description}
                                            image={item.image}
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


