import React from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

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
        content: `This dropdown helps select a site to retrieve movies/series from. Currently only "TvSeries" supports series, the rest are for movies`,
      },
      {
        selector: '[data-tour="my-third-step"]',
        content: ({ goTo }) => (
            <div>
              Search for your movies/series using this search feature. It will search at the <button style={{background: '#ffe401', borderRadius: 5}} onClick={() => goTo(1)}>currently selected site</button>
              <br />
            </div>
        ),
      },
      {
        selector: '[data-tour="my-fourth-step"]',
        content: () => (
            <div>
                Click the movie image to see the movie synopsis/review.
                Then go to the next step of the tour
            </div>
        ),
      },
      {
        selector: '[data-tour="my-fifth-step"]',
        content: `Movie description/synopsis. Might sometimes not be available`,
      },
      {
        selector: '[data-tour="my-sixth-step"]',
        content: `Click this button to download the movie`,
      },
      {
        selector: '[data-tour="my-seventh-step"]',
        content: `Click this button to switch between light and dark modes`,
      },    
      {
        selector: '[data-tour="my-eight-step"]',
        content: `This links to the entire suite of gophie projects for interested developers`,
      },  
]

export const disableBody = target => disableBodyScroll(target)
export const enableBody = target => enableBodyScroll(target)