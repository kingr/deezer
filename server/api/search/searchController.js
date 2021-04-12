const fetch = require("node-fetch");
const baseUrl = "https://api.deezer.com";

exports.getArtists = function (req, res, next) {
  try {
    const { q } = req.query;
    if (q) {
      fetch(`${baseUrl}/search?q=artist:"${q}"`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((json) => {
          let idRef = [];
          const artists = json.data.reduce((acc, curr) => {
            const {
              artist: { id, name, picture_xl },
            } = curr;
            if (!idRef.includes(id)) {
              acc.push({ id, name, picture_xl });
              idRef.push(id);
            }
            return acc;
          }, []);

          req.artists = artists;
          next();
        })
        .catch((e) => {
          console.log(
            "There has been a problem with your fetch operation: " + e.message
          );
          return res
            .status(400)
            .send(
              `failed to get artist search results from: ${baseUrl}/search`
            );
        });
    } else {
      return res.status(400).send("query parameter missing");
    }
  } catch (e) {
    console.log("failed to get artists", e);
    return res.status(400).send("failed to get artists");
  }
};

exports.getArtistFanCount = function (req, res) {
  try {
    async function getFanCount() {
      return await Promise.all(
        req.artists.map(async (curr) => {
          const response = await fetch(`${baseUrl}/artist/${curr.id}`);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const { nb_fan } = await response.json();
          return { ...curr, nb_fan };
        })
      );
    }
    getFanCount()
      .then((artists) => res.send(artists))
      .catch((e) => console.log(e));
  } catch (e) {
    console.log("failed to get get artist fan count", e);
    return res.status(400).send("failed to get artists");
  }
};
