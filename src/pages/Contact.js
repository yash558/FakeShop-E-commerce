import React from 'react'
import contact from '../assets/contact.jpg'

const Contact = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 mx-3 mt-5 p-5 text-center">
            <h1>Contact <span>Us</span></h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mt-0">
            <img src={contact} alt="Contact Us" height={450} width={600} />
          </div>
          <div className="col-md-6">
            <form action="">
              <div className="mb-3">
                <label for="exampleForm" className="form-label fw-bold">Your Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="yash sharma"/>
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label fw-bold">Email Address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="yashsharm06033@example.com"/>
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label fw-bold">Ask Your Doubt?</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="7"></textarea>
              </div>
              <button type="btn" className="btn btn-outline-danger px-4 text">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact