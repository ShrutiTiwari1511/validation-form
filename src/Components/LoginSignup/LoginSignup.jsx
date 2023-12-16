import React, { useState } from 'react'
import './LoginSignup.css'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import Validation from '../Loginvalidation';
const LoginSignup = () => {
    const [action, setAction] = useState("Sign-up");
    const [values,setValues]= useState({
        name:'',
        email:'',
        password:''
    })
    const [errors,setError]=useState({})
    const handleInput=(event)=>{
        setValues(prev=>({...prev, [event.target.name]:[event.target.value]}))
    }
    const handleSubmit =(event)=>{
      event.preventDefault();
      setError(Validation(values));
    }
   
    return (

        <div className='container'>
            <form action="" onSubmit={handleSubmit} >
                <div className="header">

                    <div className="text">{action}</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    {action === "Login" ? <div></div> : <div className="input">
                        <img src={user_icon} alt="" />
                        <input type="text" placeholder='Enter your name...'  onChange={handleInput} name="name"/>
                        {errors.name && <span className='text-red'>{errors.name}</span>}
                    </div>
                    }
                    <div className="input">
                        <img src={email_icon} alt="" />
                        <input type="email" placeholder='Enter your email....'onChange={handleInput} name="email" />
                        {errors.email && <span className='text-red'>{errors.email}</span>}
                    </div>
                    <div className="input">
                        <img src={password_icon} alt="" />
                        <input type="password" placeholder='Enter your password' onChange={handleInput} name="password"/>
                        {errors.password && <span className='text-red'>{errors.password}</span>}
                    </div>
                </div>
                {action === "Sign-Up" ? <div></div> : <div className="forgot-password">Forgot Password?<span>click Here!</span></div>}

                <div className="submit-container">
                    <button type="submit" className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign-Up") }}>Sign Up</button>
                    <button type="submit" className={action === "Sign-Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</button>
                </div>
            </form>
        </div>
    )
}

export default LoginSignup