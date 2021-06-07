import React from "react";
import trakrHeading from "../../assets/trakr-headline.png";
import trakrMockup from "../../assets/first-shot.png";
import personaOne from "../../assets/persona-1.jpg";
import personaTwo from "../../assets/persona-2.png";

import shotOne from "../../assets/fiverr-one/one.png";
import shotTwo from "../../assets/fiverr-one/two.png";
import shotThree from "../../assets/fiverr-one/three.png";
import shotFour from "../../assets/fiverr-one/four.png";
import shotFive from "../../assets/fiverr-one/five.png";

const trakrData = {
  heroArea: {
    imageOne: trakrHeading,
    imageTwo: trakrMockup,
    heading: "Meet Trakr App",
    subHeading:
      "Trakr is a fitness app for a Europe based client. It can track workouts and routine for fitness freaks. I was brought in to improve the onboarding flow of the app, so that users can have a smooth transition to the main app.",
  },
  aboutArea: [
    {
      id: 1,
      heading: "Project Duration",
      subHeading: "8 days",
    },
    {
      id: 2,
      heading: "My Role",
      subHeading: "Visual Designer + Graphic Designer",
    },
    {
      id: 3,
      heading: "Deliverables",
      subHeading: "Design XD files + Vector Images",
    },
  ],
  clientBrief: {
    mainHeading: "Client: Europe Based Start-up",
    location: "Location: Fiverr, Remote",
    aboutClient:
      "An early stage Fitness Tracking start-up, based out of Europe. They had a large following for their product by fitness enthusiasts and gym-goers. Their product was a bit ahead of time and a lot of features were great and hard to find on other competitors.",
    sideNote:
      "Due to a Non-Disclosure Agreement, the client has refused to diverge the details of the company.",
  },
  designProblem: {
    problem: "Explain about the design problem with graphics from the website",
  },
  userResearch: {
    heading: "User Research",
    subHeading:
      "After some follow-ups with the client, they provided me their Competitive Research. This helped me study about their competetion and why they were faring better.",
  },
  userPainPoints: {
    heading: "User Journey",
    subHeading:
      "After careful review of their competitions, I identified design problems with their mobile app. So narrow it even further, I made some fictional user-stories which ultimately helped me get deeper.",
    userStoriesImgs: [personaOne, personaTwo],
  },
  designSolution: {
    heading: "Design Solution",
    subHeading:
      "After my own research, I looked for some inspiration on the web on various social media sites like Dribbble. So, I came up with an Onboarding flow that could help the users guide about the app and help them login-in or sign-up to the app.",
    designShots: [shotOne, shotTwo, shotThree, shotFour, shotFive],
  },
};

export default function Trakr() {
  return (
    <div className='container mt-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <img
              src={trakrData.heroArea.imageOne}
              className='img-fluid'
              alt='Trakr logo'
            />
          </div>
          <div className='col-md-6'>
            <img
              src={trakrData.heroArea.imageTwo}
              className='img-fluid h-100'
              alt='Trakr logo'
            />
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-center'>{trakrData.heroArea.heading}</h3>
          <h6 className='mt-2'>{trakrData.heroArea.subHeading}</h6>
        </div>
      </div>
      <div className='d-flex justify-content-between mt-5 text-center'>
        {trakrData.aboutArea.map(({ id, heading, subHeading }) => {
          return (
            <div key={id} className='text-center'>
              <h4>{heading}</h4>
              <h6>{subHeading}</h6>
            </div>
          );
        })}
      </div>
      <div className='mt-5'>
        <h4>{trakrData.clientBrief.mainHeading}</h4>
        <h6>{trakrData.clientBrief.location}</h6>
        <h6>{trakrData.clientBrief.aboutClient}</h6>
        <h6>{trakrData.clientBrief.sideNote}</h6>
      </div>
      <div className='mt-5'>
        <h4>{trakrData.userResearch.heading}</h4>
        <h6>{trakrData.userResearch.subHeading}</h6>
      </div>
      <div className='mt-5'>
        <h4>{trakrData.userPainPoints.heading}</h4>
        <h6>{trakrData.userPainPoints.subHeading}</h6>
        <div className='d-flex flex-column justify-content-around'>
          {trakrData.userPainPoints.userStoriesImgs.map((x, index) => {
            return (
              <img
                key={index}
                src={x}
                alt='user personas'
                className='mt-3 rounded'
              />
            );
          })}
        </div>
      </div>
      <div className='mt-5'>
        <h4>{trakrData.designSolution.heading}</h4>
        <h6>{trakrData.designSolution.subHeading}</h6>
        <div className='row justify-content-center'>
          {trakrData.designSolution.designShots.map((x, index) => {
            return (
              <img
                key={index}
                src={x}
                alt='on-boarding shots'
                className='m-2 rounded shadow-sm'
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
