import React, { ReactElement, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import SearchIcon from "@material-ui/icons/Search";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";

const SearchBar = () => {
  // const { loading, error, data } = useQuery(getUser);

  // if (loading) {
  //   return <RenderLoader />;
  // }

  return (
    <div className="search-bar">
      <MusicNoteIcon style={{ color: "white" }} />
      <div className="search-form">
        <FormControl>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
    </div>
  );
};

export default SearchBar;
