import { createStore } from "redux";
import { Provider } from "react-redux";
import IndexOne from "./components/IndexOne";
import numberCount from "./reducers/numberCount";
import Products from "./components/Products";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"

function App() {
  const store = createStore(numberCount);
  return (
    <div>
      <Provider store={store}>
        <h1>Redux wok</h1>
        <IndexOne />
        <Products />
      </Provider>
    </div>
  );
}

export default App;
