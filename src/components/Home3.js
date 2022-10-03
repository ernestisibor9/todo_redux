import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Home3() {
    const[task, setTask] = useState('')

// useSelector
const tasksObj = useSelector(store=>store)
const dispatch = useDispatch()

// Create addCart
function addCart(){
    dispatch({type: "ADD_ITEM", payload: task})
}

  return (
    <div>
        <h1>The number of items in the cart = {tasksObj.tasks.length}</h1>

        <input type='text' value={task} onChange={(e)=>setTask(e.target.value)} placeholder='Enter task'/>
        <button className='btn btn-success' onClick={addCart}>Add to cart</button>
    </div>
  )
}

export default Home3