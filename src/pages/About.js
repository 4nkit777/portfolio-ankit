import React from 'react';
// import AbstractImg from '../assets/abstract-about.jpg';
// import aboutImgBg from '../assets/about-bg-img.png';
// import aboutImgBgBlue from '../assets/about-bg-img-blue.png';
// import aboutImg from '../assets/about-img.png';
import aboutImg from '../assets/abt-img-new.png';
import { FaQuoteLeft } from "react-icons/fa";
import '../about-style.css';

const About = () => {
    return (
        <div className='container mt-5 vh-100'>
            <div className='card d-flex justify-content-end position-relative border-0 shadow'>
                <div className='position-absolute d-flex flex-column' style={{ top: '60%', left: '5%' }} >
                    <p className='d-inline para-1'>
                        An Environmental Engineer <br />
                        turned a self taught Web Developer.
                    </p>
                    {/* <p className='d-inline para-2'></p> */}
                </div>
                <img src={aboutImg} alt='abstract-img' style={{ width: '100%', height: '30vh', opacity: '100%' }} />
            </div>
            <div className='text-center mt-5 d-flex flex-column align-items-center'>
                <div className='rounded-pill shadow mb-3 d-flex justify-content-center align-items-center' style={{ width: '60px', height: '60px' }}>
                    <FaQuoteLeft size={30} />
                </div>
                
                <p className='para-2'>
                    I have been teaching myself on how to design the web. Currently playing with, <br />
                    <span className='text-danger'>React.js</span> and <span className='text-warning'>Adobe After Effects</span>. I'm passionate about this field and hope to master <br />
                    and become a full-fledged Full Stack Developer!
                </p>
            </div>
        </div>
    );
}

export default About;