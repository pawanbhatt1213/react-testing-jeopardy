import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import rootReducer from './reducers/index'
import Category from "./Category";
import CategoryDetail from "./CategoryDetail";


const store = createStore(rootReducer);
store.subscribe(()=> console.log(store.getState()));

function App() {


  return (
    <>
      <Provider store={store}>
        <Router>
          <Route path="/" exact component={Category} />
          <Route path="/categoryDetails" exact component={CategoryDetail} />
        </Router>
      </Provider>
    </>
  );
}

export default App;
