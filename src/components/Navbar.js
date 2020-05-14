import React, { Component } from "react";
// import { Nav, Navbar, Form, Button, FormControl } from 'react-bootstrap';
import { SearchIcon } from "../components/icons";

class NavBar extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-left">
          <p>
            {" "}
            G<span className="em">o</span>phie{" "}
          </p>
        </div>
        <div className="header-center">
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
        </div>
        <div className="header-right">
          <button
            onClick={this.props.newSearch}
            className="search-btn"
            data-tour="my-third-step"
          >
            <SearchIcon />
          </button>
        </div>
      </div>
    );
  }
}

export default NavBar;
