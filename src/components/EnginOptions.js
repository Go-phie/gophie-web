import React, { Component } from "react";

export default class EngineOptions extends Component {
  render() {
    return (
      <div className="engine-option">
        <h2 className="engine-option__title">Discover movies</h2>

        <div className="engine-option__buton-container">
          <button onClick={this.props.handleServerChange} value="Delta">
            Delta
          </button>
          <button className="ml-4 shadow-none" onClick={this.props.handleServerChange} value="Alpha">
            Alpha
          </button>
          <button className="ml-4 shadow-none" onClick={this.props.handleServerChange} value="Iota">
            Iota <small>(HD)</small> 
          </button>
          <button className="ml-4 shadow-none" onClick={this.props.handleServerChange} value="Zeta">
            Zeta <small>(Series)</small>
          </button>
        </div>
      </div>
    );
  }
}
