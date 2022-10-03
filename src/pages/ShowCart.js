import React from 'react'
import { useSelector } from 'react-redux'

function ShowCart() {
    const productsObj = useSelector(store=>store)
    const cartList = productsObj.products;
    console.log(cartList);
    
  return (
    <div className="container">
        <h1>{productsObj.products.length}</h1>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <table class="table table-responsive  table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Photo</th>
                <th scope="col">Movie Title</th>
                <th scope="col">Category</th>
                <th scope="col">Action</th>
              </tr>
              
            </thead>

            {cartList.map((cart, i) => {
                
              return (
                <tbody>
                  <tr>
                    <th scope="row">
                        {i + 1}
                    </th>
                    <td><img src= {cart.photo} alt="" width={100} height={100}/></td>
                    <td>{cart.movie_title}</td>
                    <td>{cart.category}</td>
                    {/* <td>
                      <button onClick={()=>dispatch({type: "DELETE_CART", payload: cart})} className="btn btn-danger">Delete</button>
                    </td> */}
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  )
}

export default ShowCart