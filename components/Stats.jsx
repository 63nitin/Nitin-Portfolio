"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 300,
    text: "On LeetCode",
  },
  {
    num: 5,
    text: "Projects completed",
  },
  {
    num: 8,
    text: "Technology mastered",
  },
  {
    num: 145,
    text: "Code commits",
  },
]

const Stats = () => {
  
  return ( <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
    <div className="container mx-auto">
      <div className="flex container flex-wrap gap-6 mx-w-[80vw] xl:max-w-none">
        {stats.map((item, index)=>{
          return <div
           className="flex-1 flex gap-4 items-conter justify-center
           xl:justify-start"
           key={index}>
            <CountUp 
            end ={item.num}
             duration={5}
             delay={2}
             className="text-4xl xl:text-6xl font-extrabold"
             />
             <p className={`${item.text.length < 15 ?
               "max-w-[100px]": "max-w-[150px] flex items-center justify-center"}
               leading-snug text-white/80`}
               >{item.text}</p>
          </div>
        })}
      </div>
    
    </div>
    </section>
  )
  
}

export default Stats
