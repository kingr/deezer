export const SET_SEARCH_LOADING = "SET_SEARCH_LOADING";
export const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";
export const FETCH_RESULTS = "FETCH_RESULTS";

export const fetchSearch = (payload: {}) => ({
  type: FETCH_RESULTS,
  payload,
});
