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
      <div className="relative z-20 flex flex-col items-center justify-center py-5 px-2 mx-2 sm:px-4 sm:mx-2">
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
              <div className="text-center text-4xl font-normal text-white pb-16 ">
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
            <div className="grid md:grid-cols-2 md:gap-x-16 xl:gap-x-20 gap-y-8 w-5/6 md:w-11/12 xl:w-5/6 items-center justify-center">

              {Content.map((item: aboutContent, index: Key | null | undefined) => (
                <motion.div
                  key={index}
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
                  <Card className="duration-150 rounded-2xl ease-in-out shadow-md hover:shadow-lg">
                    <CardHeader className="text-2xl rounded-t-2xl py-2 bg-cyan-300 brightness-105 font-normal text-center">{item.name}</CardHeader>
                    <CardContent className="text-xl h-[22rem] md:h-[25rem] xl:h-52 font-normal rounded-b-2xl bg-cyan-600 text-white py-4 text-center">
                      <p className="p-4 my-1">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

              )
              )}
         
            </div>
          </motion.div>
        </div>
        {/* BUTTON */}
        

      </div>
    </div>
  );
}

export default AboutContent;