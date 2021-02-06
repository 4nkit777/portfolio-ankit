import React from "react";
import "../aside-style.css";
import { socialIcons } from "../data";

const Aside = () => {
  return (
    <div className='d-flex flex-column vh-100 col-md-2 col-2 justify-content-around align-items-center'>
      <div className='d-flex flex-column'>
        {socialIcons.map(({ id, text, url, classDeno, icon }) => {
          return (
            <button
              key={id}
              className={classDeno}
              onClick={() => (window.location.href = url)}
            >
              {icon}
            </button>
          );
        })}
        {/* <button className='linkedin' onClick={() => window.location.href = 'https://www.linkedin.com/in/ankit-sil-562557164/'}>
                    <FaLinkedin className='w-50 h-50 faHoverColor' />
                </button>
                <button className='facebook'>
                    <FaFacebookSquare className='w-50 h-50 faHoverColor' />
                </button>
                <button className='dribbble'>
                    <FaDribbbleSquare className='w-50 h-50 faHoverColor' />
                </button> */}
      </div>
    </div>
  );
};

export default Aside;
