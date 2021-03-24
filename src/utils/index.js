/* eslint-disable react/display-name */
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

export function isImageURL (url) {
  return (
    url.match(/\.(jpeg|jpg|gif|png|googleusercontent)$/) != null ||
    url.match(/(h3uo)$/) != null
  )
}

export const tourSteps = [
  {
    selector: '[data-tour="my-first-step"]',
    content: `Welcome to Gophie. It is a free movie download site without ads created using the power of web scraping by Bisoncorps.`
  },
  {
    selector: '[data-tour="server1"]',
    content: `Download latest MOVIES`
  },
  {
    selector: '[data-tour="server2"]',
    content: `Download latest ANIME - (scroll to checkout our various servers)`
  }
  // {
  //   selector: '[data-tour="server3"]',
  //   content: `Download latest HD MOVIES`
  // },
  // {
  //   selector: '[data-tour="server4"]',
  //   content: `Download latest SERIES`
  // },
  // {
  //   selector: '[data-tour="server5"]',
  //   content: `Download latest MOVIES`
  // },
  // {
  //   selector: '[data-tour="server6"]',
  //   content: `Download latest KOREAN MOVIES`
  // }
]

let nm = new Map()
//nm.set("Styx", "mycoolmoviez");
nm.set('Server1', 'fzmovies')
nm.set('Server2', 'takanimelist')
nm.set('Server3', 'besthdmovies')
nm.set('Server4', 'tvseries')
//nm.set("Server5", "netnaija");
nm.set('Server6', 'kdramahood')
nm.set('Server7', 'animeout')

let me = new Map()
me.set('Server1', 'myfreemp3')
me.set('Server2', 'mp3s')
export const musicEngines = me

export const nameToEngineMap = nm

function toServerName (map, name) {
  const lowered = String(name).toLowerCase()
  for (let [key, val] of map.entries()) {
    if (val === lowered) {
      return key
    }
  }
}

export function greekFromEnglish (eng) {
  return toServerName(nm, eng)
}

export const API_ENDPOINTS = {
  //  ocena: "https://staging-ocena.herokuapp.com",
  ocena: 'https://gophie-ocena.herokuapp.com',
  ip: 'https://api.ipify.org?format=json',
  mythra: 'https://mythra.gophie.cam',
  cors: 'https://gophie-cors.herokuapp.com/'
}

export const disableBody = target => disableBodyScroll(target)
export const enableBody = target => enableBodyScroll(target)
