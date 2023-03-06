import React from 'react'
import { useNavigate } from 'react-router-dom'
import './shared/styles/cardProduct.css'
import axios from 'axios'
import config from '../../utils/getConfig'
import { useDispatch } from 'react-redux'
import { getCartThunk } from '../../store/slices/cart.slice'

const CardProduct = ({ product }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClick = () => {
        navigate(`/product/${product.id}`)
    }

    const handleBtnClick = e => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart'

        const data = {
            quantity: 1,
            productId: product.id
        }

        axios.post(url, data, config)
            .then(res => {
                console.log(res.data)
                dispatch(getCartThunk())
            })    
            .catch(err => {
                console.log(err.response)
                if(err.response.data.error = 'Product already added to cart') {
                  
                }
            })
        e.stopPropagation()
    }

  return (
    <article className='product' onClick={handleClick}>
        <header className='product__header'>
            <img className='product__img' src={product.images[0].url} alt class="over" crossOrigin='anonymous'/>
        </header>
        <section className='product__body'>
            <header className='product__titles'>
                <h3 className='product__brand'>{product.brand}</h3>
                <h2 className='product__name'>{product.title}</h2>
            </header> 
            <div className='product__price'>
                <div className='product__price-label'>Price</div>
                <div className='product__price-number'>{product.price}</div>
            </div> 
            <button onClick={handleBtnClick} className='product__btn'>
                <i className='bx bx-cart product__cart'></i> 
            </button> 
        </section>
    </article>
  )
}

export default CardProduct