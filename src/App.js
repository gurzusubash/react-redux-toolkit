import { Provider } from "react-redux";

import CakeComponent from "./components/cake-container/cake.component";
import store from "./redux/store";

import "./App.css";
import IceCreamComponent from "./components/ice-cream-container/icecream.component";
import Details from "./components/details/detail.component";

function App() {
  return (
    <Provider store={store}>
      <div className="main-container">
        <div className="menu">
          <CakeComponent />
        </div>
        <div className="menu">
          <IceCreamComponent />
        </div>
        <div className="details">
          <Details />
        </div>
      </div>
    </Provider>
  );
}

export default App;
