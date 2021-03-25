import React, { Component } from "react";
import { GlobalStyles } from "../css/global";
import axios from "axios";
import MobileNavbar from "../components/mobileNav/MobileNavbar";
import PageSidebar from "../components/pageSidebar/PageSidebar";
import MusicGroup from "../components/music/Music";
import MainPanel from "./home.styles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../css/theme";
import NavBar from "../components/navbar/Navbar";
import MusicSkeletonLoader from "../components/Loader/MusicSkeletonLoader";
import MusicSearchInput from "../components/musicSearchInput/MusicSearchInput";
import {
  API_ENDPOINTS,
  musicEngines,
  nameToEngineMap,
  greekFromEnglish,
} from "../utils";

export class Music extends Component {
  constructor(props) {
    super(props);

    this.state = {
      api: API_ENDPOINTS.mythra,
      server: musicEngines.get("Server1"),
      music: [],
      query: "",
      isLoading: false,
      error: false,
      theme: "light",
      currentMusic: null,
    };
  }

  setTheme = () => {
    const theme = localStorage.getItem("theme");
    if (theme !== null) {
      this.switchTheme(theme === "light" ? "dark" : "light");
    }
  };

  handleServerChange(event) {
    event.persist();
    let server = nameToEngineMap.get(
      event.currentTarget.getAttribute("data-value")
    );
    this.setState(
      {
        server,
        movies: [],
        listIndex: 1,
        currentMusic: null,
      },
      () => {
        this.props.history.push(`/${greekFromEnglish(this.state.server)}`);
      }
    );
  }

  checkKey(e) {
    if (e.charCode !== 13) return;
    this.setState({ music: [], isLoading: true });
    this.getMusic();
  }

  handleMusicSearch = () => {
    this.setState({ music: [] });
    this.getMusic();
  };

  checkKeyOnChange = (e) => {
    this.setState({ query: e.target.value.toLowerCase() });
  };

  getMusic = () => {
    this.setState({
      isLoading: true,
    });
    axios
      .get(
        `${this.state.api}/search?engine=${this.state.server}&query=${this.state.query}`
      )
      .then((res) => {
        const music = res.data;
        this.setState({
          isLoading: false,
          music,
        });
      })
      .catch((error) => {
        console.error(error);
        // If Server 1 is unavailable
        if (this.state.server === musicEngines.get("Server1")) {
          this.setState(
            {
              server: musicEngines.get("Server2"),
            },
            () => this.getMusic()
          );
        }
      });
  };

  componentDidMount() {
    this.getMusic();
    window.addEventListener("storage", this.setTheme);
  }

  componentWillUnmount() {
    window.removeEventListener("storage", this.setTheme);
  }

  switchTheme = (mode) => {
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
  };

  setCurrentMusic = (id) => {
    this.setState({ currentMusic: id });
  };

  render() {
    const { theme } = this.state;
    const selectedTheme = theme !== "light" ? lightTheme : darkTheme;
    const { music } = this.state;

    return (
      // Movie servers should not be showing on the Mobile music page
      // So MobileNavbar should be looked at
      <>
        <ThemeProvider theme={selectedTheme}>
          <>
            <GlobalStyles />
            <PageSidebar
              handleServerChange={this.handleServerChange.bind(this)}
              tour={this.startTour}
            />

            <MainPanel>
              <header>
                <div className="mtop">
                  <MobileNavbar
                    theme={theme}
                    switchTheme={() => this.switchTheme(this.state.theme)}
                    handleServerChange={this.handleServerChange.bind(this)}
                  />
                  <NavBar
                    onMusicPage
                    theme={theme}
                    switchTheme={() => this.switchTheme(this.state.theme)}
                  />

                  <main>
                    <MusicSearchInput
                      query={this.state.query}
                      checkInputKey={this.checkKey.bind(this)}
                      checkKeyOnChange={this.checkKeyOnChange}
                      newSearch={this.handleMusicSearch.bind(this)}
                    />
                    <div className="music">
                      {music.length > 0
                        ? music.map((song, i) => {
                            return (
                              <MusicGroup
                                key={i}
                                artiste={song.artiste}
                                title={song.title}
                                collection={song.collection}
                                duration={song.duration}
                                downloadLink={song.download_link}
                                pictureLink={song.picture_link}
                                id={song.index}
                                setCurrentMusic={this.setCurrentMusic.bind(
                                  this
                                )}
                                play={this.state.currentMusic === song.index}
                              />
                            );
                          })
                        : null}
                      {this.state.isLoading && !this.state.error && (
                        <div className="skeleton-movies">
                          <MusicSkeletonLoader />
                          <MusicSkeletonLoader />
                          <MusicSkeletonLoader />
                          <MusicSkeletonLoader />
                        </div>
                      )}
                    </div>
                  </main>
                </div>
              </header>
            </MainPanel>
          </>
        </ThemeProvider>
      </>
    );
  }
}

export default Music;
