import { combineReducers } from "redux";
import latestNewReducer from "./latestnew";
import highlightReducer from "./highlight";
import SearchReducer from "./search";
import listSearchReducer from "./listsearch";
import categoryReducer from "./category";
import listFilterReducer from "./listfilter";
import detailHomeReducer from "./detailhome";

const rootReducer = combineReducers({
    search: SearchReducer,
    latestnew: latestNewReducer,
    highlight: highlightReducer,
    listsearch: listSearchReducer,
    category: categoryReducer,
    listfilter: listFilterReducer,
    detailhome: detailHomeReducer,
});

export default rootReducer;