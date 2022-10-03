import React from 'react'
import { useSelector } from 'react-redux'

function View() {
  const productsObj = useSelector(store=>store)
  return (
    <div>
      <h1>Number of products = {productsObj.products.length} </h1>
    </div>
  )
}

export default View