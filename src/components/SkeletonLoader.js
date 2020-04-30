import React, { Component } from "react";

export default class SkeletonLoader extends Component {
  render() {
    return (
      <div className="skeleton-movie">
        <div className="skeleton-movie-image">
          <button className="skeleton-download-btn"></button>
        </div>
        <div className="sabout">
          <p className="skeleton-name"></p>
          <p className="skeleton-by"></p>
        </div>
      </div>
    );
  }
}
