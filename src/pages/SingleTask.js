import React, { useState } from "react";
import { useDispatch } from "react-redux";

function SingleTask({ item, i }) {
  const [show, setShow] = useState("none");
  const [newTask, setNewtask] = useState('')

  const dispatch = useDispatch();

  const deleteCourse = (item) => {
    if (window.confirm("Are you sure you want to delete course?")) {
      dispatch({ type: "DELETE_COURSE", payload: item });
    }
  };

  const editCourse = ()=>{
    setShow('block')
  }

  const finalEdit = ()=>{
    dispatch({type: "EDIT_COURSE", payload: {oldtask: item, newtask: newTask}})
    setShow('none')
  }


  return (
    <div className="">
      {/* <div className='col-md-6'>
            {item}
        </div>
        <div className='col-md-3'>
            <button className='col-md-2 btn btn-primary'>Edit</button>
        </div>
        <div className='col-md-3'>
            <button className='col-md-2 btn btn-danger'>Delete</button>
        </div> */}
      <table className="table">
        <tbody>
          <tr>
            <th scope="row" className="col-md-1">
              {i + 1}
            </th>
            <td className="col-md-5">{item}</td>
            <td>
              <button onClick={()=>editCourse(item)} className="col-md-4 btn btn-primary">Edit</button>
            </td>
            <td>
              <button
                className="col-md-4 btn btn-danger"
                onClick={() => deleteCourse(item)}
              >
                Delete
              </button>
            </td>
          </tr>
          <tr style={{display: show}}>
            <td>
              <input type="text" placeholder="Edit course" value={newTask} onChange = {(e)=>setNewtask(e.target.value)} />
              <button onClick={()=>finalEdit(item)} className="btn btn-success">Final Edit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SingleTask;
