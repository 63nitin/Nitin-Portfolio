import Link from "next/link"
import {FaGithub, FaLinkedinIn, FaTwitter} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'

const socials = [
    {icon: <FaGithub/>, path:"https://github.com/63nitin"},
    {icon: <FaLinkedinIn/>, path:"https://www.linkedin.com/in/63nitin/"},
    {icon: <SiLeetcode/>, path:"https://leetcode.com/u/Nitin-yadav/"},
    {icon: <FaTwitter/>, path: "https://x.com/NitinYa9919"},
];

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
      return ( <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
        </Link>)
      })}
    </div>
  )
}

export default Social
