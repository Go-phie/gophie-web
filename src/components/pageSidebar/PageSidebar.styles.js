import styled from "styled-components"
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

        @media (max-width: 678px) {
            left: initial;
            display: flex;
            width: 100% !important;
            align-items: baseline;
            z-index: 999;
            bottom: initial;
            height: initial;
        }

        @media(max-width: 1141px) {
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
            height: .3em;
            content: "";
            display: block;
            background: ${({ theme }) => theme.yellowDark};
            border-radius: 1.5em;
            position: absolute;
            bottom: 0;

            @media (max-width: 678px) {
                width: 2em;
                height: .2em;
            }
        }

        @media (max-width: 678px) {
            padding: 1em 0;
            margin-right: initial;
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
    Sidebar__NavLink: styled(Link)`
        color: ${({ theme }) => theme.text};
        padding: 1em .5em;
        text-decoration: none;
        display: block;
        transition: .3s ease-in;
        font-weight: 600;
        outline: none;

        &:hover {
            color: ${({ theme }) => theme.yellowDark};
            border-radius: .3em;
            background: ${({ theme }) => theme.sidebarNav};
        }

        &:active {
            color: ${({ theme }) => theme.yellowDark};
            border-radius: .3em;
            background: ${({ theme }) => theme.sidebarNav};
        }

        &.active {
            color: ${({ theme }) => theme.yellowDark};
            border-radius: .3em;
            background: ${({ theme }) => theme.sidebarNav};
        }

        @media (max-width: 678px) {
            padding: .5em .5em;
            margin-right: .5rem;
            font-size: .8em;
            font-weight: initial;
        }

        @media (max-width: 375px) {
            font-size: .7em;
        }
    `,

    Sidebar__Footer: styled.div`
        display: block;
        position: absolute;
        bottom: 0;
        padding: 18px 22px;
        width: 100%;

        & > h3 {
            font-size: .8em;
            font-weight: 600;
            color: ${({ theme }) => theme.text};
        }

        & > p {
            font-size: .65em;
            opacity: .5;
            color: ${({ theme }) => theme.text};
        }

        @media (max-width: 678px) {
            display: none;
        }
    `,

    Sidebar__FooterLink: styled(Link)`
        background: #ede9d9;
        padding: .27em;
        background: ${({ theme }) => theme.sidebarNav};
        color: ${({ theme }) => theme.yellowDark};
        text-decoration: none;

        &.hover {
            color: ${({ theme }) => theme.text};
            opacity: .5;
        }
    `
}

export default Style;