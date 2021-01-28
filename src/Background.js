import React from 'react';
// import BlobOne from './assets/purple-gradient.png';
import BG from './assets/background-img.png';

const Background = () => {
    return (
        <div style={{ height: '100%' }}>
            <div>
                <img src={BG} alt='purple-blob'  />
            </div>
        </div>
    );
}

export default Background;