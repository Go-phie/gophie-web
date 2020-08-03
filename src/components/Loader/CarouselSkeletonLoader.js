import React from "react";
import styled from "styled-components";

const CarouselSkeleton = styled.div `
  min-width: 10em !important;
  border-radius: 89em;
  min-height: 16em !important;
  margin-right: 1em;
  overflow: hidden;
  box-shadow: none;
  overflow-x: auto;
  scroll-snap-type: x mandatory;

  @media (max-width: 1300px) {
    height: 18em  !important;
    width: 12em !important;
  }

  @media (max-width: 786px) {
    height: 16 em!important;
  }

  @media(max-width: 678px) {
    height: 15em !important;
    width: 10em !important;
  }
`
const CarouselSkeletonLoader = () => {
  return (<CarouselSkeleton className="skeleton-movie-image"></CarouselSkeleton>
  );
}

export default CarouselSkeletonLoader;