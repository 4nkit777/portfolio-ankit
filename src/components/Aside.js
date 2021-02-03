import React from 'react';
import { FaFacebookSquare, FaDribbbleSquare, FaLinkedin } from 'react-icons/fa';
import '../aside-style.css';

const Aside = () => {
    return (
        <div className='d-flex flex-column vh-100 col-md-2 col-2 justify-content-around align-items-center'>
            <div className='d-flex flex-column'>
                <button className='linkedin' onClick={() => window.location.href = 'https://www.linkedin.com/in/ankit-sil-562557164/'}>
                    <FaLinkedin className='w-50 h-50 faHoverColor' />
                </button>
                <button className='facebook'>
                    <FaFacebookSquare className='w-50 h-50 faHoverColor' />
                </button>
                <button className='dribbble'>
                    <FaDribbbleSquare className='w-50 h-50 faHoverColor' />
                </button>
            </div>

        </div> 
    );
}

export default Aside;