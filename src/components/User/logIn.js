import React , {useState , useEffect , useRef } from 'react';
import {Button,Form} from 'react-bootstrap';

import {NavLink , Link, useNavigate} from 'react-router-dom';
import './style.css'

export default function LogIn() {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const userRef = useRef();
    const [checkPass , setCheckPass] = useState(false);
    
    useEffect(() => {
        userRef.current.focus();
    },[]);

    const navigate = useNavigate();

    const data = JSON.parse(localStorage.getItem("userdata"));
    

    const handelLogIn = (e) => {
        e.preventDefault();
        if(data.email === email && data.password === password){
            navigate('/');
            setEmail('');
            setPassword('');  
        }else{
            console.error('wrong');
            setCheckPass(true);
        }
    }



    return (
        <div className='user-sign'>
            <div className='caption'>
                <h2>LOG IN</h2>
                <Link to='/'>Home</Link>
                <span>/</span>
                <Link to=''>SIGN IN</Link>
            </div>
            <div className='container'>
                <Form onSubmit={handelLogIn}>
                    <Form.Group className=" mb-3 form-item">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            type="email" placeholder="Enter email" ref={userRef} 
                            value={email} required onChange={(e) => setEmail(e.target.value)}
                            className={checkPass ? 'error-border' : null}
                        />
                        <i className="fa-solid fa-envelope"></i>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3 form-item">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" placeholder="Enter password" 
                            value={password} required onChange={(e) => setPassword(e.target.value)}
                            className={checkPass ? 'error-border' : null}
                        />
                        <i className="fa-solid fa-key"></i>
                    </Form.Group>
                    {checkPass  ? <span className='error-color'>Incorect Email or Password. </span> : null}
                    <Button variant="primary" type="submit">
                        Sign In 
                        <i className="fa-solid fa-arrow-right-to-bracket"></i>
                    </Button>
                    <div className='form-link'>
                        <NavLink to='/user-register'>
                            Create Account  
                            <i className="fa-solid fa-pencil"></i>  
                        </NavLink>
                        <NavLink to='/forgot-password'>
                            Forgot Password 
                            <i className="fa-solid fa-lock"></i> 
                        </NavLink>
                    </div>
                </Form>
            </div>
            
        </div>
        
    );
}