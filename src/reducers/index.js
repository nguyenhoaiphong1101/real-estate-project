import { combineReducers } from "redux";
import latestNewReducer from "./latestnew";
import highlightReducer from "./highlight";
import SearchReducer from "./search";

const rootReducer = combineReducers({
    search: SearchReducer,
    latestnew: latestNewReducer,
    highlight: highlightReducer,
});

export default rootReducer;