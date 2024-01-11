import React, { useState } from 'react'
import './LoginSignup.css'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import Validation from '../Loginvalidation';
import logo from '../Assets/LOGO.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const LoginSignup = () => {

    const [action, setAction] = useState("Sign-up");
    const [values,setValues]= useState({
        name:'',
        email:'',
        password:''
    })
    const [errors,setError]=useState({})

    const navigate=useNavigate()
    axios.defaults.withCredentials=true;

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };
    const handleSignup = (event) => {
        event.preventDefault();
        setError(Validation(values));
    
        if (Object.keys(errors).length === 0) {
          axios
            .post('http://localhost:3001/register', values)
            .then((res) => {
              console.log(res);
              if (res.data.Login) {
                navigate('/dashboard');
              } else {
                navigate('/');
              }
            })
            .catch((err) => console.log(err));
        }
    };
    const handleLogin = (event) => {
        event.preventDefault();
        setError(Validation(values));
    
        if (Object.keys(errors).length === 0) {
          axios
            .post('http://localhost:3001/login', values)
            .then((res) => {
              console.log(res);
              if (res.data.Login) {
                navigate('/dashboard');
              } else {
                navigate('/');
              }
            })
            .catch((err) => console.log(err));
        }
      };

    
   
    return (

        <div className='container'>
            <form onSubmit={action === 'Sign-up' ? handleSignup : handleLogin}>
                <div className="header">
                  <div className="logo">
                    <img src={logo} alt=""  style={{height:"180px",width:"140px"}}/ >
                  </div>
                   
                </div>
                <div className="inputs">
                    {action === "Login" ? <div></div> : <div className="input">
                        <img src={user_icon} alt="" />
                        <input type="text" placeholder='Enter your name...'  onChange={handleInput} name="name"  autoComplete='off' />
                        {errors.name && <span className='text-red'>{errors.name}</span>}
                        

            

                    </div>
                    }
                    <div className="input">
                        <img src={email_icon} alt="" />
                        <input type="email" placeholder='Enter your email....' onChange={handleInput} name="email" autoComplete='off'/>
                        {errors.email && <span className='text-red'>{errors.email}</span>}
                    </div>
                    <div className="input">
                        <img src={password_icon} alt="" />
                        <input type="password" placeholder='Enter your password' onChange={handleInput} name="password" autoComplete='off'/>
                        {errors.password && <span className='text-red'>{errors.password}</span>}
                    </div>
                </div>
                

                <div className="submit-container">
                    <button type="submit" className={action === 'Login' ? 'submit gray' : 'submit'} onClick={() => setAction('Sign-up')}>
                     Sign Up
                    </button>
                    <button type="submit" className={action === 'Sign-up' ? 'submit gray' : 'submit'} onClick={() => setAction('Login')}>
                     Login
                    </button>
                 </div>
                
             {action === "Sign-Up" ? <div></div> : <div className="forgot-password">Forgot Password?<span>click Here!</span></div>}
               
                
            </form>
        </div>
    )
}

export default LoginSignup