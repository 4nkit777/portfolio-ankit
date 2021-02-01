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
        ),
        desc: 'Worked on Grid and Flexbox, on top of all the latest ES features of JavaScript'
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
        ),
        desc: 'Presently do all my UI design on Figma'
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
        ),
        desc: 'I love React with BootStrap'
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
        ),
        desc: 'I have a Post-Graduate Diploma in Project Management, with extensive knowledge of Tools and Techniques.'
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
        ),
        desc: 'I use Ubuntu on my rig'
    },
];

const Skills = () => {
    return (
        <div className='container d-flex flex-column mt-5 vh-100' >
            <div className='row'>
                {skillList.map((item) => {
                    const { id, title, elements, desc } = item;
                    return (
                        <div className='card text-center shadow mx-2 my-2' style={{ width: '22rem', height: '16rem' }} key={id} >
                            <p className='card-title container text-light p-2' style={{ backgroundColor: '#8f2d56'}}>{title}</p>
                            {elements}
                            <p className='mt-3 p-2'>{desc}</p>
                        </div>
                    );
                })}
            </div>

        </div>
    );
}

export default Skills;