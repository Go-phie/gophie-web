import React from "react";
import { SearchIcon } from "../../utils/icons";
import { Styles } from "./musicSearchInput.styles";

const MusicSearchInput = (props) => {
  return (
    <>
      <Styles.MusicSearch>
        <input
          type="text"
          value={props.query}
          className="form-control"
          placeholder="Search music..."
          // eslint-disable-next-line jsx-a11y/no-autofocus
          // autoFocus={true}
          onKeyPress={props.checkInputKey}
          onChange={props.checkKeyOnChange}
        />
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
      </Styles.MusicSearch>
    </>
  );
};

export default MusicSearchInput;
