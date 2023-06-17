import styled from "styled-components";

const StyledDiv = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  animation: spin 2s linear infinite;

  transition: all 0.2s ease-in-out;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 576px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const LoadingScreen = () => {
  return <StyledDiv />;
};

export default LoadingScreen;
