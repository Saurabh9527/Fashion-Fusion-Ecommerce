
import React from 'react'
import { Link } from 'react-router-dom'

const ShowcaseProducts = ({ product }) => {
  return (
    <div>
      <Link to={`/product/${product._id}`}>
        <img src={product?.thumbnail} alt={product?.name} />
      </Link>
    </div>
  )
}

export default ShowcaseProducts
