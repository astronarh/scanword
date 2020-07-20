import {combineReducers} from "redux";
import scanwordReducer from "./scanword";
import openReducer from "./open";

const rootReducer = combineReducers({
    scanwordState: scanwordReducer,
    openState: openReducer
})

export default rootReducer;
