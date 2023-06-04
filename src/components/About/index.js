import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function About() {
    return (
        <div className='about-us'>
            <div className='caption'>
                <h2>ABOUT US</h2>
                <Link to='/'>Home</Link>
                <span>/</span>
                <Link to=''>About</Link>
            </div>
            <div className='about-us-content'>
                <p>
                    Furns is a global furniture destination for somethings. 
                    We sell cutting-edge furniture and offer a wide variety of fashion-related content.
                </p>
                <div className='about-us-items row'>
                    <div className='col-12 col-md'>
                        <div className='about-us-img'> <img className='img-fluid' src='/images/us1.jpg' alt='story-img'/> </div>
                        <div className='about-us-info'>
                            <h2>OUR STORES</h2>
                            <p>
                                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse. 
                                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor.
                            </p>
                        </div>
                    </div>
                    <div className='col-12 col-md'>
                        <div className='about-us-img'> <img className='img-fluid' src='/images/us2.jpg' alt='mission-img'/> </div>
                        <div className='about-us-info'>
                            <h2>OUR MISSION</h2>
                            <p>
                                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse. 
                                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About