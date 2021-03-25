import axios from 'axios'
import React, { useState } from 'react'
import { Styles } from './music.styles'
import { DownloadIcon } from '../../utils/icons'
import ReactPlayer from 'react-player'
import { API_ENDPOINTS } from '../../utils'
import WaveLoading from '../Loader/WaveLoading'
import { Progress } from 'react-sweet-progress'
import 'react-sweet-progress/lib/style.css'

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
  const [loadingDownload, setloadingDownload] = useState(false)
  const [progress, setProgress] = useState(0)
  const [total, setTotal] = useState(0)

  const cancelTokenSource = axios.CancelToken.source()

  const handlePlayRequest = () => {
    // Set MediaMetadata for player
    if ('mediaSession' in navigator) {
      navigator.mediaSession.metadata = new window.MediaMetadata({
        title,
        artist: artiste,
        album: collection
      })
    }
    setCurrentMusic(id)
  }
  const handleStopRequest = () => {
    setCurrentMusic(null)
  }

  const handleEndDownload = () => {
    setloadingDownload(false)
    setProgress(0)
    setTotal(0)
  }

  // use cancelToken.cancel() to cancel download
  const cancelToken = axios.CancelToken.source()

  const downloadMusic = () => {
    axios
      .request({
        url: API_ENDPOINTS.cors + downloadLink,
        method: 'GET',
        cancelToken: cancelToken.token,
        headers: {
          'Content-Type': 'text/html'
        },
        onDownloadProgress: p => {
          if (total === 0) {
            setTotal(p.total)
          }
          setProgress(p.loaded)
        },
        cancelToken: cancelTokenSource.token
      })
      .then(setloadingDownload(true))
      .then(response => {
        // Create blob link to download
        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', `${title}-${artiste}.mp3`)

        // Append to html link element page
        document.body.appendChild(link)

        // Start download
        link.click()

        // Clean up and remove the link
        link.parentNode.removeChild(link)
        handleEndDownload()
      })
      .catch(error => {
        if (axios.isCancel(error)) {
          handleEndDownload()
          console.log('Download cancelled')
        } else {
          console.error(error)
        }
      })
  }

  const cancelDownLoad = () => {
    cancelTokenSource.cancel('canceled request')
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
          {total ? (
            <button
              onClick={() => cancelDownLoad()}
              target='_blank'
              rel='noopener noreferrer'
              className='gbtn gbtn-secondary mr-1'
            >
              Cancel
            </button>
          ) : null}
          <button
            onClick={() => downloadMusic()}
            target='_blank'
            rel='noopener noreferrer'
            className='gbtn gbtn-secondary'
            disabled={loadingDownload}
          >
            {total ? (
              <Progress
                type='circle'
                width={30}
                status='default'
                symbolClassName='symbol'
                theme={{
                  default: {
                    trailColor: 'lime',
                    color: 'green'
                  }
                }}
                percent={Math.floor((progress / total) * 100)}
              />
            ) : loadingDownload ? (
              <WaveLoading />
            ) : (
              <>
                <span className='mr-1'>
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