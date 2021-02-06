// const websites = [
//     'https://color-generator-react-app.netlify.app/',
//     'https://carousel-slider-react-app.netlify.app/',
//     'https://todo-web-app-react.netlify.app/'
// ];
import React from "react";
import { FaDribbbleSquare, FaLinkedin, FaFacebook } from "react-icons/fa";

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
];

export const socialIcons = [
  {
    id: 1,
    text: "linkedIn",
    url: "https://www.linkedin.com/in/ankit-sil-562557164/",
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
    url: "https://www.dribbble.com/",
    classDeno: "w-50 h-50 faHoverColor",
    icon: <FaDribbbleSquare />,
  },
];
