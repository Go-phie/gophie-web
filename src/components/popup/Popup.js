import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Rating from "material-ui-rating";
import ReactPlayer from "react-player";
import axios from "axios";
import { greekFromEnglish, API_ENDPOINTS } from "../../utils";
import { isIOS } from "react-device-detect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ratings_api: API_ENDPOINTS.ocena,
      ratings: {},
      ip_rating: 0,
      play: false,
      referral_id: "",
      error: false,
      episodeLink: [],
    };
  }

  componentDidMount() {
    this.getAverage();
    this.getRatings();

    if (this.props.movie.engine === "AnimeOut") {
      const episodeLinkArray = [];
      const SDownloadLink = this.props.movie.s_download_link;
      for (const [downloadTxt, downloadLink] of Object.entries(SDownloadLink)) {
        const downloadTxtStrip = downloadTxt
          .replace("[AnimeOut]", "")
          .replace("[Erai-raws]", "");
        episodeLinkArray.push(
          <a className="episode-link " href={downloadLink} key={downloadLink}>
            {downloadTxtStrip}
          </a>
        );
      }

      this.setState({ episodeLink: [...episodeLinkArray] });
    }
  }

  shareMovie = () => {
    axios
      .post(this.state.ratings_api + "/referral/", {
        ip_address: this.props.ip_address,
        referral_id: this.props.movie.referral_id,
      }, {
        auth: {
          username: process.env.REACT_APP_OCENA_USERNAME,
          password: process.env.REACT_APP_OCENA_PASSWORD
        },
      })
      .then((res) => {
        this.setState(
          {
            referral_id: res.data,
          },
          console.log(`Referral ID of movie is ${res.data}`)
        );
      });
  };

  getAverage = () => {
    const { movie } = this.props;
    axios
      .post(this.state.ratings_api + "/movie/ratings/average/", {
        referral_id: movie.referral_id,
      },{
        auth: {
          username: process.env.REACT_APP_OCENA_USERNAME,
          password: process.env.REACT_APP_OCENA_PASSWORD
        },
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

  getRatings = () => {
    const { movie } = this.props;
    axios
      .post(this.state.ratings_api + "/movie/rating/", {
        referral_id: movie.referral_id,
        ip_address: this.props.ip_address,
      }, {
        auth: {
          username: process.env.REACT_APP_OCENA_USERNAME,
          password: process.env.REACT_APP_OCENA_PASSWORD
        },
      })
      .then((res) => {
        if (res.data !== null) {
          this.setState({
            ip_rating: res.data.score,
          });
        }
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
    const { movie } = this.props;
    axios
      .post(this.state.ratings_api + "/rate/", {
        referral_id: movie.referral_id,
        ip_address: this.props.ip_address,
        score: value,
      }, {
        auth: {
          username: process.env.REACT_APP_OCENA_USERNAME,
          password: process.env.REACT_APP_OCENA_PASSWORD
        },
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
    const { server } = this.props;

    return (
      <Modal
        show={this.props.show}
        onHide={() => this.props.onHide()}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        dialogClassName="dialog-theme"
        data-tour="my-fifth-step"
        centered
      >
        <Modal.Body className="gophie-modal">
          <section className="gophie-modal__img">
            <img
              src={
                this.props.movie.cover_photo_link === ""
                  ? "No image"
                  : this.props.movie.cover_photo_link
              }
              alt={this.props.movie.name}
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
              <div>
                {greekFromEnglish(server) === "Server2" ? null : (
                  <a
                    id="play-video"
                    className="video-play-button"
                    href="/"
                    onClick={this.handlePlayRequest.bind(this)}
                  >
                    <span> </span>{" "}
                  </a>
                )}
              </div>
            )}
            {/* Video Stream Play Icon */}
          </section>

          <section className="gophie-modal__body">
            <Modal.Header className="gophie-modal__body--header" closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                {this.props.movie.name}
              </Modal.Title>
            </Modal.Header>
            {this.state.play ? (
              <div>
                <div className="player-wrapper">
                  <ReactPlayer
                    url={this.props.movie.download_link}
                    className="react-player"
                    playing
                    playsinline
                    pip
                    controls
                    width="100%"
                    height="90%"
                  />
                </div>
                {greekFromEnglish(this.props.movie.engine) === "Alpha" ? (
                  <div className="player-error-alert">
                    <p className="player-error-message">
                      Streaming from alpha is problematic, suggest{" "}
                      <a
                        className="gophie-link"
                        href={this.props.movie.download_link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        downloading
                      </a>{" "}
                      instead
                    </p>
                  </div>
                ) : null}
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

                <div className="gophie-modal__body--description scollable-container">
                  {this.props.movie.description === ""
                    ? "Seems like the description for this movie is missing"
                    : this.props.movie.description}
                </div>
                <div>
                  <div></div>
                  {this.props.movie.name !== "AnimeOut" ? null : (
                    <div>
                      <div className="d-flex justify-content-between align-items-center w-100 mt-3">
                        <div>Episodes</div>
                        <FontAwesomeIcon icon={faArrowDown} />
                      </div>
                      <div className="scollable-container d-flex flex-column">
                        {this.state.episodeLink}
                      </div>
                    </div>
                  )}
                </div>
              </section>
            )}
          </section>
        </Modal.Body>
      </Modal>
    );
  }
}

export default Popup;
