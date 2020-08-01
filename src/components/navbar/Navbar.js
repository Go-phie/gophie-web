import React from "react";
import { Link } from "react-router-dom";
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

const NavBar = (props) => {
    return (
      <nav className="nav-bar" style={{position: 'initial'}}>
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
              ref={props.searchInput}
              className="form-control"
              placeholder="Search movie..."
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus={true}
              onKeyPress={props.checkInputKey}
              // onChange={props.handleSearch}
            />
            <Link to={`/search`} >
              <button
                onClick={props.newSearch}
                className="search-btn"
                data-tour="my-third-step"
              >
                <FontAwesomeIcon
                  className="form-control-feedback search-btn "
                  aria-hidden="true"
                  icon={faSearch}
                />
              </button>
            </Link>
          </div>
        </div>

        {/* actions button */}
        <div className="d-flex nav-bar__action-buttons">
          <button
            className="actions-button"
            data-tour="my-first-step"
            title="Take A Tour"
            onClick={props.tour}
          >
            {" "}
            <FontAwesomeIcon icon={faBlind} />{" "}
          </button>

          <button
            className="actions-button  ml-4"
            data-tour="my-tenth-step"
            title="Change Theme"
            onClick={props.switchTheme}
          >
            {props.theme === "dark" ? (
              <FontAwesomeIcon icon={faSun} />
            ) : (
              <FontAwesomeIcon icon={faMoon} />
            )}
          </button>
        </div>
      </nav>
    );
}

export default NavBar;
