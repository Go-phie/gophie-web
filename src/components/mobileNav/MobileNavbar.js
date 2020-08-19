import React, { useState } from "react";
import Style from "./MobileNavbar.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSun,
  faHome,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import SearchInput from "../searchInput/SearchInput";

const MobileNavbar = (props) => {
  const [mobileSearch, setMobileSearch] = useState(false);

  return (
    <>
      <Style.MobileSearch
        className={mobileSearch ? "show-mobile-searchbar" : ""}
      >
        <SearchInput
          searchInput={props.searchInput}
          checkInputKey={props.checkInputKey}
          newSearch={props.newSearch}
        />
      </Style.MobileSearch>
      <Style.MobileNavbar>
        <button className="actions-button" title="Home">
          <FontAwesomeIcon icon={faHome} />
        </button>

        <button
          className="actions-button"
          title="Search"
          onClick={() => setMobileSearch(!mobileSearch)}
        >
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
