import React from 'react'
import {createStore} from "redux"
import cartReducer from './reducers/cartReducer'
import {Provider} from "react-redux"
import Home from './components/Home'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import Home2 from './components/Home2'

function App2() {

// Create store
const store = createStore(cartReducer)

  return (
    <div>
        <Provider store={store}>
            <Home/>
            <Home2/>
        </Provider>
    </div>
  )
}

export default App2