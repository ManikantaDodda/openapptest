// LoginForm.js
import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import "./loginform.css";
import logo from '../logo.svg';
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord } from 'react-icons/fa';
import { useNavigate } from 'react-router';

function LoginForm(props) {
    const navigate = useNavigate();
    // const [popupStyle, showPopup] = useState("hide");

    const onSuccess = res => {
        let tokenData = jwtDecode(res.credential);
        if (tokenData) {
            localStorage.setItem("is_login", true);
            localStorage.setItem("user_pic", tokenData.picture);
            navigate('/dashboard');
        }
    }

    const onFailure = e => {
        alert("User sign in Failed")
        console.log(e)
    }

    const popup = () => {
        // showPopup("login-popup")
        // setTimeout(() => showPopup("hide"), 3000)
        navigate('/dashboard');
    }

    return (
        <div className="cover">
            <div className='left-half'>
                <div className='logo'>
                    <img src={logo} alt="Logo" />
                    {/* <div class="ellipse"></div>
                     <div class="vector"></div> */}
                </div>
                <div className='title'>
                    <h1>BASE</h1>
                </div>
                <div className='social-icons'>
                    <FaGithub size={30} color='#fff' />
                    <FaTwitter size={30} color='#fff' />
                    <FaLinkedin size={30} color='#fff' />
                    <FaDiscord size={30} color='#fff' />
                </div>
            </div>
            <div className='right-half'>
                <div className='sign-in-content'>
                    <h1>Sign In</h1>
                    <h4>Sign in to your Account</h4>
                </div>
                <div className='auth-logins'>
                    <div className="google">
                        <GoogleOAuthProvider clientId="231632630070-cffl0j3as34e0465vmvl8ir2121eqmop.apps.googleusercontent.com">
                            <GoogleLogin
                                onSuccess={onSuccess}
                                onError={onFailure}
                            />
                        </GoogleOAuthProvider>
                    </div>
                    <div className="apple"> Sign In with Apple</div>
                </div>
                <div className='card'>
                    <form>
                        <div className='form-input'>
                            <label>Email</label>
                            <input type="email" placeholder="username" required />
                        </div>
                        <div className='form-input'>
                            <label>Password</label>
                            <input type="password" placeholder="password" required />
                            <a href='#'>Forgot Password?</a>
                        </div>
                        <button type='submit' className="login-btn" onClick={popup}>Login</button>
                    </form>
                </div>
                <div className='last-content'>Don't have an Account? <a href='#'>Register Now</a></div>
            </div>
        </div>
    );
}

export default LoginForm;
