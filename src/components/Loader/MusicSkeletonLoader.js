import React from 'react'
import styled from 'styled-components'

const SkeletonLoaderStyle = styled.div`
  width: 100% !important;
  height: 130px !important;
  margin-bottom: 1.5em;
  margin-right: 3em;
  border-radius: 1em;

  @media (max-width: 1300px) {
    height: 18em !important;
    width: 10em !important;
  }

  @media (max-width: 786px) {
    height: 16 em !important;
  }

  @media (max-width: 678px) {
    height: 15em !important;
    width: calc(33.333% - 1em) !important;
  }

  @media (max-width: 414px) {
    height: 15em !important;
    width: calc(50% - 1em) !important;
  }
`
const MusicSkeletonLoader = () => {
  return (
    <SkeletonLoaderStyle className='skeleton-movie-image'></SkeletonLoaderStyle>
  )
}

export default MusicSkeletonLoader
