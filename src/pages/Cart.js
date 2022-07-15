import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const Cart = () => {

  const state = useSelector((state) => state.addItem)
  const dispatch = useDispatch()

  const cartItems = (cartItem) => {
    return (
      <div className='px-4 my-5 bg-light rounded-3' key={cartItem.id}>
        <div className="container py-4">
          <button className="btn-close float-end" aria-label="Close" ></button>
          <div className="row justify-content center">
              <div className="col-md-4">
                <img src={cartItem.img} alt={cartItem.title} />
              </div>
              <div className="col-md-4">
                <h3>{cartItem.title}</h3>
              </div>
            </div>
        </div>
      </div>
    );
  }


  return (
    <>
      {state.length !== 0 && state.map(cartItems)}
    </>
  )
}

export default Cart;