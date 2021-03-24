import styled from 'styled-components'
import svgIcon from './assets/icon.svg'
export const Styles = {
  MusicCard: styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    margin-bottom: 1.5em;
    margin-right: 3em;
    border-radius: 1em;
    background: transparent;
    box-shadow: 2px -2px 8px 2px ${({ theme }) => theme.movieBoxShadow};
    .image-group {
      position: relative;
      display: flex;
      height: 100%;
      width: 179px;
      justify-content: center;
      align-items: center;
      margin-right: 3em;

      .player-button {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        background: black;
        opacity: 0.2;

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
          opacity: 0.6;
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
        opacity: 0.2;

        z-index: 3;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        border: 2px solid #fff;
        span {
          border-left: 14px solid #fff;
          border-top: 14px solid #fff;
        }
        &:hover {
          opacity: 0.6;
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
        opacity: 0.9;
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
      position: relative;
      padding-top: 5px;
      padding-bottom: 5px;
      display: flex;
      height: 130px;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      color: ${({ theme }) => theme.text};

      h2 {
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 2px;
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
    }

    .gbtn-secondary {
      padding: 0.9em 1.5em;
    }

    .gbtn-primary {
      font-size: 0.72em;
      padding: 0.55em 1.2em;
    }
  `
}
