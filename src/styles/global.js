import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    color: ${({ theme }) => theme.foreground};
    background-color: ${({ theme }) => theme.background};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
    user-select: none;
  }

  #root {
    overflow: hidden;
  }
`;
