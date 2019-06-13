import {combineReducers} from "redux";

import newsReducer from "./news.reducers";

const reducers = {
    news: newsReducer
};

const combineReducer = combineReducers(reducers);

export default combineReducer;
