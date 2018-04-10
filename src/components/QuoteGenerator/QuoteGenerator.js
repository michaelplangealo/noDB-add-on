import React, { Component } from "react";
import axios from "axios";
import FavButton from "../FavButton/FavButton";
import swal from "sweetalert2";
import "./QuoteGenerator.css";
import FavList from "../FavList/FavList";
import MoreQuotes from "../MoreQuotes/MoreQuotes";

class QuoteGenerator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: "",
      favoriteQuotes: []
    };
    this.newQuote = this.newQuote.bind(this);
    this.getFavorites = this.getFavorites.bind(this);
    this.addToFavorites = this.addToFavorites.bind(this);
    this.deleteFromList = this.deleteFromList.bind(this);
  }
  componentDidMount() {
    this.newQuote();
    this.getFavorites();
    console.log(this.state);
  }
  newQuote() {
    axios
      .get("/api/favorites/quotes")
      .then(response => {
        this.setState({ quote: response.data });
        // console.log(response.data);
      })
      .catch(() => this.newQuote);
  }
  getFavorites() {
    axios
      .get("/api/favorites")
      .then(response => this.setState({ favoriteQuotes: response.data }))
      .catch(error => console.log(error));
  }
  addToFavorites() {
    let { quote, favoriteQuotes } = this.state;

    axios
      .post("/api/favorites", { quote })
      .then(response => this.setState({ favoriteQuotes: response.data }));
    //  this.setState({ favoriteQuotes: response.data }));
  }
  deleteFromList(quote) {
    axios
      .delete(`/api/favorites/${quote}`)
      .then(response => this.setState({ favoriteQuotes: response.data }))
      .catch(error => console.log(error));
  }

  render() {
    const { quote, favoriteQuotes } = this.state;
    // console.log(favoriteQuotes);
    return (
      <div>
        <div>
          <header className="tippytop">
            <div className="white-space">
              <p> MAKE QUOTING GREAT AGAIN</p>
            </div>
          </header>
          <div className="quote-container">
            <div className="words-of-wisdom">{quote}</div>
          </div>
          <div className="buttons-console">
            <MoreQuotes newQuote={() => this.newQuote()} />
            <FavButton add={this.addToFavorites} />
          </div>
        </div>
        <div>
          <FavList
            favoriteQuotes={favoriteQuotes}
            delete={this.deleteFromList}
          />
        </div>
      </div>
    );
  }
}

export default QuoteGenerator;
