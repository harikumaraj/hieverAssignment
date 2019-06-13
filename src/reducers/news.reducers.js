import {FETCH_NEWS_LIST, SET_NEWS_DETAILS} from "../actions/action-types";
import {SUCCESS, LOADING, FAILURE} from "../utils"

const initialState = {
    loading: false,
    newsList: [],
    newsDetails: {},
    error: null,
    totalCount: 0
};

export default (state = initialState, action) => {

    switch (action.type) {
    case LOADING(FETCH_NEWS_LIST):
        return {
            ...state,
            loading: true,
            totalCount: 0
        };
    case SUCCESS(FETCH_NEWS_LIST):
        return {
            ...state,
            newsList: action.payload,
            loading: false,
            error: null,
            totalCount: action.totalCount
        };
    case FAILURE(FETCH_NEWS_LIST):
    return {
        ...state,
        loading: false,
        error: action.error,
        loading: true,
        totalCount: 0
    };
    case SET_NEWS_DETAILS:
        return {
            ...state,
            newsDetails: action.payload
        };

    default:
        return state;
    }
};
