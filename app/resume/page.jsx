"use client"

import {FaHtml5,
     FaCss3,
      FaJs,
      FaReact,
      FaFigma,
      FaNodeJs,
    } from "react-icons/fa"

    import {SiTailwindcss, SiNextdotjs
       } from "react-icons/si"

       // about data
       const about = {
        title: 'About me',
        description:"I am Nitin Yadav, a dedicated B.Tech final-year student with a passion for web development and cloud technologies. With strong skills in ReactJS, JavaScript, NextJS and various frontend frameworks, I have successfully completed multiple projects. I thrive in collaborative environments and enjoy problem-solving, continuously seeking opportunities to learn and grow in the tech industry."
        ,
        info: [
          { 
             fieldName: "Name",
             fieldValue: "Nitin Yadav"
         },
         { 
            fieldName: "Phone",
            fieldValue: "(+91) 6386758259"
        },
        { 
            fieldName: "Experience",
            fieldValue: "1+ Years"
        },
        { 
            fieldName: "LinkedIn",
            fieldValue: "63nitin"
        },
        { 
            fieldName: "Nationality",
            fieldValue: "Indian"
        },
        { 
            fieldName: "Email",
            fieldValue: "yadavnitin9648@gmail.com"
        },
        { 
            fieldName: "Freelance",
            fieldValue: "Available"
        },
        { 
            fieldName: "Languages",
            fieldValue: "English, Hindi"
        },

        ]
    
    }

    // experience data

    const experience = {
        icon: '/assets/resume/badge.svg',
        title: "My experience",
        description:
         "B.Tech final-year student with strong expertise in front-end development. Proficient in ReactJS and C++ with practical experience in creating efficient, scalable applications."
        ,items: [
            {
                company: "Freelancing",
                position: "Freelancer",
                duration: "2023-Present",
            },
            {
                company: "GirlScript Summer of Code.",
                position: "Contributor",
                duration: "May 2023 - Aug 2023",
            },
            {
                company: "Chegg India",
                position: "QA Expert",
                duration: "2022-2023",
            },
          
            {
                company: "Teaching",
                position: "Teaching Assistant",
                duration: "2021-2022",
            },
           
        ]
    
        }

        // education data

        const education = {
            icon: '/assets/resume/badge.svg',
            title: "My education",
            description:
             "Currently pursuing a Bachelor of Technology (B.Tech), final year, with a focus on software development and cloud technologies. Gaining practical experience through academic projects and freelance work in web development."
            ,items: [
               
                {
                    institution: "Dr. A.P.J. Abdul Kalam Technical University",
                    degree: "B.Tech(IT)",
                    duration: "2021-Present",
                },
                {
                    institution: "Online Course Platform",
                    degree: "Data Structure and Algorithms",
                    duration: "2023-Present",
                },
              
                {
                    institution: "Online Course",
                    degree: "Programming Course(C++)",
                    duration: "2022-2023",
                },
                {
                    institution: "Online Course Platform",
                    degree: "Full Stack Web Development Bootcamp",
                    duration: "2024",
                },
             
            ]
        
            };

       // skills data

       const skills = {
        title:   "My skills",
         description:
             "Proficient in frontend development using ReactJS, JavaScript, HTML5, and CSS3, with a strong emphasis on responsive design and user experience. Skilled in Tailwind CSS for efficient styling and Figma for UI/UX design, along with Next.js for building scalable web applications.",
         
         skillList: [
            {
                icon: <FaHtml5/>,
                name: "html5",
            },
            {
                icon: <FaCss3/>,
                name: "css 3",
            },
            {
                icon: <FaJs/>,
                name: "javascript",
            },
            {
                icon: <FaReact/>,
                name: "react.js",
            },
            {
                icon: <SiNextdotjs/>,
                name: "next.js",
            },
            {
                icon: <SiTailwindcss/>,
                name: "tailwind.css",
            },
            {
                icon: <FaNodeJs/>,
                name: "node.js",
            },
            {
                icon: <FaFigma/>,
                name: "figma",
            }
         ]
            }

    import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

    import { Tooltip,
         TooltipContent,
          TooltipProvider,
           TooltipTrigger 
        } from "@/components/ui/tooltip" ;

        import { ScrollArea } from "@/components/ui/scroll-area";
        import {delay, motion } from "framer-motion"
      

const Resume = () =>{
    return (
       <motion.div
         initial = {{opacity: 0}}
         animate={{
            opacity:1,
            transition: {delay: 2.4, duration:0.4, ease: "easeIn"},
         }}
         className = "min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
         >
       
        <div className="container h-screen mx-auto">
          <Tabs
          defaultValue = "experience"
          className = "flex flex-col  xl:flex-row gap-[60px]"
          >
            <TabsList className="flex  flex-col w-full max-w-[380px] mx-auto xl:mx-0
              gap-6">
                <TabsTrigger value = "experience">Experience</TabsTrigger>
                <TabsTrigger value = "education">Education</TabsTrigger>
                <TabsTrigger value = "skills">Skills</TabsTrigger>
                <TabsTrigger value = "about">About me</TabsTrigger>
            </TabsList>
            
             {/* content */}
        <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full h-full mb-6">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold ">{experience.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                    <ScrollArea className="h-[400px]">
                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                            {experience.items.map((item, index)=>{
                                return <li key={index} className="bg-[#232329]
                                  h-[184px] py-6 px-10 rounded-xl flex flex-col
                                  justify-center items-center lg:items-start gap-1">
                                    <span className="text-accent">{item.duration}</span>
                                    <h3 className="text-xl max-w-[260px] min-h-[60px]
                                    text-center lg:text-left">{item.position}</h3>
                                    <div className="flex items-center gap-3">
                                        {/* dot */}
                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                        <p className="text-white/60">{item.company}</p>
                                    </div>
                                </li>
                            })}
                        </ul>
                    </ScrollArea>
                </div>
            </TabsContent>

             {/* education */}

             <TabsContent value="education" className="w-full h-full mb-6">
             <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold ">{education.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                    <ScrollArea className="h-[400px]">
                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                            {education.items.map((item, index)=>{
                                return <li key={index} className="bg-[#232329]
                                  h-[184px] py-6 px-10 rounded-xl flex flex-col
                                  justify-center items-center lg:items-start gap-1">
                                    <span className="text-accent">{item.duration}</span>
                                    <h3 className="text-xl max-w-[260px] min-h-[60px]
                                    text-center lg:text-left">{item.degree}</h3>
                                    <div className="flex items-center gap-3">
                                        {/* dot */}
                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                        <p className="text-white/60">{item.institution}</p>
                                    </div>
                                </li>
                            })}
                        </ul>
                    </ScrollArea>
                </div>
            </TabsContent>

             {/* skills */}
             
             <TabsContent value="skills" className="w-full mb-6">
               <div className="flex flex-col gap-[30px]">
                 <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                 </div>
                 <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4
                 xl:gap-[30px]">
                    {skills.skillList.map((skills,index)=>{
                        return (<li key={index}>
                            <TooltipProvider delayDuration={100} >
                                <Tooltip>
                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329]
                                     rounded-xl flex justify-center items-center">
                                        <div className="text-6xl hover:text-accent
                                        transition-all duration-300 ">
                                            {skills.icon}

                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{skills.name}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </li>)
                    })}
                 </ul>
               </div>
            </TabsContent>

             {/* about me */}

             <TabsContent
              value="about" 
              className="w-full text-center xl:text-left">
                <div className="flex flex-col gap-[30px] mb-6" >
                    <h3 className="text-4xl font-bold">{about.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6
                     max-w-[620px] mx-auto xl:mx-0">
                     {about.info.map((item, index)=>{
                        return (
                        <li key={index} className="flex items-center justify-center
                        xl:justify-start gap-4">
                            <span className="text-white/60">{item.fieldName}</span>
                            <span className="text-xl">{item.fieldValue}</span>
                        </li>
                        )
                     })}
                    </ul>
                </div>
            </TabsContent>
        </div>
          </Tabs>
       
        </div>
       </motion.div>
      
    )
    
};
 
export default Resume;