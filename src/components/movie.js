/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from "react";
import axios from "axios";
import { DownloadIcon } from "./icons";
import { isImageURL, greekFromEnglish, API_ENDPOINTS } from "../utils";
import Rating from "material-ui-rating";
import "../css/Popup.css";

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ratings_api: API_ENDPOINTS.ocena,
      ratings: {},
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

  getAverage = () => {
    const { data } = this.props;
    axios
      .post(this.state.ratings_api + "/movie/ratings/average/", {
        name: data.Title,
        engine: data.Source,
      })
      .then((res) => {
        this.setState({
          ratings: res.data,
        });
      })
      .catch((err) => {
        if (err) {
          this.setState({
            error: true,
          });
        }
      });
  };

  componentDidMount(){
    this.getAverage();
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

        <div className="rating-summary">
          <div 
           className="gophie-modal-rating-container__average"
           data-tour="my-seventh-step">
             <Rating
               value={Math.round(
                 this.state.ratings.average_ratings
                   ? this.state.ratings.average_ratings
                   : 0
               )}
               max={5}
               readOnly={true}
             />
           </div>

           <div className="gophie-modal-rating-container__average--container__on-card">
               <div className="gophie-modal-rating-container__average--container-item-1">
                 <p>
                   {this.state.ratings.average_ratings
                     ? Math.round(
                         this.state.ratings.average_ratings * 10
                       ) / 10
                     : 0}
                 </p>
                 <p>/5</p>
               </div>

               <p className="em-rate">
                 <span className="em-span">by</span>

                 {this.state.ratings.by
                   ? Math.round(this.state.ratings.by)
                   : 0}
               </p>
             </div>
          </div>
        </div>
      </div>
    );
  }
}
