import React from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import View from "./pages/View";
import Navbar from "./inc/Navbar";
import "./components/style.css";

import { createStore } from "redux";
import { Provider } from "react-redux";
import shoppingCartReducer from "./reducers/shoppingCartReducer";
import ShowCart from "./pages/ShowCart";
import Task from "./pages/Task";

function App4() {
  const store = createStore(shoppingCartReducer);

  return (
    <BrowserRouter>
      <div>
        <Provider store={store}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="view" element={<View />} />
            <Route path="show" element={<ShowCart />} />
            <Route path="task" element={<Task />} />
          </Routes>
        </Provider>
      </div>
    </BrowserRouter>
  );
}

export default App4;
