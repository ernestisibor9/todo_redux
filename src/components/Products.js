import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import data from './data'
import Product from './Product';

function Products() {
    const[movie, setMovie] = useState(data)
    const myMovie = useSelector(store=>store)
    console.log(movie);
    
  return (
    <div className='container'>
        <div className='row'>
            <h1>Number of movie {myMovie.cart.length}</h1>
            {
                movie.map((item)=>{
                    return(
                        <div className='col-md-4 col-sm-6'>
                            <Product item = {item}/>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Products