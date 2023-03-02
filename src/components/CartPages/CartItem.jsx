import axios from 'axios'
import React from 'react'
import config from '../../utils/getConfig'
import { getCartThunk } from '../../store/slices/cart.slice'
import { useDispatch } from 'react-redux'
import './styles/cartItem.css'

const CartItem = ({ prodInfo }) => {


  const dispatch = useDispatch()

  const handleDelete = () => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/cart/${prodInfo.id}`
    axios.delete(url, config)
    .then(res => {
      console.log(res.data)
      dispatch(getCartThunk())
    })
      
    .catch(err => console.log(err.response))
  }

  return (
    <article className='cart'>
      <header className='cart__header'>
        <img className='cart__img' src={prodInfo.product.images[0].url} alt="" />
      </header>
      <div className='cart__produc'>
        <h3 className='cart__brand'>{prodInfo.product.brand}</h3>
        <h2 className='cart__title'>{prodInfo.product.title}</h2>
        <ul>
          <li className='cart__value'>
            <span className='cart__unit-price'>Unit Price</span>
            <span className='cart__price'>{prodInfo.product.price}</span>
          </li>
          <li className='cart__quantity'>
            <span className='cart__quantity-title'>Quantity</span>
            <span className='cart__amount'>{prodInfo.quantity}</span>
          </li>
        </ul>
      </div>
      <button className='cart__btn' onClick={handleDelete}>
        <i className='bx bx-trash cart__trash'></i>
      </button>
    </article>
  )
}

export default CartItem