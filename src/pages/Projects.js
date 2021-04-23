import React from "react";
// import { screenshots } from "../data";
import heroFrameTwo from "../assets/blob-img-group.png";
import gogLogo from "../assets/gog-logo.png";
import { Link } from "react-router-dom";
import newshotsIcon from "../assets/news-icon.png";
// import newshotsApp from "../assets/newshots-app.png";
import newshotsApp from "../assets/newshots-prototype.png";
import nasaBg from "../assets/nasa-shot.png";
import moonIcon from "../assets/moon-icon.png";

const projectData = [
  {
    id: 1,
    iconSrc: gogLogo,
    headingOne: "Game of Go App Experience",
    headingTwo: "Perfecting the game for the GO app redesign",
    heroText:
      "I am part of an ambitious project to redesign the Game of GO app experience for one of the fastest growing start-up in the history",
    buttonText: "Learn More",
    heroImage: heroFrameTwo,
    background: "#c8e7ff",
    linkSrc: "/aboutgame",
  },
  {
    id: 2,
    iconSrc: newshotsIcon,
    headingOne: "NewShots Web App",
    headingTwo: "Designing and developing the ultimate news experience",
    heroText:
      "Juggling multiple priorities, I am also heavily investing my time in developing skills by building a news aggregator app. It's still in development andwill be ready soon.",
    buttonText: "In Development",
    heroImage: newshotsApp,
    background: "#ffba08",
    linkSrc: "/projects",
  },
];

const sideProjects = [
  {
    id: 1,
    iconSrc: moonIcon,
    headingOne: "Asteroid Tracker Web App",
    headingTwo:
      "Tracking potentially hazardous space objects that threaten our existance!",
    heroText:
      "This mini app is built with React, which fetches data from NASA's open API! Being a side project, I built this app from scratch using Front End Technologies like JavaScript and React Don't miss the shooting stars!!!",
    buttonText: "Check it out!",
    heroImage: nasaBg,
    background: "#f8edeb",
    linkSrc: "https://nasa-app-mdn.netlify.app/",
  },
];

const Projects = () => {
  return (
    <div className='container mt-5 d-flex flex-column justify-content-between'>
      {projectData.map(
        ({
          id,
          iconSrc,
          headingOne,
          headingTwo,
          heroText,
          buttonText,
          heroImage,
          background,
          linkSrc,
        }) => {
          return (
            <div
              className='card d-flex flex-row p-2 mb-3'
              style={{ backgroundColor: background }}
              key={id}
            >
              <div className='col-md-6 d-flex flex-column justify-content-between'>
                <div>
                  <div className='d-flex justify-content-start'>
                    <img
                      src={iconSrc}
                      alt='brand icon'
                      className='gog-logo mt-1'
                    />
                    <div className='ml-3'>
                      <h3>{headingOne}</h3>
                      <h5>{headingTwo}</h5>
                    </div>
                  </div>
                  <h6 className='mt-3'>{heroText}</h6>
                </div>
                <button className='btn btn-light rounded learn-more-btn container '>
                  <Link to={linkSrc}>{buttonText}</Link>
                </button>
              </div>
              <div className='col-md-6 text-right phone-frame'>
                <img src={heroImage} alt='brand screenshots' />
              </div>
            </div>
          );
        }
      )}
      <div className='text-center my-5'>
        <div className='btn btn-dark'>Side Projects</div>
      </div>
      <div>
        {sideProjects.map(
          ({
            id,
            iconSrc,
            headingOne,
            headingTwo,
            heroText,
            buttonText,
            heroImage,
            background,
            linkSrc,
          }) => {
            return (
              <div
                className='card d-flex flex-row p-2 mb-3'
                style={{ backgroundColor: background }}
                key={id}
              >
                <div className='col-md-6 d-flex flex-column justify-content-between'>
                  <div>
                    <div className='d-flex justify-content-start'>
                      <img
                        src={iconSrc}
                        alt='brand icon'
                        className='gog-logo mt-1'
                      />
                      <div className='ml-3'>
                        <h3>{headingOne}</h3>
                        <h5>{headingTwo}</h5>
                      </div>
                    </div>
                    <h6 className='mt-3'>{heroText}</h6>
                  </div>
                  <button
                    className='btn btn-light rounded learn-more-btn container '
                    onClick={() => (window.location.href = linkSrc)}
                  >
                    {buttonText}
                  </button>
                </div>
                <div className='col-md-6 text-right phone-frame'>
                  <img src={heroImage} alt='brand screenshots' />
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>

    // <div className='container mt-5'>
    //   <div className='hero-container card'>
    //     <div className='hero-items-container'>
    //       <div className='logo-container d-flex'>
    //         <img src={gogLogo} alt='gogLogo' className='gog-logo' />
    //         <div className='d-flex flex-column ml-3'>
    //           <h3>Game of Go App Experience</h3>
    //           <h5>Perfecting the game for the GO app redesign</h5>
    //         </div>
    //       </div>

    //       <p className='hero-para-text'>
    //         I am part of an ambitious project to redesign the Game of GO <br />
    //         app experience for one of the fastest growing start-up in the
    //         history
    //       </p>
    //       <button className='btn btn-light rounded learn-more-btn w-50 p-0'>
    //         <Link to='/aboutgame'>Learn More</Link>
    //       </button>
    //     </div>
    //     <div className='phone-frame'>
    //       <img src={heroFrameTwo} alt='blobImage' className='blob-image' />
    //     </div>
    //   </div>
    //   <div className='card mt-3 d-flex flex-row newshots-container p-3 justify-content-center'>
    //     <div className='d-flex flex-column'>
    //       <div className='logo-container d-flex'>
    //         <img src={newshotsIcon} alt='news icon' className='newshots-icon' />
    //         <div className='d-flex flex-column ml-3'>
    //           <h3>NewShots Web App</h3>
    //           <h5>Designing and developing the ultimate news experience </h5>
    //         </div>
    //       </div>

    //       <p className='hero-para-text'>
    //         Juggling multiple priorities, I am also heavily investing my time in
    //         developing skills <br />
    //         by building a news aggregator app. It's still in development and
    //         will be ready soon.
    //       </p>
    //       <div className=''>
    //         <button className='btn btn-light rounded learn-more-btn w-100 p-0'>
    //           <Link to=''>In development</Link>
    //         </button>
    //       </div>
    //     </div>
    //     <div className='text-right newshots-frame'>
    //       <img src={newshotsApp} alt='blobImage' className='newshots-app' />
    //     </div>
    //   </div>
    //   <div className='text-center'>
    //     <p className='btn btn-dark w-50 mt-5'>Side Projects</p>
    //   </div>
    //   <div className='card mt-3 d-flex flex-row nasa-shots-container mb-3 p-3 justify-content-center'>
    //     <div className='d-flex flex-column'>
    //       <div className='logo-container d-flex'>
    //         {/* <img src={newshotsIcon} alt='news icon' className='newshots-icon' /> */}
    //         <div className='d-flex flex-column'>
    //           <h3 className='text-light'>Asteroid Tracker Web App</h3>
    //           <h5 className='text-light'>
    //             Tracking potentially hazardous space objects that threaten our
    //             existance!
    //           </h5>
    //         </div>
    //       </div>

    //       <p className='hero-para-text'>
    //         This mini app is built with React, which fetches data from NASA's
    //         open API!
    //         <br />
    //         Don't miss the shooting stars!!!
    //       </p>
    //       <div className='text-center'>
    //         <button
    //           className='btn btn-light rounded learn-more-btn w-100 p-0'
    //           onClick={() =>
    //             (window.location.href = "https://nasa-app-mdn.netlify.app/")
    //           }
    //         >
    //           Check it out!
    //         </button>
    //       </div>
    //     </div>
    //     <div className='text-center newshots-frame'>
    //       <img src={nasaBg} alt='blobImage' className='newshots-app' />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Projects;
