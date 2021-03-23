import styled from 'styled-components'

export const Styles = {
  MusicCard: styled.div`
    width: 100%;
    height: 257px;
    display: flex;
    margin-bottom: 1.5em;
    margin-right: 3em;
    border-radius: 1em;
    background: transparent;
    box-shadow: 2px -2px 8px 2px ${({ theme }) => theme.movieBoxShadow};
    padding: 30px;
    .image-group {
      position: relative;
      display: flex;
      width: 209px;
      justify-content: center;
      align-items: center;
      svg {
        color: #363537;
        height: 100%;
        width: 100%;
        box-shadow: none;
        margin: auto;
        transition: 0.3s;
        border-radius: 1em;
        cursor: pointer;
        &:hover {
          box-shadow: 2px -2px 8px 2px ${({ theme }) => theme.movieBoxShadow};
          transform: translateY(-3%);
        }
      }
      img {
        box-shadow: none;
        height: 100%;
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
  `
}
