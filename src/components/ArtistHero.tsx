import React from "react";
import { Link } from "react-router-dom";
import numeral from "numeral";

type ArtistHeroType = {
  data: {
    nb_fan: number;
    name: string;
    picture_xl: string;
  };
};

const ArtistHero = ({ data: { nb_fan, name, picture_xl } }: ArtistHeroType) => {
  return (
    <div className="artist-hero-wrapper">
      <img src={picture_xl} alt={name} />
      <div className="artist-hero">
        <p className="artist">{name}</p>
        <p className="fans">Fans: {numeral(nb_fan).format("0 a")}</p>
      </div>
    </div>
  );
};

export default ArtistHero;
