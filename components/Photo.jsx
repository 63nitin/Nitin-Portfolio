"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const Photo = () => {
  return (
  <div className="w-full h-full relative">
    <motion.div 
    initial ={{opacity:0}}
     animate={{
      opacity:1,
      transition:{delay:2, duration:0.4, ease:"easeIn"},
    }}
    >
      {/* image */}
    <motion.div 
    initial ={{opacity:0}}
     animate={{
      opacity:1,
      transition:{delay:2.4, duration:0.4, ease:"easeInOut"},
    }}

    className="w-[235px] h-[240px] xl:w-[350px] xl:h-[398px] mix-blend-lighten xl:ml-24 mt-6 absolute"
    
    >
    
        <Image 
        src="/assets/pic10.png" 
        priority quality={100}
        fill
        alt=""
        className="object-contain mt-6 ml-7 rounded-full xl:ml-3" 
         />
    </motion.div>

    {/* circle */}
    <motion.svg className="w-[300px] xl:w-[560px] h-[360px] xl:h-[506px]"
     fill="transparent"
     viewBox="0 0 506 506"
     xmlns="http://www.w3.org/2000/svg"
     >
      <motion.circle 
      cx="253"
       cy="253"
       r="250"
       stroke="#00ff99"
       strokeWidth="4"
       strokeLinecap="round"
       strokeLinejoin="round"
       initial = {{strokeDasharray: "24 10 0 0"}}
       animate = {
        {
          strokeDasharray: ["15 120 25 25","16 25 92 72", "4 250 22 22"],
          rotate:[120, 360],
        }
       }
       transition={{
        duration:20,
        repeat: Infinity,
        repeatType: "reverse"
       }}
       />
    </motion.svg>
    </motion.div>
  </div>)
}
export default Photo
