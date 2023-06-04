import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

export default function index() {
    return (
        <div className='page-not-found'>
            <container>
                <div className='page-content'>
                    <img className='img-fluid' src='/images/shutterstock.jpg' alt='error-img'/>
                    <p>It looks like nothing was found at this location.</p>
                    <NavLink to='/'><i class="fa fa-long-arrow-right fa-lg"></i> Go To Home</NavLink>
                </div>
            </container>
        </div>
    )
}
