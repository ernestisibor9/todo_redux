import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";



function Task() {
  const [course, setCourse] = useState('')

  const taskObj = useSelector((store) => store.taskReducer);
  const dispatch = useDispatch()

  const addCourse = ()=>{
    dispatch({type:"ADD_COURSE", payload: course})
  }

  return (
    <div className="container-fluid ">
      <div className="row justify-content-center">
      <h4 className="text-white">Total course = {taskObj.course.length}</h4>
        <div className="col-md-4 d-flex">
          <input
            type="text"
            placeholder="Enter course"
            className="form-control"
            value={course}
            onChange= {(e)=>setCourse(e.target.value)}
          />
          <button className="btn btn-primary" onClick={addCourse}>Add Course</button>
        </div>
      </div>
    </div>
  );
}

export default Task;
