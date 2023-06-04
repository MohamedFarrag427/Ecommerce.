import React from 'react'
import { Link } from 'react-router-dom';
import './style.css';


export default function Spatialize() {
  return (
    <div className='blog'>
        <div className='caption'>
            <h2>SPATIALIZE WITH THAT THE FURNS</h2>
            <Link to='/'>Home</Link>
            <span>/</span>
            <Link to=''>Blog - SPATIALIZE WITH THAT THE FURNS</Link>
        </div>

        <div className='container'>
            <div className='blog-spatialize'>
                <div className='blog-img row'>
                    <img className='img-fluid' src='/images/news3.jpg' alt = 'blogImg'/>
                    <span>By Raju HT, <span>14 September, 2021</span> </span>
                </div>
                <div className='blog-info'>
                    <h2>SPATIALIZE WITH THAT THE FURNS</h2>
                    <p className='mb-4'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, 
                      quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat. 
                      Duis aute irure dolor in rep rehenderit.
                    </p>
                    <p className='mb-4'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, 
                      quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat. 
                      Duis aute irure dolor in rep rehenderit. Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                      sed do eiumod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, 
                      consectetur adipisicing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                    <ul className='mb-4'>
                      <li>Dolore magna aliqua</li>
                      <li>Tempor incididunt ut labore</li>
                      <li>Duis aute irure dolor in rep</li>
                      <li>Exercitation ullamco laboris</li>
                    </ul>
                    <p>
                      Consectetur adipisicing elit, sed do eiumod tempor incididunt ut labore et dolore magna aliqua. 
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam,
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
