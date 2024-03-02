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
    <motion.div
      // className="flex flex-col items-center justify-center"
      style={{
        scale: scaleProgress,
        opacity: opacityProgress
      }}
      ref={ref}
    >

      {/* GRAPHIC */}

      {/* DESCRIPTION */}
      <div className="flex flex-col relative z-20 items-center justify-center px-4 mx-2">
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
              <div className="text-center text-5xl pb-28 ">
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
            className="flex flex-col items-center justify-center gap-6"
          >
            <div className="flex flex-col w-11/12 gap-6 pt-5 gap-y-10">

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
                  className="my-2"
                >
                  <Card className="duration-150 ease-in-out shadow-md hover:shadow-lg">
                    <CardHeader className="text-3xl font-bold text-center">{item.name}</CardHeader>
                    <CardContent className="text-xl font-[600] text-center">
                      <p className="my-1 p-4">
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

    </motion.div>
  );
}

export default AboutContent;