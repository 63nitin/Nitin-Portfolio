"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// eamiljs
import emailjs from 'emailjs-com';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger
 } from "@/components/ui/select";

 import {FaPhoneAlt, FaEnvelope, FaMapMarkedAlt} from "react-icons/fa";

 const info = [
    {
        icon: <FaPhoneAlt/>,
        title: 'Phone',
        description: '(+91) 6386758259',
    },
    {
        icon: <FaEnvelope/>,
        title: 'Email',
        description: 'yadavnitin9648@gmail.com',
    },
    {
        icon: <FaMapMarkedAlt/>,
        title: 'Address',
        description: 'Lucknow, India',
    },
 ]

 import { delay, motion } from "framer-motion";
import { Item, SelectValue } from "@radix-ui/react-select";

const Contact = () =>{
    function sendEmail(e) {
        e.preventDefault();
      
        emailjs.sendForm('service_cdak0vu', 'template_b4re547', e.target, 'w2BnVYSF4gFMcRgcj')
          .then((result) => {
            console.log(result.text);
            alert('Email sent successfully!');
          }, (error) => {
            console.log(error.text);
            alert('Error sending email!');
          });
      }
      
    return (
        <motion.section 
         initial={{opacity:0}}
         animate={{
            opacity:1,
            transition: {delay:2.4, duration:0.4, ease: "easeIn"},
         }}
         className = "py-6"
        >
            <div className="container  mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form */}
                    <div className="xl:h-[50%] order-2 xl:order-none">
                        <form onSubmit={sendEmail} className="flex flex-col gap-6 p-10 bg-[#27272c]
                        rounded-xl ">
                            <h3 className="text-4xl text-accent">Let's Connect</h3>
                            <p className="text-white/60">Feel free to reach out if you have any questions or if you're interested in collaborating on a project! </p>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="firstname" name="firstname" placeholder="Firstname"/>
                                <Input type="lastname" name="lastname" placeholder="Lastname"/>
                                <Input type="email" name="email" placeholder="Email address"/>
                                <Input type="phone" name="phone" placeholder="Phone number"/>
                             </div>
                             {/* select */}
                          
                             <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue name="service" placeholder="Select a service"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value="est">Web Development</SelectItem>
                                        <SelectItem value="cst">UI/UX Design</SelectItem>
                                        <SelectItem value="mst">Logo Design</SelectItem>
                                        
                                    </SelectGroup>
                                </SelectContent>
                             </Select>

                             {/* textarea */}
                             <Textarea 
                             className="h-[200px]"
                             placeholder="Type your message here."
                             name="message"
                             />
                             {/* btn */}
                             <Button type="submit" size="md" className="max-w-40 px-4 py-3">Send message</Button>
                            
                        </form>
                    </div>
                    {/* info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1
                    xl:order-none mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((Item, index)=>{
                                return (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-xl flex items-center justify-center">
                                        <div className="text-[28px]">{Item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{Item.title}</p>
                                        <h3 className="text-xl">{Item.description}</h3>
                                    </div>
                                </li>
                                )
                            })}
                        </ul>
                        </div>
                </div>
            </div>
        </motion.section>
    )
};
 
export default Contact;