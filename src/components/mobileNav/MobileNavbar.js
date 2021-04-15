import React, { useState } from "react";
import Style from "./MobileNavbar.styles";
import SearchInput from "../searchInput/SearchInput";
import {
  HomeIcon,
  SearchIcon,
  SunIcon,
  MoonIcon,
  MusicNotes,
} from "../../utils/icons";
import { useHistory, useLocation } from "react-router";

const MobileNavbar = (props) => {
  const [mobileSearch, setMobileSearch] = useState(false);
  const location = useLocation();
  console.log(location);
  const history = useHistory();

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
            location.pathname === "/Server1" ? "active" : ""
          } actions-button`}
          onClick={props.handleServerChange}
          onChange={props.handleServerChange}
          data-value="Server1"
          title="Home"
        >
          <HomeIcon />
        </button>

        {location.pathname === "/music" ? null : (
          <button
            className={`${
              location.pathname === "/search" ? "active" : ""
            } actions-button`}
            title="Search"
            onClick={() => setMobileSearch(!mobileSearch)}
          >
            <SearchIcon />
          </button>
        )}

        <button
          className={`${
            location.pathname === "/music" ? "active" : ""
          } actions-button`}
          title="Music"
          onClick={() => history.push("/music")}
        >
          <MusicNotes />
        </button>

        <button
          className="actions-button"
          title="Change Theme"
          onClick={props.switchTheme}
        >
          {props.theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </button>
      </Style.MobileNavbar>
    </>
  );
};

export default MobileNavbar;
