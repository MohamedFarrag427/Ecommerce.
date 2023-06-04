import React , {useRef , useState} from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import {toast} from 'react-toastify';
import './style.css';

export default function Contact () {
    const form = useRef();
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [message , setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2lbdivc', 'template_2amkm1m', form.current, 'N0rHedGbmrsRINrss')
        .then((result) => {
            toast.success(` The message has been send successfully` , {
                position:'top-center',
                autoClose: 500
            });
        }, (error) => {
            toast.error('error' , {
                position:'top-center',
                autoClose: 500
            });
        }).then(() => {
            setName('');
            setEmail('');
            setMessage('');
        })
        
    };
    
    return (
        <div className='contact'>
            <div className='caption'>
                <h2>CONTACT</h2>
                <Link to='/'>Home</Link>
                <span>/</span>
                <Link to=''>Contact</Link>
            </div>
            <iframe 
                src="https://maps.google.com/maps?q=121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia&t=&z=13&ie=UTF8&iwloc=&output=embed"
                title='location' width={"100%"} 
                height={"500px"}>
            </iframe>
            <div className='container'>
                <div className='contact-content row'>
                    <div className='contact-form col-12 col-md'>
                        <h2>SEND US A MESSAGE</h2>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className='row'>
                                <div className='form-item col col-md-12 col-lg'>
                                    <label>Name</label>
                                    <input onChange={(e) => setName(e.target.value)} type='text' value={name} placeholder='Enter Your Name' name='user_name' required/>
                                </div>
                                <div className='col col-md-12 col-lg'>
                                    <label>Mail</label>
                                    <input onChange={(e) => setEmail(e.target.value)} type='email' value={email} placeholder='Enter Your Mail' name='user_email' required/>
                                </div>
                            </div>
                            <textarea onChange={(e) => setMessage(e.target.value)} className='message-box' value={message} placeholder="Write your message here..." name='message' required></textarea>
                            <button value='send'>Send Your Message</button>
                        </form>
                    </div>
                    <div className='contact-info col-12 col-md'>
                        <h2>GET OFFICE INFO.</h2>
                        <p>
                            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, 
                            vel illum dolore eu feugiat nulla facilisis at vero eros et accum
                        </p>
                        <div className='contact-address'>
                            <div className='address'>
                                <i className="fa-solid fa-location-dot fa-lg"></i>
                                <h5>OUR ADDRESS</h5>
                                <p>1234 Heaven Stress, Beverly Hill.</p>
                            </div>
                            <div className='number'>
                                <i className="fa-solid fa-phone fa-lg"></i>
                                <h5>PHONE NUMBER</h5>
                                <p>1234 Heaven Stress, Beverly Hill.</p>
                            </div>
                            <div className='email'>
                                <i className="fa-solid fa-envelope fa-lg"></i>
                                <h5>EMAIL ADDRESS</h5>
                                <p>Email: Erentheme@gmail.com</p>
                                <p>Email: Erentheme@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
