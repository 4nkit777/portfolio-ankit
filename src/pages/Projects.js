import React from "react";
// import { screenshots } from "../data";
import heroFrameTwo from "../assets/blob-img-group.png";
import gogLogo from "../assets/gog-logo.png";
import { Link } from "react-router-dom";
import newshotsIcon from "../assets/news-icon.png";
import newshotsApp from "../assets/newshots-app.png";

// import nasaBg from '../assets/nasa-app-shot.png';
// import moonIcon from '../assets/moon-icon.png';
// import asteroidOne from '../assets/asteroid-1.png';
// import asteroidTwo from '../assets/asteroid-icon.png';
// import rocketIcon from '../assets/rocket-icon.png';
import nasaBg from "../assets/nasa-shot.png";

const Projects = () => {
  return (
    <div className='container mt-3'>
      <div className='hero-container card'>
        <div className='hero-items-container'>
          <div className='logo-container d-flex'>
            <img src={gogLogo} alt='gogLogo' className='gog-logo' />
            <div className='d-flex flex-column ml-3'>
              <h4>Game of Go App Experience</h4>
              <h5>Perfecting the game for the GO app redesign</h5>
            </div>
          </div>

          <p className='hero-para-text'>
            I am part of an ambitious project to redesign the Game of GO <br />
            app experience for one of the fastest growing start-up in the
            history
          </p>
          <button className='btn btn-light rounded learn-more-btn w-50 p-0'>
            <Link to='/aboutgame'>Learn More</Link>
          </button>
        </div>
        <div className='phone-frame'>
          <img src={heroFrameTwo} alt='blobImage' className='blob-image' />
        </div>
      </div>
      <div className='card mt-3 d-flex flex-row newshots-container p-3 justify-content-center'>
        <div className='d-flex flex-column'>
          <div className='logo-container d-flex'>
            <img src={newshotsIcon} alt='news icon' className='newshots-icon' />
            <div className='d-flex flex-column ml-3'>
              <h4>NewShots Web App</h4>
              <h5>Designing and developing the ultimate news experience </h5>
            </div>
          </div>

          <p className='hero-para-text'>
            Juggling multiple priorities, I am also heavily investing my time in
            developing skills <br />
            by building a news aggregator app. It's still in development and
            will be ready soon.
          </p>
          <button className='btn btn-light rounded in-dev-btn p-0'>
            <Link to=''>In development</Link>
          </button>
        </div>
        <div className='text-center newshots-frame'>
          <img src={newshotsApp} alt='blobImage' className='newshots-app' />
        </div>
      </div>
      <div className='text-center'>
        <p className='btn btn-dark w-50 mt-5'>Side Projects</p>
      </div>
      <div className='card mt-3 d-flex flex-row nasa-shots-container mb-3 p-3 justify-content-center'>
        <div className='d-flex flex-column'>
          <div className='logo-container d-flex'>
            {/* <img src={newshotsIcon} alt='news icon' className='newshots-icon' /> */}
            <div className='d-flex flex-column'>
              <h4 className='text-light'>Asteroid Tracker Web App</h4>
              <h5 className='text-light'>
                Tracking potentially hazardous space objects that threaten our
                existance!
              </h5>
            </div>
          </div>

          <p className='hero-para-text'>
            This mini app is built with React, which fetches data from NASA's
            open API!
            <br />
            Don't miss the shooting stars!!!
          </p>
          <div className=''>
            <button
              className='btn btn-light rounded in-dev-btn p-0'
              onClick={() =>
                (window.location.href = "https://nasa-app-mdn.netlify.app/")
              }
            >
              Check it out!
            </button>
          </div>
        </div>
        <div className='text-center newshots-frame'>
          <img src={nasaBg} alt='blobImage' className='newshots-app' />
        </div>
      </div>

      {/* <div className='mt-5 d-flex flex-column align-items-center'>
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
        <p className='bg-dark text-light'>
          High fidelity GO app mockups for iOS
        </p>
      </div> */}
    </div>
  );
};

export default Projects;
