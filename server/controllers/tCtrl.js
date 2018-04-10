const axios = require("axios");
let favorites = [];
let ranQuote = [];
let title = "Orange Overlord";

module.exports = {
  getQuotes: (req, res) => {
    axios
      .get("https://api.whatdoestrumpthink.com/api/v1/quotes/random")
      .then(response => {
        ranQuote = response.data.message;
        res.status(200).send(ranQuote);
      })
      .catch(error => error);
  },
  getFavorites: (req, res) => {
    res.status(200).json(favorites);
  },

  addFavorite: (req, res) => {
    console.log(req.body);

    favorites.push(req.body.quote);
    res.status(200).json(favorites);
  },
  updateTitle: (req, res) => {
    title = req.params.id;
    res.status(200).json(title);
  },
  deleteFavorite: (req, res) => {
    console.log(req.params.id);

    favorites.splice(req.params.id, 1);
    res.status(200).json(favorites);
  }
};
