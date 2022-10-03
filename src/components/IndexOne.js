import React from 'react'
import { useSelector } from 'react-redux'

function IndexOne() {
    
    const myCount = useSelector(store=>store)

  return (
    <div>
        <h1>The number of data is {myCount.count} </h1>
    </div>
  )
}

export default IndexOne

