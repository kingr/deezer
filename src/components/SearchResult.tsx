import React from "react";
import { Link } from "react-router-dom";
import numeral from "numeral";
export type SearchResultType = {
  data: {
    id: number;
    nb_fan: number;
    name: string;
    picture_xl: string;
  };
};

const SearchResult = ({
  data: { id, nb_fan, name, picture_xl },
}: SearchResultType) => {
  return (
    <div className="search-result">
      <Link to={`/${id}/${name}`}>
        <img src={picture_xl} alt={name} />
        <p className="artist">{name}</p>
        <p className="fans">Fans: {numeral(nb_fan).format("0 a")}</p>
      </Link>
    </div>
  );
};

export default SearchResult;
