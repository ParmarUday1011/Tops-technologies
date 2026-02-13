// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../Redux/counterSlice";

// export const store = configureStore({
//     reducer: {
//      counter: counterReducer,
//     },
// })

import { createStore } from "redux";
import counterReducer from "../Redux/counterReducer";

const store = createStore(counterReducer);

export default store;
