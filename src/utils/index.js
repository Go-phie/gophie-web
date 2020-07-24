/* eslint-disable react/display-name */ import React from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

export function isImageURL(url) {
  return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
}

export const tourSteps = [
  {
    selector: '[data-tour="my-first-step"]',
    content: `Welcome to Gophie-Web. It is a free movie download site without ads created using the power of web scraping by Bisoncorps. If you ever need to see this tour again, please click this button`,
  },
  {
    selector: '[data-tour="my-second-step"]',
    content: `This dropdown helps select an engine to retrieve movies/series from. Currently only the "Zeta" engine supports series, the rest are for movies. If an engine is unavailable due to perhaps network issues or a movie , try other engines instead`,
  },
  {
    selector: '[data-tour="my-third-step"]',
    content: ({ goTo }) => (
      <div>
        Search for your movies/series using this search feature. It will search
        at the{" "}
        <button
          style={{
            background: "#ffe401",
            borderRadius: 5,
            outline: "none",
            padding: 5,
            border: "none",
          }}
          onClick={() => goTo(1)}
        >
          currently selected engine
        </button>
        <br />
      </div>
    ),
  },
  {
    selector: '[data-tour="my-fourth-step"]',
    content: () => (
      <div>
        Click the movie image to see the movie synopsis/review. Then go to the
        next step of the tour for further explanation
      </div>
    ),
  },
  {
    selector: '[data-tour="my-fifth-step"]',
    content: `Movie description/synopsis. Might sometimes not be available`,
  },
  {
    selector: '[data-tour="my-fifth-step"]',
    content: () => (
      <div>
        Click the play button to start streaming the movie. Then go to the next
        step of the tour
      </div>
    ),
  },
  {
    selector: '[data-tour="my-fifth-step"]',
    content: () => (
      <div>
        Click the stop button to stop streaming the movie and proceed to the
        next step of the tour
      </div>
    ),
  },
  {
    selector: '[data-tour="my-sixth-step"]',
    content: `Rate a movie out of five stars to show how much you like/dislike it. You can always edit your ratings later`,
  },
  {
    selector: '[data-tour="my-seventh-step"]',
    content: `Check out the average rating of a movie to show you how much people liked/disliked it`,
  },
  {
    selector: '[class="close"]',
    content: `Close the modal and proceed to next step`,
  },
  {
    selector: '[data-tour="my-eight-step"]',
    content: `Click this button to download the movie`,
  },
  {
    selector: '[data-tour="my-ninth-step"]',
    content: `Click this button to scroll back to the top of the page`,
  },
  {
    selector: '[data-tour="my-tenth-step"]',
    content: `Click this button to switch between light and dark modes`,
  },
  {
    selector: '[data-tour="my-eleventh-step"]',
    content: `This links to the entire suite of gophie projects for interested developers. If you like this project, give it a star and if you have any complaints, raise an issue`,
  },
];

let nm = new Map();
nm.set("Server2", "animeout");
nm.set("Styx", "mycoolmoviez");
nm.set("Server1", "fzmovies");
nm.set("Server5", "netnaija");
nm.set("Server3", "besthdmovies");
nm.set("Server4", "tvseries");

export const nameToEngineMap = nm;

export function greekFromEnglish(eng) {
  const lowered = eng.toLowerCase();
  for (let [key, val] of nm.entries()) {
    if (val === lowered) {
      return key;
    }
  }
}

export const API_ENDPOINTS = {
  gophieMain: "https://deploy-gophie.herokuapp.com/",
  ocena: "https://gophie-ocena.herokuapp.com",
  ip: "https://api.ipify.org?format=json",
  // ocena: "http://127.0.0.1:8000"
};

export const disableBody = (target) => disableBodyScroll(target);
export const enableBody = (target) => enableBodyScroll(target);
