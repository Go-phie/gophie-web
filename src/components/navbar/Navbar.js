import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import Style from "./Navbar.styles";
import SearchInput from "../searchInput/SearchInput";
const NavBar = (props) => {
  return (
    <Style.Navbar>
      <Style.Navbar__HasSearch>
        <SearchInput
          searchInput={props.searchInput}
          checkInputKey={props.checkInputKey}
          newSearch={props.newSearch}
          checkKeyOnChange={props.checkKeyOnChange}
        />
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
};

export default NavBar;
