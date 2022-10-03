import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

import Task from "./pages/Task";
import rootReducer from "./reducers/rootReducer";
import DisplayTask from "./pages/DisplayTask";
import "./components/style2.css";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { PersistGate } from "redux-persist/integration/react";

function App5() {
  const persistConfig = {
    key: "root",
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  //   const store = createStore(rootReducer);
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Task />
          <DisplayTask />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App5;
