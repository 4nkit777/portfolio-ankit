import React, { useState } from 'react';
// import { websites } from '../data';
// import Thumbnail from 'react-thumbnail';
import firstImg from '../assets/color-gen.png';
import secondImg from '../assets/birthday-reminder.png';
import thirdImg from '../assets/carousel-slider 1-adjusted.png';
import fourthImg from '../assets/to-do-list-app.png';
import { Link } from 'react-router-dom';


// const websites = [
//     'https://color-generator-react-app.netlify.app/',
//     'https://carousel-slider-react-app.netlify.app/',
//     'https://todo-web-app-react.netlify.app/'
// ];


const projectData = [
    {
        id: 1,
        image: firstImg,
        title: 'color generator app',
        website: 'https://color-generator-react-app.netlify.app/',
        technology: ['React', 'Bootstrap']
    },
        {
        id: 2,
        image: secondImg,
        title: 'birthday reminder app',
        website: 'https://birthday-reminder-react-app.netlify.app/',
        technology: ['React', 'Bootstrap']
    },
        {
        id: 3,
        image: thirdImg,
        title: 'carousel slider app',
        website: 'https://carousel-slider-react-app.netlify.app/',
        technology: ['React', 'Bootstrap']
    },
        {
        id: 4,
        image: fourthImg,
        title: 'to-do list app',
        website: 'https://todo-web-app-react.netlify.app/',
        technology: ['React', 'Bootstrap']
    }
];


const Projects = () => {

    const [url, setUrl] = useState(window.location.href);
    console.log(url);

    // const submitHandle = (e) => {
    //     e.preventDefault();
        
    //     setUrl(window.location.replace(`https://${url}`));
    // }

    return (
        <div className='mt-5 vh-100'>
            <div className='text-center mb-4'>
                <h2>My Projects</h2>
            </div>
            <div className='d-flex justify-content-around'>
                {projectData.map((item) => {
                    const { id, image, title, website, technology } = item;
                    return (
                        <div className='card shadow d-flex' style={{ width: '16rem', height: '23rem'}} key={id} >
                            <div className='card-img-top h-50'>
                                <img src={image} className='img-fluid' alt={title} />
                            </div>
                            
                            <div className='card-body bg-dark text-light ' style={{ height: '5rem'}} >
                                <h5 className='card-title'>{title}</h5>
                                <div className='d-flex mb-3 justify-content-around'>
                                    {technology.map((item, index) => {
                                        return (
                                                <div className='btn btn-outline-primary' key={index}>
                                                    {item}
                                                </div>
                                        );
                                    })}
                                </div>

                                {/* <button className='btn btn-primary container'>Click Me</button> */}
                                <Link to={website}>
                                    <button className='btn btn-primary container' onSubmit={(e) => {
                                        e.preventDefault();
                                        setUrl(website);
                                        console.log(url);
                                    }} >
                                        Click Me
                                    </button>
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
            
        </div>
        
    );
}

export default Projects;