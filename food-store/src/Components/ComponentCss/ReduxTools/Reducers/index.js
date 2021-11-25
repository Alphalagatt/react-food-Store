import { combineReducers } from "redux"
import CounterReducer from "./counter"
import LoginReducer from "./login"

 const AllReducers = combineReducers({
    counter:CounterReducer,
    Login:LoginReducer
});

export default AllReducers;