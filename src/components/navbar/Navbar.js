import React from "react";
import Style from "./Navbar.styles";
import SearchInput from "../searchInput/SearchInput";
import { Link } from "react-router-dom";
import { GophieLogo } from "../../utils/icons";
import { SunIcon, MoonIcon } from "../../utils/icons";

const NavBar = (props) => {
  return (
    <Style.Navbar>
      {props.sharedPage && (
        <Style.Sidebar__Logo>
          <Link to="/">
            <GophieLogo />
          </Link>
        </Style.Sidebar__Logo>
      )}
      {!props.onMusicPage && (
        <Style.Navbar__HasSearch>
          <SearchInput
            searchInput={props.searchInput}
            checkInputKey={props.checkInputKey}
            newSearch={props.newSearch}
            checkKeyOnChange={props.checkKeyOnChange}
          />
        </Style.Navbar__HasSearch>
      )}

      {/* actions button */}
      <Style.Button>
        <button
          className="actions-button  ml-4"
          data-tour="my-tenth-step"
          title="Change Theme"
          onClick={props.switchTheme}
        >
          {props.theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </button>
      </Style.Button>
    </Style.Navbar>
  );
};

export default NavBar;
