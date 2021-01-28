import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaLinux, FaUbuntu, FaBootstrap, FaSlack, FaTrello } from 'react-icons/fa';
import { SiJavascript, SiMaterialdesign, SiJquery, SiAdobephotoshop, SiAdobeillustrator, SiFigma, SiJira } from 'react-icons/si';
import { GrGatsbyjs } from 'react-icons/gr';
import { FcCommandLine } from 'react-icons/fc';

const skillList = [
    { 
        id: 1,
        title: 'Programming',
        elements: (
                <div className='container d-flex justify-content-around mt-3'>
                    <FaHtml5 size={50} />
                    <FaCss3Alt size={50} />
                    <SiJavascript size={50} />
                </div>
        )
    },
    { 
        id: 2,
        title: 'Designing',
        elements: (
                <div className='container d-flex justify-content-around mt-3'>
                    <SiAdobeillustrator size={50} />
                    <SiAdobephotoshop size={50} />
                    <SiFigma size={50} />
                </div>
        )
    },
    { 
        id: 3,
        title: 'Libraries',
        elements: ( 
                <div className='container d-flex justify-content-around mt-3'>
                    <FaBootstrap size={50} />
                    <FaReact size={50} />
                    <SiJquery size={50} />
                    <SiMaterialdesign size={50} />
                    <GrGatsbyjs size={50} />
                </div>
        )
    },
    { 
        id: 4,
        title: 'Project Management',
        elements: (
                <div className='container d-flex justify-content-around mt-3'>
                    <FaSlack size={50} />
                    <FaTrello size={50} />
                    <SiJira size={50} />
                </div>
        )
    },
    { 
        id: 5,
        title: 'Tools & OS',
        elements: (
                <div className='container d-flex justify-content-around mt-3'>
                    <FaLinux size={50} />
                    <FaUbuntu size={50} />
                    <FcCommandLine size={50} />
                </div>
        )
    },
];

const Skills = () => {
    return (
        <div className='container d-flex justify-content-around mt-5 vh-100' >
            {skillList.map((item) => {
                const { id, title, elements } = item;
                return (
                    <div className='card text-center shadow ' style={{ width: '13rem', height: '10rem' }} key={id} >
                        <p className='card-title container text-light p-2' style={{ backgroundColor: '#8f2d56'}}>{title}</p>
                        {elements}
                    </div>
                );
            })}
        </div>
    );
}

export default Skills;