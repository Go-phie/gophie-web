import React, { Component } from "react";
// import { Nav, Navbar, Form, Button, FormControl } from 'react-bootstrap';
import { SearchIcon } from "../components/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class NavBar extends Component {
  render() {
    return (
      <nav className="nav-bar">
          <div>
            <p>
              {" "}
              G<span className="em">o</span>phie{" "}
            </p>
          </div>

          <div className="has-search">
            <input
              type="text"
              ref={this.props.searchInput}
              className="form-control"
              placeholder="Search for a movie..."
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus={true}
              onKeyPress={this.props.checkInputKey}
              onChange={this.props.handleSearch}
            />
            <button
              onClick={this.props.newSearch}
              className="search-btn"
              data-tour="my-third-step"
            >
              <FontAwesomeIcon
                className="form-control-feedback"
                aria-hidden="true"
                icon={faSearch}
              />
            </button>
          </div>
      </nav>
    );
  }
}

export default NavBar;
