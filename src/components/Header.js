import React from 'react'
import logo from '../Images/amazon-logo.png'
import './Header.css'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider';


function Header() {
    const [{basket}] = useStateValue();
    
    return (
        <>
            <div className='header'>
            <Link className='cartLink' to="/">
                <img className="amazonLogo" src={logo} alt="Amazon Logo" />
            </Link>

                <div className='address' style={{ alignItems: "center" }}>
                    <i class="fa-solid fa-location-dot" style={{ color: "#ffffff", margin: "auto", marginRight: "5px", }}></i>
                    <div>
                        <p>Hello</p>
                        <p><b>Select your address</b></p>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="btn  btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        All
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="/">Beauty</a></li>
                        <li><a class="dropdown-item" href="/">Baby</a></li>
                        <li><a class="dropdown-item" href="/">Books</a></li>
                        <li><a class="dropdown-item" href="/">Electronics</a></li>
                        <li><a class="dropdown-item" href="/">Furniture</a></li>
                        <li><a class="dropdown-item" href="/">Gift Card</a></li>
                        <li><a class="dropdown-item" href="/">Alexa </a></li>
                    </ul>
                </div>
                <div class="input-group mb-3 ">
                    <input type="text" class="form-control searchBar" placeholder="search Amazon.in" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button class="btn btn-outline-secondary" style={{ backgroundColor: "#FEBD69", border: "0px" }} type="button" id="button-addon2"><i class="fa-solid fa-magnifying-glass fa-xl"></i></button>
                </div>

                <div className="menu">
                    {/* <div>
                        <p>Hello, sign in</p>
                        <p><b>Account & Lists</b></p>
                    </div> */}

                    <span class="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Disabled popover">
                        <p>Hello, sign in</p>
                        <p><b>Account & Lists</b></p>
                    </span>

                    <div>
                        <p>Returns</p>
                        <p><b>& Orders</b></p>
                    </div>

                        <Link className='cartLink' to="/cart">
                    <div style={{ display: "flex" }}>
                            <i class="fa-solid fa-cart-shopping fa-bounce fa-xl" style={{ position: "relative", top: "15px" }}></i>
                            <div style={{ marginLeft: "10px" }}>
                                <h6 style={{ marginBottom: "0px" }}>Cart</h6>
                                <p style={{ marginBottom: "0px" }}>{basket?.length} Items</p>
                            </div>
                    </div>
                        </Link>

                </div>

            </div>
        </>
    )
}

export default Header