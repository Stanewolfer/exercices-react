import React from 'react'
import Product from './product'

function ProductList() {
  // Liste de produits
  const products = [
    { id: 1, name: 'Produit 1', price: 10.99 },
    { id: 2, name: 'Produit 2', price: 19.99 },
    { id: 3, name: 'Produit 3', price: 5.99 }
    // Ajoutez autant de produits que nécessaire
  ]

  return (
    <ul>
        {products.map(product => (
            <Product key={product.id} product={product} />
        ))}
    </ul>
  )
}

export default ProductList
