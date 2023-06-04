import axios from 'axios';
import React, { useEffect, useState , Fragment} from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

function Home() {
    const [items , setItems] = useState([]);
    useEffect(() => {
        axios.get('/json/data.json')
        .then(res => setItems(res.data.slider))
    })

    const [active, setActive] = useState(1);
    const [bullet , ] = useState(1);
    const [arrow , ]  = useState(1)

    const nextSlide = () => {
            if(active < items.length){
                setActive(active+1)
            }else{
                setActive(active)
            }
    }
    
    const prevSlide = () => {
        if(active > 1){
            setActive(active-1)
        }else{
            setActive(active)
        }
    }


    const mySlider = items.map((item) => {
        return (
            <div className={`slider ${active===item.id ? 'show' : 'hide'}`} key={item.id}>
                <div className='container'>
                    <div className='slider-content  row'>
                        <div className='slider-info col-12 col-md-6 animate__animated animate__fadeInUp'>
                            <h4>{item.sub_title}</h4>
                            <h2>{item.title}</h2>
                            <p>{item.body}</p>
                            <NavLink to='products'> <button>Shop Now</button> </NavLink>
                        </div>
                        <div className='slider-img col-12 col-md-6 animate__animated animate__bounceInUp'>
                            <img className='img-fluid' src={item.img_source} alt={`slide${item.id}`}/>
                        </div>
                    </div>
                </div>
                <div className={`next ${arrow ===item.id ? 'visible': 'hidden'}`} onClick={nextSlide}> <i className="fa-solid fa-chevron-right"></i> </div>
                <div className={`prev ${arrow !==item.id ? 'visible': 'hidden'}`} onClick={prevSlide}> <i className="fa-solid fa-chevron-left"></i> </div>
                <div className='bulltes'>
                    <span onClick={prevSlide} className={bullet===item.id ? 'active' : 'null'}></span>
                    <span onClick={nextSlide} className={bullet!==item.id ? 'active' : 'null'}></span>
                </div>
            </div>
        )
    })

    return(
        <Fragment>
            {mySlider}
        </Fragment>
    )
}
export default Home;