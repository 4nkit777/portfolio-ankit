import React from "react";
import { screenshots } from "../data";
import heroFrameTwo from "../assets/blob-img-group.png";
import gogLogo from "../assets/gog-logo.png";
import { Link } from "react-router-dom";

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
          <button className='btn btn-dark w-50'>
            <Link to='/aboutgame'>Learn More</Link>
          </button>
        </div>
        <div className='phone-frame'>
          <img src={heroFrameTwo} alt='blobImage' className='blob-image' />
        </div>
      </div>
      <div className='mt-5 d-flex flex-column align-items-center'>
        <p className='btn btn-dark w-25'>What I did</p>
        <div className='showcase-container mt-5'>
          {screenshots.map(({ id, imgShot, altText }) => {
            return (
              <div className='mb-3' key={id}>
                <img src={imgShot} alt={altText} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
