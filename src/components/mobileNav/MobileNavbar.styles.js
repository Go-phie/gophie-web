import styled from "styled-components"

const Style = {
    MobileNavbar: styled.div `
        position: fixed;
        bottom: 0;
        left: 0;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 1em 1.5em;
        z-index: 999;
        background-color: ${({ theme }) => theme.body};
        display: none;

        @media (max-width: 678px) {
            display: flex;
        }
    `,

    MobileSearch: styled.div `
        position: fixed;
        z-index: 999;
        bottom: 0;
        transition: 1.5s all;
        justify-content: center;
        width: 100%;
        display: none;

        &.show-mobile-searchbar {
            bottom: 80px;
        }

        input {
            background-color: ${({ theme }) => theme.movieBackground};
            color: ${({ theme }) => theme.formColor};
            outline: none;
            border: none;
            border-radius: 0;
            display: block;
            height: calc(1.5em + .75rem + 2px);
            padding: 1.5rem 1rem;
            font-size: 1rem;
            font-weight: 400;
            border-radius: .25rem;
            width: 100%;
            margin: 0 1.5em;
            box-shadow: -1px 7px 10px #121620;
        }

        a {
            position: absolute;
            margin-right: 1.5em;
            right: 0;
            height: 100%;
        }

        button {
            padding-right: .5em;
            padding-left: .65em;
            background: transparent;
            font-size: 1.2em;
            height: 100%
        }

        @media (max-width: 678px) {
            display: flex;
        }
    `

}

export default Style;