import React, {Component} from "react";
import Rating from "material-ui-rating";
import ReactPlayer from "react-player";
import {  API_ENDPOINTS } from "../utils";
import { isIOS } from "react-device-detect";
import "../css/Popup.css";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../css/theme";
import axios from "axios";
import TrendingCarousel from "../components/TrendingCarousel";
import { GlobalStyles } from "../css/global";
import "../css/shared.css";
import Footer from "../components/footer";

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
            movie: {
                "name": "The Departure",
                "engine": "FzMovies",
                "description": "Before leaving Los Angeles to start a new job in New York, Nate, with the help of his best friend John, devises a wicked plan to test his girlfriend's loyalty.\n...<more>",
                "size": "187 MB",
                "year": "0",
                "download_link": "http://owmchalgthxyarnxnfl.nxknectrcmqwoxuzhmanpmoytokxraoaxgusjeyn.xyz/res/614774a84bca32182e1b81d831542d9a/98fa32d8a5f741f05723d71064566234/The_Departure_(2020)_WEB-DL_high_(fzmovies.net)_0246086ba3ce27948d9d5a5bcbe2cbbc.mp4",
                "cover_photo_link": "https://www.fzmovies.net/imdb_images/The.Departure.2020.jpg",
                "id": 83434,
                "referral_id": "01c7e2df-a3d4-4e81-8ee7-78334866e17a"
                },
        };
    }

    componentDidMount() {
        this.getIp();
        const urlPath = window.location.pathname.split('/');
        const referralID = urlPath.pop();
        axios
            .post(`${this.state.api}/referral/id/`, {referral_id: referralID})
            .then((res) => {
                this.setState({
                    movie: res.data,
                });
                console.log("test");
                console.log(res.data);
            })
            .catch((err) => {
                if (err) {
                this.setState({
                    error: true,
                });
                }
            });
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
    // getAverage = () => {
    //     axios
    //     .post(this.state.api + "/movie/ratings/average/", {
    //         name: this.state.name,
    //         engine: this.state.engine,
    //         description: this.state.description,
    //         size: this.state.size,
    //         year: this.state.year,
    //         download_link: this.state.DownloadLink,
    //         cover_photo_link: this.state.CoverPhotoLink,
    //     })
    //     .then((res) => {
    //         this.setState({
    //         ratings: res.data,
    //         });
    //     })
    //     .catch((err) => {
    //         if (err) {
    //         this.setState({
    //             error: true,
    //         });
    //         }
    //     });
    // };

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
            <>
            <ThemeProvider theme={selectedTheme}>
            <GlobalStyles />
            <div className="container">
                <div>
                    <div className="gophie-modal mt-5"  style={{ maxHeight: '550px' }}>
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

                                <section className="gophie-modal__body" style={{ background: 'aliceblue', borderBottomRightRadius: '.5em', borderTopRightRadius: '.5em' }}>
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
                
                <div className="mb-5">
                    <h2 className="trending-title">Trending Movies</h2> 
                    <TrendingCarousel style={{background: "green"}}
                        ip_address={this.state.ip_address}
                    />
                </div>

            </div>

            <div className="mt-5">
                <Footer/>                
            </div>


        </ThemeProvider>
        </>
        )
    }

}

export default Shared;