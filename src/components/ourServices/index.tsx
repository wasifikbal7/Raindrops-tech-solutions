"use client"
import { SelectedPage } from "@/components/shared/types";
import { delay, motion, useScroll, useTransform } from "framer-motion";
import HText from "@/components/shared/HText";
import {CarouselSize} from "./slide"
import { useRef } from "react";


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurServices = ({ setSelectedPage }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["0.1 1", "1.5 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0.3,1], [0.7,1]);
  const opacityProgress = useTransform(scrollYProgress, [0.3,1], [0.7,1]);

  return (
    <section id={`${SelectedPage.Services}`} className="relative flex flex-col items-center justify-center w-full py-12 my-5 text-center bg-zinc-300 bg-opacity-30">
      <div className="custom-shape-divider-top-1709027491">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
          </svg>
      </div>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Services)} className={'items-center flex flex-col justify-center'} >
        
        <motion.div
          style={{
            scale: scaleProgress,
            opacity: opacityProgress,
          }}
          ref={ref}
          className="z-10 w-5/6 pt-2 mx-auto mt-2 mb-5 pb-7"
        >
          <div className="flex flex-col items-center justify-center text-center md:w-full">
            <HText><div className="text-6xl sm:text-4xl">What We Offer</div></HText> 
            <p className="py-5 text-2xl px-2 leading-relaxed">
            Raindrops Tech Solutions is dedicated to providing innovative and cutting-edge solutions to our clients. We specialize in developing software, designing websites, and providing IT consulting services. Our team of experts is passionate about technology and is committed to delivering the best possible results for our clients. We believe in building long-term relationships with our clients and providing them with the highest level of customer service. Our goal is to help our clients achieve their business objectives by leveraging the latest technologies and best practices in the industry.
            </p>
          </div>
        </motion.div>
        <div className="z-10 flex flex-col items-center justify-center md:w-full">
          <CarouselSize />
        </div>
        
      </motion.div>
      <div className="custom-shape-divider-bottom-1709027578">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
          </svg>
      </div>
    </section>
  );
};

export default OurServices;
