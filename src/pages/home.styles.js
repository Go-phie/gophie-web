import styled from "styled-components";

const MainPanel = styled.div`
  width: calc(100% - 230px);
  position: relative;
  float: right;

  @media (max-width: 678px) {
    float: initial;
    width: 100% !important;
  }

  @media (max-width: 1141px) {
    width: calc(100% - 200px);
  }

  .mleft {
    margin-left: 3em;

    @media (max-width: 678px) {
      margin-left: 1em;
    }
  }

  .mtop {
    @media (max-width: 678px) {
      margin-top: 5em !important;
    }
  }

  .network-icon {
    max-width: 4.5em;
    margin: 5em 0;
  }

  .gophie-page-title {
    color: ${({ theme }) => theme.text};
    margin-top: 1em;
    font-weight: 600;
    font-size: 2em;
    padding-top: 1em;
    display: block;
    width: 100%;
    padding-bottom: 0.5em;

    @media (max-width: 678px) {
      font-size: 1.1em;
    }
  }

  .movies {
    display: flex;
    flex-flow: row wrap;
    justify-content: left;
    margin-bottom: 3em;
  }

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

  main {
    background: ${({ theme }) => theme.body};
  }

  .gophie-search-header {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 1em;
    padding-bottom: 1.2em;

    .gophie-page-title {
      width: initial !important;
      padding: initial !important;
      margin: 0 !important;
      margin-right: 1em !important;

      @media (max-width: 1141px) {
        margin-bottom: 0.2em !important;
      }
    }

    .gophie-search-filter-container {
      display: inline-flex;
      flex-direction: row;
      align-items: flex-end;
      margin-right: 1em;
      flex-flow: row wrap;

      button {
        color: ${({ theme }) => theme.yellowDark};
        background: ${({ theme }) => theme.sidebarNav};
        padding: 0.1em 0.5em;
        text-decoration: none;
        transition: 0.3s ease-in;
        border-radius: 0.3em;
        font-size: 0.9em;
        text-transform: capitalize;

        &:hover {
          opacity: 0.55;
        }

        &:active {
          opacity: 0.55;
        }

        &.active {
          opacity: 0.55;
        }

        @media (max-width: 1141px) {
          margin-bottom: 0.3em;
        }
      }
    }

    @media (max-width: 1141px) {
      align-items: flex-start;
      flex-direction: column;
    }
  }
`;

export default MainPanel;
