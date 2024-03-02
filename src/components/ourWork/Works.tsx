import {  ClassType } from "@/components/shared/types";
import image1 from "@/assets/pm-w.webp";
import image2 from "@/assets/akw.webp";
import image3 from "@/assets/gd-w.webp";

const Works: Array<ClassType> = [
     {
      type:"woocommence platfrom",
      name: "Woo-Commerce Platform",
      description:
      "Fully dynamic e-commerce site with admin portal, featuring mobile-related items and accessories. ",
      image: image1,
      alt: 'imj:work',
    },
    {
      type:"edtech webapp",
      name: "Ed-Learning WebApp",
      description:"This NextJS-based Learning Management System (LMS) offers a secure environment for teachers to create, manage, and analyze courses, with protected routes ensuring privacy. Students can purchase courses and access a dedicated dashboard for managing their purchases. Stripe integration ensures seamless and secure payment processing.",
      image: image2,
      alt: 'imj:work',
    },
   
    {
      type:"data",
      name: "Crime Data Analytics",
      description:
        "This interactive User Interface features two multi-select filters (Area name and Victim's gender) and one single-select filter (Years from 2020-2023). Upon choosing specific options, users can view crime numbers depicted in a line diagram for each corresponding month of the selected year, along with a density-contour plot to identify crime types. This design facilitates users in analyzing crime statistics for individual years. ",
      image: image3,
      alt: 'imj:work',
    },
   
  ];

  export default Works
