import React, { useState } from 'react'
import { Styles } from './music.styles'
import { DownloadIcon } from '../../utils/icons'
import ReactPlayer from 'react-player'
import axios from 'axios'

const MusicGroup = ({
  artiste,
  title,
  collection,
  duration,
  downloadLink,
  pictureLink
}) => {
  const [state, setState] = useState({ play: false })

  const handlePlayRequest = () => {
    setState(prevState => ({ ...prevState, play: true }))
  }
  const handleStopRequest = () => {
    setState(prevState => ({ ...prevState, play: false }))
  }

  const downloadMovie = () => {
    const headers = {
      'Content-Type': 'application/force-download'
    }
    axios
      .get(downloadLink, {
        headers: headers
      })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <Styles.MusicCard background={pictureLink}>
      <div className='image-group'>
        {state.play ? (
          <div className='group'>
            <button className='player-stop-button' onClick={handleStopRequest}>
              <span></span>
            </button>
            <ReactPlayer
              url={downloadLink}
              className='react-player'
              playing
              playsinline
              pip
              controls
              width='100%'
              height='90%'
            />
          </div>
        ) : (
          <button className='player-button' onClick={handlePlayRequest}>
            <span></span>
          </button>
        )}
        <div className='duration'>{duration}</div>
      </div>
      <div className='music-details'>
        <div>
          <h2 title={title}>
            <span>
              {artiste.substring(0, 20)} {artiste.length > 20 ? '...' : null}
            </span>{' '}
            - {title.substring(0, 20)} {title.length > 20 ? '...' : null}
          </h2>
          <small>{collection}</small>
        </div>
        <div>
          <button
            onClick={() => downloadMovie()}
            target='_blank'
            rel='noopener noreferrer'
            className='gbtn gbtn-secondary mr-3'
          >
            <span className='mr-1'>
              <DownloadIcon />
            </span>
            download
          </button>
        </div>
      </div>
    </Styles.MusicCard>
  )
}

export default MusicGroup
