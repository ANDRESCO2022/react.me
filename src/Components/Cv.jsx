import React from 'react';
import CV from '../assets/cv.pdf'

const Cv = () => {
    return (
        <div className="cv">
        <a href={CV} download className="btn ">Download Cv</a>
        <a href="#contact" className="btn btn-primary">Let's Talk</a>
              </div>
    );
};

export default Cv;