import styled from "styled-components";

const MainPanel = styled.div`
    width: calc(100% - 230px);
    position: relative;
    float: right;

    @media(max-width: 678px) {
        float: initial;
        width: 100% !important;
    }

    @media(max-width: 1141px) {
        width: calc(100% - 200px);
    }

    .mleft {
        margin-left: 3em;

        @media(max-width: 678px) {
            margin-left: 1em;
        }
    }

    .network-icon {
      max-width: 4.5em;
    }

    .gophie-page-title {
        color: ${({ theme }) => theme.text};
        margin-top: 1em;
        font-weight: 600;
        font-size: 2em;
        padding-top: 1em;
        display: block;
        width: 100%;
        padding-bottom: .5em;

        @media(max-width: 678px) {
            font-size: 1.1em;
            margin-top: 5em;
        }
    }
`

export default MainPanel;