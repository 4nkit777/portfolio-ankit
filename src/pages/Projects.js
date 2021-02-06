import React from "react";
// import { websites } from '../data';
// import Thumbnail from 'react-thumbnail';
import firstImg from "../assets/color-gen.png";
import secondImg from "../assets/birthday-reminder.png";
import thirdImg from "../assets/carousel-slider 1-adjusted.png";
import fourthImg from "../assets/to-do-list-app.png";
import fifthImg from "../assets/Nasa-miss-app.png";

const projectData = [
  {
    id: 1,
    image: firstImg,
    title: "color generator app",
    website: "https://color-generator-react-app.netlify.app/",
    technology: ["React", "Bootstrap"],
  },
  {
    id: 2,
    image: secondImg,
    title: "birthday reminder app",
    website: "https://birthday-reminder-react-app.netlify.app/",
    technology: ["React", "Bootstrap"],
  },
  {
    id: 3,
    image: thirdImg,
    title: "carousel slider app",
    website: "https://carousel-slider-react-app.netlify.app/",
    technology: ["React", "Bootstrap"],
  },
  {
    id: 4,
    image: fourthImg,
    title: "to-do list app",
    website: "https://todo-web-app-react.netlify.app/",
    technology: ["React", "Bootstrap"],
  },
  {
    id: 5,
    image: fifthImg,
    title: "NASA info app",
    website: "https://nasa-app-mdn.netlify.app/",
    technology: ["React", "Bootstrap"],
  },
];

const Projects = () => {
  return (
    <div className='mt-5 vh-100 d-flex flex-column container'>
      <div className='text-center mb-4'>
        <h3>My Projects</h3>
      </div>
      <div className='row gx-5'>
        {projectData.map((item) => {
          const { id, image, title, website, technology } = item;
          return (
            <div
              className='card shadow d-flex mx-2 my-2'
              style={{ width: "22rem", height: "23rem" }}
              key={id}
            >
              <div className='card-img-top h-50'>
                <img src={image} className='img-fluid' alt={title} />
              </div>

              <div
                className='card-body bg-dark text-light '
                style={{ height: "5rem" }}
              >
                <h6 className='card-title text-center'>{title}</h6>
                <div className='d-flex mb-3 justify-content-around'>
                  {technology.map((item, index) => {
                    return (
                      <div className='btn btn-outline-primary' key={index}>
                        {item}
                      </div>
                    );
                  })}
                </div>

                <button
                  className='btn btn-primary container'
                  onClick={() => {
                    window.location.href = website;
                  }}
                >
                  Show Me
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className='text-center mt-3'>
        <h4>Working on more projects daily...</h4>
      </div>
    </div>
  );
};

export default Projects;
