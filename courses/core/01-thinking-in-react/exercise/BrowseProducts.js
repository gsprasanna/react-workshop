import React from 'react'
// import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa'
// import Heading from 'YesterTech/Heading'

const products = [
  {
    id: 1,
    name: 'Mario Kart',
    rating: 5,
    brand: 'Nintendo',
    condition: 'new',
  },
  {
    id: 2,
    name: 'Donkey Kong',
    rating: 3.5,
    brand: 'Nintendo',
    condition: 'good',
  },
  {
    id: 3,
    name: 'Nintendo NES',
    rating: 4,
    brand: 'Nintendo',
    condition: 'fair',
  },
]

export default function BrowseProducts() {
  console.log(products)

  return (
    <div>
      {products.map((product, index) => {
        return (
          <div key={index}>
            <h1>Product Name</h1>
            <div>Brand</div>
            <div>rating</div>
          </div>
        )
      })}
    </div>
  )
}
