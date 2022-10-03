import React from 'react'
import { useDispatch } from 'react-redux'

function SingleMovie({item}) {
    const dispatch = useDispatch()

const addCart=()=>{
    dispatch({type: "ADD_PRODUCT"})
}


  return (
    <div className='shadow text-center'>
        <img src={item.photo} alt={item.movie_title} width= {300} height = {280} style={{paddingTop: '20px', paddingBottom: "20px"}}/>
        <h5>{item.movie_title}</h5>
        <button className='btn btn-primary mb-4' onClick={addCart}>ADD TO CART</button>
    </div>
  )
}

export default SingleMovie