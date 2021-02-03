import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../nav-style.css';
import { Collapse } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// import Projects from '../pages/Projects';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    // const collapseRef = useRef();

    useEffect(() => {
        // let myCollapse = collapseRef.current;
        let myCollapse = document.getElementById('collapseTarget');
        let bsCollapse = new Collapse(myCollapse, { toggle: false });
        toggle ? bsCollapse.show() : bsCollapse.hide();
    });

    return (
            <nav className='navbar navbar-expand-lg navbar-light'>
                <div className='container-fluid'>

                        <div className='navbar-brand' style={{ fontWeight: '700', fontSize: '1.5rem' }}>
                            <Link to='/' >Ankit</Link>
                        </div>
                        <button className='navbar-toggler' type='button' onClick={() => setToggle(toggle => !toggle)} >
                            <span className='navbar-toggler-icon'></span>
                        </button>
                        <div className='collapse navbar-collapse justify-content-end' id='collapseTarget'>
                            <ul className='navbar-nav col-md-4 justify-content-between'>
                                <li className='nav-item active'>
                                    <Link to='/about'>About Me</Link> 
                                </li>
                                <li className='nav-item'>
                                    <Link to='/projects'>Projects</Link> 
                                </li>
                                <li className='nav-item'>
                                    <Link to='/skills'>Skills</Link> 
                                </li>
                            </ul>
                        </div>
                </div>
            </nav>
    );
}

export default Navbar;