import React, { Fragment } from 'react';
import Home from './../Home';
import Category from './../Category';
import Products from '../Products';
import News from './../News';


export default function Index() {
    return (
        <Fragment>
            <Home/>
            <Category/>
            <Products/>
            <News/>
        </Fragment>
    )
}
