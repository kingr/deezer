import React from "react";
import { useSelector } from "react-redux";
import SearchBar from "../components/SearchBar";
import SearchResult from "../components/SearchResult";

const SearchPage = () => {
  const store: any = useSelector((store: any) => store.search);
  const { results } = store;
  return (
    <div className="search-page">
      <SearchBar />
      {results.length === 0 ? (
        <div className="search-deezer">
          <h2>Search Deezer!</h2>
        </div>
      ) : (
        <div className="search-results-wrapper">
          {results.map((data: any) => {
            return <SearchResult key={data.id} data={data} />;
          })}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
