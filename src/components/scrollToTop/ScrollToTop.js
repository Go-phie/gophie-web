import React, { Component } from "react";
import styled from "styled-components";

const ScrollToTopButton = styled.div `
    opacity: 0.8;
    background-color: #e7d10a;
    width: 40px;
    height: 40px;
    position: fixed;
    bottom: 10px;
    right: 15px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    animation: moveup 1s infinite linear;

    @keyframes moveup {
      0% {
        transform: translateY(0em);
      }
      50% {
        transform: translateY(-.5em);
      }
      100% {
        transform: translateY(0em);
      }
    }

    &:hover {
      opacity: 1;
    }

    .arrow-up {
      color: #121620;
      position: absolute;
      top: 50% ;
      left: 50% ;
      margin-top: -10px;
      margin-left: -10px;
      border-bottom: 5px solid #121620;
      width: 20px;
      height: 20px;
      border-left: 5px solid #121620;
      transform: rotate(135deg);
    }
`
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
      <ScrollToTopButton
        title="Back to top"
        onClick={() => {
          this.scrollToTop();
        }}
      >
        <span className="arrow-up glyphicon glyphicon-chevron-up"> </span>
      </ScrollToTopButton>
    );
  }
}

export default ScrollButton;
