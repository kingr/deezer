import { combineReducers } from "redux";
import search from "./search";
import artist from "./artist";

export default combineReducers({
  search,
  artist,
});
