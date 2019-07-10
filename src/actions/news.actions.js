import fetchApi from "../api";
import {FETCH_NEWS_LIST, SET_NEWS_DETAILS} from "./action-types";
import {SUCCESS, FAILURE, LOADING} from "../utils/index";

export const getNewsListAction = (searchString = "") => (dispatch) => {
    console.log(searchString);
    dispatch({type: LOADING(FETCH_NEWS_LIST)});
    // hardcoded "bitcoin" if no search string available
    let url = `everything?q=${searchString.length > 0 ? searchString : "bitcoin"}&from=2019-06-10&sortBy=publishedAt&apiKey=9b64bcfe576047ba8e5bb7fd24c9e526`;

    return fetchApi(url, "GET").then((response) => {
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
