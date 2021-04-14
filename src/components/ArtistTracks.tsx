import React from "react";

type ArtistTracksType = {
  data: [];
};

const ArtistTracks = ({ data }: ArtistTracksType) => {
  return (
    <div className="tracks">
      <p className="title">Top tracks:</p>
      <ul>
        {data.map(({ title, duration }, idx: number) => {
          return (
            <li key={title}>
              {`${idx + 1}`} {title} {Math.floor(duration / 60)}m
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ArtistTracks;
