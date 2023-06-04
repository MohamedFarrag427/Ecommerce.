import React , { Fragment , useState } from 'react';
import {Link} from 'react-router-dom';
import {Modal} from 'react-bootstrap';
import {useSelector , useDispatch} from 'react-redux';
import { decrease , addToCart , getProduct , getDataSearch } from'../../store/CartSlice';

function MyVerticallyCenteredModal(props) {
    const dispatch = useDispatch();
    const searchState= useSelector((state) => state.searchResult);
    
    const handelDecrease = (product) => {
        dispatch(decrease(product))
    }

    const handelIncrease = (product) => {
        dispatch(addToCart(product))
    }

    const handelAddToCart = (product) => {
        dispatch(addToCart(product));
    }

    


    const uniqueIds = [];

    const uniqueProduct = searchState.searchResult.filter(el => {
        const isDuplicate = uniqueIds.includes(el.alt_name);
        if (!isDuplicate) {
            uniqueIds.push(el.alt_name);
            return true;
        }
        return false;
    });

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton> </Modal.Header>
            <Modal.Body className='row'>
                {uniqueProduct.map((product) => {
                    return(
                        <Fragment key={product.id}>
                            <div className='modal-img col-12 col-lg'>
                                <img className='img-fluid' src={product.img_source} alt={product.alt_name}/>
                            </div>
                            <div className='modal-info col-12 col-lg'>
                                <h3>{product.title}</h3>
                                <h4>{`$ ${product.price}`}</h4>
                                <p>{product.body}</p>
                                <form onSubmit={(e) => e.preventDefault()}>
                                    <button disabled = {product.cartQuantity === 0} onClick={() => handelDecrease(product)}>-</button>
                                    <span>{product.cartQuantity}</span>
                                    <button onClick={() => handelIncrease(product)}>+</button>
                                    <button onClick={() => handelAddToCart(product)}>Add To Cart</button>
                                </form>
                            </div>
                        </Fragment>
                    )
                    
                })}
            </Modal.Body>
            
        </Modal>
    );
}

export default function SearchProduct() {
    const [modalShow, setModalShow] = useState(false);
    const [modalinfo , setModalinfo] = useState([]);
    const searchState= useSelector((state) => state.searchResult);
    const dispatch = useDispatch();
    const handelProduct = (product) => {
        dispatch(getDataSearch(product))
    }

    const getDataModal = (product) => {
        setModalShow(true)
        dispatch(getProduct(product))
    }

    const handelAddToCart = (product) => {
        dispatch(addToCart(product));
    }

    const uniqueIds = [];

    const uniqueProduct = searchState.searchResult.filter(el => {
        const isDuplicate = uniqueIds.includes(el.alt_name);
        if (!isDuplicate) {
            uniqueIds.push(el.alt_name);
            return true;
        }
        return false;
    });

    return (
        <div className='search-item'>
            <div className='caption'>
                <h2>Search</h2>
                <Link to='/'>Home</Link>
                <span>/</span>
                <Link to=''>Search</Link>
            </div>
            {uniqueProduct.map((product) => {
                return(
                    <div className='product-item col-6 col-md-4 col-lg-3 ' key = {product.id}>
                        <div className='product-img'>
                            <img className='img-fluid' src={product.img_source} alt={product.alt_name}/>
                            <ul>
                                <li className='product-icon'>
                                    <i className="fa-regular fa-heart"></i>
                                </li>
                                <li className='product-icon animate__animated animate__fadeInUp' onClick={() => getDataModal(product)}>
                                    <i className="fa-solid fa-compress"></i>
                                </li>
                                <li className='product-icon animate__animated animate__fadeInUp'>
                                    <i className="fa-solid fa-code-compare"></i>
                                </li>
                            </ul>
                            <button onClick={() => handelAddToCart(product)} className='animate__animated animate__fadeInUp'>Add To Cart</button>
                        </div>
                        <div className='product-title'>
                            <Link onClick={() => handelProduct(product)} to={`/product/${product.title}`}>{product.title}</Link>
                            <p>{`$ ${product.price}`}</p>
                        </div>
                    </div>
                )
            })}
            <MyVerticallyCenteredModal
                show={modalShow}
                modalinfo = {modalinfo}
                onHide={() => setModalShow(false)}
            />
        </div>
        
    )
}

