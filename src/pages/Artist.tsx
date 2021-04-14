import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchArtist } from "../store/actions/artist";
import CircularProgress from "@material-ui/core/CircularProgress";
import SearchBar from "../components/SearchBar";
import ArtistHero from "../components/ArtistHero";
import ArtistTracks from "../components/ArtistTracks";
import ArtistAlbums from "../components/ArtistAlbums";

const ArtistPage = () => {
  const dispatch = useDispatch();
  const { id, artist } = useParams();
  const store: any = useSelector((store: any) => store.artist);
  const {
    isArtistLoading,
    isDataLoaded,
    details: { name, nb_fan, tracks, albums, picture_xl },
  } = store;

  useEffect(() => {
    dispatch(fetchArtist({ id, artist }));
  }, []);

  return (
    <>
      <SearchBar />
      {isArtistLoading ? <CircularProgress /> : null}

      {isDataLoaded && (
        <div className="artist-details">
          <div className="top">
            <ArtistHero data={{ name, nb_fan, picture_xl }} />
            <ArtistTracks data={tracks} />
          </div>

          <ArtistAlbums data={albums} />
        </div>
      )}
    </>
  );
};

export default ArtistPage;
