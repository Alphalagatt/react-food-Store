import { combineReducers } from "redux";
import ProductReducer from "./ProductReducer";
import UserRegReducer from "./UserRegReducer";

export const AllReducers = combineReducers({
    products:ProductReducer,
    users:UserRegReducer,
})