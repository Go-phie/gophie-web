import React, { Component } from "react";
import { greekFromEnglish } from "../../utils";

export default class EngineOptions extends Component {
  render() {
    const { server, handleServerChange } = this.props;
    return (
      <div className="engine-option">
        <h2 className="engine-option__title">Discover movies</h2>

        <div className="engine-option__buton-container">
          <button
            className={
              greekFromEnglish(server) === "Server1"
                ? "shadow-none selected"
                : "shadow-none"
            }
            onClick={handleServerChange}
            value="Server1"
          >
            Server1
          </button>

          <button
              className={
                greekFromEnglish(server) === "Server2"
                  ? "shadow-none selected"
                  : "shadow-none"
              }
              onClick={handleServerChange}
              value="Server2"
            >
            Server2 <small style={{ display: "contents" }}>(Anime)</small>
          </button>
          <button
            className={
              greekFromEnglish(server) === "Server3"
                ? "shadow-none selected"
                : "shadow-none"
            }
            onClick={handleServerChange}
            value="Server3"
          >
            Server3 <small style={{ display: "contents" }}>(HD)</small>
          </button>
          <button
            className={
              greekFromEnglish(server) === "Server4"
                ? "shadow-none selected"
                : "shadow-none"
            }
            onClick={handleServerChange}
            value="Server4"
          >
            Server4 <small style={{ display: "contents" }}>(Series)</small>
          </button>
          <button
            className={
              greekFromEnglish(server) === "Server5"
                ? "shadow-none selected"
                : "shadow-none"
            }
            onClick={handleServerChange}
            value="Server5"
          >
            Server5 
          </button>
        </div>
      </div>
    );
  }
}
