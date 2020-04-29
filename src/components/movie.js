import React, { Component } from "react";
import { DownloadIcon } from "./icons";
import { isImageURL, greekFromEnglish } from "../utils";

export default class Movie extends Component {
  render() {
    const {
      CoverPhotoLink,
      DownloadLink,
      Size,
      Title,
      Source,
    } = this.props.data;
    return (
      <div className="movie">
        <div className="movie-image">
          <img
            onClick={() => this.props.setDescriptionModal(this.props.data)}
            src={
              isImageURL(CoverPhotoLink)
                ? CoverPhotoLink
                : "https://raw.githubusercontent.com/Go-phie/gophie-web/master/public/no-pic.png"
            }
            alt={Title}
            data-tour="my-fourth-step"
            id="my-fourth-step"
          />
          <a
            className="download-btn"
            target="_blank"
            rel="noopener noreferrer"
            href={DownloadLink}
            data-tour="my-sixth-step"
          >
            <DownloadIcon />
          </a>
        </div>
        <div className="movie__about">
          <h3 className="name"> {Title} </h3>

          <div className="movie__about-meta">
            <p className="movie-source"> {greekFromEnglish(Source)} </p>
            <p className="movie-size"> {Size} </p>
          </div>
        </div>
      </div>
    );
  }
}
