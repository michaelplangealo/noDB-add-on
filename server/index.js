const express = require("express");
const { json } = require("body-parser");
const app = express();
const tCtrl = require("./controllers/tCtrl");
app.use(json());

//endpoints
app.get("/api/favorites/quotes", tCtrl.getQuotes);
app.get("/api/favorites", tCtrl.getFavorites);
app.post("/api/favorites/", tCtrl.addFavorite);
app.put("/api/favorites/:id", tCtrl.updateTitle);
app.delete("/api/favorites/:id", tCtrl.deleteFavorite);

// listening port
const port = 3002;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
