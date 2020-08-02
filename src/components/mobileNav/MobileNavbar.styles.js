import styled from "styled-components"

const Style = {
    MobileNavbar: styled.div `
        position: fixed;
        bottom: 0;
        left: 0;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        /* padding: 1.5em; */
        z-index: 999;
        background-color: ${({ theme }) => theme.body};
        display: none;

        @media (max-width: 678px) {
            display: flex;
        }
    `,

}

export default Style;