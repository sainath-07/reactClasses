import { combineReducers } from "redux";
import { profileReducer } from "./reducer";
import { reducerFunction } from "../../May27/Redux/reducer";
import { productsReducer } from "../Products/Productsreducer";

export const singleReducer=combineReducers({
    books : reducerFunction,
    profile : profileReducer,
    products : productsReducer,
})