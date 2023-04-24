import rootReducer from "./Reducers/reducers";
import { combineReducers, createStore } from "redux";

const Store = createStore(combineReducers({
    listdata:rootReducer,
}));
export default Store;