import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import './LoginPage.css'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'


function LoginPage() {
const navigate = useNavigate();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const signIn = async(e) =>{
    e.preventDefault();
    try {
        await signInWithEmailAndPassword(auth, email,password)
        if(auth)
        {
            console.log(auth)
            navigate('/');
        }
    } catch (error) {
        console.log(error)
    }   
}

const register = async (e) => {
    e.preventDefault();

    try {
        await createUserWithEmailAndPassword(auth, email, password)
        if(auth){
            console.log(auth)
            navigate('/');
        }
        
    } catch (error) {
        console.log(error);
    }

}

    return (
        <div className='login'>
            <div className='amazon'>
                <Link to='/'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png' alt="" />
                </Link>
            </div>
            <div className='signUpForm'>
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                    <button type='submit' onClick={signIn}>Sign In</button>
                </form>
                <p><small>By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice & our Cookies Notice and our Interest-Based Ads Notice.</small></p>

                <button onClick={register}> Create your Amazon account</button>
            </div>
        </div>
    )
}

export default LoginPage