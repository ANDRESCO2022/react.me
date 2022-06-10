import React from 'react';
import { BsLinkedin} from "react-icons/bs";
import { FaGithub} from "react-icons/fa";

const Socials = () => {
    return (
        <div className="header_socials">
        <a href="https://linkedin.com"  ><BsLinkedin/></a>
       <a href="https://gitHub.com" ><FaGithub/></a>
        
            
        </div>
    );
};

export default Socials;