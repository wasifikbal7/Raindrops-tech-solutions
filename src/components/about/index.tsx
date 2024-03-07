"use client"

import HText from "@/components/shared/HText";
import { SelectedPage } from "@/components/shared/types";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AboutContent from "./about-content";
import Team from "./team";
import ActionButton from "../shared/ActionButton";
import StockUI from '@/assets/Default_Create_an_appealing_UI_for_a_website_called_KidzCamp_m_1_6b765bfc-9f54-4c30-a40f-2469aaa8c2ab_0.jpg';


const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const About = ({ setSelectedPage }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <div className="flex flex-col">
      
      <section id={`${SelectedPage.About}`} className="relative flex flex-col items-center justify-center w-full pb-12 my-5 md:px-12 bg-zinc-300 bg-opacity-30">
        <div className="custom-shape-divider-top-1709027491">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
          </svg>
        </div>
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.About)}
          className="z-10"
        >
          
          {/* HEADER */}
          <motion.div
            className="text-center md:w-full"
            ref={ref}
            style={{
              scale: scaleProgress,
              opacity: opacityProgress,

            }}
          >

              <HText><div className="text-6xl md:text-4xl">More About Us</div></HText>
              <div className="justify-items-center ">
                <p className="py-8 my-5 text-2xl leading-relaxed text-center md:px-48">
                  100% Trusted and Registered Company in India with a professional website that provides the best web development and web design services in India. We are a company that offers multi-functional web portals, and we make sure that a well-developed and attractive website can help our clients to record ROI-driven results.
                </p>
              </div>
              <img src={StockUI} alt="A sample illustrayion image showing our expertise in Layout Design" className="w-full my-5 border-2 shadow-lg border-slate-500 rounded-2xl shadow-slate-400" />
          </motion.div>
        </motion.div>
        <div className="custom-shape-divider-bottom-1709027578">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
          </svg>
        </div>
      </section>

      <div className="relative my-5">
        <div className="custom-shape-divider-top-1709027400">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
          </svg>
        </div>
        <div className="relative z-20 md:mt-[-50px] mt-[-200px]">
        <AboutContent />

        {/* button */}
        <div className="flex flex-col items-center justify-center md:flex md:items-center md:justify-center">
          <div className="py-5 my-5 transition-transform text-zinc-50 active:scale-90">
            <motion.div
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: 1, duration: 0.3 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <ActionButton variant='outline' className="text-lg font-bold transition-all duration-200 shadow-md text-slate-800 hover:shadow-lg hover:bg-slate-100 hover:border-black" size='lg' setSelectedPage={setSelectedPage}>
                Hire Us
              </ActionButton>
            </motion.div>
          </div>
        </div>
        </div>
        <div className="custom-shape-divider-bottom-1709027714">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
          </svg>
        </div>
      </div>
 
    </div>
  );
};

export default About;
