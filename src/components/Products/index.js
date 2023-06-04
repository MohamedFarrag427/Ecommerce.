import React , {useState , useEffect , Fragment} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Modal} from 'react-bootstrap';
import {useSelector , useDispatch} from 'react-redux';
import {decrease , addToCart , getProduct} from'../../store/CartSlice';
import './style.css';


function MyVerticallyCenteredModal(props) {
    const dispatch = useDispatch();
    const productState= useSelector((state) => state.productItems);

    const handelAddToCart = (product) => {
        dispatch(addToCart(product));
    }

    const handelDecrease = (product) => {
        dispatch(decrease(product))
    }

    const handelIncrease = (product) => {
        dispatch(addToCart(product))  
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


function Products() {
    const [products , setProducts] = useState([]);
    const lists = ["New Arrival","Featured","On Sale","Tending"];
    const [active , setActive] = useState(0);
    const [tag , setTag] = useState('New Arrival');
    const [filter , setFilter] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const dispatch = useDispatch();
    


    const getDataModal = (product) => {
        setModalShow(true)
        dispatch(getProduct(product))
    }

    const handelAddToCart = (product) => {
        dispatch(addToCart(product));
    }

    const handelProduct = (product) => {
        dispatch(getProduct(product))
    }

    useEffect(() => {
        axios.get('/json/data.json')
        .then(res => setProducts(res.data.product))
    })

    useEffect(() => {
        setFilter(products.filter((product) => product.category === tag));
    },[products,tag])

    const myProduct = filter.map((product) => {
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
                    <button onClick={() => handelAddToCart(product)}>Add To Cart</button>
                </div>
                <div className='product-title'>
                    <Link onClick={() => handelProduct(product)} to={`/product/${product.title}`}>{product.title}</Link>
                    <p>{`$ ${product.price}`}</p>
                </div>
            </div>
        )
    })

    const myList = lists.map((list,indx) => {
        const activeList = () => {
            setActive(indx);
            setTag(list);
        }
        return <li key={indx} onClick={activeList} className={active===indx ? 'active' : 'null'}>{list}</li>
    })

    return (
        <div className='product'>
            <div className='main-title'>
                <h2>Our Products</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore.
                </p>
            </div>
            <ul className='product-list'>
                {myList}
            </ul>
            <div className='container'>
                <div className='product-content row'>
                    {myProduct}
                </div>
                <div className='media'>
                    <div className='media-content row'>
                        <Link to='products' className='media-item col'>
                            <img className='img-fluid' src='/images/media1.jpg' alt='media1'/>
                            <div className='media-title'>
                                <h3>Sale Furniture <br></br>  For Summer</h3>
                                <p>Great Discounts Here</p>
                            </div>
                        </Link>
                        <Link to='products' className='media-item col'>
                            <img className='img-fluid' src='/images/media2.jpg' alt='media2'/>
                            <div className='media-title'>
                                <h3>Office Chair <br></br>  For Best Offer</h3>
                                <p>Great Discounts Here</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    )
}
export default Products;
