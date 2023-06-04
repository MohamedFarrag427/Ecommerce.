import React , {Fragment, useEffect}  from 'react';
import {Link} from 'react-router-dom';
import {useSelector , useDispatch} from 'react-redux';
import {decrease , deleteCart , addToCart , clearCartPage , getTotals , getProduct} from '../../store/CartSlice';
import './style.css'

export default function Cart() {
    const dispatch = useDispatch();
    const cartState = useSelector((state) => state.cartItems);
    const cartAmount = useSelector((state) => state.cartTotalAmount)

    const handelDecrease = (product) => {
        dispatch(decrease(product))
    }

    const handelIncrease = (product) => {
        dispatch(addToCart(product))
    }

    const handelRemoveFromCart = (product) => {
        dispatch(deleteCart(product))
    }

    const handelClear = () => {
        dispatch(clearCartPage())
    }

    const handelProduct = (product) => {
        dispatch(getProduct(product))
    }

    useEffect(() => {
        dispatch(getTotals())
    }, [cartState , dispatch])


    const productItem = cartState.cartItems.length > 0 ? (
        <Fragment>
            <div className='cart-table'>
                <table>
                    <thead className='cart-list'>
                        <tr>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Until Price</th>
                            <th>Qty</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {cartState.cartItems.map((product) => {
                        return(
                            <tbody className='cart-data' key={product.id} >
                                <tr>
                                    <td><img src={product.img_source} alt={product.alt_name}/></td>
                                    <td><p>{product.title}</p></td>
                                    <td><p>{`$ ${product.price}`}</p></td>
                                    <td>
                                        <form onSubmit={(e) => e.preventDefault()}>
                                            <button onClick={() => handelDecrease(product)}>-</button>
                                            <span>{product.cartQuantity}</span>
                                            <button onClick={() => handelIncrease(product)}>+</button>
                                        </form>
                                    </td>
                                    <td>
                                        <p>{`$ ${product.cartQuantity * product.price}`}</p>
                                    </td>
                                    <td>
                                        <form>
                                            <Link onClick={() => handelProduct(product)} to={`/product/${product.title}`}>
                                                <i className="fa-solid fa-pen-to-square"></i>
                                            </Link>
                                            <button onClick={() => handelRemoveFromCart(product)}>
                                                <i className="fa-regular fa-circle-xmark"></i>
                                            </button>
                                        </form>
                                    </td>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
            </div>
            <div className='productInfo'>
                <p>{`Grand Total : $ ${cartAmount.cartTotalAmount}`}</p>
                <form>
                    <button onClick={() => handelClear()}>Clear All Products</button>
                    <Link to='/user-sign'>Checkout</Link>
                </form>
            </div>
        </Fragment>

    ): (
        <div className='cart-body'>
            <i className="fa-solid fa-box-archive fa-5x"></i>
            <p>There are no products !</p>
            <Link to='/Products'>Start Shopping <i className="fa-solid fa-arrow-right-long"></i></Link>
        </div>
    )


    return (
        <div className='cart'>
            <div className='caption'>
                <h2>Cart</h2>
                <Link to='/'>Home</Link>
                <span>/</span>
                <Link to=''>Cart</Link>
            </div>
            <div className='container'>
                {productItem}
            </div>
        </div>
    )
}
