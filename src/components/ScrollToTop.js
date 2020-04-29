import React, { Component } from "react";

class ScrollButton extends Component {
  constructor() {
    super();

    this.state = {
      intervalId: 0,
    };
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    let intervalId = setInterval(
      this.scrollStep.bind(this),
      this.props.delayInMs
    );
    this.setState({
      intervalId: intervalId,
    });
  }

  render() {
    return (
      <button
        title="Back to top"
        className="scroll"
        data-tour="my-ninth-step"
        onClick={() => {
          this.scrollToTop();
        }}
      >
        <span className="arrow-up glyphicon glyphicon-chevron-up"> </span>
      </button>
    );
  }
}

export default ScrollButton;
