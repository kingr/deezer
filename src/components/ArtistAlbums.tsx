import React from "react";

type ArtistAlbumType = {
  data: [];
};

const ArtistAlbum = ({ data }: ArtistAlbumType) => {
  return (
    <div className="albums">
      {data.map(({ title, cover_medium }, idx: number) => {
        return (
          <div className="album" key={idx}>
            <p>{title}</p>
            <img src={cover_medium} alt={title} />
          </div>
        );
      })}
    </div>
  );
};

export default ArtistAlbum;
