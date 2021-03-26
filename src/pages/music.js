import React, { Component } from 'react'
import { GlobalStyles } from '../css/global'
import axios from 'axios'
import MobileNavbar from '../components/mobileNav/MobileNavbar'
import PageSidebar from '../components/pageSidebar/PageSidebar'
import MusicGroup from '../components/music/Music'
import MainPanel from './home.styles'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../css/theme'
import NavBar from '../components/navbar/Navbar'
import MusicSkeletonLoader from '../components/Loader/MusicSkeletonLoader'
import MusicSearchInput from '../components/musicSearchInput/MusicSearchInput'
import { defaultImage } from '../utils/index'

import {
  API_ENDPOINTS,
  musicEngines,
  nameToEngineMap,
  greekFromEnglish
} from '../utils'

export class Music extends Component {
  constructor (props) {
    super(props)

    this.state = {
      api: API_ENDPOINTS.mythra,
      server: musicEngines.get('Server1'),
      music: [],
      listMusic: [],
      listIndex: 10,
      isLast: false,
      query: 'Mirrors',
      isLoading: false,
      error: false,
      theme: 'light',
      currentMusic: null
    }
  }

  setTheme = () => {
    const theme = localStorage.getItem('theme')
    if (theme !== null) {
      this.switchTheme(theme === 'light' ? 'dark' : 'light')
    }
  }

  handleServerChange (event) {
    event.persist()
    let server = nameToEngineMap.get(
      event.currentTarget.getAttribute('data-value')
    )
    this.setState(
      {
        server,
        music: [],
        listMusic: [],
        listIndex: 10,
        isLast: false,
        currentMusic: null
      },
      () => {
        this.props.history.push(`/${greekFromEnglish(this.state.server)}`)
      }
    )
  }

  checkKey (e) {
    if (e.charCode !== 13) return
    this.setState({ music: [], isLoading: true })
    this.getMusic()
  }

  handleMusicSearch = () => {
    this.setState({ music: [], listMusic: [] })
    this.getMusic()
  }

  checkKeyOnChange = e => {
    this.setState({ query: e.target.value.toLowerCase() })
  }

  getMusic = () => {
    this.setState({
      isLoading: true
    })
    axios
      .get(
        `${this.state.api}/search?engine=${this.state.server}&query=${this.state.query}`
      )
      .then(res => {
        let durationRe = /:(\d)$/
        const music = res.data.map(song => {
          song.duration = song.duration.trim()
          let match = durationRe.exec(song.duration)
          if (match !== null) {
            song.duration = song.duration.slice(0, -1) + `0${match[1]}`
          }
          return song
        })
        this.setState({
          isLoading: false,
          music,
          listMusic: music.slice(0, 10),
          listIndex: 10,
          isLast: music.length > 10 ? false : true
        })
      })
      .catch(error => {
        console.error(error)
        // If Server 1 is unavailable
        if (this.state.server === musicEngines.get('Server1')) {
          this.setState(
            {
              server: musicEngines.get('Server2')
            },
            () => this.getMusic()
          )
        }
      })
  }

  handleScroll = () => {
    const wrappedElement = document.getElementById('music-div')
    const { listIndex, isLast, music, listMusic, isLoading, error } = this.state
    if (this.isBottom(wrappedElement)) {
      if (isLast || isLoading || error) return
      this.setState({ isLoading: true })
      setTimeout(() => {
        const newIndex = listIndex + 5
        this.setState({
          listIndex: newIndex,
          listMusic: [...listMusic, ...music.splice(listIndex, 5)],
          isLast: music.length <= newIndex,
          isLoading: false
        })
      }, 4000)
    }
  }

  isBottom = el => {
    return el.getBoundingClientRect().bottom <= window.innerHeight
  }

  componentDidMount () {
    this.getMusic()
    this.setTheme()
    window.addEventListener('storage', this.setTheme)
    document.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('storage', this.setTheme)
    document.removeEventListener('scroll', this.handleScroll)
  }

  switchTheme = mode => {
    switch (mode) {
      case 'light':
        localStorage.setItem('theme', 'dark')
        this.setState({ theme: 'dark' })
        break
      case 'dark':
        localStorage.setItem('theme', 'light')
        this.setState({ theme: 'light' })
        break
      default:
        break
    }
  }

  setCurrentMusic = id => {
    const { music } = this.state
    this.setState({ currentMusic: id }, () => {
      if (id === null) return
      if ('mediaSession' in navigator) {
        navigator.mediaSession.metadata = new window.MediaMetadata({
          title: music[this.state.currentMusic - 1].title,
          artist: music[this.state.currentMusic - 1].artiste,
          album: music[this.state.currentMusic - 1].collection,
          artwork: [
            {
              src: defaultImage,
              sizes: '96x96',
              type: 'image/png'
            },
            {
              src: defaultImage,
              sizes: '128x128',
              type: 'image/png'
            },
            {
              src: defaultImage,
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: defaultImage,
              sizes: '256x256',
              type: 'image/png'
            },
            {
              src: defaultImage,
              sizes: '384x384',
              type: 'image/png'
            },
            {
              src: defaultImage,
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        })
      }
    })
  }

  render () {
    const { theme } = this.state
    const selectedTheme = theme !== 'light' ? lightTheme : darkTheme
    const { listMusic } = this.state

    return (
      // Movie servers should not be showing on the Mobile music page
      // So MobileNavbar should be looked at
      <>
        <ThemeProvider theme={selectedTheme}>
          <>
            <GlobalStyles />
            <PageSidebar
              handleServerChange={this.handleServerChange.bind(this)}
              tour={this.startTour}
            />

            <MainPanel>
              <header>
                <div className='mtop' id='music-div'>
                  <MobileNavbar
                    theme={theme}
                    switchTheme={() => this.switchTheme(this.state.theme)}
                    handleServerChange={this.handleServerChange.bind(this)}
                  />
                  <NavBar
                    onMusicPage
                    theme={theme}
                    switchTheme={() => this.switchTheme(this.state.theme)}
                  />

                  <main>
                    <MusicSearchInput
                      query={this.state.query}
                      checkInputKey={this.checkKey.bind(this)}
                      checkKeyOnChange={this.checkKeyOnChange}
                      newSearch={this.handleMusicSearch.bind(this)}
                    />
                    <div className='music'>
                      {listMusic.length > 0
                        ? listMusic.map((song, i) => {
                            return (
                              <MusicGroup
                                key={i}
                                artiste={song.artiste}
                                title={song.title}
                                collection={song.collection}
                                duration={song.duration}
                                downloadLink={song.download_link}
                                pictureLink={song.picture_link}
                                id={song.index}
                                setCurrentMusic={this.setCurrentMusic.bind(
                                  this
                                )}
                                play={this.state.currentMusic === song.index}
                              />
                            )
                          })
                        : null}
                      {this.state.isLoading && !this.state.error && (
                        <div className='skeleton-movies'>
                          <MusicSkeletonLoader />
                          <MusicSkeletonLoader />
                          <MusicSkeletonLoader />
                          <MusicSkeletonLoader />
                        </div>
                      )}
                    </div>
                  </main>
                </div>
              </header>
            </MainPanel>
          </>
        </ThemeProvider>
      </>
    )
  }
}

export default Music
