import { combineReducers } from "redux";
import { profileReducer } from "./reducer";
import { reducerFunction } from "../../May27/Redux/reducer";

export const singleReducer=combineReducers({
    books : reducerFunction,
    profile : profileReducer,
})