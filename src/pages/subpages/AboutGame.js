import React from "react";
import gameScreenFrame from "../../assets/game-screen-frame.png";
import beforeFrame from "../../assets/before.png";
import afterFrame from "../../assets/after.png";

import onBoardingSecond from "../../assets/how-to-play-SECOND.png";

import onBoardingSequence from "../../assets/onboarding-sequence-gog.png";
import avAtari from "../../assets/avatari-game-ui.png";
import colorTheme from "../../assets/color-theme.png";
import iconImg from "../../assets/iconography-image.png";

// const heroText = {
//   avatarImg: avatar,
//   heading: "Perfecting the GO Game",
//   subText: "I am the lead UI/UX Designer at Game of Go",
// };

// const designThinking = {
//   heading: "Design Thinking",
//   subTextOne:
//     "In just 6 months, Game of GO app took this ancient art form onto a whole new level in the western world",
//   subTextTwo:
//     "The GO app -- designed in 2020, struggled to scale alongside the hyper-growth of the company. Just a team of three, trying to take on the heavywights of the online GO.",
// };

// const workDid = {
//   heading: "My Work",
//   onBoardingShots: {
//     subText: "Designed on-boarding sequence on Figma",
//     first: onBoardingFirst,
//     second: onBoardingSecond,
//   },
//   instagramShots: {
//     subText: "Designed instagram posts using Figma",
//     instaShot: instaSequence,
//   },
// };

// export default function AboutGame() {
//   return (
//     <div className='container'>
//       <div className='mt-3 text-center p-3 hero-text text-light rounded shadow'>
//         <img src={heroText.avatarImg} alt='avatar' className='avatar-img' />
//         <h4>{heroText.heading}</h4>
//         <h6>{heroText.subText}</h6>
//       </div>
//       <div className='text-center game-screen-container rounded mt-3 shadow'>
//         <img
//           src={gameScreenFrame}
//           alt='game screen frame'
//           className='m-3 container w-50 h-50'
//         />
//         <p>Game of GO app</p>
//       </div>
//       <div className='design-thinking-container text-dark rounded mt-3 p-5 shadow'>
//         <h4>{designThinking.heading}</h4>
//         <h6>{designThinking.subTextOne}</h6>
//         <h6 className='mb-5'>{designThinking.subTextTwo}</h6>
//         <div className='d-flex'>
//           <img
//             src={beforeFrame}
//             alt='before'
//             className='img-fluid before-frame rounded'
//           />
//           <img
//             src={afterFrame}
//             alt='after'
//             className='img-fluid after-frame rounded'
//           />
//         </div>
//         <p className='mt-3 text-center'>
//           The evolution of the Game of GO app from 2020(first image) to
//           2021(second image)
//         </p>
//       </div>
//       {/* <div className='mt-3 text-light text-center'></div> */}
//       <div className='text-center mt-5 work-container rounded shadow'>
//         <h4 className='pt-3 text-light'>{workDid.heading}</h4>
//         <div className=''>
//           <h6 className='my-3 text-light bg-dark p-3'>
//             {workDid.onBoardingShots.subText}
//           </h6>
//           <img
//             src={workDid.onBoardingShots.first}
//             alt='first shot'
//             className='container mb-3'
//           />
//           <img
//             src={workDid.onBoardingShots.second}
//             alt='second shot'
//             className='container'
//           />
//         </div>
//         <div className='my-5 text-light d-flex flex-column align-items-center'>
//           <p className='p-3 bg-dark w-50'>{workDid.instagramShots.subText}</p>
//           <img
//             src={workDid.instagramShots.instaShot}
//             alt='instagram shots'
//             className='container mb-3'
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

const aboutGo = {
  heading: "Game of GO",
  subheading: "Game of GO is a mobile app that was designed on Figma",
  imgSrc: gameScreenFrame,
};

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
      <div className='card mt-4 p-3 justify-content-between'>
        <h2>{aboutGo.heading}</h2>
        <h6>{aboutGo.subheading}</h6>
        <div className='text-center p-3'>
          <img
            src={aboutGo.imgSrc}
            alt='GO game screenshot'
            className='image-container'
          />
        </div>
      </div>
      <div className='card mt-4 p-3 justify-content-between'>
        <h2>{moreGoInfo.heading}</h2>
        <div className=''>
          <h6 className='mb-3'>{moreGoInfo.subheading}</h6>
          <h6 className='mb-3'>{moreGoInfo.moreheading}</h6>
        </div>

        <div className='text-center'>
          <img
            src={moreGoInfo.imgSrc}
            alt='GO game screenshot'
            className='container'
          />
        </div>
      </div>
      <div className='card mt-4 p-3 justify-content-between'>
        <h2>{productArchitecture.heading}</h2>
        <h6 className='mb-3'>{productArchitecture.subheading}</h6>
        <div className='text-center'>
          <img
            src={productArchitecture.imgSrc}
            alt='GO game screenshot'
            className='container'
          />
          <h6 className='mt-3'>{productArchitecture.imageInfo}</h6>
        </div>
        <div className='mt-3 text-center'>
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
          <h6 className='mt-3'>
            {productArchitecture.oldProductSection.imageInfo}
          </h6>
        </div>
        <div className='mt-3 d-flex justify-content-around prod-main-section-container'>
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
      <div className='card mt-3 p-3'>
        <h2>{colorScheme.heading}</h2>
        <h3 className='text-secondary'>{colorScheme.subheading}</h3>
        <div className='d-flex prod-main-section-container mt-3'>
          <div className=' col-md-7'>
            <img src={colorTheme} alt='color-themes' className='w-100' />
          </div>
          <div className='col-md-5 mt-3'>
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
      <div className='card mt-3 p-3'>
        <h2>{iconography.heading}</h2>
        <h4 className='text-secondary mt-3'>{iconography.subHeading}</h4>
        <div className='text-center mt-3'>
          <img
            src={iconography.imgSrc}
            alt='icons wallpaper'
            className='container'
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
