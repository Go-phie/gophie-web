import styled from "styled-components";

const MainPanel = styled.div`
    width: calc(100% - 230px);
    position: relative;
    float: right;

    @media(max-width: 678px) {
        float: initial;
        width: 100% ;
    }
`

export default MainPanel;