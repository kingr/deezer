import Immutable from "seamless-immutable";
import { SET_ARTIST_LOADING, SET_ARTIST_RESULTS } from "../actions/artist";

export const INITIAL_STATE = Immutable({
  isArtistLoading: false,
  details: { name: "", nb_fan: "", tracks: [], albums: [], picture_xl: "" },
  isDataLoaded: false,
});

export default function user(state: any = INITIAL_STATE, action: any) {
  if (typeof state === "undefined") {
    return INITIAL_STATE;
  }

  switch (action.type) {
    case SET_ARTIST_LOADING:
      return {
        ...state,
        isArtistLoading: action.payload,
        isDataLoaded: false,
      };
    case SET_ARTIST_RESULTS:
      return {
        ...state,
        isArtistLoading: action.payload.loading,
        details: action.payload.results,
        isDataLoaded: true,
      };

    default:
      return state;
  }
}
