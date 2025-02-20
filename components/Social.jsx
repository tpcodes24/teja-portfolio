import Link from "next/link"
import { FaGithub, FaLinkedin, FaCertificate } from 'react-icons/fa';


const socials = [
  { icon: <FaGithub />, path: 'https://github.com/tpcodes24' },
  { icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/tejasree-parasa/' },
  { icon: <FaCertificate />, path: 'https://www.credly.com/users/teja-sree-parasa' }, // Add Credly
];


const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index)=> {
        return (
          <Link key={index} href={item.path} className={iconStyles}>  
            {item.icon}      
          </Link>
      )})}
    </div>
  )
}

export default Social