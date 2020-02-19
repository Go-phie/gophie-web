import React, { Component } from "react";
import "../css/movie.css";

export default class Movie extends Component {
  render() {
    let link = this.props.to["Scheme"] + "://" + this.props.to["Host"] + this.props.to["Path"] + "?" + this.props.to["RawQuery"]
    console.log(link)
    return (
      <div className="movie">
        <div className="movie-image">
          <img src={this.props.image} alt="" />
        </div>{" "}
        <div className="about">
          <p className="name"> {this.props.name} </p>{" "}
          <p className="by"> Size: {this.props.size} </p>{" "}
          <a target="_blank" rel="noopener noreferrer" href={link}>
            {" "}
            Download this movie{" "}
          </a>{" "}
        </div>{" "}
      </div>
    );
  }
}
