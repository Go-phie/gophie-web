import styled from "styled-components";
import Carousel from "react-multi-carousel";

const Style = {
  TrendingMainCarousel: styled(Carousel)`
    .react-multi-carousel-item--active {
        &:not(:last-child) {
            margin-right: 1.1em;
        }
    }
    .trending-carousal-image__container {
      position: relative;
      background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
      min-height: 25em;
      min-width: 5em;
      transition: 0.5s all;
      border-radius: 0.7em;
      cursor: pointer;

      &:hover {
        content: "";
        position: absolute;
        top: 0;
        background: linear-gradient(transparent, rgba(0, 0, 0, 0.9)) !important;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -2;
        border-radius: 1em;
        transition: all 0.5s;
      }

        @media (max-width: 1300px) {
            min-height: 21em;
        }

        @media (max-width: 1300px) {
            min-height: 18em;
        }

        @media (max-width: 786px) {
            min-height: 16em;
        }
    }

    .trending-carousal-image {
      position: absolute;
      z-index: -1;
      width: 100%;
      height: 100%;
      max-height: 25em;
      object-fit: cover;
      border-radius: 0.7em;
      cursor: pointer;
    }

    .carousel-container {
      min-height: 25em;
      margin-top: 6em;
    }

    .carousal-image-detail {
      position: absolute;
      bottom: 0;
      padding: 1.5em 1em;
      user-select: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      p {
        color: #ffffff;
        font-size: 1em;
        line-height: 1.2;
        margin: initial;
        margin-left: .8em;
        text-align: right;

        @media (max-width: 1300px) {
            font-size: .85em;
        }
      }

      .carousal-download-btn {
        font-size: 1.1em;
        box-shadow: none !important;
        position: initial !important;
        padding: .87em;

        @media (max-width: 1300px) {
            padding: .8em;
        }
      }
    }

    .network-icon {
      max-width: 4.5em;
    }
  `
};

export default Style;
