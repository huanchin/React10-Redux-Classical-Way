import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

// 4) Create redux store
// before using...npm i redux
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

// 8) add the thunk middleware
// before using...npm i redux-thunk
// 10) Redux DevTools
// before using...npm i redux-devtools-extension
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

// testing
// store.dispatch(deposite(500));
// console.log(store.getState());
// store.dispatch(withdraw(200));
// console.log(store.getState());
// store.dispatch(requestLoan(1000, "car"));
// console.log(store.getState());
// store.dispatch(payLoan());
// console.log(store.getState());
// store.dispatch(createCustomer("Jonas", 8787));
// console.log(store.getState());
// store.dispatch(updateName("Harry"));
// console.log(store.getState());
