import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Rating from "material-ui-rating";
import ReactPlayer from "react-player";
import axios from "axios";
import "../css/Popup.css";

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ratings_api: "https://gophie-ocena.herokuapp.com",
      ratings: {},
      ip_rating: 0,
      play: false,
    };
  }

  componentDidMount() {
    this.getAverage();
    this.getRatings();
  }

  getAverage = () => {
    const { movie } = this.props;
    axios
      .post(this.state.ratings_api + "/movie/ratings/average/", {
        name: movie.Title,
        engine: movie.Source,
      })
      .then((res) => {
        this.setState({
          ratings: res.data,
        });
      })
      .catch((err) => {
        this.setState({
          error: true,
        });
      });
  };

  getRatings = () => {
    const { movie } = this.props;
    axios
      .post(this.state.ratings_api + "/movie/rating/", {
        movie_name: movie.Title,
        engine: movie.Source,
        ip_address: this.props.ip_address,
      })
      .then((res) => {
        if (res.data !== null) {
          this.setState({
            ip_rating: res.data.score,
          });
        }
      })
      .catch((err) => {
        this.setState({
          error: true,
        });
      });
  };

  rateMovie = (value) => {
    const { movie } = this.props;
    axios
      .post(this.state.ratings_api + "/rate/", {
        movie_name: movie.Title,
        engine: movie.Source,
        ip_address: this.props.ip_address,
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
        this.setState({
          error: true,
        });
      });
  };

  handlePlayRequest(e) {
    e.preventDefault();
    this.setState({ play: true });
  }

  render() {
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
                this.props.movie.CoverPhotoLink === ""
                  ? "No image"
                  : this.props.movie.CoverPhotoLink
              }
              alt={this.props.movie.Title}
            />

            {/* Video Stream Play Icon */}
            <a
              id="play-video"
              className="video-play-button"
              href="/"
              onClick={this.handlePlayRequest.bind(this)}
            >
              <span> </span>{" "}
            </a>
            {/* Video Stream Play Icon */}
          </section>

          <section className="gophie-modal__body">
            <Modal.Header className="gophie-modal__body--header" closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                {this.props.movie.Title}
              </Modal.Title>
            </Modal.Header>
            {this.state.play ? (
              <div className="player-wrapper">
                <ReactPlayer
                  url={this.props.movie.DownloadLink}
                  className="react-player"
                  playing
                  pip
                  controls
                  width="100%"
                  height="100%"
                />
              </div>
            ) : (
              <section className="gophie-modal__body--body">
                <div className="gophie-modal-rating-container">
                  <div className="gophie-modal-rating-container__average">
                    <Rating
                      value={Math.round(
                        this.state.ratings.average_ratings
                          ? this.state.ratings.average_ratings
                          : 0
                      )}
                      max={5}
                      readOnly={true}
                    />

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

                  <div className="gophie-modal-rating-container__rate">
                    <p>Rate Movie</p>
                    <Rating
                      value={this.state.ip_rating}
                      max={5}
                      onChange={(value) => this.rateMovie(value)}
                    />
                  </div>
                </div>

                <div className="gophie-modal__body--description">
                  {this.props.movie.Description === ""
                    ? "Seems like the description for this movie is missing"
                    : this.props.movie.Description}
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
