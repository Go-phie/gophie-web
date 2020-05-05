/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from "react";
import axios from "axios";
import { DownloadIcon } from "./icons";
import { isImageURL, greekFromEnglish, API_ENDPOINTS } from "../utils";

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ratings_api: API_ENDPOINTS.ocena,
    };
  }


  // Add download to API to make it trackable
  addDownload = () => {
    axios
      .post(this.state.ratings_api + "/download/", {
        ip_address: this.props.ip_address,
        movie_name: this.props.data.Title,
        engine: this.props.data.Source,
        description: this.props.data.Description,
        size: this.props.data.Size,
        year: this.props.data.Year,
        download_link: this.props.data.DownloadLink,
        cover_photo_link: this.props.data.CoverPhotoLink,
      })
      .then(() => {
        console.log(`added ${this.props.data.Title} to downloads on ocena`)
      })
  }

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
            onKeyDown={() => this.props.setDescriptionModal(this.props.data)}
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
            onClick={() => this.addDownload()}
            data-tour="my-eight-step"
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
