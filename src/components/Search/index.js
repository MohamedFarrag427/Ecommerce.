import React, { useState , Fragment , useEffect} from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link , useNavigate} from 'react-router-dom';
import {useSelector , useDispatch} from 'react-redux';
import {getProduct , getDataSearch }from'../../store/CartSlice';
import './style.css';
import axios from 'axios';


function OffCanvasExample({...props }) {
    const [show, setShow] = useState(false);
    const [val , setVal] = useState('');
    const [filter , setFilter] = useState([]);
    const [products , setProducts] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    
    

    useEffect(() => {
        axios.get('/json/data.json')
        .then(res => setProducts(res.data.product))
    })

    useEffect(() => {
        setFilter(products.filter((product) => product.section === val.value));
    },[products,val])

    const handelSearch = () => {
        
        
    }
    

    const handelSubmit = (e) => {
        e.preventDefault();
        setShow(false);
        setVal('');
        navigate('/search/:title');
        console.log(filter)
    }


    return (
        <Fragment>
            <Link onClick={handleShow} to='#'> 
                <i className="fa-solid fa-magnifying-glass"></i>
            </Link>
            <Offcanvas show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton></Offcanvas.Header>
                <div>
                    <form onSubmit={handelSubmit} className='search-form' id='searchForm'>
                        <input type="text" value={val} placeholder="Enter Your Search Keyword..." required  onChange={(e)=>setVal(e.target.value)}/>
                        <button onClick={() => handelSearch()}> <i className="fa-solid fa-magnifying-glass"></i></button>
                    </form>
                </div>
            </Offcanvas>
        </Fragment>
    );
}

export default function Search() {
    return (
        <Fragment>
            {['top'].map((placement, idx) => (
                <OffCanvasExample key={idx} placement={placement} name={placement} />
            ))}
        </Fragment>
    );
}
