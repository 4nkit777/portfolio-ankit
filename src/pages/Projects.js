import React from 'react';
// import { websites } from '../data';
// import Thumbnail from 'react-thumbnail';
import firstImg from '../assets/color-gen.png';
import secondImg from '../assets/birthday-reminder.png';
import thirdImg from '../assets/carousel-slider.png';
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
        website: 'https://color-generator-react-app.netlify.app/'
    },
        {
        id: 2,
        image: secondImg,
        title: 'birthday reminder app',
        website: 'https://birthday-reminder-react-app.netlify.app/'
    },
        {
        id: 3,
        image: thirdImg,
        title: 'carousel slider app',
        website: 'https://carousel-slider-react-app.netlify.app/'
    },
        {
        id: 4,
        image: fourthImg,
        title: 'to-do list app',
        website: 'https://todo-web-app-react.netlify.app/',
    }
];


const Projects = () => {
    return (
        <div className='d-flex justify-content-around mt-5'>
            {projectData.map((item) => {
                const { id, image, title, website } = item;
                return (
                    <div className='card shadow' style={{ width: '16rem' }} key={id} >
                        <img src={image} className='card-img-top' alt={title} />
                        <div className='card-body bg-dark text-light d-flex flex-column'>
                            <h5 className='card-title'>{title}</h5>
                            <Link to={website}>
                                <button>Click Me</button>
                            </Link>
                            {/* <button className='btn btn-primary container' onSubmit={() => handleClick(website)}>See me live!</button> */}
                        </div>
                    </div>
                );
            })}
        </div>
        
    );
}

export default Projects;