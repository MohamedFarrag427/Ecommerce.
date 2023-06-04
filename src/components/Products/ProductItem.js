import React ,{useRef , useState , Fragment} from 'react';
import {useSelector , useDispatch} from 'react-redux';
import { addToCart , getProduct , decrease , addReview} from '../../store/CartSlice'
import { Link , NavLink} from 'react-router-dom';
import'./style.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function ProductItem() {
    const dispatch = useDispatch();
    const productState= useSelector((state) => state.productItems);
    const reviewData = useSelector((state) => state.reviews)
    const name = useRef(null);
    const mail = useRef(null);
    const description = useRef(null);
    const inputRadio = useRef(null);
    const [rating , setRating] = useState(null);
    
    const handelAddToCart = (product) => {
        dispatch(addToCart(product));
    }

    const handelIncrease = (product) => {
        dispatch(addToCart(product))
    }

    const handelDecrease = (product) => {
        dispatch(decrease(product))
    }

    const handelProduct = (product) => {
        dispatch(getProduct(product))
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: name.current.value,
            mail: mail.current.value,
            description: description.current.value,
            inputRadio: inputRadio.current.value,
        };
        dispatch(addReview(data));

        name.current.value = null;
        mail.current.value = null;
        description.current.value = null;
    }

    

    const uniqueIds = [];
    const uniqueProduct = productState.productItems.filter(el => {
        const isDuplicate = uniqueIds.includes(el.alt_name);
        if (!isDuplicate) {
            uniqueIds.push(el.alt_name);
            return true;
        }
        return false;
    });
    
    const productItem = uniqueProduct.map((product) => {
        return(
            <div className='row modal-body' key = {product.id}>
                <div className='modal-img col-12  col-md'>
                    <img className='img-fluid' src={product.img_source} alt={product.alt_name}/>
                </div>
                <div className='modal-info col-12 col-md'>
                    <h3 onClick={() => handelProduct(product)}>{product.title}</h3>
                    <h4>{`$ ${product.price}`}</h4>
                    <p>{product.body}</p>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <button disabled = {product.cartQuantity === 0} onClick={() => handelDecrease(product)}>-</button>
                        <span>{product.cartQuantity}</span>
                        <button onClick={() => handelIncrease(product)}>+</button>
                        <button onClick={() => handelAddToCart(product)}>Add To Cart</button>
                    </form>
                    <div className='modal-icon'>
                        <Link to='/'><i className="fa-regular fa-heart"></i> Add To Wishlist </Link>
                        <Link to='/'><i className="fa-solid fa-code-compare"></i> Add To compare </Link>
                    </div>
                    <ul className='modal-social'>
                        <span>Share: </span>
                        <NavLink to='/'> <i className="fa-brands fa-facebook"></i> </NavLink>
                        <NavLink to='/'> <i className="fa-brands fa-twitter"></i> </NavLink>
                        <NavLink to='/'> <i className="fa-brands fa-linkedin"></i> </NavLink>
                    </ul>
                </div>
            </div>
        )
    });

    const myReview = reviewData.reviews.map((data , indx) => {
        return(
            <div className='review-info' key={indx}>
                <i className="fa-solid fa-user-tie fa-3x"></i>
                <div>
                    <h4>{data.name}</h4>
                    <ul className='d-flex'>
                        {[...Array(5)].map((star , indx) => {
                            const ratingValue = indx + 1;
                            return(
                                <label key={indx}>
                                    <input ref={inputRadio} type='radio' name='rating' className='d-none'/>  {/*????? */}
                                    <i className={`fa-solid fa-star ${ratingValue <= rating ? 'rating-active' :'null'}`}></i>
                                </label>
                            )
                        })}
                    </ul>
                    <p>{data.description}</p>
                </div>
            </div>
        )
    })

    return (
        <div className='product-contain'>
            {uniqueProduct.map((product) => {
                return(
                    <Fragment key={product.id}>
                        <div className='caption'>
                            <h2>{product.title}</h2>
                            <Link to='/'>Home</Link>
                            <span>/</span>
                            <Link to=''>{product.title}</Link>
                        </div>
                        <div className='container'>
                            {productItem}
                            <Tabs
                                defaultActiveKey="description"
                                id="uncontrolled-tab-example"
                                className="mb-5"
                            >
                                <Tab eventKey="description" title="Description" className=' mb-5'>
                                    <p className='product-description'>
                                        {product.body}
                                    </p>
                                </Tab>
                                <Tab eventKey="review" title="Review">
                                    <div className='row review-content'>
                                        <div className='review-message col-12 col-md'>
                                            <div className='review-info'>
                                                <i className="fa-solid fa-user-tie fa-3x"></i>
                                                <div>
                                                    <h4>Mo Farrag</h4>
                                                    <ul className='d-flex'>
                                                        {[...Array(5)].map((star , indx) => {
                                                            const ratingValue = indx + 1;
                                                            return(
                                                                <label key={indx}>
                                                                    <input ref={inputRadio} type='radio' name='rating' className='d-none'/>
                                                                    <i className={`fa-solid fa-star ${ratingValue <= rating ? 'rating-active' :'null'}`}></i>
                                                                </label>
                                                            )
                                                        })}
                                                    </ul>
                                                    <p>
                                                        Vestibulum ante ipsum primis aucibus orci luctustrices ullarper euismod vehicula. 
                                                        Phasellus congue nulla.
                                                    </p>
                                                </div>
                                            </div>
                                            {myReview}
                                        </div>
                                        <div className='review-form col-12 col-md'>
                                            <h2>Add your Review</h2>
                                            <div className='review-rating d-flex'>
                                                <p>Your Rating:</p>
                                                <ul className='d-flex'>
                                                    {[...Array(5)].map((star , indx) => {
                                                        const ratingValue = indx + 1;
                                                        return(
                                                            <label key={indx}>
                                                                <input ref={inputRadio} type='radio' name='rating' className='d-none' value={ratingValue} onClick={() => setRating(ratingValue)}/>
                                                                <i className={`fa-solid fa-star ${ratingValue <= rating ? 'rating-active' :'null'}`}></i>
                                                            </label>
                                                        )
                                                    })}
                                                </ul>
                                            </div>
                                            <form onSubmit={handelSubmit}>
                                                <div className='message-box'>
                                                    <label>Message</label>
                                                    <textarea placeholder="Write your message here..." required ref={description}></textarea>
                                                </div>
                                                <div className='row'>
                                                    <div className='col-12 col-sm-6 col-md-12 col-lg mb-3'>
                                                        <label>Name</label>
                                                        <input type='text' placeholder='Enter Your Name' required ref={name}/>
                                                    </div>
                                                    <div className='col-12 col-sm-6 col-md-12 col-lg'>
                                                        <label>Mail</label>
                                                        <input type='email' placeholder='Enter Your Email' required ref={mail}/>
                                                    </div>
                                                </div>
                                                <button>Submit</button>
                                            </form>
                                        </div>
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </Fragment>
                )
            })}
        </div>
    )
}
