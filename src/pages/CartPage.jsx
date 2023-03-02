import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../components/CartPages/CartItem'
import './styles/cartPage.css'
import axios from 'axios'
import config from '../utils/getConfig'
import { getCartThunk } from '../store/slices/cart.slice'


const CartPage = () => {

  const [totalPrice, setTotalPrice] = useState(0)

  const { cart } = useSelector(state => state)

  useEffect(() => {
    const result = cart?.reduce((acc, cv) => acc + cv.quantity * Number(cv.product.price), 0)
    setTotalPrice( result )
  }, [cart])

  const dispatch = useDispatch()

  const handlePurchase = () => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
    axios.post(url, {},config)
      .then(res => {
        console.log(res.data)
        dispatch(getCartThunk())
      })
      .catch(err => console.log(err.response))
  }

  return (
    <div className='cartPage'>
      <div className='cartPage__container'>
        {
          cart?.map(prodInfo => (
            <CartItem 
            key={prodInfo.id}
            prodInfo={prodInfo}
            />
          ))
        }
      </div>
      <footer className='cartPage__footer'>
        <h2 className='cartPage__total'>
          <span className='cartPage__total-label'>Total: </span>
          <span><i className='bx bx-dollar'></i>{totalPrice}</span>
        </h2>
        <button onClick={handlePurchase} className='cart__btn'>
          Buy this cart
        </button>
      </footer>
    </div>
  )
}

export default CartPage