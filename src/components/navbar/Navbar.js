import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faMoon,
  faSun,
  faBlind
} from "@fortawesome/free-solid-svg-icons";
import {
  GophieLogo, TvIcon,
} from "../../utils/icons"
import "./navbar.css";

class NavBar extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <div className="nav-bar__main d-flex">
          <div className="nav-bar__main--brand">
            <a href="/">
              <GophieLogo />
              <TvIcon />
            </a>
          </div>
          <div className="nav-bar__main--has-search">
            <input
              type="text"
              ref={this.props.searchInput}
              className="form-control"
              placeholder="Search movie..."
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus={true}
              onKeyPress={this.props.checkInputKey}
              onChange={this.props.handleSearch}
            />
            <button
              onClick={this.props.newSearch}
              className="search-btn"
              data-tour="my-third-step"
            >
              <FontAwesomeIcon
                className="form-control-feedback search-btn "
                aria-hidden="true"
                icon={faSearch}
              />
            </button>
          </div>
        </div>

        {/* actions button */}
        <div className="d-flex nav-bar__action-buttons">
          <button
            className="actions-button"
            data-tour="my-first-step"
            title="Take A Tour"
            onClick={this.props.tour}
          >
            {" "}
            <FontAwesomeIcon icon={faBlind} />{" "}
          </button>

          <button
            className="actions-button  ml-4"
            data-tour="my-tenth-step"
            title="Change Theme"
            onClick={this.props.switchTheme}
          >
            {this.props.theme === "dark" ? (
              <FontAwesomeIcon icon={faSun} />
            ) : (
              <FontAwesomeIcon icon={faMoon} />
            )}
          </button>
          {/* <a
            className="actions-button github-button"
            href="https://github.com/go-phie/gophie-web"
            data-tour="my-eleventh-step"
            title="Github Link"
          >
            {" "}
            <GitMark />{" "}
          </a> */}
        </div>
      </nav>
    );
  }
}

export default NavBar;
