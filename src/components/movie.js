import React, { Component } from "react";
import "../css/movie.css";
import { DownloadIcon } from "./icons";

export default class Movie extends Component {
  render() {
    const {CoverPhotoLink, Description, DownloadLink, Index, IsSeries, SDownloadLink, Size, Title, UploadDate, Year} = this.props.data;
    return (
      <div className="movie">
        <div className="movie-image">
          <img src={CoverPhotoLink} alt="" />
          <a className="download-btn" target="_blank" rel="noopener noreferrer" href={DownloadLink.Scheme + '://' + DownloadLink.Host + DownloadLink.Path + '?' + DownloadLink.RawQuery}>
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
