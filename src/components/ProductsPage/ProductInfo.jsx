import React, { useState } from 'react'
import './styles/producInfo.css'
import axios from 'axios'
import config from '../../utils/getConfig'
import { getCartThunk } from '../../store/slices/cart.slice'
import { useDispatch } from 'react-redux'

const ProductInfo = ({ product }) => {

    const [counter, setCounter] = useState(1)

    const handleAdd = () => {
        setCounter(counter + 1)
    }

    const handleMinus = () => {
        if(counter - 1 >= 1) {
            setCounter(counter - 1)
        }  
    }

    const dispatch = useDispatch()

    const handleAddCart = () => {
        const url= 'https://e-commerce-api-v2.academlo.tech/api/v1/cart'

        const data = {
            quantity: counter,
            productId: product.id
        }

        axios.post(url, data, config)
        .then(res => {
            console.log(res.data) 
            dispatch(getCartThunk())
            setCounter(1)
        })   
        .catch(err => console.log(err.response))
    }

            //Vista de la izquierda del e-commerce
  return (
    <article className='prodInfo'>
        <h3 className='prodInfo__brand'>{product?.brand}</h3>
        <h2 className='prodInfo__name'>{product?.title}</h2>
        <p className='prodInfo__description'>{product?.description}</p>
        <footer className='prodInfo__footer'>

            <div className='flex'>
            <section className='prodInfo__price'>
                <h4 className='prodInfo__price-label'>Price</h4>
                <span className='prodInfo__price-number'>{product?.price}</span>
            </section>
            
            <section className='prodInfo__counter'>
                <h4 className='prodInfo__counter-label'>Quantity</h4>
                <div className='counter'>
                    <div className='counter__minus' onClick={handleMinus}>
                        -
                    </div>
                    <div className='counter__number'>{counter}</div>
                    <div className='counter__plus' onClick={handleAdd}>
                        +
                    </div>
                </div>
            </section>
            </div>
            <button onClick={handleAddCart} className='prodInfo__btn'>
                Add to Cart <i className='bx bx-cart'></i> 
            </button>
        </footer>
    </article>
  )
}

export default ProductInfo