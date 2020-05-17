import React, { Component } from 'react';
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import axios from "axios";
import { API_ENDPOINTS, greekFromEnglish } from "../utils";

export default class TrendingCarousel extends Component {
    state = {
        goToSlide: 0,
        offsetRadius: 2,
        showNavigation: true,
        config: config.gentle,
        trending_api: API_ENDPOINTS.ocena,
        trending: []
      };

      retrieveDownloads = () => {
        axios
        .post(this.state.trending_api + "/download/highest/", {
          filter_by: "days",
          filter_num: 3,
          top: 10
        })
        .then((res) => {
          const data = res.data.map((movie, index) => {
              let mov_obj = {
                Title: movie.name,
                Id: movie.referral_id,
                key: movie.referral_id,
                DownloadLink: movie.download_link,
                CoverPhotoLink: movie.cover_photo_link,
                Size: movie.size,
                Source: movie.engine,
                Year: movie.year,
                Description: movie.description,
                content: <img src={movie.cover_photo_link} alt={movie.id} />,
              }
            return {
                ...mov_obj,
                onClick: () => {
                    this.props.history.push(`/${greekFromEnglish(movie.engine)}/${movie.referral_id}`);
                    this.props.setDescription(mov_obj)
                }
            }
          })
          this.setState({
              trending: data
          })
        });
      }
    
      onChangeInput = e => {
        this.setState({
          [e.target.name]: parseInt(e.target.value, 10) || 0
        });
      };

      UNSAFE_componentWillMount() {
        this.retrieveDownloads()
      }

      render(){
          return (
            <Carousel
            slides={this.state.trending}
            goToSlide={this.state.goToSlide}
            offsetRadius={this.state.offsetRadius}
            showNavigation={this.state.showNavigation}
            animationConfig={this.state.config}
          />
          )
      }
}