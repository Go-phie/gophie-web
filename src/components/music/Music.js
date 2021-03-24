import React from 'react'
import { Styles } from './music.styles'
import { DownloadIcon } from '../../utils/icons'
import ReactPlayer from 'react-player'

const MusicGroup = ({
  id,
  artiste,
  title,
  collection,
  duration,
  downloadLink,
  pictureLink,
  setCurrentMusic,
  play
}) => {
  const handlePlayRequest = () => {
    setCurrentMusic(id)
  }
  const handleStopRequest = () => {
    setCurrentMusic(null)
  }

  const downloadMusic = () => {
    fetch('https://gophie-cors.herokuapp.com/' + downloadLink, {
      method: 'GET',
      headers: {
        'Content-Type': 'text/html'
      }
    })
      .then(response => response.blob())
      .then(blob => {
        // Create blob link to download
        const url = window.URL.createObjectURL(new Blob([blob]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', `${title}.mp3`)

        // Append to html link element page
        document.body.appendChild(link)

        // Start download
        link.click()

        // Clean up and remove the link
        link.parentNode.removeChild(link)
      })
  }
  return (
    <Styles.MusicCard background={pictureLink}>
      <div className='image-group'>
        {play ? (
          <button className='player-stop-button' onClick={handleStopRequest}>
            <span></span>
          </button>
        ) : (
          <button className='player-button' onClick={handlePlayRequest}>
            <span></span>
          </button>
        )}
        {play ? (
          <ReactPlayer
            url={downloadLink}
            className='music-react-player'
            playing
            playsinline
            pip
            controls
            width='100%'
            height='30%'
          />
        ) : null}
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
            onClick={() => downloadMusic()}
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
