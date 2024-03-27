'use client'

import { motion, useScroll, useTransform } from "framer-motion";
import HText from "../shared/HText";
import { SelectedPage, aboutContent } from "../shared/types";
import { Key, useRef } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import Content from "./Abouts";


const AboutContent = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.2 1']
  });
  const scaleProgress = useTransform(scrollYProgress, [0.3, 1], [0.7, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0.3, 1], [0.7, 1]);

  function setSelectedPage(value: SelectedPage): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div>
      {/* GRAPHIC */}
      {/* DESCRIPTION */}
      <div className="relative z-20 flex flex-col items-center justify-center px-2 py-5 mx-2 sm:px-4 sm:mx-2">
        {/* TITLE */}
        <div className="relative">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <HText>
              <div className="pb-16 text-4xl font-normal text-center text-white ">
                Why Us
              </div>
            </HText>
          </motion.div>

        </div>
        <div >

          {/* DESCRIPT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-col items-center justify-center"
          >
            <div className="grid items-center justify-center w-5/6 md:grid-cols-2 md:gap-x-16 xl:gap-x-20 gap-y-8 md:w-11/12 xl:w-5/6">

              {/* {Content.map((item: aboutContent, index: Key | null | undefined) => ( */} 
            
                <motion.div
                  // key={index}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: 0.2, ease: "easeInOut", duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className= "md:my-2"
                >
                  <Card className="duration-150 ease-in-out border-none shadow-lg rounded-xl shadow-black/80 hover:shadow-lg">
                    <CardHeader className="py-2 text-3xl font-normal text-center rounded-t-xl bg-[#43dcef]">
                      Expertise
                      </CardHeader>
                    <CardContent className="py-4 text-lg  text-center md:min-h-[35vh] text-white rounded-b-xl bg-[#0093a5]">
                      <p className="p-4 my-1">
                        {/* {item.description} */}
                       "Our team comprises professionals with extensive experience in their respective fields. By utilising the newest technologies, we remain at the forefront of industry innovations and provide creative solutions."

                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

              {/* ) */}
              {/* )} */}

               <motion.div
                  // key={index}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: 0.2, ease: "easeInOut", duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className= "md:my-2"
                >
                  <Card className="duration-150 ease-in-out border-none shadow-lg shadow-black/80 rounded-xl hover:shadow-lg">
                    <CardHeader className="py-2 text-3xl font-normal text-center bg-[#d3b56d] rounded-t-xl brightness-105">
                    Client Satisfaction
                    </CardHeader>
                    <CardContent className="py-4 text-lg  md:min-h-[35vh] text-center text-white bg-[#a48231] rounded-b-xl">
                      <p className="p-4 my-1">
                        {/* {item.description} */}
                      "Our top priority is ensuring that our clients are completely satisfied with our services. We go above and beyond to understand your unique needs and provide tailored solutions that exceed your expectations."
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  // key={index}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: 0.2, ease: "easeInOut", duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className= "md:my-2"
                >
                  <Card className="duration-150 ease-in-out border-none shadow-lg shadow-black/80 rounded-xl hover:shadow-lg">
                    <CardHeader className="py-2 text-3xl font-normal text-center bg-[#e16d3e] rounded-t-xl brightness-105">
                    Collaboration
                    </CardHeader>
                    <CardContent className="py-4 md:min-h-[35vh] text-white bg-[#a94419] text-lg  text-center rounded-b-xl">
                      <p className="p-4 my-1 text-white">
                        {/* {item.description} */}
                    "We promote the value of collaboration. We bring ideas to life by collaborating closely with our clients and maintaining open lines of communication. We believe that collective creativity is the cornerstone of innovation"
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  // key={index}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: 0.2, ease: "easeInOut", duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className= "md:my-2"
                >
                  <Card className="duration-150 ease-in-out border-none shadow-lg shadow-black/80 rounded-xl hover:shadow-lg">
                    <CardHeader className="py-2 text-3xl font-normal text-center rounded-t-xl bg-[#5bbd74] brightness-105">
                      Quality Assurance
                    </CardHeader>
                    <CardContent className="py-4 text-lg  md:min-h-[35vh] text-center text-white rounded-b-xl bg-[#37894d]">
                      <p className="p-4 my-1">
                        {/* {item.description} */}
                      "Our rigorous quality assurance processes ensure that every deliverable meets the highest standards of excellence. We have strict quality control measures in place to guarantee accuracy, reliability, and consistency in our work."
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
         
            </div>
          </motion.div>
        </div>
        

      </div>
    </div>
  );
}

export default AboutContent;