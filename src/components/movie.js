import React, { Component } from "react";
import { DownloadIcon } from "./icons";

function checkURL(url) {
  return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
}

export default class Movie extends Component {
  render() {
    const {CoverPhotoLink, DownloadLink, Size, Title} = this.props.data;
    return (
      <div className="movie">
        <div className="movie-image">
          <img src={checkURL(CoverPhotoLink)?CoverPhotoLink: "https://raw.githubusercontent.com/Go-phie/gophie-web/master/public/no-pic.png"} alt="Movie banner" />
          <a className="download-btn" target="_blank" rel="noopener noreferrer" href={DownloadLink}>
            <DownloadIcon />
          </a>
        </div>
        <div className="about">
          <p className="name"> {Title} </p>
          <p className="by"> Size: {Size} </p>
        </div>
      </div>
    );
  }
}
