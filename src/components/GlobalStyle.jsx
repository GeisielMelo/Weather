import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: linear-gradient(90deg, #56ccf2, #2f80ed, #1488CC, #2B32B2 );
    background-size: 200% 200%;
    animation: gradientAnimation 20s ease-in-out infinite;
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
`;
