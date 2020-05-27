/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from "react";
import axios from "axios";
import { API_ENDPOINTS, greekFromEnglish } from "../utils";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image } from "semantic-ui-react";
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
      isLoading: true,
    };
  }

  componentDidMount() {
    const options = {
      method: "post",
      url: `${this.state.trending_api}/download/highest/`,
      data: {
        filter_by: "days",
        filter_num: 7,
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
          transitionDuration={500}
          containerClass="carousel-container"
        >
          {this.state.trending.map((trendingMovie) => {
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
                  href={trendingMovie.DownloadLink}
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
      </div>
    );
  }
}

export default TrendingCarousel;
