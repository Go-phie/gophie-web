import React from 'react'
import styled from 'styled-components'

const SkeletonLoaderStyle = styled.div`
  width: calc(100% - 5em) !important;
  height: 8em !important;
  margin: 1em auto;
  border-radius: 1em;

  @media (max-width: 1300px) {
    height: 8em !important;
  }

  @media (max-width: 786px) {
    height: 8em !important;
    width: calc(100% - 1.5em);
  }

  @media (max-width: 678px) {
    height: 8em !important;
    width: calc(100% - 1.5em) !important;
  }

  @media (max-width: 414px) {
    height: 8em !important;
    width: calc(100% - 1.5em);
    /* width: calc(50% - 1em) !important; */
  }
`
const MusicSkeletonLoader = () => {
  return (
    <SkeletonLoaderStyle className='skeleton-movie-image'></SkeletonLoaderStyle>
  )
}

export default MusicSkeletonLoader
