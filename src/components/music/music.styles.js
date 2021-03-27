import styled from 'styled-components'
import svgIcon from './assets/icon.svg'
export const Styles = {
  MusicCard: styled.div`
    height: 120px;
    width: calc(100% - 5em);
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1em auto;
    border-radius: 1em;
    background: transparent;
    box-shadow: 2px -2px 8px 2px ${({ theme }) => theme.movieBoxShadow};
    /* padding: 10px 5px; */

    @media (max-width: 678px) {
      width: calc(100% - 1.5em);
    }

    .image-group {
      position: relative;
      display: flex;
      height: 100%;
      width: 20%;
      justify-content: center;
      align-items: center;

      @media (max-width: 678px) {
        width: 30%;
      }

      .player-button {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        background: black;
        opacity: 1;

        z-index: 3;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        border: 2px solid #fff;
        span {
          border-left: 14px solid #fff;
          border-top: 7px solid transparent;
          border-bottom: 7px solid transparent;
          border-radius: 2px;
        }
        &:hover {
          opacity: 0.8;
        }
      }

      .music-react-player {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 5;
      }
      .player-stop-button {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        background: black;
        opacity: 0.6;

        z-index: 3;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        border: 2px solid #fff;
        span {
          border-left: 14px solid #fff;
          border-top: 14px solid #fff;
        }
      }

      .duration {
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 2px 4px;
        font-size: 12px;
        color: #fff;
        background-color: rgba(0, 0, 0, 0.6);
        border-radius: 0.5em;
        opacity: 1;
      }

      &::after {
        content: '';
        opacity: 0.5;
        top: 0;
        display: block;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        position: absolute;
        z-index: 1;
        background: ${({ background }) =>
            background ? `url(${background})` : `url(${svgIcon})`}
          no-repeat center;

        background-size: cover;
      }
    }

    .music-details {
      padding: 10px 20px;
      width: 60%;
      height: 100%;
      position: relative;
      /* padding: 5px; */
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
      color: ${({ theme }) => theme.text};

      .symbol {
        font-size: 0.9rem;
        font-weight: bold;
        color: #000;

        @media (max-width: 678px) {
          font-size: 0.5rem;
          font-weight: normal;
        }
      }

      .text-group {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      }

      h2 {
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 12px;

        @media (max-width: 678px) {
          font-size: 0.8rem;
        }
      }

      small {
        font-size: xx-small;
        color: #d5b62e;
        /* line-height: 1px !important; */
      }
    }

    a {
      text-decoration: none;
      color: black;
    }

    .gbtn {
      background: #e7d10a;
      border-radius: 0.25em;
      font-weight: 600;
      transition: 0.2s all;

      &:hover {
        background: #cfbb1e;
      }

      @media (max-width: 678px) {
        font-size: x-small;
      }
    }

    .gbtn-secondary {
      padding: 0.5em;
    }

    .gbtn-primary {
      font-size: 0.72em;
      padding: 0.55em 1.2em;
    }
  `
}
