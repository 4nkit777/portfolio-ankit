import React from "react";

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { AiOutlineLine } from "react-icons/ai";
import "../about-style.css";
import ellipse from "../assets/about-me-ellipse.svg";
import cubeOne from "../assets/about-me-cube-one.svg";
import cubeTwo from "../assets/3d-cube-comp.png";
import cubeThree from "../assets/about-me-cube-three.svg";
import myImage from "../assets/my_image.jpg";

import ReactPlayer from "react-player";

const About = () => {
  return (
    <div className='container'>
      <div className='card d-flex flex-row mt-5 about-container shadow'>
        <p className='p-3 text-light'>
          An Environmental Engineer <br />
          turned a self taught Web Designer
        </p>
        <div className='cube-container'>
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
      <div className='d-flex flex-column my-5'>
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
            <h6 className='mt-4'>
              I am passionate about designs. As a kid, I used to draw sketches
              and had an artistic brain. But as years had gone by, I lost my
              ability and interest in drawing. Since then, I have kind of
              rekindled my interest in designing. I try to see real world
              objects in a different perspective, always trying to know how an
              element came into existence, what was the logic behind the design
              or is there any better way to improve the design?
              <br />
              <br />- Ankit :)
            </h6>
            <div className='mt-5'>
              <button
                className='container btn btn-light rounded border border-2 border-dark'
                onClick={() =>
                  (window.location.href = "mailto:ankit.sil@outlook.com")
                }
              >
                Let's Connect
              </button>
            </div>
          </div>
          <div className='col-md-6 mt-3 mb-3'>
            <img src={myImage} alt='pic' className='container-fluid' />
          </div>
        </div>
      </div>
      <div className='container my-5 p-3'>
        <div className='text-center mb-5'>
          <h2>Here are some things that inspires me.</h2>
        </div>
        <div className='d-flex justify-content-between inspire-container mw-100 mt-5'>
          <div className='col-md-4'>
            <ReactPlayer
              url='https://www.youtube.com/watch?v=vN4U5FqrOdQ'
              width='100%'
              height='100%'
            />
          </div>
          <div className='col-md-4'>
            <ReactPlayer
              url='https://wwz.youtube.com/watch?v=hBATY17DdIo&list=WL&index=11'
              width='100%'
              height='100%'
            />
          </div>
          <div className='col-md-4'>
            <ReactPlayer
              url='https://www.youtube.com/watch?v=7sxpKhIbr0E'
              width='100%'
              height='100%'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
