import { call, put, takeEvery, takeLatest } from "@redux-saga/core/effects";
import * as searchActions from "../actions/search";
import * as artistActions from "../actions/artist";
import api from "../api";

const rootSaga = function* handleNewMessage() {
  yield takeEvery(searchActions.FETCH_RESULTS, function* ({ payload: q }: any) {
    try {
      yield put({ type: searchActions.SET_SEARCH_LOADING, payload: true });
      const results: [] = yield call(api.getSearchResults, q);
      yield put({
        type: searchActions.SET_SEARCH_RESULTS,
        payload: { results, loading: false },
      });
    } catch (e) {
      console.log("api failed", e);
    }
  });
  yield takeEvery(
    artistActions.FETCH_ARTIST,
    function* ({ payload: { id, artist } }: any) {
      try {
        yield put({ type: artistActions.SET_ARTIST_LOADING, payload: true });
        const results: {} = yield call(api.getArtist, id, artist);
        yield put({
          type: artistActions.SET_ARTIST_RESULTS,
          payload: { results, loading: false },
        });
      } catch (e) {
        console.log("api failed", e);
      }
    }
  );
};
export default rootSaga;
