import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Home2() {
    const[firstName, setFirstname] = useState('')

    const firstNameObj = useSelector(store=>store)
    const dispatch = useDispatch()

    // Create a function called changeFirstname
    const changeFirstname = ()=>{
        dispatch({type: "CHANGE_FIRSTNAME", payload: firstName })
    }

  return (
    <div>
        <h1>My firstname is {firstNameObj.firstName}</h1>

        <input type='text' placeholder='Enter name' value={firstName} onChange = {(e)=>setFirstname(e.target.value)}/>
        <button className='btn btn-primary' onClick={changeFirstname }>Change</button>
    </div>
  )
}

export default Home2