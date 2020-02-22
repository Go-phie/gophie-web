import React, { Component } from "react";
import "../css/movie.css";
import { DownloadIcon } from "./icons";

export default class SkeletonLoader extends Component {
    render(){
        return(
            <div className="skeleton-movie">
                <div className="skeleton-movie-image">
                    <a className="skeleton-download-btn"></a>
                </div>
                <div className="sabout">
                    <p className="skeleton-name"></p>
                    <p className="skeleton-by"></p>
                </div>
            </div>
        )
    }
}