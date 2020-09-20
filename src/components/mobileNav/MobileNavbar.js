import React, { useState } from "react";
import Style from "./MobileNavbar.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSun,
  faHome,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import SearchInput from "../searchInput/SearchInput";

const MobileNavbar = (props) => {
  const [mobileSearch, setMobileSearch] = useState(false);
  let pathname = window.location.pathname;

  return (
    <>
      <Style.MobileSearch
        className={mobileSearch ? "show-mobile-searchbar" : ""}
      >
        <SearchInput
          searchInput={props.searchInput}
          checkInputKey={props.checkInputKey}
          newSearch={props.newSearch}
          checkKeyOnChange={props.checkKeyOnChange}
        />
      </Style.MobileSearch>
      <Style.MobileNavbar>
        <button
          className={`${
            pathname.match("/Server2") ? "active" : ""
          } actions-button`}
          onClick={props.handleServerChange}
          onChange={props.handleServerChange}
          data-value="Server5"
          title="Home"
        >
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
