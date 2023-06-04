import React ,{ Fragment} from 'react';
import {Link} from 'react-router-dom';
import './style.css';


function Footer() {
    return (
        <Fragment>
            <div className='footer'>
                <div className='container'>
                    <div className='footer-content row'>
                        <div className='footer-about col-12 col-sm-12  col-lg'>
                            <h3>ABOUT US</h3>
                            <p>
                                Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm tempor incididunt ut labor et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud.
                            </p>
                            <div className='social-media'>
                                <Link to='/'><i className="fa-brands fa-facebook"></i></Link>
                                <Link to='/'><i className="fa-brands fa-twitter"></i></Link>
                                <Link to='/'><i className="fa-brands fa-linkedin"></i></Link>
                                <Link to='/'><i className="fa-brands fa-youtube"></i></Link>
                                <Link to='/'><i className="fa-brands fa-pinterest-p"></i></Link>
                            </div>
                        </div>
                        <div className='footer-info col-12 col-sm-6  col-lg'>
                            <h3>INFORMATION</h3>
                            <ul>
                                <Link to='/'> <li>About Us</li> </Link>
                                <Link to='/'> <li>Manufactures</li> </Link>
                                <Link to='/'> <li>Tracking Order</li> </Link>
                                <Link to='/'> <li>Privacy & Policy</li> </Link>
                                <Link to='/'> <li>Terms & Conditions</li> </Link>
                            </ul>
                        </div>
                        <div className='footer-account col-12 col-sm-6  col-lg'>
                            <h3>MY ACCOUNT</h3>
                            <ul>
                                <Link to='/'> <li>Login</li> </Link>
                                <Link to='/'> <li>My Cart</li> </Link>
                                <Link to='/'> <li>Wishlist</li> </Link>
                                <Link to='/'> <li>Compare</li> </Link>
                                <Link to='/'> <li>My Account</li> </Link>
                            </ul>
                        </div>
                        <div className='footer-letter col-12 col-sm-12  col-lg'>
                            <h3>NEWS LETTER</h3>
                            <form>
                                <input type="email" placeholder="Enter E-Mail Address" required />
                                <button>Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-bar'>
                <div className='container'>
                    <div className='bar-content row'>
                        <p className='col-12 col-sm-6'>	&copy; 2022, Furnitures. Made With <i className="fa-solid fa-heart"></i>  by<Link to='/'>MoFarag</Link></p>
                        <img className=' col-12 col-sm-6' src='/images/payment.png' alt='payment'/>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Footer;
