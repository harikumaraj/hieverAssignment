import fetchApi from "../api";
import {FETCH_NEWS_LIST, SET_NEWS_DETAILS} from "./action-types";
import {SUCCESS, FAILURE, LOADING} from "../utils/index";

export const getNewsListAction = () => (dispatch) => {
    dispatch({type: LOADING(FETCH_NEWS_LIST)});
    return fetchApi("top-headlines?country=de&category=business&apiKey=9b64bcfe576047ba8e5bb7fd24c9e526", "GET").then((response) => {
        dispatch({
            type: SUCCESS(FETCH_NEWS_LIST),
            payload: response.articles,
            totalCount: response.totalResults
        });
    
    }).catch((error) => {
        dispatch({
            type: FAILURE(FETCH_NEWS_LIST),
            error
        });
        throw new Error(error);
    });
};

export const setNewsDetails = (payload) => (dispatch) => (
    dispatch({type: SET_NEWS_DETAILS, payload})
);
