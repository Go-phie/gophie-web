import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import { DownloadIcon } from "./icons";

function checkURL(url) {
  return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
}

export default class Movie extends Component {

  render() {
    const {
      CoverPhotoLink,
      DownloadLink,
      Size,
      Title,
      Source
    } = this.props.data;
    return (
      <div className="movie">
        <div className="movie-image">
          <Button variant="outline-dark" onClick={() => this.props.setDescriptionModal(this.props.data)}>
          <img src={checkURL(CoverPhotoLink)?CoverPhotoLink: "https://raw.githubusercontent.com/Go-phie/gophie-web/master/public/no-pic.png"} alt={Title} />
          </Button>
          <a className="download-btn" target="_blank" rel="noopener noreferrer" href={DownloadLink}>
            <DownloadIcon />
          </a>
        </div>
        <div className="movie__about">
          <h3 className="name"> {Title} </h3>

          <div className="movie__about-meta">
            <p className="movie-source"> {Source} </p>
            <p className="movie-size"> {Size} </p>
          </div>
        </div>
      </div>
    );
  }
}
