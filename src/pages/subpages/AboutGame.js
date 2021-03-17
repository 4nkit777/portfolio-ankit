import React from "react";
import gameScreenFrame from "../../assets/game-screen-frame.png";
import beforeFrame from "../../assets/before.png";
import afterFrame from "../../assets/after.png";
import onBoardingFirst from "../../assets/how-to-play-FIRST.png";
import onBoardingSecond from "../../assets/how-to-play-SECOND.png";
import instaSequence from "../../assets/social-media-FRAME.png";
import avatar from "../../assets/img-avatar.png";

const heroText = {
  avatarImg: avatar,
  heading: "Perfecting the GO Game",
  subText: "I am the lead UI/UX Designer at Game of Go",
};

const designThinking = {
  heading: "Design Thinking",
  subTextOne:
    "In just 6 months, Game of GO app took this ancient art form onto a whole new level in the western world",
  subTextTwo:
    "The GO app -- designed in 2020, struggled to scale alongside the hyper-growth of the company. Just a team of three, trying to take on the heavywights of the online GO.",
};

const workDid = {
  heading: "My Work",
  onBoardingShots: {
    subText: "Designed on-boarding sequence on Figma",
    first: onBoardingFirst,
    second: onBoardingSecond,
  },
  instagramShots: {
    subText: "Designed instagram posts using Figma",
    instaShot: instaSequence,
  },
};

export default function AboutGame() {
  return (
    <div className='container'>
      <div className='mt-3 text-center p-3 hero-text text-light rounded shadow'>
        <img src={heroText.avatarImg} alt='avatar' className='avatar-img' />
        <h4>{heroText.heading}</h4>
        <h6>{heroText.subText}</h6>
      </div>
      <div className='text-center game-screen-container rounded mt-3 shadow'>
        <img
          src={gameScreenFrame}
          alt='game screen frame'
          className='m-3 container w-50 h-50'
        />
        <p>Game of GO app</p>
      </div>
      <div className='design-thinking-container text-dark rounded mt-3 p-5 shadow'>
        <h4>{designThinking.heading}</h4>
        <h6>{designThinking.subTextOne}</h6>
        <h6 className='mb-5'>{designThinking.subTextTwo}</h6>
        <div className='d-flex'>
          <img
            src={beforeFrame}
            alt='before'
            className='img-fluid before-frame rounded'
          />
          <img
            src={afterFrame}
            alt='after'
            className='img-fluid after-frame rounded'
          />
        </div>
        <p className='mt-3 text-center'>
          The evolution of the Game of GO app from 2020(first image) to
          2021(second image)
        </p>
      </div>
      {/* <div className='mt-3 text-light text-center'></div> */}
      <div className='text-center mt-5 work-container rounded shadow'>
        <h4 className='pt-3 text-light'>{workDid.heading}</h4>
        <div className=''>
          <h6 className='my-3 text-light bg-dark p-3'>
            {workDid.onBoardingShots.subText}
          </h6>
          <img
            src={workDid.onBoardingShots.first}
            alt='first shot'
            className='container mb-3'
          />
          <img
            src={workDid.onBoardingShots.second}
            alt='second shot'
            className='container'
          />
        </div>
        <div className='my-5 text-light d-flex flex-column align-items-center'>
          <p className='p-3 bg-dark w-50'>{workDid.instagramShots.subText}</p>
          <img
            src={workDid.instagramShots.instaShot}
            alt='instagram shots'
            className='container mb-3'
          />
        </div>
      </div>
    </div>
  );
}
