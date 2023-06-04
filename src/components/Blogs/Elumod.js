import React from 'react';
import{Link} from 'react-router-dom';
import './style.css';

export default function Elumod() {
    return (
        <div className='blog'>
            <div className='caption'>
                <h2>EIUMOD TEMPOR INCIDIDUNT LABORE</h2>
                <Link to='/'>Home</Link>
                <span>/</span>
                <Link to=''>Blog - EIUMOD TEMPOR INCIDIDUNT LABORE</Link>
            </div>
            <div className='container'>
                <div className='blog-elumod'>
                    <div className='blog-img row'>
                        <img src='/images/news1.jpg' alt = 'blogImg'/>
                        <span>By Raju HT, <span>14 September, 2021</span> </span>
                    </div>
                    <div className='blog-info'>
                        <h2>EIUMOD TEMPOR INCIDIDUNT LABORE</h2>
                        <p className='mb-4'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat. 
                            Duis aute irure dolor in rep rehenderit. Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                            sed do eiumod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, 
                            consectetur adipisicing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim adminim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat.
                        </p>
                        <p className='mb-4'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat. 
                            Duis aute irure dolor in rep rehenderit. Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                            sed do eiumod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, 
                            consectetur adipisicing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </p>
                        <p className='mb-4'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat. 
                            Duis aute irure dolor in rep rehenderit. Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                            sed do eiumod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, 
                            consectetur adipisicing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim adminim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat. 
                            Duis aute irure dolor in rep rehenderit. Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                            sed do eiumod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, 
                            consectetur adipisicing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim adminim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
