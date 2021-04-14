import Immutable from "seamless-immutable";

import { SET_SEARCH_LOADING, SET_SEARCH_RESULTS } from "../actions/search";

export const INITIAL_STATE = Immutable({
  isSearchLoading: false,
  results: [],
});

export default function user(state: any = INITIAL_STATE, action: any) {
  if (typeof state === "undefined") {
    return INITIAL_STATE;
  }

  switch (action.type) {
    case SET_SEARCH_LOADING:
      return {
        ...state,
        isSearchLoading: action.payload,
      };
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        isSearchLoading: action.payload.loading,
        results: action.payload.results,
      };

    default:
      return state;
  }
}
