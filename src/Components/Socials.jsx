import React from 'react';
import { BsLinkedin} from "react-icons/bs";
import { FaGithub} from "react-icons/fa";

const Socials = () => {
    return (
      <div className="header_socials">
        <a href="https://www.linkedin.com/in/andres-cordoba-sistemas/">
          <BsLinkedin className="header_social-icon" />
        </a>
        <a href="https://github.com/ANDRESCO2022">
          <FaGithub className="header_social-icon" />
        </a>
      </div>
    );
};

export default Socials;