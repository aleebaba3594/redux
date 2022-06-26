import rootReducer from "..//reducer/RootReducer";
import { createStore } from "redux";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

// TODO: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// this is just a code to see state changing in chrome browser with the help of redux dev tools ,everything is mentioned on github redux dev tools documentation page.
