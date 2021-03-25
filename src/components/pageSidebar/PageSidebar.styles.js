import styled from "styled-components";
import { Link } from "react-router-dom";

const Style = {
  // Man sidebar container
  Sidebar: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 230px;
    height: 100%;
    overflow: auto;
    border-right: 2px solid ${({ theme }) => theme.movieBackground};
    background: ${({ theme }) => theme.body};
    display: flex;
    flex-direction: column;

    @media (max-width: 678px) {
      left: initial;
      display: flex;
      flex-direction: row;
      overflow: hidden;
      width: 100% !important;
      align-items: initial;
      z-index: 999;
      bottom: initial;
      height: initial;

      .dropdown-header {
        display: none;
      }
    }

    @media (max-width: 1141px) {
      width: 200px;
    }
  `,

  // sidebar logo container
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

  Sidebar__Main: styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    overflow: auto;
    justify-content: space-between;

    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-track {
      background: #363537;
    }
    &::-webkit-scrollbar-thumb {
      background: #e7d10a;
    }
  `,

  // Sidebar Navigation
  Sidebar__Nav: styled.ul`
    margin: 0 1.5em;
    margin-top: 5em;

    @media (max-width: 678px) {
      display: flex;
      margin-top: initial;
      overflow: scroll hidden;
      scrollbar-width: none;
      width: 100%;
      margin-right: initial;
      margin-left: initial;
    }
  `,

  Sidebar__NavListItem: styled.li`
    margin-top: 1em;
    list-style: none;

    @media (max-width: 678px) {
      white-space: nowrap;
    }
  `,

  // sidebar Navigation links
  Sidebar__NavLink: styled.button`
    color: ${({ theme }) => theme.text};
    padding: 1em 0.5em;
    text-decoration: none;
    display: block;
    transition: 0.3s ease-in;
    font-weight: 600;
    outline: none;
    background: transparent;
    border-radius: 0.3em;
    width: 100%;
    text-align: left;

    &:hover {
      color: ${({ theme }) => theme.yellowDark};
      background: ${({ theme }) => theme.sidebarNav};
    }

    &:active {
      color: ${({ theme }) => theme.yellowDark};
      border-radius: 0.3em;
      background: ${({ theme }) => theme.sidebarNav};
    }

    &.active {
      color: ${({ theme }) => theme.yellowDark};
      border-radius: 0.3em;
      background: ${({ theme }) => theme.sidebarNav};
    }

    @media (max-width: 678px) {
      padding: 0.5em 0.5em;
      margin-right: 0.5rem;
      font-size: 0.8em;
      font-weight: initial;
    }

    @media (max-width: 375px) {
      font-size: 0.7em;
    }
  `,

  DropDown__TitleContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    svg {
      color: #e7d10a;
    }

    @media (max-width: 678px) {
      display: none;
    }
  `,

  DropDown__Content: styled.div`
    /* display: none; */

    opacity: 0;
    height: 0px;
    visibility: hidden;
    margin-bottom: -15px;

    &.open {
      /* display: block; */
      -webkit-transition: opacity 0.6s ease-in-out 0.15s;
      -moz-transition: opacity 0.6s ease-in-out 0.15s;
      -o-transition: opacity 0.6s ease-in-out 0.15s;
      -ms-transition: opacity 0.6s ease-in-out 0.15s;
      transition: opacity 0.6s ease-in-out 0.15s;
      height: auto;
      opacity: 1;
      visibility: visible;
    }

    @media (max-width: 678px) {
      display: flex;
      flex-direction: row;
    }
  `,

  Sidebar__Footer: styled.div`
    display: block;
    bottom: 0;
    padding: 18px 22px;
    margin-top: 2em;
    width: 100%;

    & > h3 {
      font-size: 0.8em;
      font-weight: 600;
      color: ${({ theme }) => theme.text};
    }

    & > p {
      font-size: 0.65em;
      opacity: 0.5;
      color: ${({ theme }) => theme.text};
    }

    @media (max-width: 678px) {
      display: none;
    }
  `,

  Sidebar__FooterLink: styled(Link)`
    background: #ede9d9;
    padding: 0.27em;
    background: ${({ theme }) => theme.sidebarNav};
    color: ${({ theme }) => theme.yellowDark};
    text-decoration: none;

    &.hover {
      color: ${({ theme }) => theme.text};
      opacity: 0.5;
    }
  `,
};

export default Style;
