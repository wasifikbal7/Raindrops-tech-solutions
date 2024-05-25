'use client'
import { SelectedPage,ClassType  } from "@/components/shared/types";
import { motion, useScroll, useTransform } from "framer-motion";
import HText from "@/components/shared/HText";
import {CarouselSize} from "./caraousel"
import { useRef } from "react";
import Slider from "./Slider";


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ourDemo = ({ setSelectedPage }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["0 1", "1.5 1"],
  });
  
  const scaleProgress = useTransform(scrollYProgress, [0,1], [ 0.7, 1 ]);
  
  const opacityProgress = useTransform(scrollYProgress, [0,1], [ 0.6, 1 ]);
  
  const highlight = "text-teal-500";


  return (
    <section id={`${SelectedPage.Demo}`} className="relative flex flex-col items-center justify-center w-full mt-5 text-center md:mt-5">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Demo)} className="z-10 flex flex-col items-center justify-center">
        {/* <motion.div
          ref={ref}
          style={{
            scale: scaleProgress,
            opacity:opacityProgress,
          }}
          className="w-full mx-6 mb-5 pb-7"
        >
          <div className="flex flex-col items-center justify-center text-center md:w-full">
            <HText><div className="text-6xl md:text-4xl md:pt-6 md:mt-6">Portfolio</div></HText>
            <p className="py-5 text-2xl leading-relaxed md:text-xl"> */}
             <motion.div
          style={{
            scale: scaleProgress,
            opacity: opacityProgress,
          }}
          ref={ref}
          className="z-10 w-5/6 mx-auto mb-8 md:my-6 md:pt-6 pb-7"
        >
          <div className="flex flex-col items-center justify-center text-center md:w-full">
            <HText><div className="text-6xl sm:text-4xl">Portfolio</div></HText> 
            <p className="px-2 mt-4 text-2xl leading-relaxed md:py-12">
              Our work ethic makes us one of India&apos;s best <span className={highlight}>WEB DESIGN</span> companies.
              At <span className={highlight}>RAINDROPS TECH SOLUTIONS</span>, we stand at the forefront of digital innovation,
              where our passion for <span className={highlight}>TECHNOLOGY</span> and <span className={highlight}>PROBLEM-SOLVING</span> converges 
              to redefine the digital landscape. Our relentless pursuit of excellence is evident in our sophisticated <span className={highlight}>WEB DEVELOPMENT</span>, 
              cutting-edge <span className={highlight}>MACHINE LEARNING</span> solutions, and our flair for <span className={highlight}>UI/UX DESIGN</span>.
              We pride ourselves on creating bespoke digital experiences and intelligent systems that not only drive success but also ensure the highest quality 
              through rigorous <span className={highlight}>QUALITY ASSURANCE </span> practices.
              Our expertise extends to crafting seamless <span className={highlight}>MOBILE APP DEVELOPMENT</span> 
              projects that resonate with users and excel in functionality. 
              Each project in our portfolio is a testament to our <span className={highlight}>COLLABORATTIVE </span>
              approach, <span className={highlight}>TECHNICAL VIRTUOSITY</span>, 
              and our commitment to delivering excellence across every touchpoint of the <span className={highlight}>USER EXPERIENCE</span>.
            </p>
          </div>
        </motion.div>
        <div className="w-full h-full mx-2 md:mx-3">
          {/* < Slider /> */}
          <CarouselSize />  
        </div>   
      </motion.div>
    </section>
  );
};

export default ourDemo;



