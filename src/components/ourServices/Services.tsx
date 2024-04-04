import {  ClassType } from "@/components/shared/types";
import imageuiux from "@/assets/ui-ux.jpg";
import imagewebdev from "@/assets/development.jpg";
import imageMAD from "@/assets/mobileapp.jpg";
import imageQA from "@/assets/qa.jpg";
import imageAIML from '@/assets/aiml.jpg'


const Services: Array<ClassType> = [
    {
      name: "Web Development",
      description: " We are experts in building websites and web apps that are responsive and feature-rich and that successfully interact with your target market.",
      image: imagewebdev,
      alt: 'imj:WD',
      type: ""
    },
    {
      name: "UI/UX Design",
      description: "We craft visually stunning and user-friendly interfaces that elevate the overall user experience. With knowledge of the latest trends and technologies in UI/UX design, our team delivers cutting-edge solutions tailored to your target audience's preferences.",
      image: imageuiux,
      alt: 'imj:UI/UX',
      type: ""
    },
    {
      name: "Mobile App Devemopment",
      description: "Our expertise lies in building intuitive and high-performance mobile applications for both iOS and Android platforms, ensuring a seamless user experience across various devices.",
      image: imageMAD,
      alt: 'imj:MAD',
      type: ""
    },
    {
      name: "AI/ML Services",
      description: " From predictive analytics to natural language processing our AI/ML integration services are customized to meet your specific business needs.",
      image: imageAIML,
      alt: 'imj:AI/ML',
      type: ""
    },
    {
      name: "Quality Assurance",
      description: "Our team of developers undergoes rigorous testing to ensure that our code is free from any bugs or errors. We continuously strive to improve our quality assurance processes to provide our customers with the best possible experience. ",
      image: imageQA,
      alt: "imj:QA",
      type: ""
    },
   
  ];

  export default Services
