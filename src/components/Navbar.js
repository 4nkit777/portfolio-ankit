import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../nav-style.css";
import { navData } from "../data";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    console.log(linksHeight);
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <nav className='sticky-top border-bottom bg-light'>
      <div className='nav-center '>
        <div className='nav-header'>
          <div className='navbar-brand'>
            <Link to='/' className='brand-name'>
              Ankit
            </Link>
          </div>
          <button
            className='nav-toggle'
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        <div
          className='links-container d-flex align-items-center'
          ref={linksContainerRef}
        >
          <ul className='links' ref={linksRef}>
            {navData.map(({ id, url, text }) => {
              return (
                <li key={id} style={{ textTransform: "uppercase" }}>
                  <Link to={url} onClick={() => setShowLinks(!showLinks)}>
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
