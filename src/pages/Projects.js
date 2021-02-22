import React from "react";
// import heroImg from "../assets/hero-bg-img.png";
import firstShowcase from "../assets/screenshot-1-frame.png";
import secondShowcase from "../assets/screenshot-2-frame(1).png";
import thirdShowcase from "../assets/screenshot-3-frame.png";
// import heroBlob from "../assets/hero-blob.png";
// import heroFrame from "../assets/hero-window-frame.png";
import heroFrameTwo from "../assets/blob-img-group.png";
import gogLogo from "../assets/gog-logo.png";

// const heroContent = [
//   {
//     id: 1,
//     logo: gogLogo,
//     headingOne: "Game of Go App  Experience",
//     headingTwo: "Perfecting the game for the GO app redesign",
//     textOne: "I am part of an ambitious project to redesign the Game of GO",
//     textTwo:
//       "app experience for one of the fastest growing start-up in the history",
//     blobImage: heroBlob,
//     frameImage: heroFrame,
//   },
// ];

// const screenshots = [firstShowcase, secondShowcase, thirdShowcase];

const Projects = () => {
  return (
    <div className='container mt-3'>
      <div className='hero-container'>
        <div className='hero-items-container'>
          <div className='logo-container d-flex'>
            <img src={gogLogo} alt='gogLogo' className='gog-logo' />
            <div className='d-flex flex-column ml-3'>
              <h5>Game of Go App Experience</h5>
              <h6>Perfecting the game for the GO app redesign</h6>
            </div>
          </div>

          <p className='hero-para-text'>
            I am part of an ambitious project to redesign the Game of GO <br />
            app experience for one of the fastest growing start-up in the
            history
          </p>
          <button className='btn btn-dark w-50'>Learn More</button>
        </div>
        <div className='phone-frame'>
          <img src={heroFrameTwo} alt='blobImage' className='blob-image' />
        </div>
      </div>
      <div className='mt-5 d-flex flex-column align-items-center'>
        <p className='btn btn-dark w-25'>What I did</p>
        <div className='showcase-container mt-5'>
          <div className='mb-3'>
            <img src={firstShowcase} alt='first ' />
          </div>
          <div className='mb-3'>
            <img src={secondShowcase} alt='second ' />
          </div>
          <div className='mb-3'>
            <img src={thirdShowcase} alt='third ' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
