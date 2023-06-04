import React ,{useState , useEffect}from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import './style.css';
import { Link } from 'react-router-dom';

function News() {
    const [items , setItems] = useState([]);

    useEffect(() => {
        axios.get('/json/data.json')
        .then(res => setItems(res.data.news))
    })

    const myNews = items.map((item) => {
        return(
            <Card className='col-sm-12 col-md-6 col-lg' key={item.id}>
                <Link to={`home/blogs/${item.nameRoute}`}><Card.Img variant="top" src={item.img_source} /></Link>
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.writer}</Card.Text>
                    <Card.Text>{item.body}</Card.Text>
                    <Link to={`home/blog-${item.nameRoute}`}>Read More</Link>
                </Card.Body>
            </Card>
        )
    })

    return (
        <div className='news'>
            <div className='main-title'>
                <h2>Latest News</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore.
                </p>
            </div>
            <div className='container'>
                <div className='news-content row'>
                    {myNews}
                </div>
            </div>
        </div>
    )
}
export default News;