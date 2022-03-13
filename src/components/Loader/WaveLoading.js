import React from "react";
import styled, { keyframes } from "styled-components";

const stretchdelay = keyframes`
  0%,
  40%,
  100% {
    -webkit-transform: scaleY(0.4);
  }
  20% {
    -webkit-transform: scaleY(1);
  }
`;

const LoadContainer = styled.div`
  min-width: 65px;
  height: 20px;
  text-align: center;
  font-size: 10px;
  margin: "auto";
  position: "absolute";
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

const box = styled.div`
  background-color: #212529;
  height: 100%;
  width: 3px;
  display: inline-block;
  margin-left: 5px;
  animation: ${stretchdelay} 1.2s infinite ease-in-out;
`;

const BoxLoadingFirst = styled(box)`
  animation-delay: -1.2s;
`;

const BoxLoadingTwo = styled(box)`
  animation-delay: -1.1s;
`;

const BoxLoadingThree = styled(box)`
  animation-delay: -1s;
`;

const BoxLoadingFour = styled(box)`
  animation-delay: -0.9s;
`;

const BoxLoadingFive = styled(box)`
  animation-delay: -0.8s;
`;

const WaveLoading = () => {
  return (
    <LoadContainer>
      <BoxLoadingFirst />
      <BoxLoadingTwo />
      <BoxLoadingThree />
      <BoxLoadingFour />
      <BoxLoadingFive />
    </LoadContainer>
  );
};

export default WaveLoading;
