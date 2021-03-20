import React, { Component } from "react";
import { GlobalStyles } from "../css/global";
import MobileNavbar from "../components/mobileNav/MobileNavbar";
import PageSidebar from "../components/pageSidebar/PageSidebar";
import MainPanel from "./home.styles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../css/theme";
import NavBar from "../components/navbar/Navbar";
import { API_ENDPOINTS, nameToEngineMap, greekFromEnglish } from "../utils";

export class Music extends Component {
  constructor(props) {
    super(props);

    this.state = {
      api: API_ENDPOINTS.ocena,
      server: nameToEngineMap.get("Server1"),
      mode: "music",
      movies: [],
      listIndex: 1,
      isLoading: false,
      show: false,
      error: false,
      theme: "light",
      ip_address: "",
      isSearch: false,
    };
  }

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
        isSearch: false,
      },
      () => {
        this.props.history.push(`/${greekFromEnglish(this.state.server)}`);
      }
    );
  }

  setTheme = () => {
    const theme = localStorage.getItem("theme");
    if (theme !== null) {
      this.switchTheme(theme === "light" ? "dark" : "light");
    }
  };

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

  render() {
    const { theme } = this.state;
    const selectedTheme = theme !== "light" ? lightTheme : darkTheme;

    return (
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
