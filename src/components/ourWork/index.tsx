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

  return (
    <section id={`${SelectedPage.Demo}`} className="relative flex flex-col items-center justify-center w-full mt-5 text-center md:mt-5">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Demo)} className="z-10 flex flex-col items-center justify-center">
        <motion.div
          ref={ref}
          style={{
            scale: scaleProgress,
            opacity:opacityProgress,
          }}
          className="w-5/6 mx-auto mb-5 pt- mt- pb-7"
        >
          <div className="flex flex-col items-center justify-center text-center md:w-full">
            <HText><div className="text-6xl md:text-4xl md:pt-6 md:mt-6">Portfolio</div></HText>
            <p className="py-5 text-2xl leading-relaxed md:text-xl">
              Our work ethic makes us one of India&apos;s best web design companies. Flown Developer forms a major part of the list of the top design services.
            </p>
          </div>
        </motion.div>
        <div className="w-full h-full md:mx-3 mx-2 items-center">
          {/* < Slider /> */}
          <CarouselSize />  
        </div>   
      </motion.div>
    </section>
  );
};

export default ourDemo;



