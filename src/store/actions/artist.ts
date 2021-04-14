export const SET_ARTIST_LOADING = "SET_ARTIST_LOADING";
export const SET_ARTIST_RESULTS = "SET_ARTIST_RESULTS";
export const FETCH_ARTIST = "FETCH_ARTIST";

export const fetchArtist = (payload: {}) => ({
  type: FETCH_ARTIST,
  payload,
});
