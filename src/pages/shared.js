import React, { Component } from "react";
import Rating from "material-ui-rating";
import ReactPlayer from "react-player";
import { API_ENDPOINTS } from "../utils/index";
import { isIOS } from "react-device-detect";
import "../components/popup/Popup.css";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../css/theme";
import axios from "axios";
import TrendingCarousel from "../components/trendingCarousel/TrendingCarousel";
import { GlobalStyles } from "../css/global";
import "../css/shared.css";
import Footer from "../components/footer/footer";
import NavBar from "../components/navbar/Navbar";

class Shared extends Component {
  constructor(state) {
    super(state);
    this.state = {
      api: API_ENDPOINTS.ocena,
      ratings: {},
      ip_rating: 0,
      play: false,
      referral_id: "",
      error: false,
      ip_address: "",
      theme: "light",
      movie: {},
    };
  }

  componentDidMount() {
    this.getIp();
    this.setTheme();
    this.getSharedMovie();
  }

  getSharedMovie = () => {
    const urlPath = window.location.pathname.split("/");
    const referralID = urlPath.pop();
    axios
      .post(`${this.state.api}/referral/id/?referral_id=${referralID}`)
      .then((res) => {
        this.setState(
          {
            movie: res.data,
          },
          () => this.getAverage()
        );
      })
      .catch((err) => {
        if (err) {
          this.setState({
            error: true,
          });
        }
      });
  };

  setTheme() {
    const theme = localStorage.getItem("theme");
    if (theme !== null) {
      this.switchTheme(theme === "light" ? "dark" : "light");
    }
  }

  switchTheme(mode) {
    switch (mode) {
      case "light":
        localStorage.setItem("theme", "dark");
        this.setState({ theme: "dark" });
        break;
      case "dark":
        localStorage.setItem("theme", "light");
        this.setState({ theme: "light" });
        break;
      default:
        break;
    }
  }

  getIp = () => {
    axios
      .get("https://api.ipify.org?format=json")
      .then((res) => {
        this.setState({
          ip_address: res.data.ip,
        });
      })
      .catch((error) => {
        this.setState({
          error: true,
        });
      });
  };

  getAverage = () => {
    const { movie } = this.state;
    axios
      .post(this.state.api + "/movie/ratings/average/", {
        name: movie.name,
        engine: movie.engine,
        description: movie.description,
        size: movie.size,
        year: movie.year,
        download_link: movie.download_link,
        cover_photo_link: movie.cover_photo_link,
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

  rateMovie = (value) => {
    const { movie } = this.state;
    axios
      .post(this.state.api + "/rate/", {
        movie_name: movie.name,
        engine: movie.engine,
        description: movie.description,
        size: movie.size,
        year: movie.year,
        download_link: movie.download_link,
        cover_photo_link: movie.cover_photo_link,
        ip_address: this.state.ip_address,
        score: value,
      })
      .then((res) => {
        if (res.data !== null) {
          this.setState({
            ip_rating: res.data.score,
          });
        }
        // retrieve average to force rerender
        this.getAverage();
      })
      .catch((err) => {
        console.log(err);
        if (err) {
          this.setState({
            error: true,
          });
        }
      });
  };

  handlePlayRequest(e) {
    e.preventDefault();
    this.setState({ play: true });
  }

  handleStopRequest(e) {
    e.preventDefault();
    this.setState({ play: false });
  }

  render() {
    const { theme } = this.state;
    const selectedTheme = theme === "light" ? lightTheme : darkTheme;

    return (
      <div className="movie-shared-detail">
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyles />
          <NavBar switchTheme={() => this.switchTheme(this.state.theme)} />

          <div className="container">
            <div style={{ marginTop: "10em" }}>
              <div
                className="gophie-modal shared-detail-content mt-5"
                style={{ maxHeight: "550px" }}
              >
                <section className="gophie-modal__img">
                  <img
                    src={
                      this.state.movie.cover_photo_link === ""
                        ? "No image"
                        : this.state.movie.cover_photo_link
                    }
                    alt={this.state.movie.name}
                  />

                  {/* Video Stream Play Icon */}
                  {this.state.play ? (
                    <a
                      id="stop-video"
                      className="video-stop-button"
                      href="/"
                      onClick={this.handleStopRequest.bind(this)}
                    >
                      <span></span>{" "}
                    </a>
                  ) : (
                    <a
                      id="play-video"
                      className="video-play-button"
                      href="/"
                      onClick={this.handlePlayRequest.bind(this)}
                    >
                      <span> </span>{" "}
                    </a>
                  )}
                  {/* Video Stream Play Icon */}
                </section>

                <section
                  className="gophie-modal__body"
                  style={{
                    borderBottomRightRadius: ".5em",
                    borderTopRightRadius: ".5em",
                  }}
                >
                  <div className="gophie-modal__body--header">
                    <div id="contained-modal-title-vcenter">
                      {this.state.movie.name}
                    </div>
                  </div>
                  {this.state.play ? (
                    <div>
                      <div className="player-wrapper">
                        <ReactPlayer
                          url={this.state.movie.download_link}
                          className="react-player"
                          playing
                          playsinline
                          pip
                          controls
                          width="100%"
                          height="90%"
                        />
                      </div>
                      {isIOS ? (
                        <div className="player-error-alert">
                          <p className="player-error-message">
                            {" "}
                            iOS 10+ users might have to disable{" "}
                            <i>
                              <em>Low Power Mode</em>
                            </i>{" "}
                            to stream
                          </p>
                        </div>
                      ) : null}
                    </div>
                  ) : (
                    <section className="gophie-modal__body--body">
                      <div className="gophie-modal-rating-container">
                        <div
                          className="gophie-modal-rating-container__average"
                          data-tour="my-seventh-step"
                        >
                          <div className="gophie-modal-rating-container__average--container">
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

                        <div
                          className="gophie-modal-rating-container__rate"
                          data-tour="my-sixth-step"
                        >
                          <p>Rate Movie</p>
                          <Rating
                            value={this.state.ip_rating}
                            max={5}
                            onChange={(value) => this.rateMovie(value)}
                          />
                        </div>
                      </div>

                      <div className="gophie-modal__body--description mb-5">
                        {this.state.movie.description === ""
                          ? "Seems like the description for this movie is missing"
                          : this.state.movie.description}
                      </div>
                      <a href={this.state.movie.download_link}>
                        <button className="btn btn-info w-100 mt-5">
                          download
                        </button>
                      </a>
                    </section>
                  )}
                </section>
              </div>
            </div>

            <div className="mb-5 position-relative">
              <h2 className="trending-title">Trending Movies</h2>
              <TrendingCarousel
                style={{ background: "green" }}
                ip_address={this.state.ip_address}
              />
            </div>
          </div>

          <div className="mt-5">
            <Footer />
          </div>
        </ThemeProvider>
      </div>
    );
  }
}

export default Shared;
