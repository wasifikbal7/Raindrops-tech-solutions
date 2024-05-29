"use client"
import { SelectedPage } from "@/components/shared/types";
import { delay, motion, useScroll, useTransform } from "framer-motion";
import HText from "@/components/shared/HText";
import {CarouselSize} from "./slide"
import { useRef } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ppt from '@/assets/Raindrops Tech Solutions.pdf'
import PdfDownloadButton from "./pdf_download_btn";


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
  const highlight = "text-teal-500";

  return (
    <section id={`${SelectedPage.Services}`} className="relative flex flex-col items-center justify-center w-full py-2 text-center md:py-2 md:my-5 bg-zinc-300 bg-opacity-30">
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
        className="z-10 w-5/6 mx-auto mb-8 md:my-6 md:pt-6 pb-7"
      >
        <div className="flex flex-col items-center justify-center text-center md:w-full">
          <HText><div className="text-6xl sm:text-4xl">What We Offer</div></HText> 
          <p className="px-2 mt-4 text-2xl leading-relaxed md:py-12">
          Raindrops Tech Solutions is <span className={highlight}>DEDICATED</span> to providing innovative and cutting-edge solutions to our clients.<br />
          We <span className={highlight}>SPECIALIZE</span> in developing software, designing websites, and providing IT consulting services.<br />
           Our team of experts is passionate about technology and is committed to <span className={highlight}>DELIVERING</span> the best possible results for our clients.<br />
           We believe in building long-term <span className={highlight}>RELATIONSHIPS</span> with our clients and providing them with the highest level of customer service.<br />
           Our goal is to help our clients achieve their business objectives by leveraging the latest <span className={highlight}>TECHNOLOGIES</span> and best practices in the industry.
          </p>
          </div>
          <div className="p-4 m-3 md:p-1 md:m-1">
            <PdfDownloadButton />
          </div>

       
      </motion.div>
      <div className="z-10 flex flex-col items-center justify-center md:w-full mt-[-70px] md:mt-1">
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
