import React from "react";
import Style from "./MobileNavbar.styles";
import {
  FontAwesomeIcon
} from "@fortawesome/react-fontawesome";

import {
    faMoon,
    faSun,
    faHome,
    faSearch
} from "@fortawesome/free-solid-svg-icons";

const MobileNavbar = (props) => {
  return (
      <Style.MobileNavbar>

          <button
              className="actions-button"
              title="Home"
            >
              <FontAwesomeIcon icon={faHome} />
          </button>

          <button
              className="actions-button"
              title="Search"
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
  )

}

export default MobileNavbar;