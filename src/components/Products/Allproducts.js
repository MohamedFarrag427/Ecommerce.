import React , { useEffect , useState , Fragment} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Modal} from 'react-bootstrap';
import { useDispatch , useSelector} from 'react-redux';
import { decrease , addToCart , getProduct} from'../../store/CartSlice';
import './style.css';


function MyVerticallyCenteredModal(props) {
    const dispatch = useDispatch();
    const productState= useSelector((state) => state.productItems);
    
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

    const uniqueProduct = productState.productItems.filter(el => {
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

export default function Allproducts() {
    const [allproducts , setAllproducts] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [modalinfo , setModalinfo] = useState([]);
    const dispatch = useDispatch();


    useEffect(() => {
        axios.get('/json/data.json')
        .then(res => setAllproducts(res.data.product))
    })

    const handelProduct = (product) => {
        dispatch(getProduct(product))
    }

    const getDataModal = (product) => {
        setModalShow(true)
        dispatch(getProduct(product))
    }

    const uniqueIds = [];

    const uniqueProduct = allproducts.filter(el => {
        const isDuplicate = uniqueIds.includes(el.alt_name);
        if (!isDuplicate) {
            uniqueIds.push(el.alt_name);
            return true;
        }
        return false;
    });

    const handelAddToCart = (product) => {
        dispatch(addToCart(product));
    }

    const myAllproducts = uniqueProduct.map((product) => {
        return(
            <div className='product-item col-6 col-md-4 col-lg-3 ' key = {product.id}>
                <div className='product-img'>
                    <img className='img-fluid' src={product.img_source} alt={product.alt_name}/>
                    <ul>
                        <li className='product-icon'>
                            <i className="fa-regular fa-heart"></i>
                        </li>
                        <li className='product-icon animate__animated animate__fadeInUp'  onClick={() => getDataModal(product)}>
                            <i className="fa-solid fa-compress"></i>
                        </li>
                        <li className='product-icon animate__animated animate__fadeInUp'>
                            <i className="fa-solid fa-code-compare"></i>
                        </li>
                    </ul>
                    <button onClick={() => handelAddToCart(product)}>Add To Cart</button>
                </div>
                <div className='product-title'>
                    <Link onClick = {() => handelProduct(product)} to={`/product/${product.title}`}>{product.title}</Link>
                    <p>{`$ ${product.price}`}</p>
                </div>
            </div>
        )
    })


    return(
        <div className='all-products'>
            <div className='caption'>
                <h2>ALL Products</h2>
                <Link to='/'>Home</Link>
                <span>/</span>
                <Link to=''>ALL Products</Link>
            </div>
            <div className='container'> 
                <p className=' count-products'>Showing {uniqueProduct.length} Product</p> 
            </div>
            <div className='container'>
                <div className='row'>
                    {myAllproducts}
                </div>
            </div>
            <MyVerticallyCenteredModal
                show={modalShow}
                modalinfo = {modalinfo}
                onHide={() => setModalShow(false)}
            />
        </div>
    )
    
}