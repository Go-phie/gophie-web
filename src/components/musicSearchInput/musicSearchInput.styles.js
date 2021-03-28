import styled from "styled-components";
export const Styles = {
  MusicSearch: styled.div `
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5em auto;

    @media (max-width: 678px) {
      width: 80%;
      margin: 2em auto;
      margin-top: 3em;
    }

    .form-control {
      width: 80%;
      background-color: ${({ theme }) => theme.movieBackground};
      height: 60px;
      border-top-left-radius: .5rem;
      border-bottom-left-radius: .5rem;
      border: none;
      padding: 10px;
      color: ${({ theme }) => theme.text};
      opacity: .8;
      box-shadow: none;

      &:hover, &:focus {
        opacity: 1;
      }

      @media (max-width: 678px) {
        height: 45px;
      }
    }

    .search-btn {
      height: 60px;
      width: 4rem;
      background-color: ${({ theme }) => theme.movieBackground};
      border-top-right-radius: .5rem;
      border-bottom-right-radius: .5rem;
      color: ${({ theme }) => theme.formColor};

      @media (max-width: 678px) {
        height: 45px;
      }
    }
  `,
};