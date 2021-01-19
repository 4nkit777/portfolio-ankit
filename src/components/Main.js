import React from 'react';
import  MainImage from '../assets/main-img.jpg';

const Main = () => {
    return (
        <main className='d-flex vh-100'>
            <div className='d-flex justify-content-between p-3'>
                {/* text */}
                <div className='d-flex flex-column align-items-start justify-content-center p-3 position-relative'>
                    <h2 style={{ fontWeight: '700', fontSize: '3rem' }}>Ankit Sil</h2>
                    <p style={{ fontWeight: '300', fontSize: '0.9rem' }} className='mt-3'>UI/UX Designer, Web Developer</p>
                    <p className='mb-5' style={{ fontSize: '0.9rem', color: 'blueviolet', fontWeight: '600' }} >A self taught programmer</p>
                    <button className='btn btn-primary container'>Let's Chat!</button>
                </div>
                <div className='col-md-9 d-flex justify-content-center align-items-center'>
                    <img src={MainImage} alt='main-img' className='col-md-12' />
                </div>
            </div>
        </main>
    );
}

export default Main;