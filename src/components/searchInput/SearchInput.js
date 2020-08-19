import React from "react";
import { Link } from "react-router-dom";
import {
  FontAwesomeIcon
} from "@fortawesome/react-fontawesome";
import {
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const SearchInput = (props) => {
  return (
    <>
        <input
              type="text"
              ref={props.searchInput}
              className="form-control"
              placeholder="Search movie..."
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus={true}
              onKeyPress={props.checkInputKey}
              // onChange={props.handleSearch}
            />
        <Link to={`/search`} >
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
    </>
  )
}

export default SearchInput;