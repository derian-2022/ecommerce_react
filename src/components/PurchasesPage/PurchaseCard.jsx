import React from 'react'
import './styles/purchaseCard.css'

const PurchaseCard = ({ purchase }) => {
  return (
    <article className='purchase'>
        <header className='purchaseItem__header'>
            <img className='purchaseItem__img' src={purchase.product.images[2].url} alt="" />
        </header>
        <h3 className='purchaseItem__title'>{purchase.product.title}</h3>
        <div className='purchaseItem__quantity'>{purchase.quantity}</div>
        <div className='purchaseItem__price'>{purchase.product.price}/each</div>
    </article>
  )
}

export default PurchaseCard