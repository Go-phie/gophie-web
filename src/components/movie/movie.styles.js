import styled from "styled-components";

const Style = {
  // Main movie container
  MovieCard: styled.div`
    width: 209px;
    height: 100%;
    background: transparent;
    position: relative;
    margin: 0 1.2em 1.2em 0;
    display: block;

    .movie-image {
      height: 80%;
      width: 100%;
      left: 0;
      position: relative;

      img {
        box-shadow: none;
        height: 18em;
        width: 100%;
        margin: auto;
        transition: 0.3s;
        border-radius: 1em;
        cursor: pointer;
        object-fit: cover;

        &:hover {
          box-shadow: 2px -2px 8px 2px ${({ theme }) => theme.movieBoxShadow};
          transform: translateY(-3%);
        }
      }
    }

    .movie-size {
      font-size: 0.67em;
      font-weight: 600;
      text-transform: uppercase;
      position: absolute;
      top: 0;
      right: 0;
      margin: 1.2em;
      color: black;
      background: #fff;
      padding: 0.25em 0.5em;
      border-radius: 0.5em;
      transition: 0.3s;
    }

    .movie__about {
      width: 100%;
      margin-top: 0.9em;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      .name {
        font-size: 0.9em;
        line-height: 1.5;
        font-weight: 600;
        color: ${({ theme }) => theme.text};
        text-transform: capitalize;
      }
    }

    .movie__about-meta {
      flex-direction: row;
      align-items: baseline;
      justify-content: space-between;
      display: flex;

      .movie-source {
        color: ${({ theme }) => theme.yellowDark};
        border-radius: 0.3em;
        padding: 0.45em;
        font-size: 0.75em;
        font-weight: 600;
        max-width: 5em;
        margin: 0;
        text-align: center;
        background: ${({ theme }) => theme.sidebarNav};
      }
    }

    .download-btn {
      transition: 0.3s;
    }

    .MuiSvgIcon-root {
      height: 0.7em;
    }

    .MuiIconButton-root {
      padding: 1px !important;
    }

    .Rating-iconButton-2:first-child {
      margin-left: -5px !important;
    }

    @media (max-width: 768px) {
      width: 152px;
      .movie__about {
        .name {
          font-size: 0.68em;
        }
      }

      .movie-image {
        img {
          height: 12em;
        }
      }

      .movie__about-meta {
        .movie-source {
          font-size: 0.65em;
        }
      }
    }

    @media (max-width: 414px) {
      width: calc(50% - 1em);

      &:nth-child(odd) {
        margin-right: 0 !important;
      }

      .MuiIconButton-root {
        margin-right: 0.15em !important;
      }
    }
  `,
};

export default Style;
