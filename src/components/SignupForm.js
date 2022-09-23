import React, { useState } from 'react';
import './SignupForm.css';
import Fade from 'react-reveal/Fade';

function SignupForm() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  return (
    
    
    <div className="signup"> 
        <Fade>
        <div className="form-body">
        <div className="form-header">
        <h2>SIGN UP</h2>
        <p>Let's create your account!</p>
    </div>
    <div className="firstname">
        <input  
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        className="form__input" 
        type="text" id="firstName" 
        placeholder="First Name"
        required/>
    </div>
    <div className="lastname">
        <input 
        value={lastName}
        onChange={e => setLastName(e.target.value)} 
        type="text" 
        name="" 
        id="lastName"  
        className="form__input"
        placeholder="Last Name"
        required/>
    </div>
    <div className="email">
        <input  
        value={email}
        onChange={e => setEmail(e.target.value)}
        type="email" 
        id="email" 
        className="form__input" 
        placeholder="Email"
        required/>
    </div>
    <div className="password">
        <input 
         value={password}
         onChange={e => setPassword(e.target.value)}
        className="form__input" 
        type="password"  
        id="password" 
        placeholder="Password"
        required/>
    </div>
    <div class="footer">
            <button type="submit" className="form__btn">Register</button>
            </div>
        </div>
        </Fade>
        </div>
        
  )
}

export default SignupForm;