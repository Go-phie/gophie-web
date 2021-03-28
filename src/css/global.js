import {
  createGlobalStyle
} from "styled-components";

export const GlobalStyles = createGlobalStyle `


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
  transition: background-color 0.3s, color 0.3s;
}


.body-light {
  background-color: #FFF;
}


/* share card modal */
.modal-open .modal {
  z-index: 10000;
}

.share-card .modal-content {
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  padding: 4em;
}

.share-card .modal-header {
  border-bottom: none !important;
  padding: 0 !important;
}

.share-card .modal-body {
  padding: 0 !important;
}

.share-card .close {
    color: ${({ theme }) => theme.text};
}

 @media (max-width: 561px) {
  .share-card .modal-content {
    padding: 1em;
  }
 }
/* End share card modal */


.search-btn {
  color: grey;
  transition: .3s;
}


.rating-summary__container {
  top: 0;
  width: 100%;
  background: linear-gradient(360deg,transparent,rgba(0,0,0,.9)) !important;
  border-top-left-radius: .39em;
  border-top-right-radius: .39em;
  transition: .3s;
}

.gophie-modal__body--header {
    border-bottom: 1px solid ${({ theme }) =>
      theme.sharedBorderColor} !important;
}

.music {
  display: flex;
  flex-wrap: wrap;
  margin: 0 1.5em;
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

  .download-btn {
    color: #1e2126;
    position: absolute;
    bottom: 0;
    left: 0;
    margin: .59em;
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
  
  .download-btn:active {
    background: #dcc80d;
  }

  .download-btn:hover {
    background: #dcc80d;
    color: #1e2126;
  }



  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  /* Movie About Details */

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

  /* Movie About Details End */ 

  /* Modal boostrap style */

  .modal-body {
    font-size: 1.1em;
    line-height: 1.9;
    font-weight: 100;
  }
  /* Modal boostrap style End */

  /* skeleton loader styles */
  .skeleton-movies {
    display: flex;
    flex-flow: row wrap;
    justify-content: left;
    width: 100%;
  }

  div.skeleton-movie {
    width: 220px;
    min-height: 30vh;
    background: transparent;
    position: relative;
    margin: 10px;
    display: block;
  }

  /* Skeleton loader item */
  .skeleton-movie-image {
    height: 310px;
    width: 100%;
    justify-content: flex-start;
    position: relative;
    background-color: ${({ theme }) => theme.sidebarNav};
    border-radius: 3px;
    transition: .3s;
    overflow: hidden;
  }

.skeleton-movie-image::after { 
      display: block; 
      content: ""; 
      position: absolute; 
      width: 100%; 
      height: 100%; 
      transform: translateX(-100%); 
      background: -webkit-gradient(linear, left top, 
                  right top, from(transparent),  
                  color-stop(rgba(255, 255, 255, 0.2)), 
                  to(transparent)); 
                    
      background: linear-gradient(90deg, transparent, 
              rgba(255, 255, 255, 0.2), transparent); 
  
      /* Adding animation */ 
      animation: loading 0.8s infinite; 
  } 
  
  /* Loading Animation */ 
  @keyframes loading { 
      100% { 
          transform: translateX(100%); 
      } 
  } 
  /* End Skeleton loader item */





button {
  border-style: initial;
  border-color: initial;
  border-image: initial;
  outline: none !important;
}

.em {
  color: #dcc80d !important;
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

/* Logo svg animation */
#gophie-logo {
  fill: ${({ theme }) => theme.yellowText};
  stroke: ${({ theme }) => theme.yellowText};
}

#gophie-logo {
  stroke-width: 0;
  animation: logo 5s linear 1 forwards;
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