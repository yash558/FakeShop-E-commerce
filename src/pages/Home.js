import React from 'react'
import bg from '../assets/bg5.png'
import Product from './Product'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className="home">
      <div className="card1 bg-dark text-white border-0 my-2">
        <img src={bg} className="card-img" alt="Background" height="600px" width="100px" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <p style={{color:"black"}} className="mx-2 mb-0 fs-5">Latest Season Collection's is Out </p>
            <h5 className="card-title display-3 fw-bolder mb-0">Get Upto to 30% <br /> <span>Off</span> Arrivals</h5>
            <Link to="products" className='btn btn-danger mx-1 px-4 my-4'>Buy Now</Link>
          </div>
        </div>
      </div>
      <Product />
    </div>
  )
}

export default Home