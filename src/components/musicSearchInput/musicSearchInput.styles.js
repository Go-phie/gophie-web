import styled from 'styled-components'
export const Styles = {
  MusicSearch: styled.div`
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
      background-color: transparent;
      height: 60px;
      border-color: #e7d10a;
      border-top-left-radius: 3rem;
      border-bottom-left-radius: 3rem;
      border-left: none;
      padding: 10px;
      color: ${({ theme }) => theme.text};

      @media (max-width: 678px) {
        height: 45px;
      }
    }

    .search-btn {
      height: 60px;
      width: 4rem;
      background-color: #e7d10a;
      border-top-right-radius: 3rem;
      border-bottom-right-radius: 3rem;
      color: #212529;

      @media (max-width: 678px) {
        height: 45px;
      }
    }
  `
}
