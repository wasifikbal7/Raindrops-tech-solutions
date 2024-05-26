
import { SelectedPage } from "@/components/shared/types";
import { motion, useScroll, useTransform } from "framer-motion";
import ContactUsPageGraphic from "@/assets/contactsvg.svg";
import HText from "@/components/shared/HText";
import 'boxicons';
import { useRef, } from 'react'
import ContactForm from "./contactform";
// import ContactForm from "./nm";


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
const ContactUs = ({ setSelectedPage }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <section id={`${SelectedPage.ContactUs}`} className="relative w-full px-12 mt-3 text-center bg-slate-500">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
                  <div className="flex justify-between py-12 justify-items-start md:flex-row gap-y-2 md:flex md:items-center">
                  <div className="flex flex-col mb-12 md:flex-row md:justify-between md:align-top md:items-center md:flex">

        {/* HEADER */}
        <motion.div
          className="md:w-full"
          ref={ref}
          style={{
            scale: scaleProgress,
            opacity: opacityProgress
          }}
        >
          <HText>
            <span className="text-6xl text-white md:text-left">Get in Touch</span>
          </HText>
          <div className="pt-5 justify-items-start ">
            <p className="my-5 leading-relaxed text-left text-white sm:text-left md:px-12 text-wrap">
              We are always happy to hear from you! If you have any questions or comments about our services, please don&apos;t hesitate to get in touch with us. You can reach us via email at
              <a
                href="mailto:contact@raindropstectsolutions.com"
                className="text-white duration-300 ease-in-out hover:text-teal-500 hover:underline"> contact@raindropstechsolutions.com</a> or by phone at &nbsp;
              <a
                href="tel:+91-8637027140"
                className="text-white duration-300 ease-in-out hover:text-teal-500 hover:underline">+91-8637027140</a>.
               <br /><br /> Alternatively, you can fill out the contact form on our website and we’ll get back to you as soon as possible. We look forward to hearing from you soon!
            </p>
          </div>
        </motion.div>
        
        {/* FORM  */}

            <div className="z-[44] py-9 ">
              <motion.div
              className="my-8 basis-3/5 md:mt-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.05, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <ContactForm />
            </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="custom-shape-divider-bottom-1709063882">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
        </svg>
      </div>
    </section>
  );
};

export default ContactUs;