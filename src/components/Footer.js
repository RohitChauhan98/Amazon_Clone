import React from 'react'
import './Footer.css'
import logo from '../Images/amazon-logo.png'

function Footer() {
  return (
    <div>
        <div className='backtoTop'>
            <b>Back to top</b>
        </div>
        <div className='footerOpt'>
            <div className="element">
                <h6>Get to Know Us</h6>
                <p>About Us</p>
                <p>Careers</p>
                <p>Press Releases</p>
                <p>Amazon Science</p>
            </div>
            <div className="element">
                <h6>Connect with Us</h6>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
            </div>
            <div className="element">
                <h6>Make Money with Us</h6>
                <p>Sell on Amazon</p>
                <p>Sell under Amazon Accelarator</p>
                <p>Protect and Build Your Brand</p>
                <p>Amazon Global Selling</p>
                <p>Become an Affiliate</p>
                <p>Fulfilment by Amazon</p>
            </div>
            <div className="element">
                <h6>Let Us Help You</h6>
                <p>COVID-19 and Amazon</p>
                <p>Your Account</p>
                <p>Returns Centre</p>
                <p>100% Purchase Protection</p>
                <p>Amazon App Download</p>
                <p>Help</p>
            </div>
        </div>
        <hr style={{margin: "0px", color:"rgb(145, 147, 148)"}}/>
        <div className="opt2"> 
            <div class="footerBtn">
                <img className="amazonLogo" src={logo} alt="..."/>

            </div>
            <div class="Terms">
                <p>Conditions of Use & Sale</p>
                <p>Privacy Notice</p>
                <p>Interest-Based Ads</p>
            </div>
            <p>© 1996-2023,Amazon.com,Inc. or its affiliates</p>

        </div>
    </div>
  )
}

export default Footer