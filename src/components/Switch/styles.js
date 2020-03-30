import styled from 'styled-components';

export const Container = styled.label`
  position: relative;
  display: inline-block;
  width: 36px;
  height: 20px;
`;

export const Field = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: ${({ theme }) => theme.switchBackgroundActive};
    &:before {
      -webkit-transform: translateX(16px);
      background-color: ${({ theme }) => theme.switchToggleBackgroundActive};
      -ms-transform: translateX(16px);
      transform: translateX(16px);
    }
  }
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.switchBackground};
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    border-radius: 50%;
    content: '';
    height: 16px;
    width: 16px;
    left: 2px;
    bottom: 2px;
    background-color: ${({ theme }) => theme.switchToggleBackground};
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
`;
