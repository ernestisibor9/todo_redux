import React from 'react'
import { useSelector } from 'react-redux'
import SingleTask from './SingleTask'

function DisplayTask() {
    const courseObj = useSelector(store=>store.taskReducer)
  return (
    <div className='container mt-5'>
        <div className='row justify-content-center'>
        {
            courseObj.course.map((item, i)=>{
                return (
                    <div className='col-md-10 bg-white pt-4'>
                        <SingleTask item = {item} i = {i}/>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default DisplayTask