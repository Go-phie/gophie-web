import styled from "styled-components";

const Style = {
  MovieSidebarStyle: styled.div`
    a {
      text-decoration: none;
      color: black;
    }

    h1 {
      font-size: 3em;
      margin-top: 1.5em;
    }

    ul {
      list-style: none;
      display: flex;
      padding: 0;
      margin-right: auto;

      a {
        margin-right: 2em;
      }
      &.transition {
        display: flex;
        position: fixed;
        flex-direction: column !important;
        max-width: 500px !important;
        height: 100vh;
        width: 100%;
        top: 0;
        right: 0;
        margin: 0;
        pointer-events: none;

        li {
          transform: scaleX(0);
          background: ${({ theme }) => theme.body};
          width: 100%;
          height: 20%;
        }
      }
    }

    .moviesidenav {
      height: 100%;
      width: 100%;
      max-width: 500px;
      position: fixed;
      z-index: 10000;
      top: 0;
      right: 0;
      background-color: transparent;
      overflow-x: hidden;
      transition: 0.5s;
      color: ${({ theme }) => theme.text};

      .cancel-btn {
        padding: 0.1rem 0.5rem;
        border-radius: 50%;
        border: 0.15rem solid ${({ theme }) => theme.movieBackground};
        font-weight: 900;
        background: transparent;
        transition: 0.25s ease-in;

        &:hover {
          background: ${({ theme }) => theme.sidebarNav};
        }
      }
    }

    .siderbar-header {
      h3 {
        font-size: 1.2rem;
        font-weight: 600;
        margin: 0;
      }
    }

    .sidebar-content {
      z-index: 20;
      position: absolute;
      transition: 0.5s;
      opacity: 0;
      width: 100%;
      padding: 2rem;
      word-wrap: anywhere;

      @media (max-width: 678px) {
        padding: 1rem;
      }
    }

    .sidebar-description {
      p {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      span {
        font-weight: bold;
        color: ${({ theme }) => theme.text};
        cursor: pointer;
        opacity: 0.5;
      }
    }

    .hidden {
      display: none;
    }

    .sidebar-image-cover {
      height: 17em;
      width: 100%;
      object-fit: cover;
      border-radius: 1em;
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

    .sidebar-footer {

      .sidebar-footer-header {
        align-items: center;
        padding-bottom: 0.5em;
        border-bottom: 3px solid ${({ theme }) => theme.movieBackground};

        p {
          margin: 0;
          font-weight: 600;
          text-transform: uppercase;
        }
      }

      .sidebar-footer-download {
            display: flex;
            margin-top: 1em;
            border: 3px solid ${({ theme }) => theme.movieBackground};
            padding: .57em;
            border-radius: .5em;
            justify-content: space-between;
            align-items: center;

            p {
              margin: 0;
              font-weight: 600;
            }

            a {
              word-wrap: initial;
              display: inline-flex;
            }
        }
      }
    }

    .sidebar-share-btn {
      color: ${({ theme }) => theme.text};
      font-size: 1.5em;
      background: none;
    }
  `,

  MovieOverlayStyle: styled.div`
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 3;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    overflow-y: auto;
    overflow-x: hidden;
    text-align: center;
    opacity: 0;
    transition: opacity 1s;

    &.isOnOverlay {
      width: 100% !important;
      opacity: 0.8;
      z-index: 101;
    }
  `
};

export default Style;
