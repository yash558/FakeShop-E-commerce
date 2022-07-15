import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector'
// import Login from './Login'

const Navbar = () => {
    const state = useSelector((state) => state.handleCart)
    return (
        <nav className="navbar navbar-expand-lg bg-light py-2 shadow-sm fixed-top">
            <div className="container-fluid">                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav  mb-2 mb-lg-0">
                        <li className="nav-item">
                       <Link className="nav-link active" aria-current="page" to="FakeShop-E-commerce">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <Link className="navbar-brand mx-auto fw-bold fs-2" to="FakeShop-E-commerce">Fake<span>Shop</span></Link>
                    <div className="buttons px-4">
                        {/* <Login/> */}

                        <button className="btn btn-outline-dark ms-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <i className="fa fa-sign-in me-1"></i> Login
                        </button>
                        <Link to="/signup" className="btn btn-outline-dark ms-2">
                            <i className="fa fa-user-plus me-1"></i> Sign Up
                        </Link>
                        <Link to="cart" className="btn btn-outline-dark ms-2">
                            <i className="fa fa-shopping-cart me-1"></i> Cart ({state.length})
                        </Link>
                    </div>
                </div>
            </div>
        </nav>



    )
}

export default Navbar