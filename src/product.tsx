import React from 'react'
import './product.css'

function Product(props: { product: any }) {
  const { product } = props

  return (
    <li className='product'>
      <h3>{product.name}</h3>
      <p className='product-details'>
        Prix : <span className='product-price'>{product.price} €</span>
      </p>
    </li>
  )
}

export default Product
