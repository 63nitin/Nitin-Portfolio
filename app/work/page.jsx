"use client";

import { motion } from "framer-motion";
import React, {useState} from "react";  

import {Swiper, SwiperSlide} from 'swiper/react'
import WorkSliderBtn from "@/components/WorkSliderBtn";
import "swiper/css";

import { BsArrowUpRight,BsGithub } from "react-icons/bs";
import { Tooltip,
     TooltipContent,
     TooltipProvider,
     TooltipTrigger
 } from "@/components/ui/tooltip";

 import Link from "next/link";
 import Image from "next/image";
import { Description } from "@radix-ui/react-dialog";

 const projects = [
    {
        num: '01',
        category:'frontend',
        title:"Tin Dog",
        description:
       " Tindog is a website that helps dog owners find compatible matches for their pets. It is inspired by the popular dating app Tinder, but designed for dogs. I used HTML, CSS and Bootstrap to create this website." ,
       stack:[{name:"Html 5"}, {name: "Css"}, {name: "Javascript"}],
       Image: '/assets/thumb2.png',
       live: "https://63nitin.github.io/tinDog-project/",
       github: "https://github.com/63nitin/tinDog-project",
    },
    {
        num: '02',
        category:'frontend',
        title:"Pokémon",
        description:
        " Pokémon app using ReactJS and the Pokémon API, allowing users to explore detailed Pokémon data. The project involved handling complex API responses and overcoming data management challenges as a beginner" ,
       stack:[{name:"React.Js"}, {name: "Tailwind.css"}, {name: "API"}],
       Image: '/assets/thumb5.png',
       live: "https://rad-fairy-6677d7.netlify.app/",
       github: "https://github.com/63nitin/Pokemon",
    },
    {
        num: '03',
        category:'frontend',
        title:"project 3",
        description:
        " Developed a personal online portfolio using React and SCSS to showcase my skills and projects. Integrated EmailJS for seamless contact form functionality, enabling direct communication with potential employers" ,
       stack:[{name:"React.Js"}, {name: "Scss"}, {name: "Email.Js"}],
       Image: '/assets/thumb1.png',
       live: "https://rad-fairy-6677d7.netlify.app/",
       github: "https://github.com/63nitin/chai-aur-react",
    },
    {
        num: '04',
        category:'Fullstack',
        title:"Blog App",
        description:
       "Blog App Using React.js and tailwind css , where user can sign in and create their accout and post some articles and images on the app." ,
       stack:[{name:"React.js"}, {name: "Tailwind.css"}, {name: "Appwrite"}],
       Image: '/assets/thumb4.png',
       live: "",
       github: "",
    },
    {
        num: '05',
        category:'frontend',
        title:"BMI Calculator",
        description:
       " Created a BMI Calculator that calculates the Body Mass Index based on user input of height and weight. The application provides instant feedback on the user’s BMI category, helping users understand their health status." ,
       stack:[{name:"Html"}, {name: "Cssss"}, {name: "Javascript"}],
       Image: '/assets/thumb3.png',
       live: "https://63nitin.github.io/BMI-Calculator/",
       github: "https://github.com/63nitin/BMI-Calculator",
    },
  
    
 ]



const Work = () => {
    const [project, setProject] = useState(projects[0]);
    
    const handleSlideChange = (swiper) => {
        // get current slide index
        const currentIndex = swiper.activeIndex;
        // update project state based on current slide index
        setProject(projects[currentIndex]);
    }

    return (
    <motion.section 
    initial={{opacity:0}} animate={{opacity: 1,
        transition: {delay:2.4, duration:0.4, ease:"easeIn"}
    }} className="min-h-
    [80vh] flex flex-col justify-center py-12 xl:px-0"
    >
        <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div className="w-full xl:w-[50%] xl:h-[460px]
            flex flex-col xl:justify-between order-2 xl:order-none">
                <div className="flex flex-col gap-[30px] h-[50%]">
                {/* outline num */}
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                    {project.num}
                    </div>
                    {/* project category */}
                    <h2 className=" flex gap-1 text-[40px]  font-bold leading-none text-white hover:text-accent transition-all duration- 500 capitalize">{project.category} project

                    </h2>

                    {/* project description */}
                    <p className="text-white/60">{project.description}</p>
                    {/* stack */}
                    <ul className="flex gap-4">
                        {project.stack.map((item, index)=>{
                            return <li key={index} className="text-xl text-accent">
                               {item.name}
                               {/* remove the last comma */}
                               {index !== project.stack.length -1 && ","}
                            </li>
                        })}
                    </ul>
                    {/* border */}
                    <div className="border border-white/20"></div>
                    {/* button */}
                    <div className="flex items-center gap-4">
                        {/* live project button */}
                        <Link href={project.live}>
                        <TooltipProvider delayDuration={100}>
                            <Tooltip>
                                <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                                bg-white/5 flex justify-center items-center group">
                                    <BsArrowUpRight className="text-white text-3xl hover:text-accent"/>
                                    
                                </TooltipTrigger>
                                <TooltipContent>
                                <p>Live link</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        </Link>
                        {/* github project button */}
                        <Link href={project.github}>
                        <TooltipProvider delayDuration={100}>
                            <Tooltip>
                                <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                                bg-white/5 flex justify-center items-center group">
                                    <BsGithub className="text-white text-3xl hover:text-accent"/>
                                    
                                
                                     </TooltipTrigger>
                                <TooltipContent>
                                <p>Github repository</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        </Link>
                    </div>
                </div>
                </div>

            <div className="w-full xl:w-[50%] ">
                <Swiper 
                spaceBetween={30}
                 slidesPerView={1} 
                 className="xl:h-[520px] mb-12"
                 onSlideChange={handleSlideChange}
                 >
                    {projects.map((project, index)=>{
                        return <SwiperSlide key={index}
                         className="w-full">
                           <div className="h-[460px] relative group flex justify-center
                           items-center bg-pink-50/20">
                            {/* overlay */}
                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10
                            z-10"></div>
                            {/* image */}
                            <div className="relative w-full h-full ">
                                <Image src={project.Image}
                                 fill 
                                 className=" h-full w-full "
                                alt="">

                                </Image>
                            </div>
                           </div>
                            </SwiperSlide>;;

                    })}
                    {/* buttons */}
                    <WorkSliderBtn containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full
                     justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text[22px]
                     w-[44px] h-[44px] flex justify-center items-center transition-all"/>
                </Swiper>
            </div>
        </div>
        </div>
    </motion.section>
    )
};

export default Work