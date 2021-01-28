import React from 'react';
import { Link } from 'react-router-dom';
import '../nav-style.css';

// import Projects from '../pages/Projects';

const Navbar = () => {
    return (
            <nav className='navbar navbar-expand-lg navbar-light'>
                <div className='container-fluid'>

                        <div className='navbar-brand' style={{ fontWeight: '700', fontSize: '1.5rem' }}>
                            <Link to='/' >Ankit</Link>
                        </div>
                        <div className='collapse navbar-collapse justify-content-end'>
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