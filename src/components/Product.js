import React from 'react'

function Product({item}) {
  return (
    <div>
        <img src={item.photo} alt={item.movie_title} width={300} height={270}/>
        <h5>{item.category}</h5>
        <h5>{item.movie_title}</h5>
    </div>
  )
}

export default Product