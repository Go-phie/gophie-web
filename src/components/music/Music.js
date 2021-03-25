import React, { useState } from "react";
import { Styles } from "./music.styles";
import { DownloadIcon } from "../../utils/icons";
import ReactPlayer from "react-player";
import { API_ENDPOINTS } from "../../utils";
import WaveLoading from "../Loader/WaveLoading";

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
  const [loadingDownload, setloadingDownload] = useState(false);

  const handlePlayRequest = () => {
    setCurrentMusic(id)
  }
  const handleStopRequest = () => {
    setCurrentMusic(null)
  }

  const downloadMusic = () => {
    fetch(API_ENDPOINTS.cors + downloadLink, {
      method: 'GET',
      headers: {
        'Content-Type': 'text/html'
      }
    })
      .then(setloadingDownload(true))
      .then((response) => response.blob())
      .then((blob) => {
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
        link.parentNode.removeChild(link);
        setloadingDownload(false);
      });
  };
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
        <div className='text-group'>
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
            className='gbtn gbtn-secondary'
          >
            {loadingDownload ? (
              <WaveLoading />
            ) : (
              <>
                <span className="mr-1">
                  <DownloadIcon />
                </span>
                download
              </>
            )}
          </button>
        </div>
      </div>
    </Styles.MusicCard>
  )
}

export default MusicGroup
