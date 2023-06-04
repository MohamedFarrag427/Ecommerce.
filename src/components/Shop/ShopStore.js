import React , {useState , Fragment , useEffect} from 'react';
import {Offcanvas} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useSelector , useDispatch} from 'react-redux';
import {decrease , deleteCart , addToCart , getTotals} from '../../store/CartSlice';
import './style.css';

export default function ShopStore() {
    function OffCanvasExample({name , ...props }) {
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        const dispatch = useDispatch();
        const cartState = useSelector((state) => state.cartItems);
        const cartTotal = useSelector((state) => state.cartTotalQuantity);
        const cartAmount = useSelector((state) => state.cartTotalAmount);



        const handelRemoveFromCart = (product) => {
            dispatch(deleteCart(product))
            
        }

        const handelDecrease = (product) => {
            dispatch(decrease(product))
        }
    
        const handelIncrease = (product) => {
            dispatch(addToCart(product));
        }

        useEffect(() => { 
            dispatch(getTotals());
        }, [cartState , dispatch]);


        const productItem = cartState.cartItems.length > 0 ? cartState.cartItems.map((product) => {
            return (
                <div className='row cart-content' key={product.id}>
                    <div className='col cart-img'>
                        <img src={product.img_source} alt={product.alt_name}/>
                    </div>
                    <div className='col cart-info'>
                        <p>{product.title}</p>
                        <p>{`$ ${product.price * product.cartQuantity}`}</p>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <button onClick={() => handelDecrease(product)}>-</button>
                            <span>{product.cartQuantity}</span>
                            <button onClick={() => handelIncrease(product)}>+</button>
                        </form>
                        <button onClick={() => handelRemoveFromCart(product)} className='remove-product'></button>
                    </div>
                </div>
            )}): (
            <div className='cart-body'>
                <i className="fa-solid fa-box-archive fa-5x"></i>
                <p>There are no products !</p>
            </div>
        );

        return (
            <Fragment>
                <div onClick={handleShow} className={`store ${cartTotal.cartTotalQuantity > 0 && ' animate__animated animate__fadeInUp' }`}>
                    <i className="fa-solid fa-box-archive"></i>
                    <p className='store-items'>{`${cartTotal.cartTotalQuantity} items`}</p>
                    <p className='store-price'>{`$ ${cartAmount.cartTotalAmount}`}</p>
                </div>
                <Offcanvas show={show} onHide={handleClose} {...props}>
                    <Offcanvas.Header id='cart-header' closeButton>
                        <Offcanvas.Title>Cart</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        {productItem}
                    </Offcanvas.Body>
                    <form className='cart-view'>
                        <Link to='cart'>
                            <button className='cart-btn'>View Cart <span>{`$ ${cartAmount.cartTotalAmount}`}</span></button>
                        </Link>
                    </form>
                </Offcanvas>
            </Fragment>
        );
    }
    return (
        <Fragment>
            {['end'].map((placement, indx) => (
            <OffCanvasExample key={indx} placement={placement} name={placement} />
            ))}
        </Fragment>
    )
}