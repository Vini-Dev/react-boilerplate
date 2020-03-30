import { keyframes, css } from 'styled-components';

const FadeOut = keyframes`
  0% {
    opacity: 1
  }
  100% {
    opacity: 0
  }
`;

export default css`
  animation: ${FadeOut} 200ms linear;
`;
