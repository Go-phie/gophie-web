import React from "react";
import Style from "./Navbar.styles";
import SearchInput from "../searchInput/SearchInput";
import { SunIcon, MoonIcon } from "../../utils/icons";

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
        {props.theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </button>
    </Style.Navbar>
  );
};

export default NavBar;
