/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from "react";
import axios from "axios";
import { API_ENDPOINTS, greekFromEnglish } from "../utils";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image } from "semantic-ui-react";
import { isMobile } from "react-device-detect";
import { NetworkIcon, DownloadIcon } from "./icons";
import CarouselSkeletonLoader from "./Loader/CarouselSkeletonLoader";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

class TrendingCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trending_api: API_ENDPOINTS.ocena,
      trending: [],
      error: false,
      currentmovie: { name: "" },
      isLoading: true,
    };
  }

  componentDidMount() {
    const options = {
      method: "post",
      url: `${this.state.trending_api}/download/highest/`,
      data: {
        filter_by: "weeks",
        filter_num: 4,
        top: 10,
      },
    };

    axios(options)
      .then((res) => {
        this.setState({
          trending: res.data,
          isLoading: false,
        });
      })
      .catch((err) => {
        if (err) {
          this.setState({
            error: true,
            isLoading: false,
          });
        }
      });
  }

  addDownload = (trendingMovie) => {
    axios
      .post(this.state.trending_api + "/download/", {
        ip_address: this.props.ip_address,
        movie_name: trendingMovie.Title,
        engine: trendingMovie.Source,
        description: trendingMovie.Description,
        size: trendingMovie.Size,
        year: trendingMovie.Year,
        download_link: trendingMovie.DownloadLink,
        cover_photo_link: trendingMovie.CoverPhotoLink,
      })
      .then(() => {
        console.log(`added ${trendingMovie.Title} to downloads on ocena`);
      });
  };

  render() {
    return (
      <div>
        <Carousel
          responsive={responsive}
          deviceType={this.props.deviceType}
          keyBoardControl={true}
          infinite={true}
          ssr={true}
          autoPlay={this.props.deviceType !== "mobile" ? true : false}
          transitionDuration={800}
          containerClass="carousel-container"
          beforeChange={(previousSlide, { currentSlide, onMove }) => {
            let offset = 0;
            if (isMobile) {
              offset = 2;
            } else {
              offset = this.state.trending.length / 2;
            }

            if (
              typeof this.state.trending[previousSlide - offset] !== "undefined"
            ) {
              this.setState({
                currentmovie: this.state.trending[previousSlide - offset],
              });
            } else {
              let index = (previousSlide % this.state.trending.length) - offset;
              if (index < 0) {
                index = this.state.trending.length + index;
              }
              this.setState({
                currentmovie: this.state.trending[index],
              });
            }
          }}
        >
          {this.state.trending.map((trendingMovie) => {
            if (trendingMovie.name.endsWith("Tags")) {
              trendingMovie.name = trendingMovie.name.substr(
                0,
                trendingMovie.name.length - 4
              );
            }
            let movie_obj = {
              Title: trendingMovie.name,
              Id: trendingMovie.referral_id,
              key: trendingMovie.referral_id,
              DownloadLink: trendingMovie.download_link,
              CoverPhotoLink: trendingMovie.cover_photo_link,
              Size: trendingMovie.size,
              Source: trendingMovie.engine,
              Year: trendingMovie.year,
              Description: trendingMovie.description,
            };
            return (
              <div
                key={trendingMovie.id}
                className="trending-carousal-image__container"
              >
                <Image
                  className="img-fluid trending-carousal-image"
                  key={trendingMovie.id}
                  onClick={() => {
                    this.props.history.push(
                      `/${greekFromEnglish(trendingMovie.engine)}/${
                        trendingMovie.referral_id
                      }`
                    );
                    this.props.setDescription(movie_obj);
                  }}
                  onKeyDown={() => {
                    this.props.history.push(
                      `/${greekFromEnglish(trendingMovie.engine)}/${
                        trendingMovie.referral_id
                      }`
                    );
                    this.props.setDescription(movie_obj);
                  }}
                  onMouseOver={() => {
                    this.setState({
                      currentmovie: trendingMovie,
                    });
                  }}
                  alt={trendingMovie.name}
                  src={
                    trendingMovie.cover_photo_link
                      ? trendingMovie.cover_photo_link
                      : "https://raw.githubusercontent.com/Go-phie/gophie-web/master/public/no-pic.png"
                  }
                />

                <a
                  className="download-btn carousal-download-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={movie_obj.DownloadLink}
                  onClick={() => this.addDownload(movie_obj)}
                  data-tour="my-eight-step"
                >
                  <DownloadIcon />
                </a>
              </div>
            );
          })}
        </Carousel>
        {!this.state.isLoading ? null : (
          <div
            style={{
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              position: "absolute",
              top: "0",
            }}
            className="w-100 d-flex"
          >
            <CarouselSkeletonLoader />
            <CarouselSkeletonLoader />
            <CarouselSkeletonLoader />
            <CarouselSkeletonLoader />
          </div>
        )}

        {!this.state.error ? null : (
          <div className="error">
            <p
              style={{ position: "absolute", top: "9em", left: 0, right: 0 }}
              className="error-text"
            >
              <NetworkIcon />
              <p>Try Again</p>
            </p>
          </div>
        )}
        <div className="trending_name">{this.state.currentmovie.name}</div>
      </div>
    );
  }
}

export default TrendingCarousel;
