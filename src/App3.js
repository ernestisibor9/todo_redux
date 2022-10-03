import React from 'react'
import {createStore} from "redux"
import itemReducer from './reducers/itemReducer'
import {Provider} from "react-redux"
import Home3 from './components/Home3'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"

function App3() {

    // Create a store
    const store = createStore(itemReducer)

  return (
    <div>
        <Provider store={store}>
            <Home3/>
        </Provider>
    </div>
  )
}

export default App3