import styled from "styled-components";

const Style = {
  Navbar: styled.div`
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 1.5em 3em;
    background-color: ${({ theme }) => theme.body};
    @media (max-width: 678px) {
      display: none;
      padding: 1.5em !important;
    }
  `,

  Sidebar__Logo: styled.div`
    padding: 1.5em 0;
    text-align: left;
    position: relative;
    margin: 0 1.5em;

    &:before {
      width: 3em;
      height: 0.3em;
      content: "";
      display: block;
      background: ${({ theme }) => theme.yellowDark};
      border-radius: 1.5em;
      position: absolute;
      bottom: 0;

      @media (max-width: 678px) {
        width: 2em;
        height: 0.2em;
      }
    }

    @media (max-width: 678px) {
      padding: 1em 0;
      margin-right: initial;
    }
  `,

  Navbar__HasSearch: styled.div`
    width: 100%;
    max-width: 25em;
    position: relative;

    & > a button {
      position: absolute;
      top: 0;
      height: 100%;
      padding-right: 1em;
      padding-left: 0.78em;
      background: transparent;
      font-size: 1.2em;
      right: 0;
      outline: 0;
      margin: 0;
      border: 0;
      left: 0;
      width: 0;
    }

    & > input {
      background-color: transparent;
      color: ${({ theme }) => theme.formColor};
      outline: none;
      border: none;
      opacity: 0.9;
      border-radius: 0;
      border-bottom: 2px solid ${({ theme }) => theme.movieBackground};
      display: block;
      width: 100%;
      height: calc(1.5em + 0.75rem + 2px);
      padding: 1.5rem 0.75rem;
      font-size: 1rem;
      font-weight: 400;
      direction: rtl;
      box-shadow: none;
      line-height: 1.5;
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

      &:focus {
        background-color: ${({ theme }) => theme.movieBackground};
        color: ${({ theme }) => theme.text};
        opacity: 0.9;
        outline: none;
        border-bottom: 2px solid ${({ theme }) => theme.movieBackground};
        border-radius: 0.2em;
        box-shadow: none;
      }
    }
  `,
  Button: styled.div`
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
  `,
};

export default Style;
