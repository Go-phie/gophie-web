import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import MovieSidebarPortal from "./MovieSidebarPortal";
import Style from "./MovieSidebar.styles";
import Rating from "material-ui-rating";
import ReactPlayer from "react-player";
import axios from "axios";
import { greekFromEnglish, API_ENDPOINTS } from "../../utils";
import { isIOS } from "react-device-detect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DownloadIcon, ShareIcon } from "../../utils/icons";

import { faSpinner, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function MovieSidebar(props) {
  let refLi = useRef([]);
  let refSidebarContent = useRef(null);
  let sidebarTimeline = useRef();

  const { toggle, movie, ip_address } = props;

  const ratings_api = API_ENDPOINTS.ocena;
  // const [ratings, setRating] = useState({});
  const [ipRating, setIpRating] = useState(0);
  const [play, setPlay] = useState(false);
  const [referralID, setReferralID] = useState(null);
  // eslint-disable-next-line
  const [error, setError] = useState(false);
  const [episodeLink, setEpisodeLink] = useState([]);
  const [description, setDescription] = useState();
  const [fullDescription, setFullDescription] = useState();

  const [readMore, setReadMore] = useState(false);
  const [loadingReferralID, setLoadingReferralID] = useState(false);

  const handlePlayRequest = (e) => {
    e.preventDefault();
    setPlay(true);
  };

  const rateMovie = (value) => {
    axios
      .post(ratings_api + "/rate", {
        referral_id: movie.referral_id,
        ip_address: ip_address,
        score: value,
      })
      .then((res) => {
        if (res.data !== null) {
          setIpRating(res.data.score);
        }
      })
      .catch((err) => {
        if (err) {
          setError({
            error: true,
          });
        }
      });
  };

  const getShareID = (action) => {
    axios
      .post(ratings_api + "/referral", {
        ip_address: ip_address,
        referral_id: movie.referral_id,
      })
      .then((res) => {
        const { data } = res;
        if (action) {
          setLoadingReferralID(false);
        }
        setReferralID(data, () => {
          if (action) {
            shareMovie();
          }
        });
      })
      .catch(() => {
        setLoadingReferralID(false);
      });
  };

  const truncate = () => {
    if (fullDescription) {
      if (fullDescription.length > 350) {
        setDescription(fullDescription);
        setReadMore(false);
      }
    }
  };

  const addDownload = () => {
    axios
      .post(ratings_api + "/download", {
        ip_address: ip_address,
        referral_id: movie.referral_id,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const shareMovie = () => {
    if (referralID) {
      props.shareMovie({
        ...movie,
        referralID: referralID,
      });
    } else {
      setLoadingReferralID(true);
      getShareID("share");
    }
  };

  useEffect(() => {
    const getShareID = (action) => {
      axios
        .post(ratings_api + "/referral", {
          ip_address: ip_address,
          referral_id: movie.referral_id,
        })
        .then((res) => {
          const { data } = res;
          if (action) {
            setLoadingReferralID(false);
          }
          setReferralID(data, action ? shareMovie() : null);
        })
        .catch(() => {
          setLoadingReferralID(false);
          setReferralID(movie.referral_id, action ? shareMovie() : null);
        });
    };
    getShareID();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (movie.is_series && movie.s_download_link) {
      const episodeLinkArray = [];
      const SDownloadLink = movie.s_download_link;
      for (const [downloadTxt, downloadLink] of Object.entries(SDownloadLink)) {
        const downloadTxtStrip = downloadTxt
          .replace("[AnimeOut]", "")
          .replace("[Erai-raws]", "");
        episodeLinkArray.push(
          <div
            key={`${movie.Index}${downloadLink}`}
            className="sidebar-footer-download"
          >
            <p>{downloadTxtStrip}</p>
            <a
              href={downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="gbtn gbtn-primary align-items-center"
            >
              <span className="mr-1">
                <DownloadIcon />
              </span>
              download
            </a>
          </div>
        );
      }

      setEpisodeLink([...episodeLinkArray]);
    }

    if (movie.description) {
      if (movie.description.length > 350) {
        const truncatedText = movie.description
          .substring(0, 350)
          .replace(/\w+$/, "");
        setDescription(truncatedText);
        setFullDescription(movie.description);
        setReadMore(true);
      } else {
        setDescription(movie.description);
        setReadMore(false);
      }
    }
  }, [movie]);

  useEffect(() => {
    if (toggle === false) {
      gsap.to(refLi, {
        duration: 0.4,
        scaleX: 0,
        transformOrigin: "right",
        stagger: 0.1,
      });
    } else {
      sidebarTimeline.current = gsap.timeline();
      sidebarTimeline.current.to(refLi.current, {
        duration: 0.4,
        scaleX: 1,
        transformOrigin: "right",
        stagger: 0.2,
      });
      sidebarTimeline.current.to(refSidebarContent, {
        duration: 0.1,
        opacity: 1,
      });
    }
  }, [toggle]);

  return (
    <MovieSidebarPortal>
      <Style.MovieOverlayStyle className={toggle ? "isOnOverlay" : ""} />{" "}
      <Style.MovieSidebarStyle>
        <div className="moviesidenav">
          <ul className="transition">
            <li ref={(el) => (refLi.current[0] = el)}> </li>{" "}
            <li ref={(el) => (refLi.current[1] = el)}> </li>{" "}
            <li ref={(el) => (refLi.current[2] = el)}> </li>{" "}
            <li ref={(el) => (refLi.current[3] = el)}> </li>{" "}
            <li ref={(el) => (refLi.current[4] = el)}> </li>{" "}
          </ul>

          <div
            className="sidebar-content"
            ref={(el) => {
              refSidebarContent = el;
            }}
          >
            <button onClick={toggle} className={"cancel-btn"}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <div className="siderbar-header mt-4">
              <h3> {movie.name} </h3>
              <Rating
                value={ipRating}
                max={5}
                onChange={(value) => rateMovie(value)}
              />
            </div>

            {movie.is_series ? (
              <img
                src={
                  movie.cover_photo_link === ""
                    ? "https://raw.githubusercontent.com/Go-phie/gophie-web/master/public/no-pic.png"
                    : movie.cover_photo_link
                }
                alt={movie.name}
                className="sidebar-image-cover mt-4"
              />
            ) : play ? (
              <div>
                {greekFromEnglish(movie.engine) === "Server5" ? (
                  <div className="player-error-alert">
                    <p className="player-error-message">
                      Streaming from alpha is problematic, suggest{" "}
                      <a
                        className="gophie-link"
                        href={movie.DownloadLink}
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
                <div className="player-wrapper">
                  <ReactPlayer
                    url={movie.download_link}
                    className="react-player"
                    playing
                    playsinline
                    pip
                    controls
                    width="100%"
                    height="90%"
                  />
                </div>
              </div>
            ) : (
              <div className="position-relative">
                <img
                  src={
                    movie.cover_photo_link === ""
                      ? "https://raw.githubusercontent.com/Go-phie/gophie-web/master/public/no-pic.png"
                      : movie.cover_photo_link
                  }
                  alt={movie.name}
                  className="sidebar-image-cover mt-4"
                />
                <a
                  id="stop-video"
                  className="video-play-button"
                  href="/"
                  onClick={handlePlayRequest}
                >
                  <span></span>
                </a>
              </div>
            )}

            {/* sidebar movie description */}
            <div className="sidebar-description mt-4">
              {movie.description === "" || movie.description === null ? (
                "Seems like the description for this movie is missing"
              ) : (
                <p>
                  {description}
                  <span
                    className={readMore === true ? "" : "hidden"}
                    onClick={truncate}
                    onKeyDown={truncate}
                    role="button"
                    tabIndex={0}
                  >
                    ... Read more
                  </span>
                </p>
              )}
            </div>

            <div className="sidebar-footer mt-4">
              {/* if AnimeOut or  kdramahood engine add the download link */}
              {!movie.is_series ? (
                <div>
                  <a
                    href={movie.download_link}
                    onClick={addDownload}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gbtn gbtn-secondary mr-3"
                  >
                    <span className="mr-1">
                      <DownloadIcon />
                    </span>
                    download
                  </a>
                  <button className="sidebar-share-btn" onClick={shareMovie}>
                    {loadingReferralID ? (
                      <FontAwesomeIcon icon={faSpinner} />
                    ) : (
                      <ShareIcon />
                    )}
                  </button>
                </div>
              ) : (
                <>
                  <div className="sidebar-footer-header d-flex justify-content-between align-items-center">
                    <p>Episodes</p>
                    <button className="sidebar-share-btn" onClick={shareMovie}>
                      {loadingReferralID ? (
                        <FontAwesomeIcon icon={faSpinner} />
                      ) : (
                        <ShareIcon />
                      )}
                    </button>
                  </div>

                  {episodeLink}
                </>
              )}
            </div>
          </div>
        </div>
      </Style.MovieSidebarStyle>{" "}
    </MovieSidebarPortal>
  );
}
