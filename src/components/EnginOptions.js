import React, { Component } from "react";
import { greekFromEnglish } from "../utils";

export default class EngineOptions extends Component {
  render() {
    const { server, handleServerChange } = this.props;
    return (
      <div className="engine-option">
        <h2 className="engine-option__title">Discover movies</h2>

        <div className="engine-option__buton-container">
          <button
            className={
              greekFromEnglish(server) === "Delta"
                ? "ml-4 shadow-none selected"
                : "ml-4 shadow-none"
            }
            onClick={handleServerChange}
            value="Delta"
          >
            Delta
          </button>
          <button
            className={
              greekFromEnglish(server) === "Alpha"
                ? "ml-4 shadow-none selected"
                : "ml-4 shadow-none"
            }
            onClick={handleServerChange}
            value="Alpha"
          >
            Alpha
          </button>
          <button
            className={
              greekFromEnglish(server) === "Iota"
                ? "ml-4 shadow-none selected"
                : "ml-4 shadow-none"
            }
            onClick={handleServerChange}
            value="Iota"
          >
            Iota <small>(HD)</small>
          </button>
          <button
            className={
              greekFromEnglish(server) === "Zeta"
                ? "ml-4 shadow-none selected"
                : "ml-4 shadow-none"
            }
            onClick={handleServerChange}
            value="Zeta"
          >
            Zeta <small>(Series)</small>
          </button>
        </div>
      </div>
    );
  }
}
