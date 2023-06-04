import React ,{ useEffect , useState} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import {FreeMode} from "swiper";

import {Link} from 'react-router-dom';
import axios from 'axios';
import './style.css';

export default function Category() {

  const [items , setItems] = useState([]);

    useEffect(() => {
      axios.get('/json/data.json')
      .then(res => setItems(res.data.category)) 
    });

    const myCategory = items.map((item) => {
      return(
        <SwiperSlide key={item.id}>
          <Link to='/' className='category-item' >
            <div className ='category-info'>
              <img className='img-fluid' src={item.img_source} alt={item.category_name}/>
              <h4>{item.category_name}</h4>
            </div>
          </Link>
        </SwiperSlide>
      )
    })

    return (
      <div className='category'>
        <div className='container'>
          <Swiper
            breakpoints={{
              0: {
                width: 0,
                slidesPerView: 1,
              },
              576: {
                width: 576,
                slidesPerView: 2,
              },
              768: {
                width: 768,
                slidesPerView: 3,
              },
              1992: {
                width: 1992,
                slidesPerView: 4,
                
              },
              1120: {
                width: 1120,
                slidesPerView: 5,
              },

              1400:{
                width: 1400,
                slidesPerView: 5,
              }
              
            }}
            spaceBetween={20}
            freeMode={true}
            loop={true}
            loopFillGroupWithBlank={false}
            modules={[FreeMode]}
            className="mySwiper"
        >
          {myCategory}
        </Swiper>
        </div>
      </div>
    );
}

