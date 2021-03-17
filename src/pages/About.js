import React from "react";
// import AbstractImg from '../assets/abstract-about.jpg';
// import aboutImgBg from '../assets/about-bg-img.png';
// import aboutImgBgBlue from '../assets/about-bg-img-blue.png';
// import aboutImg from '../assets/about-img.png';
// import aboutImg from "../assets/abt-img-new.png";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { AiOutlineLine } from "react-icons/ai";
import "../about-style.css";
import ellipse from "../assets/about-me-ellipse.svg";
import cubeOne from "../assets/about-me-cube-one.svg";
// import cubeTwo from "../assets/about-me-cube-two.svg";
import cubeTwo from "../assets/3d-cube-comp.png";
import cubeThree from "../assets/about-me-cube-three.svg";
import myImage from "../assets/my_image.jpg";

// import lottie from "lottie-web";
// import logoAnimation from "../animations/53541-flag-animation.json";

const About = () => {
  // useEffect(() => {
  //   lottie.loadAnimation({
  //     container: document.querySelector("#animated-logo"),
  //     animationData: logoAnimation,
  //   });
  // }, []);

  return (
    <div className='container'>
      <div className='card d-flex flex-row mt-5 about-container shadow'>
        <p className='p-3 text-light'>
          An Environmental Engineer <br />
          turned a self taught Web Desginer.
        </p>
        <div className='cube-container'>
          {/* <div id='animated-logo'></div> */}
          <img src={ellipse} alt='ellipse' className=' ellipse' />
          <img
            src={cubeOne}
            alt='cube one'
            className='position-relative cube-one rotate linear infinite'
          />
          <img
            src={cubeTwo}
            alt='cube two'
            className='position-relative cube-two'
          />
          <img
            src={cubeThree}
            alt='cube third'
            className='position-relative cube-three rotate linear inifinite'
          />
        </div>
      </div>
      <div className='d-flex flex-column my-5 shadow rounded'>
        {/* <img src={myImage} alt='author' className='rounded' /> */}
        <div className='p-3'>
          <div className=''>
            <FaQuoteLeft />
          </div>
          <h4 className='text-center font-italic'>
            I play by ear - I'm self-taught. And so everything I do is through
            that technique.
          </h4>
          <div className='d-flex justify-content-end mt-2'>
            <FaQuoteRight />
          </div>
        </div>
        <div className='d-flex justify-content-center'>
          <AiOutlineLine />
        </div>
        <div className='d-flex mt-5 info-container'>
          <div className='col-md-6'>
            <h3>Designer full-time, photographer part-time</h3>
            <p>
              I am passionate about designs. As a kid, I used to draw sketches
              but left it in the middle. After years of exploration, I have
              realized that I always had that inclination towards design. Now I
              design for people, for users and I learnt it all by myself.
            </p>
          </div>
          <div className='col-md-6 mb-3'>
            <img src={myImage} alt='pic' className='container-fluid' />
          </div>
        </div>
      </div>
    </div>
  );
};

// const About = () => {
//     return (
//         <div className='container mt-5 vh-100'>
//             <div className='card d-flex justify-content-end position-relative border-0 shadow h-25'>
//                 <div className='position-absolute container' style={{ top: '60%', left: '5%' }} >
//                     <p className='d-inline para-1'>
//                         An Environmental Engineer <br />
//                         turned a self taught Web Developer.
//                     </p>
//                     {/* <p className='d-inline para-2'></p> */}
//                 </div>
//                 {/* <img src={aboutImg} alt='abstract-img' style={{ width: '100%', height: '30vh', opacity: '100%' }} /> */}
//                 <img src={aboutImg} alt='abstract-img' className='container-fluid h-100' />
//             </div>
//             <div className='text-center mt-5 d-flex flex-column align-items-center'>
//                 <div className='rounded-pill shadow mb-3 d-flex justify-content-center align-items-center' style={{ width: '60px', height: '60px' }}>
//                     <FaQuoteLeft size={30} />
//                 </div>

//                 <p className='para-2'>
//                     I have been teaching myself on how to design the web. Currently playing with, <br />
//                     <span className='text-danger'>React.js</span> and <span className='text-warning'>Adobe After Effects</span>. I'm passionate about this field and hope to master <br />
//                     and become a full-fledged Full Stack Developer!
//                 </p>
//             </div>
//         </div>
//     );
// }

export default About;
