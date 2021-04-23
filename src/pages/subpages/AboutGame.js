import React from "react";
import gameScreenFrame from "../../assets/game-screen-frame.png";
import beforeFrame from "../../assets/before.png";
import afterFrame from "../../assets/after.png";

import onBoardingSecond from "../../assets/how-to-play-SECOND.png";

import onBoardingSequence from "../../assets/onboarding-sequence-gog.png";
import avAtari from "../../assets/avatari-game-ui.png";
import colorTheme from "../../assets/color-theme.png";
import iconImg from "../../assets/iconography-image.png";

import { AiOutlineLine } from "react-icons/ai";
import { HiCode } from "react-icons/hi";

const aboutGo = {
  heading: "Game of GO",
  subheading: `Improve your strategical thinking by playing the ancient game of Go`,
  aboutCompany:
    "Game of GO is a mobile app that was designed on Figma. It is available on iOS and Android",
  imgSrc: gameScreenFrame,
};

const infoRow = [
  {
    id: 1,
    heading: "DATE",
    info: "August 2020 - present",
  },
  {
    id: 2,
    heading: "ROLE",
    info: "UI/UX + Graphic Designer",
  },
  {
    id: 3,
    heading: "LINKS",
    info: <a href='https://gameofgo.app/'>Game of Go</a>,
  },
];

const moreGoInfo = {
  heading: "About Game of GO",
  subheading:
    "GO is an ancient art form which takes simple elements: line and circle, black and white, stone and wood, combines them with simple rules and generates subtleties which have enthralled players for millennia. With the help of AI, this same experience has been brought onto mobile for users who want to learn GO and who already are GO champs.",
  moreheading:
    "The Game of GO app is both functional and informative (allowing users to explore and learn more about GO).",
  imgSrc: onBoardingSecond,
};

const productArchitecture = {
  heading: "Product Architecture",
  subheading:
    "The Game of GO app uses a flow structure at the beginning. This allows the user to get on-boarded in a consecutive order and an intriguing experience for users who want to dive deep into GO",
  imageInfo: "Game of GO app - On-boarding sequence (Designed on Figma)",
  imgSrc: onBoardingSequence,
  oldProductSection: {
    beforeImg: beforeFrame,
    afterImg: afterFrame,
    imageInfo: "Before and after shots of the Game of GO redesign",
  },
  mainSection: {
    heading: "Main Section",
    subheading: "The GO app has 6 main sections: ",
    itemList: [
      "New Game",
      "Games",
      "Friends",
      "Leaderboards",
      "Sandbox",
      "Learn GO",
    ],
    moreListInfo:
      "Navigation to these main sections is done by tapping on any of the bins.",
  },
};

const colorScheme = {
  heading: "Color",
  subheading: "Color theme",
  primaryColor: {
    heading: "Primary Color",
    subheading: "GO Peach is the primary color",
  },
  secondaryColor: {
    heading: "Secondary Color",
    subheading: `GO Black is the secondary color used on texts. It distinguishes text over other components very apptly.`,
  },
};

const iconography = {
  heading: "Iconography",
  subHeading: `Game of GO's iconography is reminiscent of icons that represent the GO game.`,
  imgSrc: iconImg,
  moreIconInfo: [
    "To create consistency, all of the GO's icons share the same underlying grid structure",
    "A collection of colorful GO's icons",
  ],
};

export default function AboutGame() {
  return (
    <div className='container'>
      <div className='mt-5 d-flex flex-column'>
        <h1>{aboutGo.heading}</h1>
        <h4 className='mt-1'>{aboutGo.subheading}</h4>
        <h6 className='mt-3'>{aboutGo.aboutCompany}</h6>
      </div>
      <div className='text-center mt-3' style={{ backgroundColor: "#caf0f8" }}>
        <img
          src={aboutGo.imgSrc}
          alt='Go game screenshot'
          className='image-container p-2'
        />
      </div>
      <div className='container custom-margin'>
        <ul className='d-flex justify-content-between'>
          {infoRow.map(({ id, heading, info }) => {
            return (
              <li key={id}>
                <h6 className='text-dark m-0'>{heading}</h6>
                <AiOutlineLine className='text-success' />
                <h6 className='mt-3'>{info}</h6>
              </li>
            );
          })}
        </ul>
      </div>
      <div className='custom-margin'>
        <div className='d-flex justify-content-around'>
          <HiCode className='text-success' size='1.5em' />
          <h4 className='text-center'>{moreGoInfo.heading}</h4>
          <HiCode className='text-success' size='1.5em' />
        </div>

        <div className='mt-5'>
          <h6 className='mb-3'>{moreGoInfo.subheading}</h6>
          <h6 className='mb-3'>{moreGoInfo.moreheading}</h6>
        </div>

        <div className='mt-5'>
          <img
            src={moreGoInfo.imgSrc}
            alt='GO game screenshot'
            className='container'
          />
        </div>
      </div>
      <div className='custom-margin p-3 justify-content-between'>
        <div className='d-flex justify-content-around mb-5'>
          <HiCode className='text-success' size='1.5em' />
          <h4>{productArchitecture.heading}</h4>
          <HiCode className='text-success' size='1.5em' />
        </div>
        <h6 className='mb-3'>{productArchitecture.subheading}</h6>

        <div className='text-center mt-5'>
          <img
            src={productArchitecture.imgSrc}
            alt='GO game screenshot'
            className='container'
          />
          <h6 className='mt-2 mb-5'>{productArchitecture.imageInfo}</h6>
        </div>
        <div className='custom-margin text-center'>
          <div className='d-flex justify-content-around'>
            <img
              src={productArchitecture.oldProductSection.beforeImg}
              alt='before redesign'
              className='before-frame '
            />
            <img
              src={productArchitecture.oldProductSection.afterImg}
              alt='after redesign'
              className='after-frame '
            />
          </div>
          <h6 className='mt-2'>
            {productArchitecture.oldProductSection.imageInfo}
          </h6>
        </div>
        <div className='mt-5 d-flex justify-content-around prod-main-section-container'>
          <div className='p-3'>
            <h3>{productArchitecture.mainSection.heading}</h3>
            <h4 className='mt-4 text-secondary'>
              {productArchitecture.mainSection.subheading}
            </h4>
            <h5 className='mt-3 mw-50'>
              {productArchitecture.mainSection.itemList.map((item, index) => {
                return (
                  <li key={index} className='list-item ml-3'>
                    {item}
                  </li>
                );
              })}
            </h5>
            <h5 className='mt-4'>
              {productArchitecture.mainSection.moreListInfo}
            </h5>
          </div>
          <div className='text-center'>
            <img
              src={avAtari}
              alt='main screen'
              className='shadow w-75 h-100'
            />
          </div>
        </div>
      </div>
      <div className='custom-margin'>
        <div className='d-flex justify-content-around mb-5'>
          <HiCode className='text-success' size='1.5em' />
          <h4>{colorScheme.heading}</h4>
          <HiCode className='text-success' size='1.5em' />
        </div>
        <h3 className='text-secondary mb-5'>{colorScheme.subheading}</h3>
        <div className='d-flex prod-main-section-container mt-3'>
          <div className=' col-md-5'>
            <img src={colorTheme} alt='color-themes' className='w-100' />
          </div>
          <div className='col-md-7 mt-3'>
            <div>
              <h4>{colorScheme.primaryColor.heading}</h4>
              <h5 className='text-secondary'>
                {colorScheme.primaryColor.subheading}
              </h5>
            </div>
            <div>
              <h4>{colorScheme.secondaryColor.heading}</h4>
              <h5 className='text-secondary'>
                {colorScheme.secondaryColor.subheading}
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className='custom-margin'>
        <div className='d-flex justify-content-around mb-5'>
          <HiCode className='text-success' size='1.5em' />
          <h4>{iconography.heading}</h4>
          <HiCode className='text-success' size='1.5em' />
        </div>
        <h4 className='text-secondary mt-3'>{iconography.subHeading}</h4>
        <div className='mt-5'>
          <img
            src={iconography.imgSrc}
            alt='icons wallpaper'
            className='img-fluid'
          />
        </div>
        <h5 className='ml-3 mt-3'>
          {iconography.moreIconInfo.map((item, index) => {
            return (
              <li key={index} className='list-item'>
                {item}
              </li>
            );
          })}
        </h5>
      </div>
    </div>
  );
}
