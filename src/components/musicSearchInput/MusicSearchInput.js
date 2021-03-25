import React from "react";
import { Link } from "react-router-dom";
import { SearchIcon } from "../../utils/icons";
import { Styles } from "./musicSearchInput.styles";

const MusicSearchInput = (props) => {
  return (
    <>
      <Styles.MusicSearch>
        <input
          type="text"
          value={props.searchInput}
          className="form-control"
          placeholder="Search music..."
          // eslint-disable-next-line jsx-a11y/no-autofocus
          // autoFocus={true}
          // onKeyPress={props.checkInputKey}
          // onChange={props.checkKeyOnChange}
        />
        <Link to={`/music-search`}>
          <button
            onClick={props.newSearch}
            className="search-btn"
            data-tour="my-third-step"
          >
            <SearchIcon
              className="form-control-feedback search-btn "
              aria-hidden="true"
            />
          </button>
        </Link>
      </Styles.MusicSearch>
    </>
  );
};

export default MusicSearchInput;
