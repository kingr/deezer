import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import BarChartIcon from "@material-ui/icons/BarChart";
import CircularProgress from "@material-ui/core/CircularProgress";
import { fetchSearch } from "../store/actions/search";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const store = useSelector((store: any) => store.search);
  const { isSearchLoading } = store;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(fetchSearch(searchText));
    // dispatch({
    //   type: "INIT_RECOMM_CANCEL",
    //   payload: { id: "", isOpen: false },
    // })
  };

  return (
    <div className="search-bar">
      <BarChartIcon style={{ color: "white", marginRight: "15px" }} />
      <div className="search-form">
        <form onSubmit={handleSubmit}>
          <TextField
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchText(e.target.value)
            }
            id="input-with-icon-textfield"
            variant="filled"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon htmlColor="white" />
                </InputAdornment>
              ),
            }}
          />
          {isSearchLoading ? <CircularProgress color="secondary" /> : null}
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
