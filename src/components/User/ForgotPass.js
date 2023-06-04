import React , {useState , useEffect , useRef} from 'react';
import {Button , Form} from 'react-bootstrap';
import{Link} from 'react-router-dom';
import './style.css';

export default function ForgotPass() {
    const userRef = useRef();
    
    useEffect(() => {
        userRef.current.focus();
    },[])

    return (
        <div className='forgot-password'>
            <div className='caption'>
                <h2>Reset Password</h2>
                <Link to='/'>Home</Link>
                <span>/</span>
                <Link to=''>Reset</Link>
            </div>
            <div className='container'>
                <Form>
                    <h5>Enter your email address below and we'll send you an email with instructions.</h5>
                    <Form.Group className="mb-3 form-item" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required ref={userRef}/>
                        <i className="fa-solid fa-envelope"></i>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Reset
                    </Button>
                </Form>
            </div>
        </div>
        
    )
}