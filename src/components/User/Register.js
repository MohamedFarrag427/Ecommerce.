import React , {useState , useRef , useEffect} from 'react';
import {Button , Form} from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';
import './style.css';



export default function Register() {
    const [firstName , setFirstName] = useState('');
    const [lastName , setLastName] = useState('');
    const [email , setEmail] = useState('');
    const [phone , setPhone] = useState('');
    const [password , setPassword] = useState('');
    const [confirmPassword , setConfirmPassword] = useState('');
    const [success , setSuccess] = useState(false);
    const userRef = useRef();
    const navigate = useNavigate();
    const [checkPass , setCheckPass] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    },[])

    
    const handelSubmit = (e) => {
        e.preventDefault();

        const data = {
            firstName,
            lastName,
            email,
            phone,
            password,
            confirmPassword
        }

        localStorage.setItem("userdata" , JSON.stringify(data));

        if(password !== confirmPassword){
            console.error('wrong');
            setSuccess(false);
            setCheckPass(true);
        }else{
            setSuccess(true);
            setCheckPass(false);
            setFirstName('');
            setLastName('');
            setEmail('');
            setPhone('');
            setPassword('');
            setConfirmPassword('');
        }

        

    }

    if((password.value !== '') && (confirmPassword !== '')){
        console.log('d')
    }else{
            console.log('s')
    }

    return (
        <div className='user-register'>
            <div className='caption'>
                <h2>CREATE ACCOUNT</h2>
                <Link to='/'>Home</Link>
                <span>/</span>
                <Link to=''>SIGN UP</Link>
            </div>
            <div className='container'>
                <Form onSubmit={handelSubmit}>
                    <div className="mb-3 form-user">
                        <Form.Group className='form-item mb-1'>
                            <Form.Label>First name</Form.Label>
                            <Form.Control 
                                required type="text" placeholder="Enter first name" ref={userRef} 
                                value ={firstName} onChange={(e) => setFirstName(e.target.value) }
                            />
                            <i className="fa-solid fa-circle-user"></i>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className='form-item'>
                            <Form.Label>Last name</Form.Label>
                            <Form.Control 
                                required type="text" placeholder="Enter last name"
                                value ={lastName} onChange={(e) => setLastName(e.target.value) }
                            />
                            <i className="fa-solid fa-circle-user"></i>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        
                    </div>
                    <div className="mb-3">
                        <Form.Group className='form-item mb-1'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                                type="email" placeholder="Enter email" 
                                value ={email} required onChange={(e) => setEmail(e.target.value) }
                            />
                            <i className="fa-solid fa-envelope"></i>
                        </Form.Group>
                        <Form.Group className='form-item'>
                            <Form.Label>Phone</Form.Label>
                            <Form.Control 
                                type="text" placeholder="Enter phone" 
                                value ={phone} required onChange={(e) =>setPhone(e.target.value) }
                            />
                            <i className="fa-solid fa-mobile-screen-button"></i>
                        </Form.Group>
                    </div>
                    <div className={`form-user ${checkPass ? 'mb-1' : 'mb-3'}`}>
                        <Form.Group className='form-item mb-1'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password" placeholder="Enter Password" 
                                className={checkPass ? 'error-border' : null} 
                                value={password} required onChange={(e) => setPassword(e.target.value) }
                            />
                            <i className="fa-solid fa-key"></i>
                        </Form.Group>
                        <Form.Group className='form-item'>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control 
                                type="password" placeholder="Confirm Password" 
                                className={checkPass ? 'error-border' : null} 
                                value={confirmPassword} required onChange={(e) => setConfirmPassword(e.target.value) }
                            />
                            <i className="fa-solid fa-key"></i>
                        </Form.Group>
                    </div>
                    {checkPass ? <span className='error-color mb-3 d-inline-block'>Thise passwords didn’t match. Try again.</span> : null}
                    <Form.Group className="mb-3">
                        <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                        />
                    </Form.Group>
                    <Button type="submit">Sgin Up</Button>
                    <Button onClick={() => navigate('/user-sign')} type="submit">
                        {success ? 'Already Have A Account Sgin In' : 'Sgin In' }
                    </Button>
                </Form>
            </div>
        </div>
    )
}
