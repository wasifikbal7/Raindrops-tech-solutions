import {  ClassType } from "@/components/shared/types";
import image1 from "@/assets/OIP (2).jpg";
import image2 from "@/assets/img2.jpg";
import image3 from "@/assets/img3.jpg";
import image4 from "@/assets/OIP (1).jpg";


const Services: Array<ClassType> = [
    {
      name: "Web Development",
      description: " We are experts in building websites and web apps that are responsive and feature-rich and that successfully interact with your target market.",
      image: image2,
      alt: 'imj:WD',
      type: ""
    },
    {
      name: "UI/UX Design",
      description: "We craft visually stunning and user-friendly interfaces that elevate the overall user experience. With knowledge of the latest trends and technologies in UI/UX design, our team delivers cutting-edge solutions tailored to your target audience's preferences.",
      image: image1,
      alt: 'imj:UI/UX',
      type: ""
    },
    {
      name: "Mobile App Devemopment",
      description: "Our expertise lies in building intuitive and high-performance mobile applications for both iOS and Android platforms, ensuring a seamless user experience across various devices.",
      image: image3,
      alt: 'imj:MAD',
      type: ""
    },
    {
      name: "AI/ML Services",
      description: " From predictive analytics to natural language processing our AI/ML integration services are customized to meet your specific business needs.",
      image: image4,
      alt: 'imj:AI/ML',
      type: ""
    },
    {
      name: "Quality Assurance",
      description: "Our team of developers undergoes rigorous testing to ensure that our code is free from any bugs or errors. We continuously strive to improve our quality assurance processes to provide our customers with the best possible experience. ",
      image: image4,
      alt: "imj:QA",
      type: ""
    },
   
  ];

  export default Services
