import React, { Component } from "react";
import axios from "axios";
import "./FavList.css";
import swal from "sweetalert2";

class FavList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "WORDS OF WISDOM"
    };
    this.updateTitle = this.updateTitle.bind(this);
  }
  componentDidMount() {
    axios
      .get("/api/favorites")
      .then(response => this.setState({ favoritesList: response.data }))
      .catch(error => console.log(error));
  }
  updateTitle() {
    swal({
      text: "I HAVE THE BEST TITLES",
      input: "chyyna"
    }).then(result => {
      axios
        .put(`/api/favorites/${result.value}`)
        .then(
          response =>
            response.data !== "undefined"
              ? this.setState({ title: response.data })
              : this.setState({ title: this.state.title })
        )
        .catch(error => console.log(error));
    });
  }

  render() {
    let favorites = this.props.favoriteQuotes.map((quote, i) => (
      <div key={i} className="fav-item" onClick={() => this.props.delete(i)}>
        <p>{quote}</p>
      </div>
    ));

    return (
      <div className="favorites-listing">
        <div className="title" onClick={() => this.updateTitle()}>
          <div>{this.state.title}</div>
        </div>
        <div>{favorites}</div>
      </div>
    );
  }
}
export default FavList;
