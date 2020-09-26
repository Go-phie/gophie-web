import styled from "styled-components"

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

    Navbar__HasSearch: styled.div`
        width: 100%;
        max-width: 25em;
        position: relative;

        & > a button {
            position: absolute;
            top: 0;
            height: 100%;
            padding-right: 1em;
            padding-left: .78em;
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
            opacity: .9;
            border-radius: 0;
            border-bottom: 2px solid ${({ theme }) => theme.movieBackground};
            display: block;
            width: 100%;
            height: calc(1.5em + .75rem + 2px);
            padding: 1.5rem .75rem;
            font-size: 1rem;
            font-weight: 400;
            direction: rtl;
            box-shadow: none;
            line-height: 1.5;
            transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

            &:focus {
                background-color: ${({ theme }) => theme.movieBackground};
                color: ${({ theme }) => theme.text};
                opacity: .9;
                outline: none;
                border-bottom: 2px solid ${({ theme }) => theme.movieBackground};
                border-radius: .2em;
                box-shadow: none;
            }
        }
    `
}

export default Style;