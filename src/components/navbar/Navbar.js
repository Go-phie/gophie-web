import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import Style from "./Navbar.styles";

const NavBar = (props) => {
    return (
      <Style.Navbar>

          <Style.Navbar__HasSearch>
            <input
              type="text"
              ref={props.searchInput}
              placeholder="Search movie"
              autoFocus={true}
              onKeyPress={props.checkInputKey}
              onChange={props.searchInput}
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
          </Style.Navbar__HasSearch>

        {/* actions button */}
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
      </Style.Navbar>
    );
}

export default NavBar;
