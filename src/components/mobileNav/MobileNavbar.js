import React, {useState} from "react";
import Style from "./MobileNavbar.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSun,
  faHome,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const MobileNavbar = (props) => {
  const [mobileSearch, setMobileSearch] = useState(false);


  return (
    <>
      <Style.MobileSearch className={mobileSearch ? "show-mobile-searchbar" : ""}>
        <input
          type="text"
          ref={props.searchInput}
          placeholder="Search movie"
          autoFocus={true}
          onKeyPress={props.checkInputKey}
          // onChange={props.searchInput}
        />

        <Link to={`/search`}>
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
      </Style.MobileSearch>
      <Style.MobileNavbar>
        <button className="actions-button" title="Home">
          <FontAwesomeIcon icon={faHome} />
        </button>

        <button className="actions-button" title="Search" onClick={() => setMobileSearch(!mobileSearch)}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <button
          className="actions-button"
          title="Change Theme"
          onClick={props.switchTheme}
        >
          {props.theme === "dark" ? (
            <FontAwesomeIcon icon={faSun} />
          ) : (
            <FontAwesomeIcon icon={faMoon} />
          )}
        </button>
      </Style.MobileNavbar>
    </>
  );
};

export default MobileNavbar;
