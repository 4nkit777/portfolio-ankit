// const websites = [
//     'https://color-generator-react-app.netlify.app/',
//     'https://carousel-slider-react-app.netlify.app/',
//     'https://todo-web-app-react.netlify.app/'
// ];
import React from "react";
import { FaDribbbleSquare, FaLinkedin, FaFacebook } from "react-icons/fa";
import firstShowcase from "./assets/screenshot-1-frame.png";
import secondShowcase from "./assets/screenshot-2-frame(1).png";
import thirdShowcase from "./assets/screenshot-3-frame.png";

export const navData = [
  {
    id: 1,
    url: "/about",
    text: "about",
  },
  {
    id: 2,
    url: "/projects",
    text: "projects",
  },
  {
    id: 3,
    url: "/skills",
    text: "skills",
  },
  // {
  //   id: 4,
  //   url:
  //     "https://www.linkedin.com/in/ankit-sil/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAACc8g1oBZFmE99P5deP_rbkg2DVfjWCDHX8,1614704643155)/",
  //   text: "resume",
  // },
];

export const socialIcons = [
  {
    id: 1,
    text: "linkedIn",
    url: "https://www.linkedin.com/in/ankit-sil",
    classDeno: "w-50 h-50 faHoverColor",
    icon: <FaLinkedin />,
  },
  {
    id: 2,
    text: "facebook",
    url: "https://www.facebook.com",
    classDeno: "w-50 h-50 faHoverColor",
    icon: <FaFacebook />,
  },
  {
    id: 3,
    text: "dribbble",
    url: "https://dribbble.com/AnkitSil",
    classDeno: "w-50 h-50 faHoverColor",
    icon: <FaDribbbleSquare />,
  },
];

// portfolio screenshots data

export const screenshots = [
  {
    id: 1,
    imgShot: firstShowcase,
    altText: "first screenshot",
  },
  {
    id: 2,
    imgShot: secondShowcase,
    altText: "second screenshot",
  },
  {
    id: 3,
    imgShot: thirdShowcase,
    altText: "third screenshot",
  },
];
