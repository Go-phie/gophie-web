import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  font-family: 'Pacifico', cursive;
  font-family: 'Righteous', cursive;
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

.header {
  position: fixed;
  top: 0;
  left: 0;
  display: inline-flex;
  align-items: center;
  width: 100%;
  height: 50px;
  box-shadow: #000 0px -2px 8px 1px;
  background-color: ${({ theme }) => theme.body};
  z-index: 999;
}

.header-left, .header-center, .header-right {
  width: 10%;
  height: 100%;
  display: inline-flex;
  align-items: center;
  text-align: center;
  justify-content: center;
}

.header-left {
  color: ${({ theme }) => theme.yellowText}; 
  font-weight: bold;
  font-size: 20px;
}

.header-right {
  width: 15%;
}

.header-center {
  width: 75%;
}

.form-control {
  width: 100%;
  height: 98%;
  outline: none;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.yellowText};
  background: transparent;
  color: ${({ theme }) => theme.yellowText};
  font-size: 19px;
  padding-left: 10px;
}

.form-control::placeholder {
  color: ${({ theme }) => theme.yellowText};
  opacity: 0.5;
  font-size: 17px;
}

.search-btn {
  border-radius: 0 6px 6px 0;
  background: #ffe401;
  color: #FFF;
  border: 1px solid ${({ theme }) => theme.borderColor};
  outline: none;
  padding: 5px 20px;
  cursor: pointer;
  height: 100%;
  width: 100%;
  transition: .3s;
}

.search-btn:hover {
  background-color: #e7d10a;
}

.options {
  display: flex;
  align-items: center;
  height: auto;
  margin: .1em 8%;
  justify-content: space-between;
}

.options__sub-details {
  display: inline-flex;
}

.switch-theme-btn {
  background-color: #e7d10a;
  border-radius: 25px;
  margin: 0px 10px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  cursor: pointer;
  outline: none;
  height: 3em;
  width: 3em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.switch-theme-btn:hover {
  background-color: #dcc80d;
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
  padding: 10px 10px;
  font-size: 15px;
  border-radius: 5px;
  outline: none;
}

.server-selector > option {
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.yellowText};
  padding: 10px 15px;
}

div.movies {
  margin: 5em;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
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
    margin: auto;
    justify-content: center;
    left: 0;
    position: relative;
  }
  
  div.movie-image img {
    box-shadow: 2px 7px 8px 2px ${({ theme }) => theme.movieBoxShadow};
    height: 100%;
    width: 100%;
    margin: auto;
    transition: .3s;
    border-top-left-radius: .3em;
    border-top-right-radius: .3em;
    min-height: 20.6em;
    cursor: pointer;
  }
  
  div.movie-image img:hover {
    box-shadow: 2px -2px 8px 2px ${({ theme }) => theme.movieBoxShadow};
    transform: translateY(-3%);
  }
  
  .download-btn {
    position: absolute;
    bottom: -.9em;
    right: .9em;
    height: 50px;
    width: 50px;
    text-decoration: none;
    background: #e7d10a;
    border-radius: 50%;
    outline: none;
    border: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0px;
    cursor: pointer;
    box-shadow: 0px 0px 7px -2px #121315;
  }
  
  .download-btn:active {
    transform: translateY(3%);
    background: #dcc80d;
  }

  .download-btn:hover {
    background: #dcc80d;
  }


  /* Movie About Details */
  .movie__about {
    width: 100%;
    min-height: 7em;
    height: 100%;
    padding: .5em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: ${({ theme }) => theme.movieBackground}; 
    border-end-end-radius: .39em;
    border-end-start-radius: .39em;
  }
  
  .movie__about .name {
    font-size: .9em;
    lin-height: 1.5;
    font-weight: 500;
    color: ${({ theme }) => theme.text}; 
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
    font-weight: 100;
    border-radius: .2em;
  }

  .movie-size,
  p.pub-by {
    font-size: .74em;
    font-weight: 100;
    color: ${({ theme }) => theme.text}; 
    opacity: 0.5;
    text-transform: uppercase;
  }

  button {
    outline: none;
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
  background-color: yellow;
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
  background: #121620;
  height: 3em;
  width: 3em;
  cursor: pointer;
  border-radius: 50%;
}

.github-button svg path {
  fill: #e7d10a;
}

.github-button svg path:hover {
    background: #dcc80d;
}

`