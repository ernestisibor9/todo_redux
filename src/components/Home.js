import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const countObj = useSelector((store) => store);
  const dispatch = useDispatch()

  // Create a function to increaseNum
  function increaseNum() {
    dispatch({type: "ADD"})
  }

  // Create a function to decreaseNum
  function decreaseNum() {
    dispatch({type: "MINUS"})
  }

  return (
    <div>
      <h1 style={{ fontSize: "5rem", textAlign: "center", marginTop: "20px" }}>
        {" "}
        {countObj.count}
      </h1>
      <div className="d-flex justify-content-center mt-4">
        <button className="btn btn-primary" onClick={increaseNum}>
          Increase
        </button>
        <button className="btn btn-danger" onClick={decreaseNum}>
          Decrease
        </button>
      </div>
    </div>
  );
}

export default Home;
