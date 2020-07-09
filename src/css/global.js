import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  font-family:'Ubuntu',
  sans-serif;
}


body {
  background-color: ${({ theme }) => theme.body}; 
  padding: 0px;
  margin: 0px;
  margin-top: 80px;
  transition: background-color 0.3s, color 0.3s;
}

.body-light {
  background-color: #FFF;
}

.App {
  width: 100%;
  min-height: 100%;
  position: relative;
}

/* navbar global style */
.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1.5em 1.8em 1.5em 1.8em;
  box-shadow: -1px 5px 5px -1px #9ea9c02b;
  background-color: ${({ theme }) => theme.body};
  z-index: 999;
}

.share-card {
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
}

.header-left p {
  transition: .5s ease-in-out;
}

.header-left p:hover {
  transform: rotate(20deg);
}

.nav-bar__main--has-search input {
    background-color: ${({ theme }) => theme.movieBackground};
    color: ${({ theme }) => theme.formColor};
    outline: none;
    border: none;
    opacity: .9;
}
.nav-bar__main--has-search input:focus {
  background-color: ${({ theme }) => theme.movieBackground};
  color: ${({ theme }) => theme.text};
  opacity: .9;
}
.search-btn {
  color: grey;
  transition: .3s;
}

/* Engine Option */
.engine-option {
  display: flex;
  align-items: center;
  height: auto;
  margin: 0.1em 8%;
  justify-content: space-between;
  height: 3em;
  border-bottom: 2px solid ${({ theme }) => theme.movieBackground};
  margin-top: 5em;
}

.engine-option__title {
  font-size: 1.3em;
  color:  ${({ theme }) => theme.yellowText};
  padding: 0;
  margin: 0;
  letter-spacing: .05em;
  padding: 1em .5em;
  font-weight: 549;
  line-height: 0;
}

.engine-option__buton-container {
  line-height: 0;
  height: 100%;
}

.engine-option__buton-container button {
  height: 100%;
  background: none;
  outline: none;
  line-height: 0;
  outline: 0;
  border: none;
  margin: 0 auto;
  color:  ${({ theme }) => theme.text};
  cursor: pointer;
  padding: 1em 1.2em;
  letter-spacing: .05em;
  position: relative;
}

.tvIcon {
  display: none;
}

.engine-option__buton-container button:hover {
  color:  ${({ theme }) => theme.yellowText};
}

.engine-option__buton-container button:hover:after {
  position: absolute;
  content: '';
  height: .19em;
  width: 100%;
  border-radius: 5em;
  bottom: 0;
  background-color:  ${({ theme }) => theme.yellowText};
  left: 0;
}

.engine-option__buton-container button.selected{
  color:  ${({ theme }) => theme.yellowText};
}

.engine-option__buton-container button.selected:after {
  position: absolute;
  content: '';
  height: .19em;
  width: 100%;
  border-radius: 5em;
  bottom: 0;
  background-color:  ${({ theme }) => theme.yellowText};
  left: 0;
}
@media (max-width: 830px) {
  .nav-bar {
    padding: 1em 0 1em 1em;
  }

  .nav-bar__main--has-search {
      margin: initial;
  }
     
  .nav-bar__main {
    padding: 0 !important;
  }

  .nav-bar__main--brand {
    margin-right: .5em;
    width: 10%;
  }

  .actions-button {
    font-size: 1.2em !important;
    margin: 0 !important;
  }

  .nav-bar__action-buttons button:first-child  {
    display: none !important;
  }

  .engine-option {
    margin-top: 6em;
    margin-top: 3em;
    border: 0 !important;
  }

  .engine-option__title {
    display: none;
  }

  .engine-option__buton-container {
    display: flex;
    justify-content: space-between !important;
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-width: none;
  }

  .engine-option__buton-container button {
    margin: 0 !important;
    white-space: nowrap;
  }

  
}

@media (max-width: 440px) {
  .engine-option {
    margin-top: 2em;
  }
  .engine-option__buton-container button {
    padding: 1em .5em;
    margin: 0 !important;
  }
}

  @media (max-width: 375px) {
    .tvIcon {
      display: block;
    }
    .gophieLogo {
      display: none;
    }

    .nav-bar__main {
        justify-content: space-between;
        padding: 1em;
     }
  }
/* End engine Option */

.rating-summary__container {
  top: 0;
  width: 100%;
  background: linear-gradient(360deg,transparent,rgba(0,0,0,.9)) !important;
  border-top-left-radius: .39em;
  border-top-right-radius: .39em;
  transition: .3s;
}

.gophie-modal__body--header {
    border-bottom: 1px solid ${({ theme }) => theme.sharedBorderColor} !important;
}

.movie-shared-detail .MuiSvgIcon-root {
  fill: ${({ theme }) => theme.text} !important;
}

.shared-detail-content {
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.movieBackground};   
}

.dialog-theme {
  .modal-content {
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.body};
  }

  .close {
    color: ${({ theme }) => theme.text};
  }

  .cancel-btn {
    background-color: #e7d10a;
    border-radius: 5px;
    color: '#121620';
  }
}


.server-selector {
  background-color: #e7d10a;
  border: 1px solid ${({ theme }) => theme.borderColor};
  color: #1e2126;
  font-weight: bold;
  padding: 10px 25px;
  justify-content: center;
  font-size: 15px;
  border-radius: 5px;
  outline: none;
}

.year-selector {
  background-color: #e7d10a;
  border: 1px solid ${({ theme }) => theme.borderColor};
  color: #1e2126;
  font-weight: bold;
  padding: 10px 25px;
  width:150px;
  margin-left:20px;
  justify-content: center;
  font-size: 15px;
  border-radius: 5px;
  outline: none;
}

@media screen and (max-width:768px){
  .year-selector{
    display:none;
  }
}

.server-selector > option {
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.yellowText};
  padding: 1em .5em;
}
.year-selector > option {
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.yellowText};
  padding: 1em .5em;
}

.trending-loader-container {
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  position: absolute;
  top: 0;
}

.trending_name {
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.yellowText};
  padding: .65em .5em;
  position: absolute;
  top: 290px;
  z-index: 1000;
  margin: .2em;
  border-left: 5px solid #e0c700;
  border-radius: 0 .2em .2em 0;
  text-transform: capitalize;
}

div.movies {
  margin: 5em;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: 1.3em;
}

@media (max-width: 991px) {
  div.movies {
  margin: 2em;
  }
}

div.skeleton-movies {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;
}

.error {
  display: block;
  align-items: center;
  text-align: center;
  width: 100%;
}

.error-text {
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  font-size: 20px;
}

.error-retry-btn {
  border: 1px solid ${({ theme }) => theme.borderColor};
  background-color: #e7d10a;
  color: #1e2126;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 768px) {
  .header-left {
    display: none;
  }

  .header-center {
    width: 80%;
  }

  .header-right {
    width: 20%;
  }

  div.movie {
      width: 100%;
  }
}

@media (max-width: 450px) {

    .server-selector {
        padding: 10px .3em;
    }
    .year-selector {
        padding: 10px 0px;
    }
}

div.movie {
    width: 220px;
    min-height: 30vh;
    height: 100%;
    background: transparent;
    position: relative;
    margin: .9em;
    display: block;
  }
  
  div.movie-image {
    height: 80%;
    width: 100%;
    left: 0;
    position: relative;
  }

  div.movie-image img {
    box-shadow: 2px 7px 8px 2px ${({ theme }) => theme.movieBoxShadow};
    height: 20em;
    width: 100%;
    margin: auto;
    transition: .3s;
    border-top-left-radius: .39em;
    border-top-right-radius: .39em;
    cursor: pointer;
    object-fit: cover;
  }
  
  div.movie-image img:hover {
    box-shadow: 2px -2px 8px 2px ${({ theme }) => theme.movieBoxShadow};
    transform: translateY(-3%);
  }
  
  .download-btn {
    color: #1e2126;
    position: absolute;
    bottom: -.7em;
    right: .9em;
    text-decoration: none;
    background: #e7d10a;
    border-radius: 50%;
    outline: none;
    border: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2em;
    padding: .65em;
    cursor: pointer;
    box-shadow: 0px 0px 7px -2px #121315;
  }

  .share-btn {
    right: 3.2em;
  }
  
  .download-btn:active {
    background: #dcc80d;
  }

  .download-btn:hover {
    background: #dcc80d;
    color: #1e2126;
  }

  .carousal-download-btn {
    font-size: 1.1em;
    margin-left: .5em;
    box-shadow: none !important;
    position: initial !important;
  }

  .carousal-image-detail {
    position: absolute;
    bottom: 0;
    padding: .5em 1em;
    user-select: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .carousal-image-detail--main {
    line-height: 0;
  }

  .carousal-image-detail--main p:first-child {
    background: #ffffff;
    color: #1e2126;
    display: inline-block;
    padding: 1em .3em;
    font-size: .8em;
    font-weight: 600;
  }

  .carousal-image-detail--main p:last-child {
    color: #ffffff;
    font-size: 1.09em;
    margin-top: .1em;
    line-height: 1.2;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  /* Movie About Details */
  .movie__about {
    width: 100%;
    height: 8em;
    padding: .5em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: ${({ theme }) => theme.movieBackground}; 
    order-bottom-left-radius: .39em;
    border-bottom-right-radius: .39em;
  }
  
  .movie__about .name {
    font-size: .9em;
    line-height: 1.5;
    font-weight: 600;
    color: ${({ theme }) => theme.text};
    text-transform: capitalize;
  }

  .searchInt{
    color: ${({ theme }) => theme.text}
  }
  
  .cancel-btn{
    color: ${({ theme }) => theme.text}
  }


  @media (max-width: 561px) {
    .gophie-modal-rating-container__average{
      margin-bottom: 0.7em;
  }
  }
  
  .movie__about-meta {
    display: flex;
    justify-content: space-between;
    margin-top: .78em;
    align-items: center
  }
  
  .movie__about-meta .movie-source {
    background-color: #e7d10a;
    padding: .2em .5em;
    font-size: .7em;
    color: #121620;
    font-weight: 600;
    border-radius: .2em;
  }

  .movie-size {
    font-size: .75em;
    font-weight: 600;
    color: ${({ theme }) => theme.text}; 
    opacity: 0.5;
    text-transform: uppercase;
  }
  /* Movie About Details End */ 

  /* Modal boostrap style */

  .modal-body {
    font-size: 1.1em;
    line-height: 1.9;
    font-weight: 100;
  }
  /* Modal boostrap style End */
  /* skeleton loader styles */
  
  div.skeleton-movie {
    width: 220px;
    min-height: 30vh;
    background: transparent;
    position: relative;
    margin: 10px;
    display: block;
  }

  div.skeleton-movie-image {
    height: 310px;
    width: 100%;
    margin: auto;
    justify-content: center;
    left: 0;
    position: relative;
    background-color: #635c21;
    box-shadow: 4px 4px 16px 2px #1e2023;
    border-radius: 3px;
    transition: .3s;
    animation: blink 1s infinite;
    -webkit-animation-direction: alternate-reverse;
  }

  .skeleton-download-btn {
    position: absolute;
    top: 80%;
    right: 10%;
    height: 50px;
    width: 50px;
    text-decoration: none;
    background: #6b6320;
    border-radius: 50%;
    outline: none;
    border: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0px;
    box-shadow: 0px 0px 7px -2px #121315;
  }
  
  div.skeleton-movie__about p {
    border-radius: 5px;
  }
  
  p.skeleton-name {
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    height: 28px;
    width: 200px;
    background-color: #635c21;
    margin: 0px;
    margin-top: 10px;
    transition: .3s;
    animation: blink 1s infinite;
    animation-delay: .3s;
    -webkit-animation-direction: alternate-reverse;
  }
  
  p.skeleton-by,
  p.pub-by {
    font-size: 13px;
    font-weight: 600;
    color: #fff;
    opacity: 0.5;
    width: 150px;
    height: 20px;
    background-color: #635c21;
    margin: 0px;
    margin-top: 10px;
    transition: .3s;
    animation: blink 1s infinite;
    animation-delay: .5s;
    -webkit-animation-direction: alternate-reverse;
  }
  
  
  @keyframes blink {
    to {
      opacity: .5;
    }
  }
  


 
.scroll {
  opacity: 0.8;
  background-color: #e7d10a;
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 10px;
  right: 15px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  animation: moveup 3s infinite linear;
}

@keyframes moveup {
  0% {
    transform: translateY(0em);
  }
  50% {
    transform: translateY(-.5em);
  }
  100% {
    transform: translateY(0em);
  }
}



.scroll:hover {
  opacity: 1;
}

.arrow-up {
  color: #121620;
  position: absolute;
  top: 50% ;
  left: 50% ;
  margin-top: -10px;
  margin-left: -10px;
  border-bottom: 5px solid #121620;
  width: 20px;
  height: 20px;
  border-left: 5px solid #121620;
  transform: rotate(135deg);
}

.github-button{
  padding: 0;
  background: #121620;
}

.github-button svg path {
  fill: #e7d10a;
}

.github-button svg path:hover {
    background: #dcc80d;
}

/* Customize select button */
select {
    -webkit-appearance: none;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAeCAYAAABuUU38AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAUxJREFUeNrM1sEJwkAQBdCsngXPHsQO9O5FS7AAMVYgdqAd2IGCDWgFnryLFQiCZ8EGnJUNimiyM/tnk4HNEAg/8y6ZmMRVqz9eUJvRaSbvutCZ347bXVJy/ZnvTmdJ862Me+hAbZCTs6GHpyUi1tTSvPnqTpoWZPUa7W7ncT3vK4h4zVejy8QzM3WhVUO8ykI6jOxoGA4ig3BLHcNFSCGqGAkig2yqgpEiMsjSfY9LxYQg7L6r0X6wS29YJiYQYecemY+wHrXD1+bklGhpAhBDeu/JfIVGxaAQ9sb8CI+CQSJ+QmJg0Ii/EE2MBiIXooHRQhRCkBhNhBcEhLkwf05ZCG8ICCOpk0MULmvDSY2M8UawIRExLIQIEgHDRoghihgRIgiigBEjgiFATBACAgFgghEwSAAGgoBCBBgYAg5hYKAIFYgHBo6w9RRgAFfy160QuV8NAAAAAElFTkSuQmCC");
  background-repeat: no-repeat;
  background-size: 14px;
  margin-right: 20px;
  background-position: 90% center;
  outline: none;
  cursor: pointer;
}

/* Utility Styling */
.actions-button {
  color: grey;
  font-size: 1.5em;
  background: transparent;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  outline: none !important;
}

button {
  border-style: initial;
  border-color: initial;
  border-image: initial;
  outline: none !important;
}

.em {
  color: #dcc80d !important;
} /* Movie ard for small screens */
@media (max-width: 561px) {
  div.movie {
    display: flex;
    width: 100%;
    height: initial;
    margin: 0 0 1.5em 0;
    max-height: 15em;
  }


  div.movie-image {
    height: 100%;
  }


  div.movie-image img {
    height: 100%;
    border-bottom-left-radius: 0.3em;
    border-top-right-radius: initial;
    box-shadow: initial;
    min-height: initial;
    object-fit: cover;
  }

  .download-btn {
    height: 43px;
    width: 43px;
    bottom: 0.3em;
    right: -9em;
  }

  .share-btn {
    right: -6.7em;
  }

  .movie__about {
    border-top-right-radius: 0.39em;
    border-bottom-start-radius: initial;
    height: 100%;
  }

  .movie__about-meta {
    flex-direction: column-reverse;
    align-items: flex-start;
  }

  .movie__about-meta .movie-source {
    background-color: #d0bd0a;
  }



  div.skeleton-movies {
    display: flex;
    flex-flow: column;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    overflow: hidden;
  }

  div.skeleton-movie {
    display: flex;
    width: 100%;
    flex-direction: row;
    margin: 0 0 2em 0;
    max-height: 15em;
    min-height: initial;
    position: initial;
    justify-content: space-between;
  }

  div.skeleton-movie-image {
    height: 15em;
    width: 100%;
    margin: 0 .5em 0 0;
  }

  div.sabout {
    width: 100%;
  }

  .skeleton-download-btn {
      height: 39px;
      width: 39px;
      bottom: -0.7em;
      right: -9em;
  }

  div.skeleton-movie__about p {
    border-radius: 5px;
  }

  p.skeleton-name {
    height: 80%;
    width: 100%;
    margin-top: initial;
    border-radius: .2em;
  }
  
  p.skeleton-by,
  p.pub-by {
    width: 30%;
    height: 10%;
  }

  .actions-button {
    height: 2.5em;
    width: 2.5em;
  }
  }
  
  .gophie-alert {
    position: fixed !important;
    bottom: -.2em;
    left: 0;
    margin: .7em;
    max-width: 28em;
    border: 0;
    background-color: ${({ theme }) => theme.movieBackground} !important;
    color: ${({ theme }) => theme.text} !important;
}

@media (max-width: 450px) {
  .download-btn {
    bottom: .1em;
    right: -7em;
  }

  .share-btn {
    right: -5em;
  }
}

.gophie-modal-rating-container__average--container__on-card p {
  color: ${({ theme }) => theme.text}
}

.gophie-alert a {
  color: ${({ theme }) => theme.yellowText} !important;
  text-decoration: none;
}

.gophie-link {
  color: ${({ theme }) => theme.yellowText} !important;
  text-decoration: none;
}

.trending-title {
  color:  ${({ theme }) => theme.yellowText};
  margin-top: 4em !important;
  margin: 0.1em 8%;
  font-weight: 600;
  font-size: 1.3em;
  padding-top: 1em;
  padding-bottom: 1em;
}

.trending-carousal-image__container {
  position: relative;
  background: linear-gradient(transparent,rgba(0,0,0,.9));
  margin: .2em;
  min-height: 25em;
  min-width: 5em;
  transition: .5s all;
  border-radius: .7em;
  cursor: pointer;
}

.trending-carousal-image__container:hover {
  content: '';
  position: absolute;
  top: 0;
  background: linear-gradient(transparent,rgba(0,0,0,.9)) !important;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -2;
  border-radius: 1em;
  transition: all .5s;
}

.trending-carousal-image {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  max-height: 25em;
  object-fit: cover;
  border-radius: .7em;
  cursor: pointer;
}

.carousel-container  {
  min-height: 25em;
      margin-top: 6em;
}

.network-icon {
  max-width: 4.5em;
}

.react-multiple-carousel__arrow  {
  z-index: 100;
}

.react-multiple-carousel__arrow::before {
  color: golden-rod !important;
}

/* Logo svg animation */
#gophie-logo {
  fill: ${({ theme }) => theme.yellowText};
  stroke: ${({ theme }) => theme.yellowText};
}

#gophie-logo {
  stroke-width: 0;
  animation: logo 5s linear 2 forwards;
}

#gophie-tv {
  fill: ${({ theme }) => theme.yellowText};
  stroke: ${({ theme }) => theme.yellowText};
  stroke-width: 0;
  animation: logoTV 1s infinite;
  -webkit-animation-direction: alternate-reverse;
}

@keyframes logoTV {
  0% {
    stroke-width: 1pt;
    stroke-dashoffset: 1200;
    fill-opacity: 0;
  }
  50% {
    fill-opacity: 0;
  }
  100% {
    stroke-dashoffset: 0;
    fill-opacity: 1;
    stroke-width: 0pt;
  }
}

@keyframes logo {
  0% {
    stroke-width: 1pt;
    stroke-dashoffset: 1200;
    fill-opacity: 0;
  }
  50% {
    fill-opacity: 0;
  }
  100% {
    stroke-dashoffset: 0;
    fill-opacity: 1;
    stroke-width: 0pt;
  }
}


.site-footer {
    background-color: ${({ theme }) => theme.body};
    box-shadow: 2px 10px 10px 2px ${({ theme }) => theme.text};
}

.site-footer h6 {
  color: ${({ theme }) => theme.text};
}

.scollable-container {
  background-color: ${({ theme }) => theme.movieBackground};
  height: 10em;
  padding: .5em;
  overflow-x: hidden;
  overflow-y: scroll;
  overflow-wrap: anywhere;
}

.episode-link::first-letter {
  text-transform:  capitalize;
}

.episode-link {
  line-height: 1.3em;
  font-size: .9em;
  margin-bottom: .5em;
  text-transform: lowercase;
}
`;
