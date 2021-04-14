const fetch = require("node-fetch");
const baseUrl = "https://api.deezer.com";

exports.getArtistDetails = function (req, res, next) {
  try {
    const { id, artistName } = req.params;

    if (id) {
      async function reqArtistDetails() {
        const topTracks = await fetch(`${baseUrl}/artist/${id}/top?limit=5`);
        const allAlbums = await fetch(
          `${baseUrl}/search/album?q=${artistName}`
        );
        const artist = await fetch(`${baseUrl}/artist/${id}`);

        if (!topTracks.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        if (!artist.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        if (!allAlbums.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const { data: tracks } = await topTracks.json();
        const { data: albums } = await allAlbums.json();

        const { name, picture_xl, nb_fan } = await artist.json();

        return { name, picture_xl, nb_fan, tracks, albums };
      }

      reqArtistDetails()
        .then((response) => {
          return res.send(response);
        })
        .catch((e) => {
          return res
            .status(400)
            .send(
              `failed to get artist search results from: ${baseUrl}/search`
            );
        });
    } else {
      return res.status(400).send("id parameter missing");
    }
  } catch (e) {
    return res.status(400).send("failed to get artists");
  }
};
